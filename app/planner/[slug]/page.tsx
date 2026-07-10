import HarborShell from "@/components/harbor/HarborShell";
import HarborNextStep from "@/components/harbor/HarborNextStep";
import { getRecipeBySlug, recipeSlugs } from "@/lib/recipeDetails";
import { ArrowLeft, Clock, DollarSign, Flame, ListChecks, ShoppingCart, Users, Utensils } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return recipeSlugs.map((slug) => ({ slug }));
}

export default function RecipeDetailPage({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe || !recipe.detail) notFound();

  return (
    <HarborShell active="planner">
      <header className="relative h-72 overflow-hidden border-b border-white/5">
        <img alt={recipe.title} className="h-full w-full object-cover" src={recipe.image} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/35 to-[#020617]/95" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
          <a className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]" href="/planner">
            <ArrowLeft className="h-4 w-4" /> Back to Meal Planner
          </a>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-lg border border-[#D4AF37]/40 bg-slate-950/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">{recipe.category}</span>
            <span className={`rounded-lg border bg-slate-950/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${recipe.edition === "Free" ? "border-emerald-400/40 text-emerald-300" : "border-sky-400/40 text-sky-300"}`}>{recipe.edition}</span>
          </div>
          <h1 className="harbor-serif mt-3 text-5xl font-semibold text-[#D4AF37] lg:text-6xl">{recipe.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-300">Budget-friendly, no onion, no mushrooms, and written for a real family kitchen.</p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8 lg:px-12">
        <section className="grid gap-4 md:grid-cols-4">
          {[
            [Users, recipe.people, "Servings"],
            [Clock, recipe.time, "Time"],
            [Flame, recipe.level, "Difficulty"],
            [DollarSign, recipe.cost, "Cost"]
          ].map(([Icon, value, label]) => {
            const StatIcon = Icon as typeof Users;
            return (
              <article className="harbor-glass rounded-3xl p-5" key={String(label)}>
                <StatIcon className="mb-3 h-5 w-5 text-[#D4AF37]" />
                <p className="text-lg font-bold text-white">{String(value)}</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">{String(label)}</p>
              </article>
            );
          })}
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <section className="harbor-glass rounded-[2rem] p-6">
              <h2 className="harbor-serif mb-5 flex items-center gap-2 text-3xl font-semibold text-[#D4AF37]"><ListChecks className="h-6 w-6" /> Ingredients</h2>
              <ul className="space-y-3">
                {recipe.detail.ingredients.map((ingredient) => (
                  <li className="flex gap-3 border-b border-white/5 pb-3 text-sm leading-6 text-slate-300" key={ingredient}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/10 p-6">
              <h2 className="harbor-serif mb-4 flex items-center gap-2 text-2xl font-semibold text-emerald-300"><ShoppingCart className="h-5 w-5" /> Grocery Notes</h2>
              <ul className="space-y-2 text-sm text-slate-300">
                {recipe.detail.groceryNotes.map((note) => <li key={note}>• {note}</li>)}
              </ul>
              <a className="mt-5 block rounded-2xl bg-[#D4AF37] px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-[#B5942B]" href="/grocery">Open Grocery List</a>
            </section>
          </aside>

          <section className="harbor-glass rounded-[2rem] p-6 lg:p-8">
            <h2 className="harbor-serif mb-6 flex items-center gap-2 text-4xl font-semibold text-[#D4AF37]"><Utensils className="h-7 w-7" /> Step-by-step</h2>
            <div className="space-y-5">
              {recipe.detail.steps.map((step, index) => (
                <article className="rounded-3xl border border-white/5 bg-white/[0.03] p-5" key={step}>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Step {index + 1}</p>
                  <p className="text-base leading-7 text-slate-200">{step}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]/80">Budget Tip</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{recipe.detail.budgetTip}</p>
            </div>
          </section>
        </section>

        <HarborNextStep
          title="Turn this recipe into groceries."
          text="After reviewing ingredients and steps, continue to the grocery list so the meal plan can become a real shopping plan."
          href="/grocery"
          action="Open Grocery List"
        />
      </div>
    </HarborShell>
  );
}
