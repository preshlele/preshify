import { db } from "~/server/db";
import * as schema from "~/server/db/schema";


export const tables = schema;

export function useDb() {
  return db;
}

export type User = typeof tables.users.$inferSelect;
export type StoreUser = typeof tables.users.$inferInsert;
