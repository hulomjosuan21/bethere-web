import { createMiddleware } from "hono/factory";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { ApiResponse, Context, Env } from "./type";
import * as schema from "@/db/schema";
import { createClient } from "@supabase/supabase-js";

const queryClient = postgres(process.env.DATABASE_URL!);
const dbInstance = drizzle(queryClient, { schema });

export const dbMiddleware = createMiddleware<Env>(
  async (ctx: Context, next) => {
    ctx.set("db", dbInstance);
    await next();
  },
);

export const apiMiddleware = createMiddleware<Env>(
  async (ctx: Context, next) => {
    ctx.set("enableNotification", process.env.ENABLE_NOTIFICATION === "true");
    await next();
  },
);

export const supabaseAuth = createMiddleware<Env>(async (c, next) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json<ApiResponse<null>>(
      {
        success: false,
        message: "Authentication required",
        payload: null,
        error: "MISSING_TOKEN",
      },
      401,
    );
  }

  const token = authHeader.split(" ")[1];

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user) {
    return c.json<ApiResponse<null>>(
      {
        success: false,
        message: "Invalid or expired session",
        payload: null,
        error: error?.message || "UNAUTHORIZED",
      },
      401,
    );
  }

  c.set("userId", user.id);

  await next();
});
