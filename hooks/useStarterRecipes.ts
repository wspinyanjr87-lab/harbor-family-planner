"use client";

import { useEffect, useState } from "react";
import { fallbackStarterRecipes, fetchPublishedStarterRecipes, type HarborStarterRecipe } from "@/lib/starterRecipes";

type StarterRecipeState = {
  recipes: HarborStarterRecipe[];
  loading: boolean;
  error: string | null;
  usingFallback: boolean;
};

export function useStarterRecipes(): StarterRecipeState {
  const [state, setState] = useState<StarterRecipeState>({ recipes: [], loading: true, error: null, usingFallback: false });

  useEffect(() => {
    let active = true;

    async function loadRecipes() {
      try {
        const recipes = await fetchPublishedStarterRecipes();
        if (active) setState({ recipes, loading: false, error: null, usingFallback: false });
      } catch {
        if (active) {
          setState({
            recipes: fallbackStarterRecipes,
            loading: false,
            error: "Live recipes are temporarily unavailable. Showing Harbor's saved starter collection.",
            usingFallback: true,
          });
        }
      }
    }

    void loadRecipes();
    return () => { active = false; };
  }, []);

  return state;
}
