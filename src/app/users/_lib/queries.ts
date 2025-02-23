import "server-only"

import { GetUserAddressSchema } from "@/app/schema/user_address"
import { unstable_noStore as noStore } from "next/cache"
import { db } from "@/drizzle/db"
import { address, user } from "@/drizzle/schema"
import { count, desc, eq, ilike } from "drizzle-orm"
import { User as UserDataType } from "@/types/model/user"

export async function getUserAddress(input: GetUserAddressSchema) {
  noStore()

  try {
    const { page, per_page, first_name } = input

    const offset = (page - 1) * per_page

    const { data, total } = await db.transaction(async (tx) => {
      const data = (await tx
        .select()
        .from(user)
        .where(
          first_name ? ilike(user.firstName, `%${first_name}%`) : undefined
        )
        .limit(per_page)
        .offset(offset)
        .leftJoin(address, eq(user.id, address.userId))
        .orderBy(desc(user.createdAt))) as unknown as UserDataType[]

      const total = await tx
        .select({
          count: count(),
        })
        .from(user)
        .where(
          first_name ? ilike(user.firstName, `%${first_name}%`) : undefined
        )
        .execute()
        .then((res) => res[0].count ?? 0)

      return { data, total }
    })

    const pageCount = Math.ceil(total / per_page)
    return { data, pageCount }
  } catch (err) {
    console.log(err)
    return { data: [], pageCount: 0 }
  }
}
