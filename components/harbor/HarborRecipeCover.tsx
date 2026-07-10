import { CakeSlice, Coffee, Cookie, MoonStar, Soup, Utensils } from "lucide-react";

type RecipeCategory = "Breakfast" | "Lunch" | "Dinner" | "Bakery" | "Munchies";

const categoryStyles: Record<RecipeCategory, { gradient: string; accent: string; icon: typeof Utensils }> = {
  Breakfast: {
    gradient: "from-amber-500/30 via-orange-500/15 to-slate-950",
    accent: "text-amber-300 border-amber-300/30 bg-amber-300/10",
    icon: Coffee,
  },
  Lunch: {
    gradient: "from-sky-500/25 via-cyan-500/10 to-slate-950",
    accent: "text-sky-300 border-sky-300/30 bg-sky-300/10",
    icon: Utensils,
  },
  Dinner: {
    gradient: "from-emerald-500/25 via-teal-500/10 to-slate-950",
    accent: "text-emerald-300 border-emerald-300/30 bg-emerald-300/10",
    icon: Soup,
  },
  Bakery: {
    gradient: "from-rose-500/25 via-fuchsia-500/10 to-slate-950",
    accent: "text-rose-300 border-rose-300/30 bg-rose-300/10",
    icon: CakeSlice,
  },
  Munchies: {
    gradient: "from-violet-500/25 via-purple-500/10 to-slate-950",
    accent: "text-violet-300 border-violet-300/30 bg-violet-300/10",
    icon: MoonStar,
  },
};

export default function HarborRecipeCover({
  title,
  category,
  tag,
  edition,
  className = "h-44",
}: {
  title: string;
  category: RecipeCategory;
  tag: string;
  edition: string;
  className?: string;
}) {
  const style = categoryStyles[category];
  const Icon = style.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${style.gradient} ${className}`}>
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10 bg-white/[0.03]" />
      <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full border border-white/10 bg-white/[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_32%)]" />

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <span className={`rounded-lg border px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${style.accent}`}>{tag}</span>
          <span className="rounded-lg border border-white/15 bg-slate-950/65 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-200">{edition}</span>
        </div>

        <div className="flex items-end justify-between gap-5">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">{category}</p>
            <h3 className="harbor-serif mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">{title}</h3>
          </div>
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border ${style.accent}`}>
            <Icon className="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
