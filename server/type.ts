import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "@/db/schema";
import { Context as HonoContext } from "hono";
type ApiSuccess<T> = {
  success: true;
  message: string;
  payload: T;
  error?: never;
};

type ApiError = {
  success: false;
  message: string;
  payload: null;
  error: string;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type Env = {
  Variables: {
    db: PostgresJsDatabase<typeof schema>;
    enableNotification: boolean;
    userId?: string;
  };
};

export type Context = HonoContext<Env>;
