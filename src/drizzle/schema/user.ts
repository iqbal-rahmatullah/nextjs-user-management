import { relations } from "drizzle-orm"
import { date, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-zod"
import { address } from "./address"

export const user = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  firstName: varchar("firstname").notNull(),
  lastName: varchar("lastname"),
  birthDate: date("birth_date").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt"),
})

export const UserSchema = createInsertSchema(user)

export type User = typeof user.$inferSelect
export type NewUser = typeof user.$inferInsert

export const userRelation = relations(user, ({ one }) => ({
  address: one(address, {
    fields: [user.id],
    references: [address.userId],
  }),
}))
