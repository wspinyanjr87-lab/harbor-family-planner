import HarborShell from "@/components/harbor/HarborShell";
import { Anchor, CalendarDays, Camera, ChevronRight, Clock, Coffee, Settings, ShoppingCart, Soup, UserPlus, Utensils } from "lucide-react";

const quickActions = [
  { label: "View Calendar", description: "Check the family schedule", href: "/calendar", icon: CalendarDays },
  { label: "Plan Meals", description: "Budget recipes for the week", href: "/planner", icon: Soup },
  { label: "Grocery List", description: "Review weekly staples", href: "/grocery", icon: ShoppingCart },
  { label: "Add Memory", description: "Start the family memory shelf", href: "/memories", icon: Camera }
];

const todayItems = [
  { time: "Step 1", title: "Set up the household", detail: "Add people, roles, birthdays, pets, and access levels", icon: UserPlus },
  { time: "Step 2", title: "Pick the family rhythm", detail: "Choose meals, calendar, groceries, memories, and notifications", icon: Settings },
  { time: "Step 3", title: "Plan the budget week", detail: "Start with Free / Standard meal ideas before premium packs", icon: Utensils },
  { time: "Step 4", title: "Review the dashboard", detail: "Calendar, grocery list, and memories become the home base", icon: Coffee }
];

const nextItems = [
  { day: "SETUP", title: "Add your people", detail: "Create household members and access roles", href: "/onboarding", accent: "border-l-[#D4AF37] text-[#D4AF37]" },
  { day: "CENTER", title: "Finish Setup Center", detail: "Save household details and enabled sections", href: "/settings", accent: "border-l-emerald-400 text-emerald-300" },
  { day: "MEALS", title: "Build the first week", detail: "Open the budget starter meal shelf", href: "/planner", accent: "border-l-sky-400 text-sky-300" },
  { day: "GROCERY", title: "Check the grocery list", detail: "Review staples tied to the meal plan", href: "/grocery", accent: "border-l-purple-400 text-purple-300" }
];

const routeCards = [
  { label: "Calendar", description: "See the family month view", href: "/calendar", icon: CalendarDays },
  { label: "Meals", description: "Open budget recipe planning", href: "/planner", icon: Utensils },
  { label: "Groceries", description: "Review weekly grocery staples", href: "/grocery", icon: ShoppingCart },
  { label: "Memories", description: "Start the family memory shelf", href: "/memories", icon: Camera }
];

export default function HarborDashboardPage() {
  return (
    <HarborShell active="home">
      <header className="relative h-64 overflow-hidden border-b border-white/5">
        <img alt="Lighthouse sunset" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2000&auto=format&fit=crop" />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-[#020617]/40 to-[#020617]/95 p-6 lg:p-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]/80">Harbor Family HQ</p>
            <h1 className="harbor-serif mt-3 text-5xl font-semibold leading-none text-[#D4AF37] lg:text-6xl">Welcome to Harbor.</h1>
            <p className="mt-3 max-w-2xl text-base font-light text-slate-300 lg:text-lg">Set up your household, plan budget-friendly meals, build the grocery list, and keep the family rhythm in one place.</p>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl space-y-12 px-5 py-8 lg:px-12 lg:py-12">
        <section className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-5 lg:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4AF37]/80">Start Here</p>
              <h2 className="harbor-serif mt-2 text-3xl font-semibold text-[#D4AF37]">Make this household yours first.</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">New users should begin with setup. After that, meals, groceries, calendar, and memories all make sense at a glance.</p>
            </div>
            <a className="flex items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-[#B5942B]" href="/onboarding">Start First-Run Setup<ChevronRight className="h-4 w-4" /></a>
          </div>
        </section>

        <section aria-label="Primary Harbor actions" className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <a className="harbor-glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50" href={action.href} key={action.label}>
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#D4AF37]/10 transition group-hover:scale-110"><Icon className="h-6 w-6 text-[#D4AF37]" /></div>
                <div className="flex items-center justify-between gap-4"><div><h3 className="harbor-serif text-xl font-semibold tracking-wide text-white">{action.label}</h3><p className="mt-1 text-sm text-slate-400">{action.description}</p></div><ChevronRight className="h-5 w-5 text-[#D4AF37]/70" /></div>
              </a>
            );
          })}
        </section>

        <section className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><h2 className="harbor-serif text-4xl font-semibold text-[#D4AF37]">Today at a Glance</h2><span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Launch path</span></div>
            <div className="relative ml-4 space-y-12 border-l border-white/10 pl-8">
              {todayItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="relative" key={item.title}><span className="absolute -left-[42px] top-1 z-10 h-[18px] w-[18px] rounded-full border-2 border-[#D4AF37] bg-[#020617]" /><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div className="flex gap-4"><div className="hidden h-11 w-11 place-items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] sm:grid"><Icon className="h-5 w-5" /></div><div><span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">{item.time}</span><h4 className="mt-1 text-lg font-semibold text-slate-100">{item.title}</h4><p className="text-sm leading-6 text-slate-400">{item.detail}</p></div></div><Clock className="hidden h-5 w-5 text-slate-600 sm:block" /></div></div>
                );
              })}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="flex items-center justify-between"><h2 className="harbor-serif text-3xl font-semibold text-[#D4AF37]">What&apos;s Next</h2></div>
            <div className="space-y-4">{nextItems.map((item) => (<a className={`harbor-glass block rounded-xl border-l-4 p-5 transition hover:bg-white/[0.06] ${item.accent}`} href={item.href} key={`${item.day}-${item.title}`}><p className="mb-1 text-xs font-bold uppercase tracking-[0.22em]">{item.day}</p><h4 className="text-base font-semibold text-slate-200">{item.title}</h4><p className="text-sm text-slate-500">{item.detail}</p></a>))}</div>
            <div className="rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/5 to-[#D4AF37]/20 p-6"><Anchor className="mb-4 h-8 w-8 text-[#D4AF37]" /><p className="harbor-serif text-xl italic leading-8 text-slate-300">&quot;A calm home base first. The bigger features sail better after that.&quot;</p></div>
          </aside>
        </section>

        <section>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]/80">Main Areas</p><h2 className="harbor-serif text-3xl font-semibold text-white">Everything visible has a path</h2></div><a className="text-sm font-bold text-[#D4AF37] hover:text-white" href="/settings">Manage setup</a></div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{routeCards.map((card) => { const Icon = card.icon; return (<a className="rounded-3xl border border-white/5 bg-[#010411] p-5 transition hover:border-[#D4AF37]/30 hover:bg-white/[0.03]" href={card.href} key={card.label}><Icon className="mb-4 h-6 w-6 text-[#D4AF37]" /><h3 className="harbor-serif text-2xl font-semibold text-white">{card.label}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{card.description}</p></a>); })}</div>
        </section>
      </div>
    </HarborShell>
  );
}
