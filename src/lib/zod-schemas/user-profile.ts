import { z } from "zod";

export const UserProfileSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be at least 4 characters long" }),
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  dob: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  address: z.object({
    present: z.string().min(1, { message: "Present address is required" }),
    permanent: z.string().min(1, { message: "Permanent address is required" }),
    city: z.string().optional(),
  }),
  profileImage: z.string({ message: "Invalid URL" }),
});

export type UserProfileSchemaType = z.infer<typeof UserProfileSchema>;
