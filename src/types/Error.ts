// src/types/errors.ts

// Base error class for all custom errors
export abstract class BaseError extends Error {
    abstract status: number;
    abstract name: string;

    protected  constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, BaseError.prototype);
    }

    // For logging/debugging
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            stack: this.stack,
        };
    }
}

// Validation errors (400)
export class ValidationError extends BaseError {
    status = 400;
    name = "ValidationError";

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

// Authentication errors (401)
export class AuthenticationError extends BaseError {
    status = 401;
    name = "AuthenticationError";

    constructor(message = "Authentication required") {
        super(message);
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
}

// Authorization errors (403)
export class AuthorizationError extends BaseError {
    status = 403;
    name = "AuthorizationError";

    constructor(message = "Access denied") {
        super(message);
        Object.setPrototypeOf(this, AuthorizationError.prototype);
    }
}

// Not found errors (404)
export class NotFoundError extends BaseError {
    status = 404;
    name = "NotFoundError";

    constructor(message = "Resource not found") {
        super(message);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

// Conflict errors (409)
export class ConflictError extends BaseError {
    status = 409;
    name = "ConflictError";

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}

// Rate limiting errors (429)
export class RateLimitError extends BaseError {
    status = 429;
    name = "RateLimitError";

    constructor(message = "Rate limit exceeded") {
        super(message);
        Object.setPrototypeOf(this, RateLimitError.prototype);
    }
}

// Server errors (500)
export class InternalServerError extends BaseError {
    status = 500;
    name = "InternalServerError";

    constructor(message = "Internal server error") {
        super(message);
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}

// Database errors (500)
export class DatabaseError extends BaseError {
    status = 500;
    name = "DatabaseError";

    constructor(message = "Database operation failed") {
        super(message);
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
}

// Payment/billing errors (402)
export class PaymentError extends BaseError {
    status = 402;
    name = "PaymentError";

    constructor(message = "Payment required") {
        super(message);
        Object.setPrototypeOf(this, PaymentError.prototype);
    }
}

// API Key specific errors
export class InvalidApiKeyError extends AuthenticationError {
    name = "InvalidApiKeyError";

    constructor(message = "Invalid API key") {
        super(message);
        Object.setPrototypeOf(this, InvalidApiKeyError.prototype);
    }
}

// Subscription specific errors
export class SubscriptionError extends BaseError {
    status = 403;
    name = "SubscriptionError";

    constructor(message = "Subscription issue") {
        super(message);
        Object.setPrototypeOf(this, SubscriptionError.prototype);
    }
}

// Type guard to check if error is one of our custom errors
export function isCustomError(error: unknown): error is BaseError {
    return error instanceof BaseError;
}

// Helper function to create standardized error responses
export function createErrorResponse(error: unknown) {
    if (isCustomError(error)) {
        return {
            success: false,
            error: {
                name: error.name,
                message: error.message,
                status: error.status,
            },
        };
    }

    // Handle unknown errors
    return {
        success: false,
        error: {
            name: "InternalServerError",
            message: "An unexpected error occurred",
            status: 500,
        },
    };
}

// Error factory functions for common scenarios
export const ErrorFactory = {
    invalidEmail: () => new ValidationError("Invalid email format"),
    emailTaken: () => new ConflictError("Email already in use"),
    userNotFound: () => new NotFoundError("User not found"),
    invalidPassword: () => new ValidationError("Password does not meet requirements"),
    invalidCredentials: () => new AuthenticationError("Invalid credentials"),
    apiKeyNotFound: () => new InvalidApiKeyError("API key not found"),
    rateLimitExceeded: (limit: number) =>
        new RateLimitError(`Rate limit of ${limit} requests exceeded`),
    subscriptionRequired: () =>
        new SubscriptionError("Active subscription required for this feature"),
    planLimitExceeded: (feature: string) =>
        new SubscriptionError(`Your current plan doesn't support ${feature}`),
};