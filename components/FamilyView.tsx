const todayMeals = [
  { label: "Breakfast", value: "Egg wraps" },
  { label: "Lunch", value: "Pizza quesadillas" },
  { label: "Dinner", value: "Sheet Pan Chicken Tacos" }
];

const todaySchedule = [
  { time: "7:00 AM", title: "Breakfast and backpacks" },
  { time: "3:45 PM", title: "Homework reset" },
  { time: "6:15 PM", title: "Dinner window" },
  { time: "8:30 PM", title: "Kitchen close and tomorrow prep" }
];

const familyNotes = ["Movie night Friday after dinner.", "Pack lunches before bed.", "Check school folders after homework."];

export function FamilyView() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-family-ink p-6 text-white shadow-sm">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-white/60">Today at Home</p>
        <h1 className="mt-2 text-4xl font-black md:text-6xl">The Harbor Home</h1>
        <p className="mt-3 max-w-2xl text-white/70">A simple family view for meals, reminders, and the rhythm of the day.</p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {todayMeals.map((meal) => (
          <div key={meal.label} className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">{meal.label}</p>
            <h2 className="mt-2 text-2xl font-black">{meal.value}</h2>
          </div>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="product-card rounded-3xl p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">Schedule</p>
          <h2 className="mb-4 mt-1 text-2xl font-black">Today&apos;s rundown</h2>
          <div className="space-y-3">
            {todaySchedule.map((item) => (
              <div key={item.time} className="rounded-2xl bg-family-cloud p-4">
                <div className="text-sm font-black text-family-leaf">{item.time}</div>
                <div className="font-bold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="product-card rounded-3xl p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">Family Board</p>
          <h2 className="mb-4 mt-1 text-2xl font-black">House notes</h2>
          <div className="space-y-3">
            {familyNotes.map((note) => <div key={note} className="rounded-2xl bg-white p-4 font-semibold shadow-sm">{note}</div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
