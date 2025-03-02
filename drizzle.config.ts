import { config } from "dotenv";
const { defineConfig } = require("drizzle-kit");
import { accounts } from "./db/schema";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
