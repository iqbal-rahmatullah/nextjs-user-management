import postgres from "postgres"
import { env } from "@/env"
import { drizzle } from "drizzle-orm/postgres-js"
import * as schema from "@/drizzle/schema"

const client = postgres(env.DATABASE_URL, { max: 1 })

export const db = drizzle(client, {
  schema,
})
