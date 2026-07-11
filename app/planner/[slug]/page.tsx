import HarborShell from "@/components/harbor/HarborShell";
import HarborNextStep from "@/components/harbor/HarborNextStep";
import {
  fallbackStarterRecipes,
  fetchPublishedStarterRecipeBySlug,
  fetchPublishedStarterRecipes,
  formatIngredient,
  getFallbackStarterRecipe,
  type HarborStarterRecipe,
} from "@/lib/starterRecipes";
import { ArrowLeft, Clock, DollarSign, Flame, ListChecks, ShoppingCart, Tag, Users, Utensils } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const recipes = await fetchPublishedStarterRecipes();
    return recipes.map((recipe) => ({ slug: recipe.slug }));
  } catch {
    return fallbackStarterRecipes.map((recipe) => ({ slug: recipe.slug }));
  }
}

async function loadRecipe(slug: string): Promise<HarborStarterRecipe | null> {
  try {
    return await fetchPublishedStarterRecipeBySlug(slug);
  } catch {
    return getFallbackStarterRecipe(slug);
  }
}

export default async function RecipeDetailPage({ params }: { params: { slug: string } }) {
  const recipe = await loadRecipe(params.slug);
  if (!recipe) notFound();

  return (
    <HarborShell active="planner">
      <header className="relative h-80 overflow-hidden border-b border-white/5">
        {recipe.imageUrl ? <img alt={recipe.title} className="h-full w-full object-cover" src={recipe.imageUrl} /> : <div className="h-full bg-gradient-to-br from-slate-900 to-[#D4AF37]/10" />}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/25 via-[#020617]/55 to-[#020617]" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
          <a className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]" href="/planner"><ArrowLeft className="h-4 w-4" /> Back to Meal Planner</a>
          <span className="w-fit rounded-lg border border-[#D4AF37]/40 bg-slate-950/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">{recipe.category}</span>
          <h1 className="harbor-serif mt-3 text-5xl font-semibold text-[#D4AF37] lg:text-6xl">{recipe.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-200">{recipe.description}</p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8 lg:px-12">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {[
            [Users, `${recipe.servings}`, "Servings"],
            [Clock, `${recipe.prepMinutes} min`, "Prep"],
            [Clock, `${recipe.cookMinutes} min`, "Cook"],
            [Clock, `${recipe.totalMinutes} min`, "Total"],
            [Flame, recipe.difficulty, "Difficulty"],
            [DollarSign, recipe.budgetLevel, "Budget"],
          ].map(([Icon, value, label]) => {
            const StatIcon = Icon as typeof Users;
            return <article className="harbor-glass rounded-3xl p-5" key={String(label)}><StatIcon className="mb-3 h-5 w-5 text-[#D4AF37]" /><p className="text-lg font-bold text-white">{String(value)}</p><p className="text-xs uppercase tracking-widest text-slate-500">{String(label)}</p></article>;
          })}
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6">
            <section className="harbor-glass rounded-[2rem] p-6">
              <h2 className="harbor-serif mb-5 flex items-center gap-2 text-3xl font-semibold text-[#D4AF37]"><ListChecks className="h-6 w-6" /> Ingredients</h2>
              {recipe.ingredients.length ? <ul className="space-y-3">{recipe.ingredients.map((ingredient, index) => <li className="flex gap-3 border-b border-white/5 pb-3 text-sm leading-6 text-slate-300" key={`${ingredient.name}-${index}`}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />{formatIngredient(ingredient)}</li>)}</ul> : <p className="text-sm text-slate-400">No ingredients have been added yet.</p>}
              <a className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-[#B5942B]" href={`/grocery?recipe=${recipe.slug}`}><ShoppingCart className="h-4 w-4" /> Add Ingredients to Grocery List</a>
            </section>

            {recipe.tags.length ? <section className="rounded-[2rem] border border-[#D4AF37]/15 bg-[#D4AF37]/5 p-6"><h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]"><Tag className="h-4 w-4" /> Recipe tags</h2><div className="flex flex-wrap gap-2">{recipe.tags.map((tag) => <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300" key={tag}>{tag}</span>)}</div></section> : null}
          </aside>

          <section className="harbor-glass rounded-[2rem] p-6 lg:p-8">
            <h2 className="harbor-serif mb-6 flex items-center gap-2 text-3xl font-semibold text-[#D4AF37]"><Utensils className="h-6 w-6" /> Directions</h2>
            {recipe.steps.length ? <ol className="space-y-6">{recipe.steps.map((step, index) => <li className="flex gap-4" key={`${index}-${step}`}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-sm font-bold text-[#D4AF37]">{index + 1}</span><p className="pt-1 text-sm leading-7 text-slate-300">{step}</p></li>)}</ol> : <p className="text-sm text-slate-400">Directions are being prepared.</p>}
          </section>
        </section>

        <HarborNextStep title="Bring this recipe to the store." text="Send the structured ingredients to Harbor's local grocery list, then check them off as you shop." href={`/grocery?recipe=${recipe.slug}`} action="Add Ingredients to Grocery List" />
      </div>
    </HarborShell>
  );
}
