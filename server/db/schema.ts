import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

import { Role, Provider, Gender } from "../../enums/auth";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 200 }),
  email: varchar("email", { length: 100 }).unique().notNull(),
  password: varchar("password", { length: 256 }),
  provider: varchar("provider", { enum: [Provider.Credentials, Provider.Google], length: 50 }),
  providerSub: varchar("provider_sub", { length: 500 }),
  avatar: varchar("avatar", { length: 500 }),
  role: varchar("role", { enum: [Role.Admin, Role.Customer], length: 20 }),
  gender: varchar("gender", { enum: [Gender.Male, Gender.Female], length: 20 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 3 }).$onUpdate(
    () => new Date()
  ),
});
