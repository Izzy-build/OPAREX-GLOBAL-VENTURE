# Oparex Global Venture — Website

Sales-demo furniture site for Oparex Global Venture, built with:

- **TypeScript**, **Next.js** (App Router), **React**, **Tailwind CSS**
- **Supabase** ready (products data now via mock, storage + auth/admin later)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. No Supabase credentials required — the site
runs fully on the demo data in `lib/data/products.ts`.

## What's implemented

- Real demo photography throughout (hero poster, featured products,
  categories, chair showcase, bedframe showcase, gallery, about,
  craftsmanship) — freely-licensed Unsplash photos, centralized in
  `lib/data/images.ts` so they're easy to swap for Oparex's real photos
  later. `components/SafeImage.tsx` quietly falls back to a gradient if
  any hotlinked photo ever fails to load, so there's never a broken image
  icon.
- Hero section with a wired-up video slot: drop a compressed, ~5-10s clip
  at `public/videos/hero-furniture.mp4` and it autoplays, muted, looped,
  inline on mobile. Until that file is added, a poster image + gradient
  carries the hero — see `public/videos/README.md`.
- Featured Collection (6 products), Category grid (8 categories, real
  photography), dedicated Chair showcase, dedicated Bedframe showcase,
  a Gallery with a click-to-open lightbox, Craftsmanship section, Custom
  Furniture CTA, Contact section, floating WhatsApp button (mobile),
  sticky WhatsApp CTA (desktop nav).
- Lilac used only as an accent (buttons, hover states, category tags,
  small highlights) over a warm-white/charcoal foundation.
- No fabricated business claims (years in business, customer counts,
  awards) — placeholders say "Coming soon" where real info is missing.

## Supabase

The site runs on mock data (`lib/data/products.ts`) until you connect a
real Supabase project:

1. Create a project at supabase.com.
2. Run the SQL in `lib/supabase/types.ts` (bottom comment) to create the
   `products` table.
3. Copy `.env.local.example` to `.env.local` and fill in
   `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Upload product photos/videos to Supabase Storage and reference the
   public URLs in `image_url` / `video_url`.

Once those env vars are set, `getFeaturedProducts()` in
`lib/data/products.ts` automatically queries Supabase instead of the mock
array — no component changes needed.

## Project structure

```
app/
  layout.tsx, page.tsx, globals.css
components/
  Navbar, Hero, FeaturedCollection, ProductCard, Categories,
  ChairShowcase, BedframeShowcase, Gallery, About, Craftsmanship,
  CustomCTA, Contact, Footer, WhatsAppFloat, SafeImage
lib/
  supabase/client.ts   Returns a Supabase client, or null if unconfigured
  supabase/types.ts    Product type + future table SQL
  data/products.ts     getFeaturedProducts() — Supabase or mock fallback
  data/categories.ts   Category list
  data/images.ts       Central demo photo library (swap here for real photos)
public/videos/         Drop hero-furniture.mp4 here
```

## Still to build (not required for this demo)

- Oparex's own product photography and hero video, in place of the
  licensed demo stock photography/poster
- `/admin` dashboard for the business owner to manage products (the
  `products` schema is designed so this can be added later without
  restructuring the data layer)
- Supabase Auth for the admin dashboard login
