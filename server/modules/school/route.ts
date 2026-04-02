import { Env } from "@/server/type";
import { Hono } from "hono";

export class SchoolRoute {
  get route() {
    const app = new Hono<Env>();
    return app;
  }
}
