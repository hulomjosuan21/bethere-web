"use client";
import AppContent from "@/components/layout/app-content";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function EventClientPage() {
  return (
    <AppContent
      title={"Event"}
      description={"Your current listed events"}
      actions={
        <>
          <Button size={"sm"}>
            <Plus /> Add Event
          </Button>
        </>
      }
    >
      <pre>
        <code></code>
      </pre>
    </AppContent>
  );
}
