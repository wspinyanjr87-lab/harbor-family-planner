export type StarterRecipe = {
  title: string;
  image: string;
  people: string;
  time: string;
  level: string;
  ingredients: string;
  cost: string;
  tag: string;
  featured?: boolean;
};

export const budgetStarterRecipes: StarterRecipe[] = [
  {
    title: "Cheesy Chicken Rice Bake",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=900&auto=format&fit=crop",
    people: "6 servings",
    time: "40m",
    level: "Easy",
    ingredients: "8 ingredients",
    cost: "Budget",
    tag: "Family Dinner",
    featured: true
  },
  {
    title: "Beefy Bean Taco Skillet",
    image: "https://images.unsplash.com/photo-1565299585323-38174c4a6471?q=80&w=900&auto=format&fit=crop",
    people: "6 servings",
    time: "25m",
    level: "Easy",
    ingredients: "9 ingredients",
    cost: "Budget",
    tag: "One Pan"
  },
  {
    title: "Creamy Garlic Pasta with Peas",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop",
    people: "5 servings",
    time: "20m",
    level: "Easy",
    ingredients: "7 ingredients",
    cost: "Low Cost",
    tag: "Quick Fix"
  },
  {
    title: "Sheet Pan Sausage Potatoes",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=900&auto=format&fit=crop",
    people: "5 servings",
    time: "35m",
    level: "Easy",
    ingredients: "6 ingredients",
    cost: "Budget",
    tag: "Sheet Pan"
  },
  {
    title: "Breakfast-for-Dinner Egg Bake",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=900&auto=format&fit=crop",
    people: "6 servings",
    time: "35m",
    level: "Easy",
    ingredients: "7 ingredients",
    cost: "Low Cost",
    tag: "Protein"
  },
  {
    title: "Chicken Noodle Soup Pot",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=900&auto=format&fit=crop",
    people: "6 servings",
    time: "45m",
    level: "Easy",
    ingredients: "9 ingredients",
    cost: "Budget",
    tag: "Comfort"
  },
  {
    title: "Loaded Baked Potato Night",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=900&auto=format&fit=crop",
    people: "5 servings",
    time: "50m",
    level: "Easy",
    ingredients: "8 ingredients",
    cost: "Low Cost",
    tag: "Build Your Own"
  },
  {
    title: "BBQ Chicken Quesadillas",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=900&auto=format&fit=crop",
    people: "4 servings",
    time: "20m",
    level: "Easy",
    ingredients: "6 ingredients",
    cost: "Budget",
    tag: "Quick Fix"
  }
];

export const weeklyBudgetMeals = [
  { day: "Mon", meal: "Cheesy Chicken Rice Bake", type: "Dinner" },
  { day: "Tue", meal: "Beefy Bean Taco Skillet", type: "Dinner" },
  { day: "Wed", meal: "Creamy Garlic Pasta with Peas", type: "Dinner" },
  { day: "Thu", meal: "Sheet Pan Sausage Potatoes", type: "Dinner" },
  { day: "Fri", meal: "Breakfast-for-Dinner Egg Bake", type: "Dinner" },
  { day: "Sat", meal: "Leftover / Snack Tray Night", type: "Flexible" },
  { day: "Sun", meal: "Chicken Noodle Soup Pot", type: "Dinner" }
];

export const featuredBudgetIngredients = [
  ["Chicken thighs or shredded chicken", "2 lb"],
  ["White rice", "2 cups"],
  ["Frozen broccoli or mixed veg", "1 bag"],
  ["Cream soup or broth base", "1 can"],
  ["Shredded cheese", "2 cups"],
  ["Garlic powder, paprika, salt, pepper", "pantry"]
];

export const groceryCategories = [
  {
    name: "Proteins",
    items: [
      { name: "Chicken thighs or breasts (4 lb)", checked: false },
      { name: "Ground beef or turkey (2 lb)", checked: false },
      { name: "Smoked sausage (1 pack)", checked: false },
      { name: "Eggs (2 dozen)", checked: true }
    ]
  },
  {
    name: "Pantry",
    items: [
      { name: "White rice (5 lb bag)", checked: false },
      { name: "Pasta (2 boxes)", checked: false },
      { name: "Tortillas", checked: false },
      { name: "Canned beans (4 cans)", checked: false },
      { name: "Cream soup or broth base", checked: false },
      { name: "Potatoes (5 lb bag)", checked: false }
    ]
  },
  {
    name: "Frozen / Produce",
    items: [
      { name: "Frozen broccoli or mixed vegetables", checked: false },
      { name: "Frozen peas", checked: false },
      { name: "Bagged salad or lettuce", checked: false },
      { name: "Bananas or apples", checked: true }
    ]
  },
  {
    name: "Dairy",
    items: [
      { name: "Shredded cheese (large bag)", checked: false },
      { name: "Milk", checked: false },
      { name: "Sour cream or Greek yogurt", checked: false },
      { name: "Butter", checked: true }
    ]
  },
  {
    name: "Breakfast / Snacks",
    items: [
      { name: "Cereal or oatmeal", checked: false },
      { name: "Peanut butter", checked: false },
      { name: "Bread", checked: false },
      { name: "Crackers or popcorn", checked: false }
    ]
  }
];

export const calendarEventsByDay: Record<string, { label: string; tone: "gold" | "sky" | "emerald" | "purple" }[]> = {
  "2": [{ label: "Meal plan", tone: "gold" }],
  "4": [{ label: "Practice", tone: "sky" }],
  "7": [{ label: "Setup night", tone: "gold" }],
  "9": [{ label: "Grocery run", tone: "emerald" }],
  "11": [{ label: "School pickup", tone: "sky" }],
  "14": [{ label: "Family dinner", tone: "gold" }],
  "17": [{ label: "Budget check", tone: "emerald" }],
  "20": [{ label: "Prep lunches", tone: "purple" }],
  "23": [{ label: "Restock pantry", tone: "emerald" }],
  "26": [{ label: "Memory night", tone: "purple" }],
  "29": [{ label: "Plan next week", tone: "gold" }]
};
