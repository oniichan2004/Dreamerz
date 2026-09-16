import { z } from "zod";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const passwordRequirements = [
  {
    key: "length",
    label: "Minimum 8 characters",
    test: (password: string) => password.length >= 8,
  },
  {
    key: "case",
    label: "Uppercase and lowercase letters",
    test: (password: string) => /[a-z]/.test(password) && /[A-Z]/.test(password),
  },
  {
    key: "special",
    label: "At least one special symbol {};:=<>_+-^#$@!%*?&",
    test: (password: string) => /[^a-zA-Z0-9]/.test(password),
  },
] as const;

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .regex(emailRegex, "Wrong email format"),
    password: z
      .string()
      .min(1, "Password is required")
      .refine(
        (password) => passwordRequirements.every((req) => req.test(password)),
        "Password does not meet the requirements"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(emailRegex, "Wrong email format"),
  password: z.string().min(1, "Password is required"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
