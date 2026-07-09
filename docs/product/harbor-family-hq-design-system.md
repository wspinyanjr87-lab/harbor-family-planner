# Harbor Family HQ Design System

Status: active design direction for the `meal-planner` branch.

## Purpose

Harbor Family HQ is an elegant family command center for coastal-inspired household planning.

It should feel:

- calm
- premium
- family-centered
- app-ready
- uncluttered
- dark navy with champagne gold warmth

Harbor is not a corporate analytics dashboard. It is a family home base.

## Core Screens

| Screen | Route | Notes |
| --- | --- | --- |
| Harbor Home | `/` | Welcome, quick actions, today's rhythm, what is next |
| Calendar | `/calendar` | Month grid, agenda, family status |
| Meal Planner | `/planner` | Recipe browsing, weekly table, ingredients |
| Grocery List | `/grocery` | Category list, purchased state, add item panel |
| Memories | `/memories` | Gallery cards, date captions, filters |

## Color Palette

| Name | Value | Usage |
| --- | --- | --- |
| Navy Deep | `#020617` | page background |
| Navy Sidebar | `#010411` | sidebar, footer |
| Gold Primary | `#D4AF37` | headings, icons, active states, buttons |
| Gold Soft | `#B5942B` | button hover, secondary accents |
| Text Primary | `#e2e8f0` | body text |
| Text Muted | `#94a3b8` | labels and descriptions |
| Glass Background | `rgba(255,255,255,0.035)` | card surfaces |
| Glass Border | `rgba(212,175,55,0.15)` | card borders |

## Typography

### Display / Heading

```text
Crimson Pro
```

Used for:

- page titles
- Harbor brand text
- section headers
- verse/footer text
- quote cards

### Body / Interface

```text
Plus Jakarta Sans
```

Used for:

- navigation
- body copy
- buttons
- labels
- cards
- form controls

## Shared Components

### `HarborShell`

Path:

```text
components/harbor/HarborShell.tsx
```

Owns:

- fixed desktop sidebar
- mobile top header
- active nav state
- account card
- Anchored in Faith card
- Joshua 24:15 footer

Supported active states:

```ts
"home" | "calendar" | "planner" | "grocery" | "memories"
```

### Global Utilities

Defined in:

```text
app/globals.css
```

| Class | Purpose |
| --- | --- |
| `.harbor-serif` | applies Crimson Pro |
| `.harbor-glass` | glass morphism card styling |
| `.harbor-checkbox` | custom gold checkbox styling |

## Visual Rules

- Use generous spacing and clear hierarchy.
- Use glass cards on dark backgrounds.
- Use gold for important text, icons, active navigation, and primary actions.
- Avoid noisy dashboards and corporate metric overload.
- Avoid bright tropical beach colors.
- Avoid cartoon styling.
- Keep cards rounded, bordered, and soft-shadowed.
- Use coastal imagery only as atmosphere, not clutter.

## Sidebar Navigation

Current app routes:

```text
/          Harbor Home
/calendar  Calendar
/planner   Recipe Planner
/grocery   Grocery List
/memories  Memories
```

The sidebar should use `HarborShell` rather than duplicated page-level markup.

## Footer Verse

Default footer text:

```text
"As for me and my house, we will serve the Lord."
Joshua 24:15
```

Keep it in the shared shell unless a page has a specific reason to override it.

## Implementation Notes

The original Superdesign export referenced static HTML, Tailwind Play CDN, Petite Vue, and Iconify.

Harbor's codebase uses:

- Next.js App Router
- React
- Tailwind CSS build pipeline
- `lucide-react` icons
- Vercel/GitHub Actions build checks

So imported Superdesign concepts should be translated into React components and app routes, not pasted as raw HTML pages.
