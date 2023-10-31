import * as z from 'zod';

export const signupValidation = z.object({
    name: z.string().min(2, {message: 'Name must be at least 2 characters'}),
    username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(8, {message: 'password must be at least 8 characters'}),
  });