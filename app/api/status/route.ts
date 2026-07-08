import { NextResponse } from "next/server";

export async function GET() {
  const hasSupabase = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return NextResponse.json({
    product: "Harbor Family Planner Lite",
    dataMode: hasSupabase ? "live-ready" : "starter",
    readyForLiveData: hasSupabase,
    billingEnabled: false,
    aiPlannerEnabled: false
  });
}
