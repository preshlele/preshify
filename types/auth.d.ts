import type { Provider, Role } from "~~/enums/auth";

// auth.d.ts
declare module '#auth-utils' {
    interface User {
        id: number;
        name: string;
        email: string;
        avatar: string;
        role: Role;
        provider: Provider;
        emailVerified: boolean;
    }

    interface UserSession {
        // Add your own fields
    }

    interface SecureSessionData {
        // Add your own fields
    }
}

export { }