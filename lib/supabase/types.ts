// Mirrors the future Supabase "products" table. Keeping this in one place
// means the mock data layer and the real Supabase queries can share a type.

export type ProductCategory =
  | "Chairs"
  | "Sofas"
  | "Bedframes"
  | "Dining"
  | "Office"
  | "Stools & Benches"
  | "Tables"
  | "Custom Furniture";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string | null;
  image_url: string | null;
  additional_images: string[] | null;
  video_url: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

// Suggested SQL for the real table, once Supabase is wired up:
//
// create table products (
//   id uuid primary key default gen_random_uuid(),
//   name text not null,
//   category text not null,
//   description text,
//   image_url text,
//   additional_images text[],
//   video_url text,
//   featured boolean not null default false,
//   published boolean not null default true,
//   created_at timestamptz not null default now(),
//   updated_at timestamptz not null default now()
// );
