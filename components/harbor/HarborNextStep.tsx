import { ArrowRight } from "lucide-react";

export default function HarborNextStep({
  eyebrow = "Next Step",
  title,
  text,
  href,
  action
}: {
  eyebrow?: string;
  title: string;
  text: string;
  href: string;
  action: string;
}) {
  return (
    <section className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-5 lg:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4AF37]/80">{eyebrow}</p>
          <h2 className="harbor-serif mt-2 text-3xl font-semibold text-[#D4AF37]">{title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">{text}</p>
        </div>
        <a className="flex items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-[#B5942B]" href={href}>
          {action}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
