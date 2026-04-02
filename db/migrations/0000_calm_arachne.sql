CREATE TYPE "public"."role" AS ENUM('owner', 'admin', 'staff');--> statement-breakpoint
CREATE TABLE "school_users" (
	"school_user_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"role" "role" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "schools" (
	"school_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school_public_id" text NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "school_users" ADD CONSTRAINT "school_users_school_id_schools_school_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("school_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "school_users" ADD CONSTRAINT "school_users_user_id_profiles_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "unique_user_school" ON "school_users" USING btree ("user_id","school_id");