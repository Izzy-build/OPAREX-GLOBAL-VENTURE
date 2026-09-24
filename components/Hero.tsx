import { img } from "@/lib/data/images";

const WHATSAPP_LINK =
  "https://wa.me/2348022379266?text=Hello%20Oparex%20Global%20Venture%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20furniture.";

// Drop a compressed, 5-10s, muted, looping clip at exactly this path —
// /public/videos/hero-furniture.mp4 — and it plays automatically. Until
// that file exists the poster image below (and the gradient behind it)
// carries the hero, so there's never a broken/blank background.
const POSTER = img("sofaChair", 1920);

export default function Hero() {
  return (
    <header
      className="relative min-h-screen flex items-center text-white overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(142,118,178,.55), transparent 55%), radial-gradient(circle at 80% 75%, rgba(90,74,120,.6), transparent 50%), linear-gradient(160deg,#2A2430,#171417 70%)",
      }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER}
      >
        <source src="/videos/hero-furniture.mp4" type="video/mp4" />
      </video>
      {/* Poster-as-background for browsers with reduced motion, or before the real clip is added */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${POSTER})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/60" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 pt-[120px] pb-20 w-full">
        <p className="animate-rise opacity-0 [animation-delay:.05s] text-sm text-lilac-light mb-[18px]">
          OPAREX GLOBAL VENTURE
        </p>
        <h1 className="animate-rise opacity-0 [animation-delay:.18s] font-display text-[40px] sm:text-[56px] lg:text-[78px] leading-[1.03] max-w-[14ch]">
          Crafted for your space.
        </h1>
        <p className="animate-rise opacity-0 [animation-delay:.18s] mt-[22px] mb-[34px] max-w-[480px] text-[17px] text-[#E4DEE9]">
          Furniture designed to bring comfort, character, and elegance into
          every space.
        </p>
        <div className="animate-rise opacity-0 [animation-delay:.3s] flex flex-wrap gap-4">
          <a
            href="#collection"
            className="inline-flex items-center gap-2 bg-lilac hover:bg-lilac-dark text-white text-sm font-medium px-7 py-3.5 rounded-sm transition-colors"
          >
            Explore Our Collection
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/60 hover:bg-white/10 text-white text-sm font-medium px-7 py-3.5 rounded-sm transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}
