import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters.")
    .max(32, "Title must be at most 32 characters."),
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters.")
    .or(z.literal(""))
    .transform((val) => (val === "" ? undefined : val))
    .optional(),
  completed: z.boolean(),
});
