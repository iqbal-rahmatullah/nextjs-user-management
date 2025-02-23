import { User as UserType, Address } from "@/drizzle/schema"

export interface User extends UserType {
  users: UserType
  address: Address
}
