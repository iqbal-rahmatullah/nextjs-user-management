import { User as UserType, Address } from "@/drizzle/schema"

export interface User extends UserType {
  address: Address
}
