import { z } from "zod"

export const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().default(10),
  first_name: z.string().optional(),
})

export const getUserAddressSchema = searchParamsSchema

export type GetUserAddressSchema = z.infer<typeof getUserAddressSchema>
