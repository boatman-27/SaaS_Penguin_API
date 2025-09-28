import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";

import {
  AuthenticationError,
  InternalServerError,
  RateLimitError,
  ValidationError,
} from "../types/Error.ts";
import { PrismaClient } from "../generated/prisma";
import type { CustomJwtPayload } from "../types/global";

const prismaClient = new PrismaClient();

export function auth(req: Request): CustomJwtPayload {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AuthenticationError("Missing Authorization Header");
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    throw new ValidationError(
      "Invalid Authorization Header format. Expected 'Bearer <token>'",
    );
  }

  const token = parts[1];
  if (!token) {
    throw new ValidationError("Missing Token");
  }

  const secret = process.env.ACCESS_SECRET;
  if (!secret) {
    throw new InternalServerError("Server configuration error");
  }

  try {
    const decoded = jwt.verify(token, secret) as jwt.JwtPayload &
      CustomJwtPayload;

    // JWT library already handles expiration, but keeping explicit check for clarity
    if (decoded.exp && decoded.exp < Math.floor(Date.now() / 1000)) {
      throw new AuthenticationError("Token has expired");
    }

    // Validate required fields
    if (!decoded.userId) {
      throw new AuthenticationError("Invalid token payload: missing userId");
    }

    //!todo add blacklisting functionalities

    return {
      userId: decoded.userId,
      claims: decoded,
    };
  } catch (err) {
    if (err instanceof AuthenticationError || err instanceof ValidationError) {
      throw err;
    }

    if (err instanceof jwt.TokenExpiredError) {
      throw new AuthenticationError("Token has expired");
    }
    if (err instanceof jwt.JsonWebTokenError) {
      throw new AuthenticationError("Invalid token");
    }

    throw new AuthenticationError("Token verification failed");
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const claims = auth(req);
    req.user = {
      userId: claims.userId,
      apiKey: "",
      claims: claims.claims,
    };
    next();
  } catch (err: any) {
    const statusCode = getErrorStatusCode(err);
    res.status(statusCode).json({
      error: err?.message || "Authentication failed",
      type: err?.constructor?.name || "AuthenticationError",
    });
  }
}

export async function authApiKey(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    throw new ValidationError("Missing API Key");
  }

  // SHA256 hash for DB lookup
  const lookupHash = crypto
    .createHash("sha256")
    .update(apiKey as string)
    .digest("hex");

  const keyRecord = await prismaClient.apiKey.findUnique({
    where: { keyLookup: lookupHash, isActive: true },
  });

  if (!keyRecord) {
    throw new AuthenticationError("Invalid API Key");
  }

  // bcrypt verification
  const isValid = await bcrypt.compare(apiKey as string, keyRecord.keyHash);
  if (!isValid) {
    throw new AuthenticationError("Invalid API Key");
  }

  // Reset usage count
  const lastUsed = keyRecord.lastUsedAt;
  const now = new Date();
  if (!lastUsed || lastUsed.toDateString() !== now.toDateString()) {
    await prismaClient.apiKey.update({
      where: { id: keyRecord.id },
      data: { usageCount: 0 },
    });
  }

  if (keyRecord.usageCount == keyRecord.rateLimit) {
    throw new RateLimitError("Reached rate limit for the day");
  }

  req.user = { userId: keyRecord.userId, apiKey: apiKey as string };
  next();
}

// Middleware to handle both auth methods
export function flexibleAuth(req: Request, res: Response, next: NextFunction) {
  // Check for API key first
  if (req.headers["x-api-key"]) {
    return authApiKey(req, res, next);
  }

  // Fall back to JWT
  if (req.headers.authorization) {
    return requireAuth(req, res, next);
  }

  // No auth method provided
  res.status(401).json({
    error:
      "Authentication required. Provide either 'Authorization: Bearer <token>' or 'x-api-key' header.",
    type: "AuthenticationError",
  });
}

// Helper function to map error types to HTTP status codes
function getErrorStatusCode(err: any): number {
  if (err instanceof ValidationError) return 400;
  if (err instanceof AuthenticationError) return 401;
  if (err instanceof RateLimitError) return 429;
  if (err instanceof InternalServerError) return 500;
  return 500; // Default to 500 for unknown errors
}
