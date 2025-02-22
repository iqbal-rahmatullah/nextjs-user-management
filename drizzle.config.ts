import { env } from "@/env"
import "dotenv/config"
import type { Config } from "drizzle-kit"

export default {
  dialect: "postgresql",
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema/index.ts",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
} satisfies Config
