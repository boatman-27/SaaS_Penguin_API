import bcrypt from "bcrypt";
import {ValidationError} from "../types/Error.js";

// Configuration constants
const BCRYPT_ROUNDS = 12; // Higher than 10 for better security
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 128; // Prevent DoS attacks with very long passwords

// Password strength requirements
const PASSWORD_REQUIREMENTS = {
    minLength: MIN_PASSWORD_LENGTH,
    maxLength: MAX_PASSWORD_LENGTH,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
};

/**
 * Validates password strength
 */
export function validatePasswordStrength(password: string): void {
    if (!password) {
        throw new ValidationError("Password is required");
    }

    if (password.length < PASSWORD_REQUIREMENTS.minLength) {
        throw new ValidationError(
            `Password must be at least ${PASSWORD_REQUIREMENTS.minLength} characters long`,
        );
    }

    if (password.length > PASSWORD_REQUIREMENTS.maxLength) {
        throw new ValidationError(
            `Password must be no more than ${PASSWORD_REQUIREMENTS.maxLength} characters long`,
        );
    }

    if (PASSWORD_REQUIREMENTS.requireUppercase && !/[A-Z]/.test(password)) {
        throw new ValidationError(
            "Password must contain at least one uppercase letter",
        );
    }

    if (PASSWORD_REQUIREMENTS.requireLowercase && !/[a-z]/.test(password)) {
        throw new ValidationError(
            "Password must contain at least one lowercase letter",
        );
    }

    if (PASSWORD_REQUIREMENTS.requireNumbers && !/\d/.test(password)) {
        throw new ValidationError("Password must contain at least one number");
    }

    if (
        PASSWORD_REQUIREMENTS.requireSpecialChars &&
        !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
        throw new ValidationError(
            "Password must contain at least one special character",
        );
    }

    // Check for common weak passwords
    const commonWeakPasswords = [
        "password",
        "123456",
        "123456789",
        "qwerty",
        "abc123",
        "password123",
        "admin",
        "letmein",
        "welcome",
        "monkey",
    ];

    if (commonWeakPasswords.includes(password.toLowerCase())) {
        throw new ValidationError("Password is too common and easily guessable");
    }
}

// hash password
export async function hashPassword(password: string): Promise<string> {
    try {
        // Validate password strength before hashing
        validatePasswordStrength(password);
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

        if (!hashedPassword) {
            throw new Error("Failed to hash password");
        }

        return hashedPassword;
    } catch (error) {
        if (error instanceof ValidationError) {
            throw error;
        }
        throw new Error("Password hashing failed");
    }
}

// compare passwords
export async function comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
): Promise<boolean> {
    try {
        if (!plainTextPassword || !hashedPassword) {
            return false;
        }

        return await bcrypt.compare(plainTextPassword, hashedPassword);
    } catch (error) {
        // Log error but don't throw - return false for security
        console.error("Password comparison error:", error);
        return false;
    }
}

