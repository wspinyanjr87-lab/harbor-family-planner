# Harbor Family Planner

Harbor Family Planner is an independent Harbor product repository for family meal planning, grocery planning, recipes, calendar rhythm, memories, and household setup.

This repository owns its own product code, deployment boundary, data boundary, workflow, and release cycle.

## Portfolio Position

```text
Watcher-Research -> Grace-HQ -> Harbor-HQ -> Harbor-Family-Planner
```

- `Harbor-HQ` is the Harbor business portfolio headquarters.
- `Harbor-Family-Planner` is the standalone family planner product.
- Private Grace data, family memory, credentials, and internal automation do not belong in this repository.

## What Is Implemented

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Harbor Home dashboard | Implemented |
| `/calendar` | Family calendar view | Implemented |
| `/planner` | Meal planner / recipe browser | Implemented |
| `/grocery` | Grocery list builder | Implemented |
| `/memories` | Memory gallery | Implemented |
| `/settings` | Setup Center | Implemented |
| `/api/status` | Starter/live mode status | Implemented |
| `/api/setup` | Setup save/load API | Implemented |

## Local Run

```bash
npm install
npm run dev
```

## Build Check

```bash
npm install
npm run build
```

## Deployment Boundary

The Vercel project for this product should connect to:

```text
Repository: wspinyanjr87-lab/Harbor-Family-Planner
Branch: main
Framework: Next.js
Install command: npm install
Build command: npm run build
Output directory: default
```

## Safety

- Do not add Grace-HQ private source data.
- Do not add Watcher-Research scouting data.
- Do not commit credentials, API keys, Supabase service keys, Stripe keys, OpenAI keys, family memory, or private browser data.
- Keep product work public-safe and product-owned.

