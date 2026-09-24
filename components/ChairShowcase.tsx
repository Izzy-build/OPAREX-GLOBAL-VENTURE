import SafeImage from "@/components/SafeImage";
import { img } from "@/lib/data/images";

export default function ChairShowcase() {
  return (
    <section className="py-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[560px] mb-14">
          <p className="text-sm text-lilac mb-2.5">Our Signature Piece</p>
          <h2 className="font-display text-[28px] sm:text-[42px]">
            Chairs that make a statement.
          </h2>
          <p className="mt-3.5 text-ink-soft">
            From everyday comfort to standout pieces, discover seating
            designed to complement your space.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-2">
          <div className="md:col-span-3 relative aspect-[4/3] md:aspect-auto md:row-span-2 overflow-hidden">
            <SafeImage
              src={img("loungeChair", 1400)}
              alt="Lounge chair"
              fill
              className="object-cover"
              sizes="(max-width: 760px) 100vw, 60vw"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden">
            <SafeImage
              src={img("monochromeChair", 900)}
              alt="Statement chair"
              fill
              className="object-cover"
              sizes="(max-width: 760px) 100vw, 40vw"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden">
            <SafeImage
              src={img("sofaChair", 900)}
              alt="Accent chair"
              fill
              className="object-cover"
              sizes="(max-width: 760px) 100vw, 40vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
