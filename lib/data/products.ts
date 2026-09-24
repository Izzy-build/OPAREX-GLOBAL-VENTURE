import { getSupabaseClient } from "@/lib/supabase/client";
import type { Product } from "@/lib/supabase/types";
import { img } from "@/lib/data/images";

// Demo/placeholder products. These stand in for real Oparex Global Venture
// inventory until the business owner provides real photos, names and
// descriptions. Swap this file out (or point it at Supabase) without
// touching any component.
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Luna Lounge Chair",
    category: "Chairs",
    description: "A relaxed, curved silhouette built for everyday comfort.",
    image_url: img("loungeChair"),
    additional_images: null,
    video_url: null,
    featured: true,
    published: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Nova Dining Chair",
    category: "Dining",
    description: "Clean lines with a sturdy frame for daily dining use.",
    image_url: img("diningTableBench"),
    additional_images: null,
    video_url: null,
    featured: true,
    published: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "Haven Bedframe",
    category: "Bedframes",
    description: "A low-profile bedframe designed for restful, minimal bedrooms.",
    image_url: img("bedroomBedframe"),
    additional_images: null,
    video_url: null,
    featured: true,
    published: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "Milano Sofa",
    category: "Sofas",
    description: "Generous seating with soft, rounded upholstered arms.",
    image_url: img("sofaChair"),
    additional_images: null,
    video_url: null,
    featured: true,
    published: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "5",
    name: "Executive Office Chair",
    category: "Office",
    description: "Adjustable support built for long working hours.",
    image_url: img("monochromeChair"),
    additional_images: null,
    video_url: null,
    featured: true,
    published: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: "6",
    name: "Arc Accent Chair",
    category: "Chairs",
    description: "A statement piece for a living room corner or reading nook.",
    image_url: img("loungeChair", 1000),
    additional_images: null,
    video_url: null,
    featured: true,
    published: true,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
];

/**
 * Reads featured, published products.
 * Uses Supabase when NEXT_PUBLIC_SUPABASE_URL / ANON_KEY are set,
 * otherwise falls back to MOCK_PRODUCTS so the site works out of the box.
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return MOCK_PRODUCTS.filter((p) => p.featured && p.published);
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("featured", true)
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error || !data) {
    return MOCK_PRODUCTS.filter((p) => p.featured && p.published);
  }

  return data as Product[];
}
