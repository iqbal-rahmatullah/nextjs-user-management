import { z } from "zod"

export const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().default(10),
  firstName: z.string().optional(),
})

export const getUserAddressSchema = searchParamsSchema

export type GetUserAddressSchema = z.infer<typeof getUserAddressSchema>

export const createUserSchema = z.object({
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  birthDate: z.date(),
  street: z.string().min(3).max(50),
  city: z.string().min(3).max(50),
  province: z.string().min(3).max(50),
  postalCode: z.string().min(3).max(50),
})

export type CreateUser = z.infer<typeof createUserSchema>

export const updateUserSchema = z.object({
  id: z.string(),
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  birthDate: z.date(),
  street: z.string().min(3).max(50),
  city: z.string().min(3).max(50),
  province: z.string().min(3).max(50),
  postalCode: z.string().min(3).max(50),
})

export type UpdateUserSchema = z.infer<typeof updateUserSchema>
