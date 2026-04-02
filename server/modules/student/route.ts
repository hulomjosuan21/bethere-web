import { Hono } from "hono";

export class StudentRoute {
  get route() {
    const app = new Hono();
    return app;
  }
}
