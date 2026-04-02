import {
  pgTable,
  uuid,
  text,
  uniqueIndex,
  pgEnum,
  jsonb,
} from "drizzle-orm/pg-core";
import { profiles } from "../user";

export const roleEnum = pgEnum("role", ["owner", "admin", "staff"]);

export const schools = pgTable("schools", {
  schoolId: uuid("school_id").primaryKey().defaultRandom(),
  schoolPublicId: text("school_public_id").notNull(),
  name: text("name").notNull(),
});

export const schoolUsers = pgTable(
  "school_users",
  {
    schoolUserId: uuid("school_user_id").primaryKey().defaultRandom(),

    schoolId: uuid("school_id")
      .notNull()
      .references(() => schools.schoolId),

    userId: uuid("user_id")
      .notNull()
      .references(() => profiles.userId),

    role: roleEnum("role").notNull(),
    permissions: jsonb("permission").notNull().default("[]"),
  },
  (table) => [
    uniqueIndex("unique_user_school").on(table.userId, table.schoolId),
  ],
);
