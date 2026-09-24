import SafeImage from "@/components/SafeImage";
import { img } from "@/lib/data/images";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1180px] mx-auto px-6 grid md:grid-cols-2 gap-9 md:gap-[70px] items-center">
        <div className="relative aspect-[5/4] overflow-hidden">
          <SafeImage
            src={img("monochromeChair", 1100)}
            alt="Furniture styled in a modern interior"
            fill
            className="object-cover"
            sizes="(max-width: 760px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm text-lilac mb-2.5">
            About Oparex Global Venture
          </p>
          <h2 className="font-display text-[28px] sm:text-[42px]">
            Furniture that complements your space
          </h2>
          <p className="mt-4 text-ink-soft max-w-[46ch]">
            Oparex Global Venture brings together comfort, style, and
            thoughtful design to create furniture that belongs in the
            spaces people love.
          </p>
        </div>
      </div>
    </section>
  );
}
