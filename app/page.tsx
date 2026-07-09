import HarborShell from "@/components/harbor/HarborShell";
import { BookOpen, CalendarDays, ChevronRight, Clock, Coffee, PlusCircle, Settings, ShoppingCart, Soup, UserPlus, Utensils } from "lucide-react";

const quickActions = [
  { label: "Start Setup", description: "Add people and household basics", href: "/onboarding", icon: UserPlus },
  { label: "Setup Center", description: "Roles, preferences, and launch settings", href: "/settings", icon: Settings },
  { label: "Plan Meals", description: "Dinner recipes for the week", href: "/planner", icon: Soup },
  { label: "Grocery List", description: "12 items needed today", href: "/grocery", icon: ShoppingCart }
];

const todayItems = [
  { time: "7:30 AM", title: "Hayden — Baseball Practice", detail: "Woodstock Park", icon: CalendarDays },
  { time: "12:00 PM", title: "Lunch: Grilled Chicken Wraps", detail: "Planned", icon: Utensils },
  { time: "3:30 PM", title: "Liam & Ella — School Pickup", detail: "Woodstock Elementary", icon: BookOpen },
  { time: "6:00 PM", title: "Family Time", detail: "Dinner & Movie Night", icon: Coffee }
];

const nextItems = [
  { day: "SETUP", title: "Add your people", detail: "Start with adults, kids, pets, or helpers", accent: "border-[#D4AF37] text-[#D4AF37]" },
  { day: "NEXT", title: "Pick household rhythm", detail: "Meals, calendar, groceries, memories", accent: "border-emerald-400 text-emerald-300" },
  { day: "THEN", title: "Create the first week", detail: "Starter schedule and meal plan", accent: "border-sky-400 text-sky-300" },
  { day: "READY", title: "Invite the family", detail: "Roles and access preview", accent: "border-purple-400 text-purple-300" }
];

export default function HarborHomePage() {
  return (
    <HarborShell active="home">
      <div
        className="relative min-h-[230px] overflow-hidden border-b border-[#D4AF37]/10 bg-cover bg-center lg:min-h-[260px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(2, 6, 23, 0.12), rgba(2, 6, 23, 0.94)), url('/banners/harbor-home-banner.png'), url('https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/35 to-[#020617]/75" />
        <div className="relative flex h-full min-h-[230px] flex-col justify-end px-6 py-10 lg:min-h-[260px] lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]/80">Our Harbor</p>
          <h1 className="harbor-serif mt-3 text-5xl font-semibold leading-none text-[#D4AF37] lg:text-6xl">Welcome to Harbor.</h1>
          <p className="mt-3 max-w-2xl text-base font-light text-slate-300 lg:text-lg">Start by adding your people, picking your household rhythm, and building the first week together.</p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl space-y-10 px-5 py-8 lg:px-10 lg:py-12">
        <section className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-5 lg:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4AF37]/80">New User Path</p>
              <h2 className="harbor-serif mt-2 text-3xl font-semibold text-[#D4AF37]">Make this household yours first.</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">Harbor should open clean for a new family: add people, set access, choose what matters, then start planning.</p>
            </div>
            <a className="flex items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-[#B5942B]" href="/onboarding">
              Start First-Run Setup
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <a className="harbor-glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/45" href={action.href} key={action.label}>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#D4AF37]/10 transition group-hover:scale-110">
                  <Icon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="harbor-serif text-xl font-semibold tracking-wide text-white">{action.label}</h2>
                    <p className="mt-1 text-sm text-slate-400">{action.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#D4AF37]/70" />
                </div>
              </a>
            );
          })}
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.7fr_1fr]">
          <div className="harbor-glass rounded-3xl p-6 lg:p-8">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4AF37]/80">Today at a Glance</p>
                <h2 className="harbor-serif mt-2 text-4xl font-semibold text-[#D4AF37]">Family rhythm preview</h2>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-500">Starter data</p>
            </div>

            <div className="relative ml-4 border-l border-white/10 pl-8">
              <div className="space-y-10">
                {todayItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="relative" key={`${item.time}-${item.title}`}>
                      <span className="absolute -left-[43px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-[#D4AF37] bg-[#020617]" />
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex gap-4">
                          <div className="hidden h-11 w-11 place-items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] sm:grid">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">{item.time}</p>
                            <h3 className="mt-1 text-lg font-semibold text-slate-100">{item.title}</h3>
                            <p className="text-sm text-slate-400">{item.detail}</p>
                          </div>
                        </div>
                        <Clock className="hidden h-5 w-5 text-slate-600 sm:block" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="harbor-glass rounded-3xl p-6 lg:p-7">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="harbor-serif text-3xl font-semibold text-[#D4AF37]">What&apos;s Next</h2>
                <CalendarDays className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <div className="space-y-4">
                {nextItems.map((item) => (
                  <div className={`rounded-xl border-l-4 bg-white/[0.025] p-4 ${item.accent}`} key={`${item.day}-${item.title}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.22em]">{item.day}</p>
                    <h3 className="mt-2 text-sm font-semibold text-slate-100">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/5 to-[#D4AF37]/15 p-6">
              <p className="harbor-serif text-xl italic leading-8 text-slate-200">&quot;The harbor is a place of refuge, but the ships are meant for the deep sea.&quot;</p>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="harbor-glass rounded-3xl p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]/80">Meals Snapshot</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                <Utensils className="h-7 w-7 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Starter Shelf</h3>
                <p className="text-sm text-slate-400">recipes ready to customize</p>
              </div>
            </div>
          </div>

          <div className="harbor-glass rounded-3xl p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]/80">Grocery Snapshot</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                <ShoppingCart className="h-7 w-7 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Empty List</h3>
                <p className="text-sm text-slate-400">fills as meals are planned</p>
              </div>
            </div>
          </div>

          <div className="harbor-glass rounded-3xl p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]/80">People Snapshot</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                <UserPlus className="h-7 w-7 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Add People</h3>
                <p className="text-sm text-slate-400">family, pets, helpers</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HarborShell>
  );
}
