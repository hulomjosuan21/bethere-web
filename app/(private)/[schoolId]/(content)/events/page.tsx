import EventClientPage from "./EventsPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - BeThere",
  description: "Your current listed events",
};

export default function EventsPage() {
  return <EventClientPage />;
}
