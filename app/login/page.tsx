import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-family-cream p-5">
      <section className="product-card w-full max-w-md rounded-[2rem] p-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-family-berry">Harbor Login</p>
        <h1 className="mt-2 text-4xl font-black">Demo shell</h1>
        <p className="mt-3 text-black/65">Auth is parked until the Harbor Supabase project is connected.</p>
        <Link href="/sample" className="mt-6 inline-block rounded-2xl bg-family-ink px-5 py-3 font-bold text-white">Continue sample</Link>
      </section>
    </main>
  );
}
