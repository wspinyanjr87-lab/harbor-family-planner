const todayMeals = [
  { label: "Breakfast", value: "Egg wraps", note: "quick protein start" },
  { label: "Lunch", value: "Pizza quesadillas", note: "kid-friendly and easy" },
  { label: "Dinner", value: "Sheet Pan Chicken Tacos", note: "family dinner anchor" }
];

const todaySchedule = [
  { time: "7:00 AM", title: "Breakfast and backpacks", tone: "Morning launch" },
  { time: "3:45 PM", title: "Homework reset", tone: "After-school reset" },
  { time: "6:15 PM", title: "Dinner window", tone: "Table time" },
  { time: "8:30 PM", title: "Kitchen close and tomorrow prep", tone: "Night reset" }
];

const familyNotes = [
  "Movie night Friday after dinner.",
  "Pack lunches before bed.",
  "Check school folders after homework."
];

const focusCards = [
  { title: "Grocery snapshot", value: "18 items", detail: "Estimated list is ready to review." },
  { title: "Budget pulse", value: "$142 / $150", detail: "Starter estimate leaves a small buffer." },
  { title: "Tomorrow prep", value: "2 reminders", detail: "Lunches and school folders before bed." }
];

export function FamilyView() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[2rem] bg-family-ink text-white shadow-2xl shadow-black/10">
        <div className="grid gap-6 p-6 md:grid-cols-[1fr_0.85fr] md:p-8 md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-family-honey">Today at Home</p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">A clear view before the day gets loud.</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Meals, reminders, groceries, and the day&apos;s rhythm gathered into one family dashboard.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">Tonight&apos;s anchor</p>
            <h2 className="mt-2 text-2xl font-black">Sheet Pan Chicken Tacos</h2>
            <p className="mt-2 text-sm text-white/65">Dinner window: 6:15 PM • grocery list already drafted</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {focusCards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-family-berry">{card.title}</p>
            <h2 className="mt-2 text-3xl font-black">{card.value}</h2>
            <p className="mt-2 text-sm leading-6 text-black/55">{card.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {todayMeals.map((meal) => (
          <div key={meal.label} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">{meal.label}</p>
            <h2 className="mt-2 text-2xl font-black">{meal.value}</h2>
            <p className="mt-2 rounded-2xl bg-family-cloud px-3 py-2 text-sm font-bold text-black/55">{meal.note}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="product-card rounded-3xl p-5">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">Schedule</p>
              <h2 className="mt-1 text-2xl font-black">Today&apos;s rhythm</h2>
            </div>
            <span className="rounded-full bg-family-leaf px-3 py-1 text-xs font-black text-white">4 beats</span>
          </div>
          <div className="space-y-3">
            {todaySchedule.map((item) => (
              <div key={item.time} className="grid gap-3 rounded-2xl bg-family-cloud p-4 md:grid-cols-[90px_1fr] md:items-center">
                <div>
                  <div className="text-sm font-black text-family-leaf">{item.time}</div>
                  <div className="text-xs font-bold text-black/40">{item.tone}</div>
                </div>
                <div className="font-black">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="product-card rounded-3xl p-5">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">Family Board</p>
              <h2 className="mt-1 text-2xl font-black">House notes</h2>
            </div>
            <span className="rounded-full bg-family-honey/30 px-3 py-1 text-xs font-black text-black/55">starter</span>
          </div>
          <div className="space-y-3">
            {familyNotes.map((note) => (
              <div key={note} className="rounded-2xl bg-white p-4 font-semibold shadow-sm ring-1 ring-black/5">
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
