import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { Env } from "./type";
import { dbMiddleware } from "./middleware";

const app = new Hono<Env>().basePath("/api");

app.use("*", dbMiddleware);

app.onError((error, c) => {
  if (error instanceof HTTPException) {
    return c.json({ error: "Internal Server Error" }, 500);
  }
  if (error instanceof Error) {
    return c.json({ error: error.message }, 500);
  }
  return c.json({ error: "Unknown error occurred" }, 500);
});

export default app;
