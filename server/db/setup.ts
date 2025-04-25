import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import { users } from "../db";

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const db = drizzle(pool, { schema: { users,  } });
