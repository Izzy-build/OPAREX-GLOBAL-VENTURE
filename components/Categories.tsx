import SafeImage from "@/components/SafeImage";
import { img } from "@/lib/data/images";
import type { ProductCategory } from "@/lib/supabase/types";

const CATEGORY_DETAILS: { name: ProductCategory; tagline: string; image: string }[] = [
  { name: "Chairs", tagline: "Comfort meets character.", image: img("loungeChair", 700) },
  { name: "Sofas", tagline: "Relaxation, refined.", image: img("sofaChair", 700) },
  { name: "Bedframes", tagline: "Designed for better spaces.", image: img("bedroomBedframe", 700) },
  { name: "Dining", tagline: "Gather around good design.", image: img("diningTableBench", 700) },
  { name: "Office", tagline: "Comfort that works as hard as you do.", image: img("monochromeChair", 700) },
  { name: "Stools & Benches", tagline: "Small pieces, big impact.", image: img("diningTableBench", 700) },
  { name: "Tables", tagline: "The centerpiece of every room.", image: img("diningTableBench", 700) },
  { name: "Custom Furniture", tagline: "Made around your vision.", image: img("sofaChair", 700) },
];

export default function Categories() {
  return (
    <section className="bg-stone">
      <div className="max-w-[1180px] mx-auto px-6 py-24">
        <div className="max-w-[560px] mb-14">
          <p className="text-sm text-lilac mb-2.5">Browse by Category</p>
          <h2 className="font-display text-[28px] sm:text-[42px]">
            Every piece, every room
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
        {CATEGORY_DETAILS.map((category) => (
          <div
            key={category.name}
            className="group relative aspect-square overflow-hidden flex items-end p-4.5"
          >
            <SafeImage
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 760px) 50vw, 25vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
            <div className="relative z-10">
              <span className="text-white font-display text-lg block">
                {category.name}
              </span>
              <span className="text-white/80 text-xs">{category.tagline}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
