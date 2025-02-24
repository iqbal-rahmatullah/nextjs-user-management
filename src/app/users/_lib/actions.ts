"use server"

import { CreateUser } from "@/app/schema/user_address"
import { getErrorMessage } from "@/lib/handle-error"
import { v4 as uuidv4 } from "uuid"
import { unstable_noStore as noStore, revalidatePath } from "next/cache"
import { address, NewAddress, NewUser, user } from "@/drizzle/schema"
import { db } from "@/drizzle/db"
import { eq } from "drizzle-orm"

export async function createUser(input: CreateUser) {
  noStore()
  try {
    const userId = uuidv4()

    const dataUser: NewUser = {
      id: userId,
      firstName: input.firstName,
      lastName: input.lastName,
      birthDate: new Date(input.birthDate).toISOString(),
    }

    const dataAddress: NewAddress = {
      street: input.street,
      city: input.city,
      postalCode: input.postalCode,
      province: input.province,
      userId,
    }

    await Promise.all([
      db.insert(user).values(dataUser).execute(),
      db.insert(address).values(dataAddress).execute(),
    ])

    revalidatePath("/users")

    return {
      data: null,
      error: null,
    }
  } catch (error) {
    return {
      data: null,
      error: getErrorMessage(error),
    }
  }
}

export async function deleteUser(input: { id: string }) {
  try {
    await db.delete(user).where(eq(user.id, input.id))

    revalidatePath("/users")
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    }
  }
}
