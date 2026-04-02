import { AppType } from "@/app/api/[...rest]/route";
import { hc } from "hono/client";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return window.location.origin;
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
};

export const client = hc<AppType>(getBaseUrl());
