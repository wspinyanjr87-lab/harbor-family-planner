"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import HarborNextStep from "@/components/harbor/HarborNextStep";
import { groceryCategories } from "@/lib/harborStarterData";
import { getRecipeBySlug } from "@/lib/recipeDetails";
import { Beef, Carrot, Coffee, Milk, Package, Plus, PlusCircle, ShoppingBasket, Trash2 } from "lucide-react";

type GroceryItem = {
  id: string;
  name: string;
  category: string;
  checked: boolean;
  source?: string;
};

type GroceryFilter = "All" | "Purchased" | "Unpurchased";

const storageKey = "harbor-grocery-list-v1";
const categories = groceryCategories.map((category) => category.name);

const categoryIcons = {
  Proteins: Beef,
  Pantry: Package,
  "Frozen / Produce": Carrot,
  Dairy: Milk,
  "Breakfast / Snacks": ShoppingBasket
};

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function starterItems(): GroceryItem[] {
  return groceryCategories.flatMap((category) =>
    category.items.map((item) => ({
      id: `${category.name}-${item.name}`,
      name: item.name,
      category: category.name,
      checked: Boolean(item.checked),
      source: "Starter list"
    }))
  );
}

function chooseCategory(name: string) {
  const lower = name.toLowerCase();
  if (/chicken|beef|turkey|sausage|ham|egg|meat/.test(lower)) return "Proteins";
  if (/milk|cheese|butter|cream|yogurt|ranch/.test(lower)) return "Dairy";
  if (/banana|apple|lettuce|vegetable|broccoli|peas|potato|hash brown/.test(lower)) return "Frozen / Produce";
  if (/chocolate|marshmallow|cracker|popcorn|cereal|peanut butter/.test(lower)) return "Breakfast / Snacks";
  return "Pantry";
}

export default function HarborGroceryList() {
  const searchParams = useSearchParams();
  const recipeSlug = searchParams.get("recipe");
  const [items, setItems] = useState<GroceryItem[]>(starterItems);
  const [filter, setFilter] = useState<GroceryFilter>("All");
  const [draftName, setDraftName] = useState("");
  const [draftCategory, setDraftCategory] = useState(categories[0] ?? "Pantry");
  const [message, setMessage] = useState("Your grocery list is ready.");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setItems(JSON.parse(stored) as GroceryItem[]);
    } catch {
      setMessage("Saved grocery data could not be loaded. Using the starter list.");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (!recipeSlug) return;
    const recipe = getRecipeBySlug(recipeSlug);
    if (!recipe?.detail) return;

    setItems((current) => {
      const existingNames = new Set(current.map((item) => item.name.trim().toLowerCase()));
      const additions = recipe.detail.groceryNotes
        .filter((name) => !existingNames.has(name.trim().toLowerCase()))
        .map((name) => ({
          id: makeId(),
          name,
          category: chooseCategory(name),
          checked: false,
          source: recipe.title
        }));

      if (!additions.length) return current;
      return [...current, ...additions];
    });

    setMessage(`${recipe.title} ingredients were added to the list.`);
  }, [recipeSlug]);

  const visibleItems = useMemo(() => items.filter((item) => {
    if (filter === "Purchased") return item.checked;
    if (filter === "Unpurchased") return !item.checked;
    return true;
  }), [filter, items]);

  const purchasedItems = items.filter((item) => item.checked).length;

  function toggleItem(id: string) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
    setMessage("Item removed from the list.");
  }

  function addItem(name = draftName, category = draftCategory, source = "Manual item") {
    const cleanName = name.trim();
    if (!cleanName) {
      setMessage("Enter an item name first.");
      return;
    }

    const duplicate = items.some((item) => item.name.trim().toLowerCase() === cleanName.toLowerCase());
    if (duplicate) {
      setMessage(`${cleanName} is already on the list.`);
      return;
    }

    setItems((current) => [...current, { id: makeId(), name: cleanName, category, checked: false, source }]);
    setDraftName("");
    setMessage(`${cleanName} added to the list.`);
  }

  function resetList() {
    setItems(starterItems());
    setFilter("All");
    setMessage("Starter grocery list restored.");
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8 lg:px-12">
      <header className="flex flex-col gap-6 border-b border-white/5 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#D4AF37]/80">Free / Standard Grocery List</p>
          <h1 className="harbor-serif mt-2 text-5xl font-semibold text-[#D4AF37] sm:text-6xl">Grocery List</h1>
          <p className="mt-2 text-lg font-light text-slate-400">Check items, add groceries, remove extras, and bring recipe ingredients into one list.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="mb-1 text-xs uppercase tracking-widest text-slate-500">Purchased</p>
            <p className="harbor-serif text-3xl font-semibold text-[#D4AF37]">{purchasedItems} of {items.length}</p>
          </div>
        </div>
      </header>

      <section className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-4 text-sm text-slate-300">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>{message}</span>
          <button className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white" onClick={resetList} type="button">Reset starter list</button>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-10">
          <div className="flex w-fit items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
            {(["All", "Purchased", "Unpurchased"] as GroceryFilter[]).map((option) => (
              <button className={`rounded-lg px-4 py-2 text-sm font-semibold ${filter === option ? "bg-[#D4AF37] text-slate-950" : "text-slate-400 hover:text-white"}`} key={option} onClick={() => setFilter(option)} type="button">{option}</button>
            ))}
          </div>

          {categories.map((category) => {
            const categoryItems = visibleItems.filter((item) => item.category === category);
            if (!categoryItems.length) return null;
            const Icon = categoryIcons[category as keyof typeof categoryIcons] ?? ShoppingBasket;
            return (
              <section key={category}>
                <h2 className="harbor-serif mb-4 flex items-center gap-2 text-2xl font-semibold text-[#D4AF37]"><Icon className="h-5 w-5" /> {category}</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {categoryItems.map((item) => (
                    <article className="harbor-glass group flex items-center justify-between rounded-2xl p-4" key={item.id}>
                      <label className="flex min-w-0 cursor-pointer items-center gap-4">
                        <input checked={item.checked} className="harbor-checkbox" onChange={() => toggleItem(item.id)} type="checkbox" />
                        <span className="min-w-0">
                          <span className={`block truncate ${item.checked ? "text-slate-400 line-through decoration-[#D4AF37]" : "text-white"}`}>{item.name}</span>
                          {item.source ? <span className="mt-1 block truncate text-[10px] uppercase tracking-widest text-slate-600">{item.source}</span> : null}
                        </span>
                      </label>
                      <button aria-label={`Remove ${item.name}`} className="ml-3 shrink-0 text-slate-600 transition hover:text-red-300" onClick={() => removeItem(item.id)} type="button"><Trash2 className="h-4 w-4" /></button>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          {!visibleItems.length ? <div className="harbor-glass rounded-3xl p-10 text-center text-slate-400">No grocery items match this filter.</div> : null}
        </div>

        <aside className="space-y-6">
          <section className="harbor-glass rounded-3xl border-l-4 border-l-[#D4AF37] p-6">
            <h2 className="harbor-serif mb-5 text-2xl font-semibold text-[#D4AF37]">Add New Item</h2>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-widest text-slate-500">Item Name</span>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]" onChange={(event) => setDraftName(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") addItem(); }} placeholder="e.g. Avocado" type="text" value={draftName} />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-widest text-slate-500">Category</span>
                <select className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]" onChange={(event) => setDraftCategory(event.target.value)} value={draftCategory}>
                  {categories.map((category) => <option key={category}>{category}</option>)}
                </select>
              </label>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] py-3 font-bold text-slate-950 transition hover:bg-[#B5942B]" onClick={() => addItem()} type="button"><Plus className="h-4 w-4" /> Add to List</button>
            </div>
          </section>

          <section className="harbor-glass rounded-3xl p-6">
            <h2 className="harbor-serif mb-4 text-2xl font-semibold text-white">Budget Suggestion</h2>
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3">
              <div className="flex items-center gap-3"><Coffee className="h-5 w-5 text-[#D4AF37]" /><span className="text-sm text-slate-300">Oatmeal or cereal</span></div>
              <button aria-label="Add oatmeal or cereal" className="text-[#D4AF37] transition hover:scale-110" onClick={() => addItem("Oatmeal or cereal", "Breakfast / Snacks", "Budget suggestion")} type="button"><PlusCircle className="h-5 w-5" /></button>
            </div>
            <p className="mt-4 text-center text-xs italic text-slate-500">This list is saved on the current device while household grocery sync is being built.</p>
          </section>

          <a className="block rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-5 text-center text-sm font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-slate-950" href="/planner">Back to Budget Meals</a>
        </aside>
      </section>

      <HarborNextStep title="Put the week on the calendar." text="After meals and groceries are planned, use the calendar for shopping, prep, pickups, and family time." href="/calendar" action="Continue to Calendar" />
    </div>
  );
}
