import jwt from "jsonwebtoken";

declare module "express-serve-static-core" {
    interface Request {
        user?: {
            userId: string;
            apiKey: string;
            claims?: jwt.JwtPayload;
        };
    }
}

