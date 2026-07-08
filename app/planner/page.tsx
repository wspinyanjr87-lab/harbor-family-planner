import { AppShell } from "@/components/AppShell";

const days = [
  { day: "MON", date: "May 12" },
  { day: "TUE", date: "May 13" },
  { day: "WED", date: "May 14" },
  { day: "THU", date: "May 15" },
  { day: "FRI", date: "May 16" },
  { day: "SAT", date: "May 17" },
  { day: "SUN", date: "May 18" }
];

const rows = [
  {
    label: "Breakfast",
    icon: "☀️",
    meals: [
      { title: "Berry Smoothie Bowl", image: "🥣" },
      { title: "Avocado Toast", image: "🥑" },
      { title: "Yogurt & Granola", image: "🫐" },
      { title: "Egg Muffins", image: "🍳" },
      { title: "Oatmeal & Banana", image: "🍌" },
      { title: "Greek Yogurt Pancakes", image: "🥞" },
      { title: "Add Breakfast", image: "+", muted: true }
    ]
  },
  {
    label: "Lunch",
    icon: "🌤️",
    meals: [
      { title: "Hummus Veggie Wrap", image: "🥙" },
      { title: "Quinoa Salad", image: "🥗" },
      { title: "Add Lunch", image: "+", muted: true },
      { title: "Tomato Soup", image: "🍅" },
      { title: "Leftover Pasta", image: "🍝" },
      { title: "Add Lunch", image: "+", muted: true },
      { title: "Add Lunch", image: "+", muted: true }
    ]
  },
  {
    label: "Dinner",
    icon: "🍽️",
    meals: [
      { title: "Lemon Garlic Salmon", image: "🐟" },
      { title: "Chicken Stir Fry", image: "🥘" },
      { title: "Beef Tacos", image: "🌮" },
      { title: "Creamy Tomato Pasta", image: "🍝" },
      { title: "Sheet Pan Chicken", image: "🍗" },
      { title: "Margherita Pizza", image: "🍕" },
      { title: "Roasted Veg Bowls", image: "🥦" }
    ]
  },
  {
    label: "Snacks",
    icon: "🍏",
    meals: [
      { title: "Apple & Peanut Butter", image: "🍎" },
      { title: "Greek Yogurt & Berries", image: "🫐" },
      { title: "Carrot Sticks", image: "🥕" },
      { title: "Hummus & Cucumbers", image: "🥒" },
      { title: "String Cheese", image: "🧀" },
      { title: "Trail Mix", image: "🥜" },
      { title: "Add Snack", image: "+", muted: true }
    ]
  }
];

const prepNotes = [
  { text: "Chop veggies for stir fry", done: true },
  { text: "Cook quinoa", done: true },
  { text: "Marinate chicken (Fri)", done: false },
  { text: "Prep overnight oats", done: false }
];

function MealCell({ meal }: { meal: { title: string; image: string; muted?: boolean } }) {
  return (
    <div className={`min-h-[132px] rounded-2xl border p-3 shadow-sm ${meal.muted ? "border-dashed border-family-leaf/25 bg-family-cloud/60" : "border-black/5 bg-white"}`}>
      <div className={`mb-3 flex h-16 items-center justify-center rounded-2xl text-4xl ${meal.muted ? "bg-white/60 text-family-leaf" : "bg-family-cream"}`}>
        {meal.image}
      </div>
      <div className="text-sm font-black leading-tight text-family-ink">{meal.title}</div>
      <div className="mt-2 text-xs font-bold text-black/35">•••</div>
    </div>
  );
}

export default function PlannerPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-[2rem] bg-white/70 p-5 shadow-sm ring-1 ring-black/5 md:p-8">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-family-leaf">Planner</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-family-ink md:text-6xl">
                Build the week before the week builds itself.
              </h1>
              <p className="mt-3 text-black/55">A little planning now brings calmer, easier evenings.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-black shadow-sm">←</button>
              <button className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-black shadow-sm">May 12 – May 18, 2025</button>
              <button className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-black shadow-sm">Today</button>
              <button className="rounded-2xl bg-family-berry px-5 py-3 font-black text-white shadow-lg shadow-family-berry/20">Add Meal +</button>
            </div>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1fr_310px]">
          <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-black/5 md:p-5">
            <div className="grid grid-cols-[96px_repeat(7,minmax(105px,1fr))] gap-2 overflow-x-auto pb-2">
              <div />
              {days.map((day) => (
                <div key={day.day} className="min-w-[105px] py-2 text-center">
                  <div className="text-sm font-black text-family-ink">{day.day}</div>
                  <div className="text-xs font-bold text-black/45">{day.date}</div>
                </div>
              ))}

              {rows.map((row) => (
                <div key={row.label} className="contents">
                  <div className="flex min-h-[132px] flex-col items-center justify-center rounded-2xl bg-family-cloud p-3 text-center">
                    <div className="text-2xl">{row.icon}</div>
                    <div className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-family-ink">{row.label}</div>
                  </div>
                  {row.meals.map((meal, index) => (
                    <MealCell key={`${row.label}-${index}`} meal={meal} />
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-family-cloud px-4 py-3 md:flex-row md:items-center md:justify-between">
              <div className="text-sm font-semibold text-black/65">💡 Tip: Batch cook grains or protein on Sunday to save time during busy weeknights.</div>
              <button className="rounded-xl bg-white px-4 py-2 text-sm font-black shadow-sm">View Prep Ideas</button>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-family-leaf">Grocery Handoff</p>
              <h2 className="mt-2 text-2xl font-black">Share the list. Get it done.</h2>
              <div className="mt-4 rounded-2xl bg-family-cloud p-4">
                <p className="text-sm font-bold text-black/55">List total</p>
                <p className="mt-1 text-3xl font-black">48 items</p>
                <button className="mt-4 w-full rounded-2xl bg-family-berry px-4 py-3 font-black text-white">Send to Shopper</button>
              </div>
              <button className="mt-3 w-full rounded-2xl bg-white px-4 py-3 text-left font-black ring-1 ring-black/10">Manage List →</button>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-family-leaf">Budget Estimate</p>
              <h2 className="mt-2 text-4xl font-black">$142.68</h2>
              <p className="text-sm font-semibold text-black/50">estimated total</p>
              <div className="mt-5 h-3 rounded-full bg-family-cloud">
                <div className="h-3 w-[72%] rounded-full bg-family-leaf" />
              </div>
              <div className="mt-3 flex justify-between text-xs font-black text-black/45">
                <span>$120 budget</span>
                <span>$180 weekly target</span>
              </div>
              <button className="mt-4 w-full rounded-2xl bg-white px-4 py-3 text-left font-black ring-1 ring-black/10">View Budget Details →</button>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-family-leaf">Prep Notes</p>
              <h2 className="mt-2 text-2xl font-black">Plan ahead, stress less.</h2>
              <div className="mt-4 space-y-3">
                {prepNotes.map((note) => (
                  <div key={note.text} className="flex items-center gap-3 text-sm font-bold text-black/65">
                    <span className={`grid h-5 w-5 place-items-center rounded-full border ${note.done ? "border-family-leaf bg-family-leaf text-white" : "border-black/25"}`}>{note.done ? "✓" : ""}</span>
                    {note.text}
                  </div>
                ))}
              </div>
              <button className="mt-5 w-full rounded-2xl bg-family-honey px-4 py-3 font-black text-family-ink">+ Add Note</button>
            </div>
          </aside>
        </section>
      </div>
    </AppShell>
  );
}
