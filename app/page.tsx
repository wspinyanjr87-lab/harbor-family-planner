import {
  Anchor,
  BookOpen,
  CalendarDays,
  Camera,
  ChevronRight,
  Clock,
  Coffee,
  Home,
  PlusCircle,
  ShoppingCart,
  Soup,
  User,
  Utensils
} from "lucide-react";

const navItems = [
  { label: "Harbor Home", href: "#home", icon: Home, active: true },
  { label: "Calendar", href: "#calendar", icon: CalendarDays },
  { label: "Recipe Planner", href: "#recipes", icon: Utensils },
  { label: "Grocery List", href: "#grocery", icon: ShoppingCart },
  { label: "Memories", href: "#memories", icon: Camera }
];

const quickActions = [
  { label: "View Calendar", description: "Check family schedule", href: "#calendar", icon: CalendarDays },
  { label: "Plan Meals", description: "Dinner recipes for the week", href: "#recipes", icon: Soup },
  { label: "Grocery List", description: "12 items needed today", href: "#grocery", icon: ShoppingCart },
  { label: "Add Memory", description: "Capture a family moment", href: "#memories", icon: PlusCircle }
];

const todayItems = [
  { time: "7:30 AM", title: "Hayden — Baseball Practice", detail: "Woodstock Park", icon: CalendarDays },
  { time: "12:00 PM", title: "Lunch: Grilled Chicken Wraps", detail: "Planned", icon: Utensils },
  { time: "3:30 PM", title: "Liam & Ella — School Pickup", detail: "Woodstock Elementary", icon: BookOpen },
  { time: "6:00 PM", title: "Family Time", detail: "Dinner & Movie Night", icon: Coffee }
];

const nextItems = [
  { day: "JUL 9", title: "Trysten — Football Conditioning", detail: "5:00 PM", accent: "border-purple-400 text-purple-300" },
  { day: "JUL 10", title: "Grocery Shopping", detail: "All Day", accent: "border-emerald-400 text-emerald-300" },
  { day: "JUL 11", title: "Date Night", detail: "7:00 PM", accent: "border-rose-400 text-rose-300" },
  { day: "JUL 12", title: "Ella's Birthday", detail: "All Day", accent: "border-amber-300 text-amber-200" }
];

function LighthouseMark() {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#D4AF37] text-[#020617] shadow-lg shadow-[#D4AF37]/20">
      <Anchor className="h-6 w-6" strokeWidth={2.4} />
    </div>
  );
}

export default function HarborHomePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">
      <div className="flex min-h-screen">
        <aside className="fixed inset-y-0 z-40 hidden w-72 flex-col border-r border-white/5 bg-[#010411] lg:flex">
          <div className="flex items-center gap-3 p-8">
            <LighthouseMark />
            <div>
              <p className="harbor-serif text-2xl font-semibold tracking-[0.22em] text-[#D4AF37]">HARBOR</p>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D4AF37]/80">Family HQ</p>
            </div>
          </div>

          <nav className="mt-4 flex-1 space-y-2 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  className={`flex items-center gap-4 rounded-r-xl px-4 py-3 text-sm font-semibold transition ${
                    item.active
                      ? "border-l-4 border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/15 to-transparent text-[#D4AF37]"
                      : "border-l-4 border-transparent text-slate-400 hover:text-[#D4AF37]"
                  }`}
                  href={item.href}
                  key={item.label}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="space-y-4 p-6">
            <div className="harbor-glass flex items-center gap-3 rounded-2xl p-4">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-[#D4AF37]/30 bg-slate-900">
                <User className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Account</p>
                <p className="text-sm font-bold text-slate-200">William Harbor</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4">
              <Anchor className="mb-3 h-5 w-5 text-[#D4AF37]" />
              <p className="harbor-serif text-lg italic leading-6 text-[#D4AF37]">Anchored in Faith</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Joshua 24:15</p>
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1 lg:ml-72">
          <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/5 bg-[#020617]/85 px-5 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex items-center gap-3">
              <LighthouseMark />
              <div>
                <p className="harbor-serif text-xl font-semibold tracking-[0.22em] text-[#D4AF37]">HARBOR</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/70">Family HQ</p>
              </div>
            </div>
          </header>

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
              <h1 className="harbor-serif mt-3 text-5xl font-semibold leading-none text-[#D4AF37] lg:text-6xl">Welcome back, William.</h1>
              <p className="mt-3 max-w-2xl text-base font-light text-slate-300 lg:text-lg">Here&apos;s what&apos;s happening in the Harbor today.</p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-7xl space-y-10 px-5 py-8 lg:px-10 lg:py-12">
            <section id="home" className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                    <h2 className="harbor-serif mt-2 text-4xl font-semibold text-[#D4AF37]">Family rhythm</h2>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-500">Monday, Oct 14</p>
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
                  <Anchor className="mb-4 h-8 w-8 text-[#D4AF37]" />
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
                    <h3 className="text-xl font-bold text-white">Today&apos;s Plan</h3>
                    <p className="text-sm text-slate-400">2 of 3 meals planned</p>
                  </div>
                </div>
                <div className="mt-5 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-2/3 rounded-full bg-[#D4AF37]" />
                </div>
              </div>

              <div className="harbor-glass rounded-3xl p-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]/80">Grocery Snapshot</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                    <ShoppingCart className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">12 items</h3>
                    <p className="text-sm text-slate-400">needed today</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Produce', 'Dairy', 'Pantry', 'Snacks'].map((item) => (
                    <span className="rounded-full border border-[#D4AF37]/20 px-3 py-1 text-xs font-semibold text-[#D4AF37]" key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="harbor-glass rounded-3xl p-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]/80">Recent Memories</p>
                <div className="mt-5 grid grid-cols-4 gap-3">
                  {["🌅", "🍽️", "🏖️", "+12"].map((item) => (
                    <div className="grid aspect-square place-items-center rounded-2xl border border-white/5 bg-white/[0.04] text-xl" key={item}>{item}</div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-slate-400">Small moments saved from the week.</p>
              </div>
            </section>
          </div>

          <footer className="border-t border-white/5 bg-[#010411] px-5 py-8 text-center">
            <p className="harbor-serif text-2xl italic tracking-wide text-[#D4AF37]">&quot;As for me and my house, we will serve the Lord.&quot;</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.32em] text-slate-500">Joshua 24:15</p>
          </footer>
        </section>
      </div>
    </main>
  );
}
