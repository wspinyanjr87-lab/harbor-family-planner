import HarborShell from "@/components/harbor/HarborShell";
import { PlusCircle } from "lucide-react";

const memories = [
  { title: "First Sunset Dinner", date: "Oct 12, 2023", detail: "On the east terrace with the whole family", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop" },
  { title: "Morning Shell Hunting", date: "Sep 28, 2023", detail: "Lily found her first conch shell today!", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop" },
  { title: "The Harbor Mist Outing", date: "Aug 15, 2023", detail: "Calm waters and deep sea fishing", image: "https://images.unsplash.com/photo-1542601039-29ad9e9248d2?q=80&w=1000&auto=format&fit=crop" },
  { title: "Independence Day Prep", date: "July 04, 2023", detail: "Too much flour, not enough pie crust", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop" },
  { title: "Solstice Picnic", date: "June 21, 2023", detail: "Under the shadow of the old light", image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1000&auto=format&fit=crop" },
  { title: "Firepit Stories", date: "May 10, 2023", detail: "Gramps telling the one about the whale again", image: "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?q=80&w=1000&auto=format&fit=crop" }
];

export default function MemoriesPage() {
  return (
    <HarborShell active="memories">
      <header className="relative h-52 overflow-hidden">
        <img alt="Coastal view" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/35 to-[#020617]/95" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
          <h1 className="harbor-serif text-6xl font-semibold text-[#D4AF37]">Memory Gallery</h1>
          <p className="mt-2 text-lg font-light text-slate-300">Cherish moments from our harbor home</p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-8 lg:px-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {['All Moments', 'Recent', 'Favorites'].map((filter, index) => (
              <button className={`harbor-glass rounded-full px-5 py-2 text-sm font-semibold ${index === 0 ? "border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]" : "text-slate-400 hover:text-[#D4AF37]"}`} key={filter} type="button">{filter}</button>
            ))}
          </div>
          <button className="flex items-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-slate-950 transition hover:bg-[#B5942B]" type="button"><PlusCircle className="h-5 w-5" /> Add Memory</button>
        </div>

        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {memories.map((memory) => (
            <article className="harbor-glass group relative h-96 overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40" key={memory.title}>
              <img alt={memory.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={memory.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">{memory.date}</p>
                <h2 className="harbor-serif text-2xl font-semibold text-white">{memory.title}</h2>
                <p className="mt-1 text-sm text-slate-300">{memory.detail}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="flex justify-center pt-6">
          <button className="harbor-glass rounded-2xl px-10 py-4 font-semibold text-slate-300 transition hover:text-[#D4AF37]" type="button">View All Historical Archives</button>
        </div>
      </div>
    </HarborShell>
  );
}
