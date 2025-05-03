import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email().nonempty("Email address is required"),
    password: z.string().min(8, "Password must be minimum of 8 characters").nonempty("Password is required"),
    remember: z.boolean().optional()
});

export type Login = z.infer<typeof loginSchema>;