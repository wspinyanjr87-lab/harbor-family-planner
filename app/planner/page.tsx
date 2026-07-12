"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import HarborShell from "@/components/harbor/HarborShell";
import HarborNextStep from "@/components/harbor/HarborNextStep";
import HarborCustomRecipes from "@/components/harbor/HarborCustomRecipes";
import { useStarterRecipes } from "@/hooks/useStarterRecipes";
import { starterRecipeCategories, type StarterRecipeCategory } from "@/lib/starterRecipes";
import { BookOpen, CalendarDays, Clock, DollarSign, Flame, Loader2, Plus, Search, ShoppingBasket, Users } from "lucide-react";

type RecipeFilter = "All" | StarterRecipeCategory;
const filters: RecipeFilter[] = ["All", ...starterRecipeCategories];

export default function PlannerPage() {
  const { recipes, loading, error, usingFallback } = useStarterRecipes();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<RecipeFilter>("All");

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const matchesCategory = activeFilter === "All" || recipe.category === activeFilter;
      const searchText = [recipe.title, recipe.category, recipe.description, recipe.difficulty, recipe.budgetLevel, ...recipe.tags]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!normalizedQuery || searchText.includes(normalizedQuery));
    });
  }, [activeFilter, query, recipes]);

  return (
    <HarborShell active="planner">
      <header className="relative h-52 overflow-hidden">
        <img alt="Warm family kitchen" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2000&auto=format&fit=crop" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/35 to-[#020617]/95" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]/80">Harbor Family Kitchen</p>
          <h1 className="harbor-serif mt-2 text-5xl font-semibold text-[#D4AF37]">Meal Planner</h1>
          <p className="mt-2 max-w-3xl text-slate-300">Choose a family-friendly recipe, send its ingredients to groceries, and shape the week around meals everyone can count on.</p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8 lg:px-10">
        <section className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-[#D4AF37]/5 p-6 lg:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">Everything families need to start</p>
          <h2 className="harbor-serif mt-2 text-3xl font-semibold text-white">Your free Harbor kitchen</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">Browse Harbor recipes, add unlimited personal recipes, send ingredients straight to groceries, and build a practical weekly family plan—all in one warm, uncluttered workspace.</p>
          <div className="mt-5 grid gap-3 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [BookOpen, "Browse Harbor recipes"],
              [Plus, "Add personal recipes"],
              [ShoppingBasket, "Send ingredients to groceries"],
              [CalendarDays, "Build the weekly plan"],
            ].map(([Icon, label]) => {
              const ItemIcon = Icon as typeof BookOpen;
              return <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-3" key={String(label)}><ItemIcon className="h-4 w-4 text-[#D4AF37]" />{String(label)}</div>;
            })}
          </div>
        </section>

        <HarborCustomRecipes />

        <section className="space-y-6">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input className="w-full rounded-2xl border border-[#D4AF37]/20 bg-slate-950/60 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-[#D4AF37]" onChange={(event) => setQuery(event.target.value)} placeholder="Search Harbor recipes..." type="search" value={query} />
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest ${activeFilter === filter ? "bg-[#D4AF37] text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`} key={filter} onClick={() => setActiveFilter(filter)} type="button">{filter}</button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]/80">Harbor Recipe Library</p>
              <h2 className="harbor-serif mt-1 text-3xl font-semibold text-white">Family-tested starting points</h2>
            </div>
            {!loading ? <p className="text-sm text-slate-400">Showing <span className="font-bold text-[#D4AF37]">{filteredRecipes.length}</span> recipes</p> : null}
          </div>

          {error ? <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 px-5 py-4 text-sm text-amber-100">{error}{usingFallback ? " Changes made in Harbor may take a moment to appear." : ""}</div> : null}

          {loading ? (
            <div className="harbor-glass flex items-center justify-center gap-3 rounded-3xl p-12 text-slate-300"><Loader2 className="h-5 w-5 animate-spin text-[#D4AF37]" /> Loading Harbor recipes...</div>
          ) : !recipes.length ? (
            <div className="harbor-glass rounded-3xl p-10 text-center"><h3 className="harbor-serif text-3xl text-white">The recipe shelf is being stocked.</h3><p className="mt-2 text-slate-400">Please check back shortly.</p></div>
          ) : filteredRecipes.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredRecipes.map((recipe) => (
                <article className="harbor-glass group overflow-hidden rounded-3xl" key={recipe.id}>
                  <a className="block" href={`/planner/${recipe.slug}`}>
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      {recipe.imageUrl ? <Image alt={recipe.title} className="object-cover transition duration-500 group-hover:scale-105" fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw" src={recipe.imageUrl} /> : <div className="grid h-full place-items-center text-[#D4AF37]/60"><BookOpen className="h-10 w-10" /></div>}
                      <span className="absolute left-3 top-3 rounded-lg border border-[#D4AF37]/40 bg-slate-950/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">{recipe.category}</span>
                    </div>
                  </a>
                  <div className="p-5">
                    <a href={`/planner/${recipe.slug}`}><h3 className="harbor-serif text-2xl font-semibold text-white transition hover:text-[#D4AF37]">{recipe.title}</h3></a>
                    <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{recipe.description}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {recipe.servings} servings</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {recipe.totalMinutes} min</span>
                      <span className="flex items-center gap-1.5"><Flame className="h-3.5 w-3.5" /> {recipe.difficulty}</span>
                      <span className="flex items-center gap-1.5 text-emerald-300"><DollarSign className="h-3.5 w-3.5" /> {recipe.budgetLevel}</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/5 pt-4">
                      <a className="text-xs font-bold text-[#D4AF37] hover:text-white" href={`/planner/${recipe.slug}`}>View recipe · {recipe.ingredients.length} ingredients</a>
                      <a aria-label={`Add ${recipe.title} ingredients to grocery list`} className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-3 py-2 text-xs font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-slate-950" href={`/grocery?recipe=${recipe.slug}`}><Plus className="h-4 w-4" /> Groceries</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="harbor-glass rounded-3xl p-10 text-center"><h3 className="harbor-serif text-3xl text-white">No recipes found.</h3><p className="mt-2 text-slate-400">Try another search or category.</p><button className="mt-4 text-xs font-bold uppercase tracking-widest text-[#D4AF37]" onClick={() => { setQuery(""); setActiveFilter("All"); }} type="button">Clear filters</button></div>
          )}
        </section>

        <HarborNextStep title="Turn meals into groceries." text="Choose a recipe, review its steps, and add every ingredient to the family list." href="/grocery" action="Continue to Grocery List" />
      </div>
    </HarborShell>
  );
}
