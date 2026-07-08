import { AppShell } from "@/components/AppShell";
import { HarborWorkspace } from "@/components/HarborWorkspace";

const plannerStats = [
  { label: "Weekly meals", value: "21 slots", detail: "Breakfast, lunch, and dinner in one view." },
  { label: "Grocery handoff", value: "Auto list", detail: "Ingredients roll into the shopping plan." },
  { label: "Family fit", value: "No guesswork", detail: "Plan around meals people will actually eat." }
];

export default function PlannerPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="overflow-hidden rounded-[2rem] bg-family-ink p-6 text-white shadow-2xl shadow-black/10 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-family-honey">Meal Planner</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Build the week before the week builds itself.
              </h1>
              <p className="mt-4 max-w-2xl text-white/70">
                Pick simple meals, see the week take shape, and let Harbor turn dinner decisions into a grocery list you can actually use.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">Starter mode</p>
              <h2 className="mt-2 text-2xl font-black">Safe sample planner</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">
                No account, no billing, no private family data. This is the public preview flow.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {plannerStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-family-berry">{stat.label}</p>
              <h2 className="mt-2 text-3xl font-black">{stat.value}</h2>
              <p className="mt-2 text-sm leading-6 text-black/55">{stat.detail}</p>
            </div>
          ))}
        </section>

        <HarborWorkspace initialTab="Meals" />
      </div>
    </AppShell>
  );
}
