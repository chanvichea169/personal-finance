import { config } from "dotenv";

const { defineConfig } = require("drizzle-kit");

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  driver: "pg",
  dialect: "postgresql",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
