"use client";

import { useState } from "react";
import SafeImage from "@/components/SafeImage";
import { img } from "@/lib/data/images";

const GALLERY_ITEMS = [
  { src: img("loungeChair", 1000), alt: "Lounge chair", tall: true },
  { src: img("sofaChair", 1000), alt: "Sofa in a living room" },
  { src: img("bedroomBedframe", 1000), alt: "Bedroom with bedframe" },
  { src: img("diningTableBench", 1000), alt: "Dining table and bench", tall: true },
  { src: img("monochromeChair", 1000), alt: "Statement chair" },
  { src: img("sofaChair", 800), alt: "Living room sofa detail" },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[560px] mb-14">
          <p className="text-sm text-lilac mb-2.5">Gallery</p>
          <h2 className="font-display text-[28px] sm:text-[42px]">
            Spaces Worth Coming Home To.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 [&>*:nth-child(1)]:row-span-2 [&>*:nth-child(4)]:row-span-2">
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`relative overflow-hidden group ${
                item.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
              aria-label={`Open ${item.alt} in lightbox`}
            >
              <SafeImage
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 760px) 50vw, 33vw"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[70] bg-charcoal/95 flex items-center justify-center p-6"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-cream text-2xl"
            onClick={() => setOpen(null)}
          >
            ✕
          </button>
          <div className="relative w-full max-w-3xl aspect-[4/3]">
            <SafeImage
              src={GALLERY_ITEMS[open].src}
              alt={GALLERY_ITEMS[open].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
