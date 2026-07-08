import { AppShell } from "@/components/AppShell";
import { HarborWorkspace } from "@/components/HarborWorkspace";

export default function SettingsPage() {
  return (
    <AppShell>
      <HarborWorkspace initialTab="Settings" />
    </AppShell>
  );
}
