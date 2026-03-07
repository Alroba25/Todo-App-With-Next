import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, "Todo title must be at least 5 characters.")
    .max(32, "Todo title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Todo description must be at least 20 characters.")
    .max(100, "Todo description must be at most 100 characters.")
    .optional(),
});

