# Harbor New User Launch Flow

Status: front-end launch flow in progress on `meal-planner`.

## Goal

A brand-new Harbor user should be able to understand the app without knowing Grace, William, or the private build history.

The first-use path should be simple:

```text
Welcome → Add People → Pick Household Rhythm → Create First Week → Use Harbor Home
```

## Current Routes

| Route | Purpose |
| --- | --- |
| `/` | New-user friendly Harbor Home with setup callout |
| `/onboarding` | First-run setup walkthrough |
| `/settings` | Setup Center for people, roles, household profile, and preferences |
| `/calendar` | Family calendar |
| `/planner` | Meal planner |
| `/grocery` | Grocery list |
| `/memories` | Memory gallery |

## First-Run Setup Requirements

### 1. Welcome

Explain Harbor in one sentence:

```text
A family home base for meals, groceries, schedules, memories, and household rhythm.
```

### 2. Add Your People

Supported people types:

- Adult
- Child
- Pet
- Other

Fields planned:

- name
- type
- birthday
- access level
- chores / responsibilities
- notes
- schedule preferences

### 3. Access Roles

| Role | Meaning |
| --- | --- |
| Manager | Can see and edit everything |
| Planner | Can update meals, groceries, and events |
| Viewer | Can view family plans without editing |

### 4. Household Rhythm

The user can enable or disable:

- meals
- calendar
- groceries
- memories
- notifications later

### 5. Starter Content

The app should start mostly empty for a real customer.

Allowed starter content:

- small recipe shelf
- sample calendar rhythm preview
- empty grocery state
- empty people state with add prompts

Avoid shipping William's private family data as product defaults.

## Current Backend Status

The current launch path is front-end ready only.

Backend saving is pending Harbor-only Supabase wiring.

Do not claim persistent saving is complete until:

- Harbor Supabase project exists
- schema is applied
- RLS policies are active
- auth/workspace ownership is wired
- settings and people data write/read properly

## Launch-Copy Rule

Use language like:

```text
Set up your Harbor.
Add your people.
Plan your first week.
```

Avoid language like:

```text
Your data is saved forever.
Invite everyone now.
AI will manage everything.
```

until those systems are actually wired.

## Mobile Rule

Do not over-polish mobile until the product flow is complete.

Priority order:

1. Finish new-user product flow.
2. Replace demo data and empty states.
3. Wire backend persistence.
4. Then polish mobile navigation and responsive layouts.
