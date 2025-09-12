export interface Credentials {
    email: string;
    password: string;
}

export interface SanitizedUser {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    company: string | null;
}

export interface NewUser {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    company: string | null;
}