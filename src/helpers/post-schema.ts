import {z} from 'zod';
import climbCategories from './climb-categories';
export const createPostSchema = z.object({
  name: z
    .string()
    .min(1, {message: 'A name for the climb is required for posts'}),
  description: z
    .string()
    .max(750, {message: 'Description max length is 750 characters'}),
  grade: z.string().min(2, {message: 'Examples: V17, 9A, 9a+, 5.14a-'}).max(6),
  climbType: z.enum(climbCategories, {
    errorMap: () => ({message: 'Category is required.'}),
  }),
  rating: z
    .number({invalid_type_error: 'Rating 0-5 is required.'})
    .min(0)
    .max(5),
  danger: z.optional(z.boolean()),
  // photos: z.optional(z.string()),
});

export type PostData = z.infer<typeof createPostSchema>;
