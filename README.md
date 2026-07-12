# Harbor Family HQ

A premium dark navy and champagne gold family command center for meals, groceries, schedules, memories, and household rhythm.

Harbor is the public-safe family planner product layer. It is **not** Grace-HQ, not the private Grace source brain, and not an internal command system.

## Current Product

```text
Harbor Family HQ / Harbor Family Planner Lite
```

The production app now lives on `main`. The `Harbor-Family-Planner` branch remains the working app branch.

## What Is Implemented

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Harbor Home dashboard | Implemented |
| `/calendar` | Family calendar view | Implemented |
| `/planner` | Meal planner / recipe browser | Implemented |
| `/grocery` | Grocery list builder | Implemented |
| `/memories` | Memory gallery | Implemented |
| `/api/status` | Starter/live mode status | Implemented |

The previous Superdesign static HTML concepts have been translated into real React/Next pages using the existing app stack.

## Core Features

- Harbor Home with welcome banner, quick actions, today's rhythm, what's next, meal/grocery/memory snapshots
- Calendar with month grid, event color legend, today's agenda, and household availability status
- Meal Planner with recipe cards, search/filter shell, weekly table, ingredients, and chef's tip panel
- Grocery List with categorized items, purchased state styling, estimated total, stock level, add-item panel, and quick suggestion
- Memories with coastal banner, filters, add-memory action, and hover-reveal gallery cards
- Shared Harbor shell for sidebar navigation, mobile header, account panel, faith anchor card, and verse footer

## Local Run

```bash
npm install
npm run dev
```

## Vercel Setup

```text
Repository: wspinyanjr87-lab/Harbor-Public
Production branch: main
Framework: Next.js
Root directory: leave blank
Install command: npm install
Build command: npm run build
Output directory: leave default
```

See `docs/deployment/vercel-production.md` for troubleshooting.
