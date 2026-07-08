"use client";

import { useMemo, useState } from "react";

type MealSlot = "breakfast" | "lunch" | "dinner";
type Tab = "Calendar" | "Meals" | "Grocery" | "Family" | "Settings";
type Repeat = "Once" | "Daily" | "Weekly" | "Monthly";
type Store = "Estimated" | "Walmart" | "Kroger" | "Aldi" | "Costco" | "Manual";
type BrandPref = "Cheapest" | "Store Brand" | "Name Brand" | "Flexible";
type CouponPref = "Ignore Coupons" | "Use Coupons" | "Coupons First";
type PersonType = "Adult" | "Child" | "Pet" | "Other";

type Recipe = { title: string; ingredients: string[]; steps: string };
type MealDay = { day: string; breakfast: string; lunch: string; dinner: string };
type EventItem = { title: string; repeat: Repeat; time: string; date?: string; day?: string; monthDay?: string };
type Person = { name: string; type: PersonType; emoji: string; tasks: string[] };

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const times = ["6:00 AM", "7:00 AM", "8:00 AM", "12:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
const tabs: Tab[] = ["Calendar", "Meals", "Grocery", "Family", "Settings"];
const stores: Store[] = ["Estimated", "Walmart", "Kroger", "Aldi", "Costco", "Manual"];

const breakfastOptions: Recipe[] = [
  { title: "Egg & Cheese Breakfast Wraps", ingredients: ["Eggs", "Tortillas", "Cheese", "Butter"], steps: "Scramble eggs, add cheese, wrap in tortillas, and toast until warm." },
  { title: "Peanut Butter Banana Toast", ingredients: ["Bread", "Peanut butter", "Bananas", "Honey"], steps: "Toast bread, spread peanut butter, add banana slices, and drizzle with honey." },
  { title: "Sausage Egg Breakfast Bowls", ingredients: ["Eggs", "Sausage", "Potatoes", "Cheese"], steps: "Cook potatoes, brown sausage, scramble eggs, then layer everything with cheese." },
  { title: "Cinnamon Oatmeal Cups", ingredients: ["Oats", "Milk", "Brown sugar", "Cinnamon"], steps: "Cook oats with milk, stir in brown sugar and cinnamon, then portion into cups." }
];

const lunchOptions: Recipe[] = [
  { title: "Chicken Ranch Pinwheels", ingredients: ["Tortillas", "Chicken", "Cream cheese", "Ranch", "Cheese"], steps: "Mix filling, spread over tortillas, roll tightly, and slice." },
  { title: "Pizza Quesadillas", ingredients: ["Tortillas", "Mozzarella", "Pepperoni", "Pizza sauce"], steps: "Cook filled tortillas until crisp and serve with pizza sauce." },
  { title: "Turkey Cheddar Roll-Ups", ingredients: ["Turkey", "Cheddar", "Tortillas", "Mayo"], steps: "Layer turkey and cheddar, roll tightly, and slice." },
  { title: "Mac & Cheese Lunch Cups", ingredients: ["Macaroni", "Cheese", "Milk", "Butter"], steps: "Cook pasta and stir into a quick cheese sauce." }
];

const dinnerOptions: Recipe[] = [
  { title: "Sheet Pan Chicken Tacos", ingredients: ["Chicken", "Tortillas", "Cheese", "Taco seasoning", "Corn"], steps: "Bake seasoned chicken, warm tortillas, and assemble tacos." },
  { title: "Cheesy Chicken Rice Bake", ingredients: ["Chicken", "Rice", "Cream soup", "Cheese", "Peas"], steps: "Mix ingredients, top with cheese, and bake until bubbly." },
  { title: "Spaghetti Meat Sauce Night", ingredients: ["Spaghetti", "Ground beef", "Marinara", "Parmesan"], steps: "Cook pasta, brown beef, simmer sauce, and serve." },
  { title: "BBQ Chicken Sliders", ingredients: ["Chicken", "BBQ sauce", "Slider buns", "Cheese"], steps: "Mix chicken with sauce, fill buns, and bake until warm." },
  { title: "Chicken Alfredo Pasta", ingredients: ["Pasta", "Chicken", "Alfredo sauce", "Parmesan", "Broccoli"], steps: "Cook pasta, warm sauce and chicken, then toss together." }
];

const recipeBank = { breakfast: breakfastOptions, lunch: lunchOptions, dinner: dinnerOptions };

const startingMeals: MealDay[] = [
  { day: "Monday", breakfast: breakfastOptions[0].title, lunch: lunchOptions[1].title, dinner: dinnerOptions[0].title },
  { day: "Tuesday", breakfast: breakfastOptions[1].title, lunch: lunchOptions[0].title, dinner: dinnerOptions[1].title },
  { day: "Wednesday", breakfast: breakfastOptions[2].title, lunch: lunchOptions[2].title, dinner: dinnerOptions[2].title },
  { day: "Thursday", breakfast: breakfastOptions[3].title, lunch: lunchOptions[3].title, dinner: dinnerOptions[3].title },
  { day: "Friday", breakfast: breakfastOptions[0].title, lunch: lunchOptions[1].title, dinner: dinnerOptions[4].title },
  { day: "Saturday", breakfast: breakfastOptions[1].title, lunch: lunchOptions[0].title, dinner: dinnerOptions[0].title },
  { day: "Sunday", breakfast: breakfastOptions[2].title, lunch: lunchOptions[2].title, dinner: dinnerOptions[1].title }
];

const basePrices: Record<string, number> = {
  Chicken: 12.5,
  Tortillas: 3.25,
  Cheese: 4.5,
  Eggs: 3.75,
  Bread: 2.5,
  Rice: 2.75,
  "Ground beef": 7.5,
  Spaghetti: 2,
  Pasta: 2,
  Potatoes: 4,
  Sausage: 5.5,
  Milk: 3.5,
  Butter: 4,
  Bananas: 1.75,
  Honey: 4.25,
  Oats: 3.25,
  Turkey: 5.5,
  Pepperoni: 4.5,
  Corn: 1.5
};

const storeMultipliers: Record<Store, number> = { Estimated: 1, Walmart: 0.95, Kroger: 1.02, Aldi: 0.88, Costco: 0.82, Manual: 1 };

function findRecipe(title: string, slot?: MealSlot) {
  const all = slot ? recipeBank[slot] : [...breakfastOptions, ...lunchOptions, ...dinnerOptions];
  return all.find((recipe) => recipe.title === title);
}

function money(value: number) {
  return `$${value.toFixed(2)}`;
}

function personEmoji(type: PersonType) {
  if (type === "Adult") return "🧭";
  if (type === "Child") return "⭐";
  if (type === "Pet") return "🐾";
  return "✨";
}

export function HarborWorkspace({ initialTab = "Meals" }: { initialTab?: Tab }) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  const [familyName, setFamilyName] = useState("The Harbor Home");
  const [meals, setMeals] = useState(startingMeals);
  const [checkedGroceries, setCheckedGroceries] = useState<Record<string, boolean>>({});
  const [manualPrices, setManualPrices] = useState<Record<string, string>>({});
  const [store, setStore] = useState<Store>("Estimated");
  const [weeklyBudget, setWeeklyBudget] = useState("150");
  const [taxRate, setTaxRate] = useState("7");
  const [brandPref, setBrandPref] = useState<BrandPref>("Flexible");
  const [couponPref, setCouponPref] = useState<CouponPref>("Ignore Coupons");
  const [events, setEvents] = useState<EventItem[]>([
    { title: "Homework reset", repeat: "Weekly", time: "3:00 PM", day: "Tuesday" },
    { title: "Dinner window", repeat: "Daily", time: "6:00 PM" }
  ]);
  const [people, setPeople] = useState<Person[]>([
    { name: "Parent", type: "Adult", emoji: "🧭", tasks: ["Review grocery list", "Check calendar"] },
    { name: "Kid", type: "Child", emoji: "⭐", tasks: ["Homework", "Backpack by door"] },
    { name: "Buddy", type: "Pet", emoji: "🐾", tasks: ["Food and water"] }
  ]);
  const [newEvent, setNewEvent] = useState<EventItem>({ title: "", repeat: "Once", time: "6:00 PM", date: "" });
  const [newPerson, setNewPerson] = useState<{ name: string; type: PersonType }>({ name: "", type: "Adult" });
  const [selectedRecipe, setSelectedRecipe] = useState<{ slot: MealSlot; title: string } | null>(null);

  const priceMultiplier = useMemo(() => {
    const brand = brandPref === "Cheapest" ? 0.9 : brandPref === "Store Brand" ? 0.94 : brandPref === "Name Brand" ? 1.15 : 1;
    const coupon = couponPref === "Coupons First" ? 0.9 : couponPref === "Use Coupons" ? 0.95 : 1;
    return storeMultipliers[store] * brand * coupon;
  }, [brandPref, couponPref, store]);

  const groceries = useMemo(() => {
    const counts: Record<string, number> = {};
    meals.forEach((meal) => {
      [meal.breakfast, meal.lunch, meal.dinner].forEach((title) => {
        findRecipe(title)?.ingredients.forEach((item) => {
          counts[item] = (counts[item] || 0) + 1;
        });
      });
    });

    return Object.entries(counts).map(([name, count]) => {
      const manual = Number(manualPrices[name]);
      const base = store === "Manual" && manual > 0 ? manual : (basePrices[name] || 3) * priceMultiplier;
      return { name, count, price: base * count, checked: Boolean(checkedGroceries[name]) };
    });
  }, [checkedGroceries, manualPrices, meals, priceMultiplier, store]);

  const subtotal = groceries.reduce((sum, item) => sum + (item.checked ? 0 : item.price), 0);
  const tax = subtotal * (Number(taxRate || 0) / 100);
  const total = subtotal + tax;
  const remainingBudget = Number(weeklyBudget || 0) - total;
  const recipe = selectedRecipe ? findRecipe(selectedRecipe.title, selectedRecipe.slot) : null;

  function updateMeal(day: string, slot: MealSlot, value: string) {
    setMeals(meals.map((meal) => (meal.day === day ? { ...meal, [slot]: value } : meal)));
  }

  function addEvent() {
    if (!newEvent.title.trim()) return;
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", repeat: "Once", time: "6:00 PM", date: "" });
  }

  function addPerson() {
    if (!newPerson.name.trim()) return;
    setPeople([...people, { name: newPerson.name.trim(), type: newPerson.type, emoji: personEmoji(newPerson.type), tasks: [] }]);
    setNewPerson({ name: "", type: "Adult" });
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-family-ink p-6 text-white shadow-sm">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-white/60">Edit Harbor</p>
        <h1 className="mt-2 text-4xl font-black md:text-6xl">{familyName}</h1>
        <p className="mt-3 max-w-2xl text-white/70">Plan the family calendar, meals, groceries, people, chores, and home settings.</p>
        <input value={familyName} onChange={(event) => setFamilyName(event.target.value)} className="mt-5 w-full max-w-md rounded-2xl border border-white/10 bg-white px-4 py-3 font-bold text-family-ink outline-none" />
      </section>

      <nav className="flex flex-wrap gap-2 rounded-3xl bg-white p-2 shadow-sm">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-2xl px-4 py-3 text-sm font-black ${activeTab === tab ? "bg-family-ink text-white" : "bg-family-cloud text-black/65"}`}>
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === "Calendar" && (
        <section className="product-card rounded-3xl p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">Calendar</p>
          <h2 className="mb-4 mt-1 text-2xl font-black">Family events</h2>
          <div className="grid gap-3 md:grid-cols-4">
            <input value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} placeholder="Event name" className="rounded-2xl border border-black/10 bg-white px-4 py-3" />
            <select value={newEvent.repeat} onChange={(e) => setNewEvent({ ...newEvent, repeat: e.target.value as Repeat })} className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold">
              <option>Once</option><option>Daily</option><option>Weekly</option><option>Monthly</option>
            </select>
            <select value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold">
              {times.map((time) => <option key={time}>{time}</option>)}
            </select>
            <button onClick={addEvent} className="rounded-2xl bg-family-ink px-5 py-3 font-bold text-white">Add</button>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {events.map((event, index) => <div key={`${event.title}-${index}`} className="rounded-2xl bg-family-cloud p-4"><div className="font-black">{event.title}</div><div className="text-sm text-black/60">{event.repeat} at {event.time}</div></div>)}
          </div>
        </section>
      )}

      {activeTab === "Meals" && (
        <section className="product-card rounded-3xl p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">Meals</p>
          <h2 className="mb-4 mt-1 text-2xl font-black">Weekly meal editor</h2>
          <div className="grid gap-3 lg:grid-cols-3">
            {meals.map((meal) => <div key={meal.day} className="rounded-2xl bg-white p-4 shadow-sm"><div className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-family-leaf">{meal.day}</div>{(["breakfast", "lunch", "dinner"] as MealSlot[]).map((slot) => <div key={slot} className="mb-3"><label className="mb-1 block text-xs font-black uppercase text-black/45">{slot}</label><select value={meal[slot]} onChange={(e) => updateMeal(meal.day, slot, e.target.value)} className="w-full rounded-xl border border-black/10 bg-family-cloud px-3 py-2 font-semibold">{recipeBank[slot].map((option) => <option key={option.title}>{option.title}</option>)}</select><button onClick={() => setSelectedRecipe({ slot, title: meal[slot] })} className="mt-2 text-sm font-bold text-family-berry">View recipe</button></div>)}</div>)}
          </div>
        </section>
      )}

      {activeTab === "Grocery" && (
        <section className="product-card rounded-3xl p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">Grocery</p>
          <h2 className="mb-4 mt-1 text-2xl font-black">Shopping list from selected meals</h2>
          <div className="mb-4 grid gap-3 md:grid-cols-4">
            <select value={store} onChange={(e) => setStore(e.target.value as Store)} className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold">{stores.map((option) => <option key={option}>{option}</option>)}</select>
            <input value={weeklyBudget} onChange={(e) => setWeeklyBudget(e.target.value)} className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold" />
            <input value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold" />
            <div className={`rounded-2xl p-4 font-black ${remainingBudget < 0 ? "bg-red-100 text-red-800" : "bg-family-cloud text-family-leaf"}`}>{remainingBudget < 0 ? `${money(Math.abs(remainingBudget))} over` : `${money(remainingBudget)} left`}</div>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            <select value={brandPref} onChange={(e) => setBrandPref(e.target.value as BrandPref)} className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold"><option>Flexible</option><option>Cheapest</option><option>Store Brand</option><option>Name Brand</option></select>
            <select value={couponPref} onChange={(e) => setCouponPref(e.target.value as CouponPref)} className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold"><option>Ignore Coupons</option><option>Use Coupons</option><option>Coupons First</option></select>
            <div className="rounded-2xl bg-family-ink px-4 py-3 font-black text-white">Total {money(total)}</div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {groceries.map((item) => <div key={item.name} className="rounded-2xl bg-family-cloud p-3"><button onClick={() => setCheckedGroceries({ ...checkedGroceries, [item.name]: !item.checked })} className="flex w-full items-center justify-between text-left font-semibold"><span>{item.checked ? "✅" : "⬜"} {item.name} {item.count > 1 ? `x${item.count}` : ""}</span><span>{money(item.price)}</span></button>{store === "Manual" && <input value={manualPrices[item.name] || ""} onChange={(e) => setManualPrices({ ...manualPrices, [item.name]: e.target.value })} placeholder="Manual unit price" className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm" />}</div>)}
          </div>
        </section>
      )}

      {activeTab === "Family" && (
        <section className="product-card rounded-3xl p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">Family</p>
          <h2 className="mb-4 mt-1 text-2xl font-black">People, pets, chores, and schedules</h2>
          <div className="mb-5 grid gap-3 md:grid-cols-[1fr_180px_auto]">
            <input value={newPerson.name} onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })} placeholder="Name" className="rounded-2xl border border-black/10 bg-white px-4 py-3" />
            <select value={newPerson.type} onChange={(e) => setNewPerson({ ...newPerson, type: e.target.value as PersonType })} className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold"><option>Adult</option><option>Child</option><option>Pet</option><option>Other</option></select>
            <button onClick={addPerson} className="rounded-2xl bg-family-ink px-5 py-3 font-bold text-white">Add</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">{people.map((person) => <div key={person.name} className="rounded-3xl bg-family-cloud p-4"><div className="text-2xl">{person.emoji}</div><h3 className="mt-2 text-2xl font-black">{person.name}</h3><p className="text-sm font-bold text-black/55">{person.type}</p><div className="mt-4 space-y-2">{person.tasks.map((task) => <div key={task} className="rounded-2xl bg-white p-3 text-sm font-semibold">{task}</div>)}</div></div>)}</div>
        </section>
      )}

      {activeTab === "Settings" && (
        <section className="product-card rounded-3xl p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">Settings</p>
          <h2 className="mb-4 mt-1 text-2xl font-black">Household preferences</h2>
          <div className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-family-cloud p-4"><div className="text-xs font-black uppercase text-black/45">Preferred store</div><div className="font-black">{store}</div></div><div className="rounded-2xl bg-family-cloud p-4"><div className="text-xs font-black uppercase text-black/45">Brand preference</div><div className="font-black">{brandPref}</div></div><div className="rounded-2xl bg-family-cloud p-4"><div className="text-xs font-black uppercase text-black/45">Coupon preference</div><div className="font-black">{couponPref}</div></div></div>
        </section>
      )}

      {recipe && selectedRecipe && (
        <div className="fixed inset-0 z-20 grid place-items-center bg-black/40 p-4">
          <div className="max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-family-berry">{selectedRecipe.slot}</p>
            <h2 className="mt-1 text-3xl font-black">{recipe.title}</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-black/70">{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="mt-4 rounded-2xl bg-family-cloud p-4 font-semibold">{recipe.steps}</p>
            <button onClick={() => setSelectedRecipe(null)} className="mt-5 rounded-2xl bg-family-ink px-5 py-3 font-bold text-white">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
