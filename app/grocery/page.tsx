import { Suspense } from "react";
import HarborShell from "@/components/harbor/HarborShell";
import HarborGroceryList from "@/components/harbor/HarborGroceryList";

export default function GroceryPage() {
  return (
    <HarborShell active="grocery">
      <Suspense fallback={<div className="px-6 py-12 text-center text-slate-400">Loading grocery list...</div>}>
        <HarborGroceryList />
      </Suspense>
    </HarborShell>
  );
}
