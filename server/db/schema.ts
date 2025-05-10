import { relations } from "drizzle-orm";
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

import { Role, Provider, Gender } from "../../enums/auth";
import { Type } from "../../enums/verification";

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
  emailVerifiedAt: timestamp("email_verified_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 3 }).$onUpdate(
    () => new Date()
  ),
});

export const verifications = pgTable("verifications", {
  id: serial("id").primaryKey(),
  userId: integer('user_id').references(() => users.id),
  identifier: varchar("identifier", { length: 100 }),
  token: varchar("token", { length: 100 }),
  type: varchar("type", { enum: [Type.Email, Type.Phone, Type.Password], length: 30 }),
  verifiedAt: timestamp("verified_at"),
  expiresAt: timestamp("expires_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 3 }).$onUpdate(
    () => new Date()
  ),
});


// Relationships
export const usersRelations = relations(users, ({ many }) => ({
  verifications: many(verifications),
}));

export const verificationsRelations = relations(verifications, ({ one }) => ({
  officer: one(users, {
    fields: [verifications.userId],
    references: [users.id]
  })
}));