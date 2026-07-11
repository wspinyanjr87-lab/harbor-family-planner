export const recipeCategories = ["Breakfast", "Lunch", "Dinner", "Bakery", "Munchies"] as const;
export const groceryCategories = ["Produce", "Meat & Protein", "Dairy", "Pantry", "Frozen", "Bakery", "Snacks", "Other"] as const;
export const recipeDifficulties = ["Easy", "Medium", "Advanced"] as const;
export const recipeBudgetLevels = ["$", "$$", "$$$"] as const;

export type RecipeCategory = (typeof recipeCategories)[number];
export type GroceryCategory = (typeof groceryCategories)[number];
export type RecipeDifficulty = (typeof recipeDifficulties)[number];
export type RecipeBudgetLevel = (typeof recipeBudgetLevels)[number];

export type HarborIngredient = {
  name: string;
  quantity: number | null;
  unit: string | null;
  groceryCategory: GroceryCategory;
  optional?: boolean;
  note?: string;
};

export type HarborRecipe = {
  title: string;
  slug: string;
  category: RecipeCategory;
  description: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  difficulty: RecipeDifficulty;
  budgetLevel: RecipeBudgetLevel;
  ingredients: HarborIngredient[];
  steps: string[];
  tags: string[];
  imageUrl: string | null;
  isPublished: boolean;
  sortOrder: number;
};

export type RecipeValidationIssue = {
  path: string;
  message: string;
};

export function slugifyRecipeTitle(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function validateRecipe(input: HarborRecipe): RecipeValidationIssue[] {
  const issues: RecipeValidationIssue[] = [];

  if (!input.title.trim()) issues.push({ path: "title", message: "Recipe title is required." });
  if (!input.slug.trim()) issues.push({ path: "slug", message: "Recipe slug is required." });
  if (!recipeCategories.includes(input.category)) issues.push({ path: "category", message: "Recipe category is invalid." });
  if (!input.description.trim()) issues.push({ path: "description", message: "Recipe description is required." });
  if (!Number.isInteger(input.servings) || input.servings < 1) issues.push({ path: "servings", message: "Servings must be a positive integer." });
  if (!Number.isInteger(input.prepMinutes) || input.prepMinutes < 0) issues.push({ path: "prepMinutes", message: "Prep minutes must be zero or greater." });
  if (!Number.isInteger(input.cookMinutes) || input.cookMinutes < 0) issues.push({ path: "cookMinutes", message: "Cook minutes must be zero or greater." });
  if (!recipeDifficulties.includes(input.difficulty)) issues.push({ path: "difficulty", message: "Difficulty is invalid." });
  if (!recipeBudgetLevels.includes(input.budgetLevel)) issues.push({ path: "budgetLevel", message: "Budget level is invalid." });
  if (!input.ingredients.length) issues.push({ path: "ingredients", message: "At least one ingredient is required." });
  if (!input.steps.length) issues.push({ path: "steps", message: "At least one cooking step is required." });

  input.ingredients.forEach((ingredient, index) => {
    if (!ingredient.name.trim()) issues.push({ path: `ingredients.${index}.name`, message: "Ingredient name is required." });
    if (ingredient.quantity !== null && (!Number.isFinite(ingredient.quantity) || ingredient.quantity <= 0)) {
      issues.push({ path: `ingredients.${index}.quantity`, message: "Ingredient quantity must be positive or null." });
    }
    if (!groceryCategories.includes(ingredient.groceryCategory)) {
      issues.push({ path: `ingredients.${index}.groceryCategory`, message: "Grocery category is invalid." });
    }
  });

  input.steps.forEach((step, index) => {
    if (!step.trim()) issues.push({ path: `steps.${index}`, message: "Cooking steps cannot be empty." });
  });

  return issues;
}
