import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email().nonempty("Email address is required"),
    password: z.string().min(8, "Password must be minimum of 8 characters").nonempty("Password is required"),
    remember: z.boolean().optional()
});
export type Login = z.infer<typeof loginSchema>;

export const registerSchema = z
    .object({
        email: z.string().max(100).email("Invalid email"),
        name: z.string().max(200).min(2, "Too short"),
        password: z.string().min(8, "Too short"),
        passwordConfirm: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: "Passwords must match",
        path: ["passwordConfirm"],
    });
export type Register = z.infer<typeof registerSchema>;

export const verifyEmailSchema = z.object({
    token: z.string(),
});
export type VerifyEmail = z.infer<typeof verifyEmailSchema>;

export const forgotPasswordSchema = z.object({
    email: z.string().email("Invalid email"),
});
export type ForgotPassword = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
    .object({
        password: z.string().min(8, "Too short"),
        passwordConfirm: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: "Passwords must match",
        path: ["passwordConfirm"],
    });
export type ResetPassword = z.infer<typeof resetPasswordSchema>;

export const verifyPasswordResetSchema = z.object({
    token: z.string(),
});
export type VerifyPasswordReset = z.infer<typeof verifyPasswordResetSchema>;


export const emailVerifiedSchema = z.object({
    verificationToken: z.string().max(32).catch(""),
});
export type EmailVerified = z.infer<typeof emailVerifiedSchema>;

export const emailVerificationSchema = z.object({
    email: z.string().max(32).catch(""),
});
export type EmailVerification = z.infer<typeof emailVerificationSchema>;