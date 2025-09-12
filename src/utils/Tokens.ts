import jwt from "jsonwebtoken";

// Validate environment variables on module load
const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

if (!ACCESS_SECRET) {
    throw new Error("ACCESS_SECRET environment variable is required");
}

if (!REFRESH_SECRET) {
    throw new Error("REFRESH_SECRET environment variable is required");
}

// Validate secret strength (minimum 32 characters recommended)
if (ACCESS_SECRET.length < 32) {
    console.warn("WARNING: ACCESS_SECRET should be at least 32 characters long for security");
}

if (REFRESH_SECRET.length < 32) {
    console.warn("WARNING: REFRESH_SECRET should be at least 32 characters long for security");
}

export function generateAccessToken(
    userId: string,
    email: string,
): string {
    try {
        if (!userId || !email) {
            throw new Error("userId and email are required for token generation");
        }

        // @ts-ignore
        return jwt.sign({userId, email, type: 'access', iat: Math.floor(Date.now() / 1000)}, ACCESS_SECRET, {
            expiresIn: "15m",
            issuer: "penguin-api",
            audience: "penguin-users"
        });
    } catch (error) {
        console.error("Access token generation failed:", error);
        throw new Error(`Failed to generate access token: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export function generateRefreshToken(
    userId: string,
    email: string,
): string {
    try {
        if (!userId || !email) {
            throw new Error("userId and email are required for token generation");
        }
        // @ts-ignore
        return jwt.sign({userId, email, type: 'refresh', iat: Math.floor(Date.now() / 1000)}, REFRESH_SECRET, {
            expiresIn: "7d",
            issuer: "penguin-api",
            audience: "penguin-users"
        });
    } catch (error) {
        console.error("Refresh token generation failed:", error);
        throw new Error(`Failed to generate refresh token: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

