import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"
import { user } from "./user"
import { createInsertSchema } from "drizzle-zod"
import { relations } from "drizzle-orm"

export const address = pgTable("address", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
  street: varchar("street").notNull(),
  city: varchar("city").notNull(),
  province: varchar("province").notNull(),
  postalCode: varchar("postal_code").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at"),
})

export const AddressSchema = createInsertSchema(address)

export type Address = typeof address.$inferSelect
export type NewAddress = typeof address.$inferInsert

export const userAddressRelation = relations(address, ({ one }) => ({
  user: one(user, {
    fields: [address.userId],
    references: [user.id],
    relationName: "user_address",
  }),
}))
