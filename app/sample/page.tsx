import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { FamilyView } from "@/components/FamilyView";

export default function SamplePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-[2rem] bg-family-leaf p-6 text-white shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">Safe sample mode</p>
          <h1 className="mt-2 text-4xl font-black md:text-6xl">Friend click-through test</h1>
          <p className="mt-3 max-w-2xl text-white/75">This flow uses starter data only. It is public-safe and does not depend on live customer storage.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/planner" className="rounded-2xl bg-white px-5 py-3 font-bold text-family-ink">Try planner</Link>
            <Link href="/grocery" className="rounded-2xl bg-family-ink px-5 py-3 font-bold text-white">Try grocery</Link>
          </div>
        </section>
        <FamilyView />
      </div>
    </AppShell>
  );
}
