-- Campus ambassadors added from the admin panel (/admin → Ambassadors tab).
-- Run once in Supabase → SQL Editor. Hardcoded ambassadors in src/app/lib/ambassadors.ts
-- keep showing; rows here are added on top of them.

create table if not exists public.ambassadors (
  id          uuid primary key default gen_random_uuid(),
  first_name  text not null,
  last_name   text not null default '',
  nickname    text,
  university  text not null,
  campus      text not null default '',
  short       text not null,               -- badge + filter chip, e.g. "UNIBEN"
  roles       text[] not null default '{}',
  photo_url   text not null,
  focus       text default '50% 30%',      -- CSS object-position for the photo
  published   boolean not null default true,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now()
);

alter table public.ambassadors enable row level security;

-- Anyone can read published ambassadors (the public /ambassadors page).
drop policy if exists "Public can read published ambassadors" on public.ambassadors;
create policy "Public can read published ambassadors"
  on public.ambassadors for select
  to anon, authenticated
  using (published or auth.role() = 'authenticated');

-- Only signed-in admins can add, edit or delete.
drop policy if exists "Admins manage ambassadors" on public.ambassadors;
create policy "Admins manage ambassadors"
  on public.ambassadors for all
  to authenticated
  using (true)
  with check (true);

-- Photos are uploaded to the existing public "course-images" bucket under ambassadors/,
-- so they use the same storage policies as course images.
