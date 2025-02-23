import { faker } from "@faker-js/faker"
import { v4 as uuidv4 } from "uuid"
import { db } from "../db"
import { address, user } from "../schema"

const TOTAL_SEEDS = 30

const generateFakeUsers = () => {
  return Array.from({ length: TOTAL_SEEDS }, () => ({
    id: uuidv4(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthDate: faker.date.birthdate().toISOString().split("T")[0],
    createdAt: new Date(),
    updatedAt: null,
  }))
}

const seedDatabase = async () => {
  console.log("⏳ Seeding database...")

  const start = Date.now()

  const fakeUsers = generateFakeUsers()

  const insertedUsers = await db.transaction(async (tx) => {
    return await tx.insert(user).values(fakeUsers).returning()
  })

  const fakeAddresses = insertedUsers.map((user) => ({
    userId: user.id,
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    province: faker.location.state(),
    postalCode: faker.location.zipCode(),
    createdAt: new Date(),
    updatedAt: null,
  }))

  await db.transaction(async (tx) => {
    return await tx.insert(address).values(fakeAddresses)
  })

  const end = Date.now()
  console.log(`✅ Seeding completed in ${end - start}ms`)

  process.exit(0)
}

seedDatabase().catch((error) => {
  console.error("❌ Seeding failed:", error)
  process.exit(1)
})
