import {z} from 'zod';

export const postIdSchema = z.string();

export interface PostResponse {
  id: string;
  createdAt: Date;
  description: string;
  authorId: string;
  name: string;
  grade: string;
  climbType: string;
  rating: number;
  danger: boolean | null;
  user: {
    image: string | null;
  };
}
