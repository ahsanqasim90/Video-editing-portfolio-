create table if not exists public.site_content (
  id text primary key,
  content jsonb not null,
  updated_at timestamptz not null default now()
);

insert into public.site_content (id, content)
values ('main', '{
  "profile": {
    "name": "Sana Q.",
    "email": "sanqasim205@gmail.com",
    "phone": "+92 3094186795",
    "upworkUrl": "https://www.upwork.com/freelancers/~01f965e1c51614e56f?viewMode=1",
    "title": "Viral Short-Form Video Editor | Instagram Reels & TikTok",
    "location": "Pakistan",
    "rate": "$12.00/hr",
    "success": "82%",
    "jobs": "19",
    "hours": "190",
    "overview": "I help brands, creators, and agencies turn raw footage, products, scripts, and ideas into high-retention TikTok, Instagram Reels, YouTube Shorts, UGC ads, AI creatives, and product videos."
  },
  "portfolioItems": [],
  "testimonials": [],
  "tools": ["CapCut", "Premiere Pro", "ChatGPT"],
  "processSteps": ["Client Brief", "Script / Idea Understanding", "Video Editing", "Final Delivery"],
  "sellingPoints": ["Fast turnaround", "Clean captions and pacing", "Client-focused delivery"],
  "stats": [
    { "value": "82%", "label": "Upwork success" },
    { "value": "19", "label": "Completed jobs" },
    { "value": "190", "label": "Upwork hours" },
    { "value": "$12/hr", "label": "Profile rate" }
  ],
  "skills": ["Video Editing", "TikTok Video", "YouTube Shorts", "Instagram Reels", "CapCut"],
  "certifications": []
}'::jsonb)
on conflict (id) do nothing;

alter table public.site_content enable row level security;

drop policy if exists "Public can read site content" on public.site_content;
create policy "Public can read site content"
on public.site_content for select
to anon, authenticated
using (true);

drop policy if exists "Authenticated can update site content" on public.site_content;
create policy "Authenticated can update site content"
on public.site_content for update
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated can insert site content" on public.site_content;
create policy "Authenticated can insert site content"
on public.site_content for insert
to authenticated
with check (true);

insert into storage.buckets (id, name, public)
values ('portfolio-media', 'portfolio-media', true)
on conflict (id) do nothing;

drop policy if exists "Public can view portfolio media" on storage.objects;
create policy "Public can view portfolio media"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'portfolio-media');

drop policy if exists "Authenticated can upload portfolio media" on storage.objects;
create policy "Authenticated can upload portfolio media"
on storage.objects for insert
to authenticated
with check (bucket_id = 'portfolio-media');

drop policy if exists "Authenticated can update portfolio media" on storage.objects;
create policy "Authenticated can update portfolio media"
on storage.objects for update
to authenticated
using (bucket_id = 'portfolio-media')
with check (bucket_id = 'portfolio-media');
