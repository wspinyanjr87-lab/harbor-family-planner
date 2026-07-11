begin;

create table if not exists public.starter_recipes (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(trim(title)) > 0),
  slug text not null unique,
  category text not null check (category in ('Breakfast', 'Lunch', 'Dinner', 'Bakery', 'Munchies')),
  description text not null default '',
  servings integer not null default 4 check (servings > 0),
  prep_minutes integer not null default 0 check (prep_minutes >= 0),
  cook_minutes integer not null default 0 check (cook_minutes >= 0),
  difficulty text not null default 'Easy' check (difficulty in ('Easy', 'Medium', 'Advanced')),
  budget_level text not null default '$' check (budget_level in ('$', '$$', '$$$')),
  ingredients jsonb not null default '[]'::jsonb check (jsonb_typeof(ingredients) = 'array'),
  steps jsonb not null default '[]'::jsonb check (jsonb_typeof(steps) = 'array'),
  tags text[] not null default '{}',
  image_url text,
  is_published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists starter_recipes_category_idx on public.starter_recipes(category);
create index if not exists starter_recipes_published_sort_idx on public.starter_recipes(is_published, sort_order, title);

alter table public.starter_recipes enable row level security;

revoke all on public.starter_recipes from anon, authenticated;
grant select on public.starter_recipes to anon, authenticated;

drop policy if exists "Published starter recipes are readable" on public.starter_recipes;
create policy "Published starter recipes are readable"
on public.starter_recipes
for select
to anon, authenticated
using (is_published = true);

drop trigger if exists starter_recipes_set_updated_at on public.starter_recipes;
create trigger starter_recipes_set_updated_at
before update on public.starter_recipes
for each row execute function public.set_updated_at();

commit;
