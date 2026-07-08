import { AppShell } from "@/components/AppShell";
import { HarborWorkspace } from "@/components/HarborWorkspace";

export default function CalendarPage() {
  return (
    <AppShell>
      <HarborWorkspace initialTab="Calendar" />
    </AppShell>
  );
}
