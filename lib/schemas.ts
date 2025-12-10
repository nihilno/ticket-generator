import { z } from "zod";

export const formSchema = z.object({
  avatar: z
    .custom<File[]>()
    .refine((files) => files && files.length > 0, {
      message: "Avatar is required",
    })
    .refine((files) => files && files.length === 1, {
      message: "Please upload exactly one avatar",
    })
    .refine(
      (files) => files && ["image/jpeg", "image/png"].includes(files[0].type),
      { message: "Only JPG or PNG allowed" },
    )
    .refine((files) => files && files[0].size <= 512 * 512 * 10, {
      message: "File too large",
    }),
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(64, { message: "Name must be below 64 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  username: z
    .string()
    .min(2, { message: "Github Username must be at least 2 characters long." })
    .max(39, { message: "Github Username must be below 39 characters." }),
});

export type formType = z.infer<typeof formSchema>;
