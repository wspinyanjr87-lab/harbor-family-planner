# Contributing to Harbor Public

Harbor Public is the public-safe product layer for Harbor Family Planner / Harbor Family HQ.

## Prime Rule

Only public-safe Harbor product work belongs here.

Do not commit:

- private Grace-HQ data
- private keys or `.env` files
- internal command dashboards
- personal family source material that does not belong in a public product repo
- screenshots/assets that expose private information

## Current Working Branch

```text
meal-planner
```

This branch carries the current Harbor Family HQ dashboard and planner work.

## Local Setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build Before Push

```bash
npm run build
```

GitHub Actions also runs the Harbor build check after pushes.

## UI Direction

Harbor should feel like:

- dark navy family command center
- champagne gold accents
- calm coastal home base
- premium but not corporate
- clean and simple enough for a normal family to use

Use the design system here:

```text
docs/product/harbor-family-hq-design-system.md
```

## Component Guidelines

Prefer shared components over repeated page markup.

Current shared shell:

```text
components/harbor/HarborShell.tsx
```

Use it for pages that need the Harbor sidebar/header/footer.

## Pull Request Checklist

Before opening or updating a PR:

- [ ] `npm run build` passes
- [ ] no `.env` or secret values committed
- [ ] route links still work
- [ ] mobile view is not completely broken
- [ ] new UI follows the Harbor design system
- [ ] docs are updated if behavior or routes changed

## Commit Style

Use clear, direct commit messages:

```text
Add Harbor calendar page
Refactor Harbor home shell
Update grocery checkbox styling
Document Harbor design system
```

## Data Boundary

Harbor must get its own future Supabase project and schema. Do not reuse Grace-HQ storage, keys, or private data.

## Questions

When unsure whether something belongs here, treat it as private until confirmed public-safe.
