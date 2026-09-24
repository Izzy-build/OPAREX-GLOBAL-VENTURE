// Demo photography only — freely-licensed stock photos (Unsplash License,
// no attribution required) standing in for Oparex's own product/interior
// photography. Every image is referenced through this file, so swapping in
// real photos later means editing only this list, not any component.
//
// To go live with real photos: replace a URL below with the Supabase
// Storage public URL for that product/category once it's uploaded.

export const DEMO_IMAGES = {
  loungeChair: "https://images.unsplash.com/photo-1619596662481-085e45d69762",
  sofaChair: "https://images.unsplash.com/photo-1621020494597-6a94c91cf245",
  bedroomBedframe: "https://images.unsplash.com/photo-1718717621302-a359be21a111",
  diningTableBench: "https://images.unsplash.com/photo-1710779140606-3fefe7843ca7",
  monochromeChair: "https://images.unsplash.com/photo-1670015873037-1b86e30c7ef1",
} as const;

export function img(key: keyof typeof DEMO_IMAGES, width = 1200, quality = 80) {
  return `${DEMO_IMAGES[key]}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
