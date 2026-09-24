import SafeImage from "@/components/SafeImage";
import { img } from "@/lib/data/images";

export default function Craftsmanship() {
  return (
    <section className="relative py-32 text-white">
      <SafeImage
        src={img("diningTableBench", 1600)}
        alt="Furniture detail — wood texture"
        fill
        className="object-cover"
        sizes="100vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative z-10 max-w-[1180px] mx-auto px-6 text-center">
        <p className="text-sm text-lilac-light mb-3">Craftsmanship</p>
        <h2 className="font-display text-cream text-[28px] sm:text-[42px] max-w-[18ch] mx-auto">
          Built With Purpose.
        </h2>
        <p className="mt-4 text-[#DCD6CE] max-w-[42ch] mx-auto">
          Every piece should feel as good as it looks — thoughtfully designed
          for everyday living.
        </p>
      </div>
    </section>
  );
}
