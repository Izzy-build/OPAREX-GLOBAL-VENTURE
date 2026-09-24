import SafeImage from "@/components/SafeImage";
import { img } from "@/lib/data/images";

export default function BedframeShowcase() {
  return (
    <section className="py-24 bg-stone">
      <div className="max-w-[1180px] mx-auto px-6 grid md:grid-cols-2 gap-9 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-sm text-lilac mb-2.5">Bedframes</p>
          <h2 className="font-display text-[28px] sm:text-[42px]">
            Designed for Rest. Built for Style.
          </h2>
          <p className="mt-4 text-ink-soft max-w-[42ch]">
            A bedroom that feels considered from every angle — clean lines,
            warm materials, and a frame built to anchor the room.
          </p>
          <a
            href="#collection"
            className="inline-flex items-center gap-2 border border-charcoal hover:bg-charcoal hover:text-cream text-charcoal text-sm font-medium px-6 py-3 rounded-sm mt-7 transition-colors"
          >
            Explore Bedframes
          </a>
        </div>
        <div className="order-1 md:order-2 relative aspect-[5/4] overflow-hidden">
          <SafeImage
            src={img("bedroomBedframe", 1200)}
            alt="Modern bedframe in a styled bedroom"
            fill
            className="object-cover"
            sizes="(max-width: 760px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
