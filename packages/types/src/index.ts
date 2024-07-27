import { z } from 'zod';

// Define an example interface
export interface User {
  id: string;
  name: string;
  email: string;
}

// Define an example type
export type UserRole = 'admin' | 'user' | 'guest';

// Define a Zod schema for validation
export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email()
});
