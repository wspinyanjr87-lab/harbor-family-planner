create extension if not exists pgcrypto;

create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(trim(title)) > 0),
  slug text not null,
  category text not null check (category in ('Breakfast', 'Lunch', 'Dinner', 'Bakery', 'Munchies')),
  source_type text not null default 'manual' check (source_type in ('starter', 'manual', 'url', 'ai')),
  source_url text,
  description text,
  servings integer not null default 4 check (servings > 0),
  prep_minutes integer check (prep_minutes is null or prep_minutes >= 0),
  cook_minutes integer check (cook_minutes is null or cook_minutes >= 0),
  ingredients jsonb not null default '[]'::jsonb check (jsonb_typeof(ingredients) = 'array'),
  steps jsonb not null default '[]'::jsonb check (jsonb_typeof(steps) = 'array'),
  tags text[] not null default '{}',
  image_url text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_id, slug)
);

create index if not exists recipes_owner_id_idx on public.recipes(owner_id);
create index if not exists recipes_category_idx on public.recipes(category);
create index if not exists recipes_created_at_idx on public.recipes(created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists recipes_set_updated_at on public.recipes;
create trigger recipes_set_updated_at
before update on public.recipes
for each row execute function public.set_updated_at();

alter table public.recipes enable row level security;

create policy "Users can read their own recipes"
on public.recipes for select
to authenticated
using (owner_id = auth.uid());

create policy "Users can create their own recipes"
on public.recipes for insert
to authenticated
with check (owner_id = auth.uid());

create policy "Users can update their own recipes"
on public.recipes for update
to authenticated
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

create policy "Users can delete their own recipes"
on public.recipes for delete
to authenticated
using (owner_id = auth.uid());
