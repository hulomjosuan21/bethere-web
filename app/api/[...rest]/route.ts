import app from "@/server";
import { ExecutionContext } from "hono";
import { handle } from "hono/vercel";
async function handler(request: Request): Promise<Response> {
  const env = {};
  const context: ExecutionContext | undefined = undefined;

  return app.fetch(request, env, context);
}
export type AppType = typeof app;

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export const OPTIONS = handle(app);
