import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, { message: "Title is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  image: z.string().url({ message: "Image must be a valid URL" }),
  new_price: z.string().min(1, { message: "New price is required" }),
  old_price: z.string().min(1, { message: "Old price is required" }),
});
