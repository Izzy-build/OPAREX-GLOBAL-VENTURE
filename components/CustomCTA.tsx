const WHATSAPP_LINK =
  "https://wa.me/2348022379266?text=Hello%20Oparex%20Global%20Venture%2C%20I%20have%20a%20custom%20furniture%20request.";

export default function CustomCTA() {
  return (
    <section id="custom" className="bg-charcoal text-cream text-center py-[110px] px-6">
      <div className="max-w-[600px] mx-auto">
        <h2 className="font-display text-cream text-[28px] sm:text-[44px]">
          Have something specific in mind?
        </h2>
        <p className="mt-4 mb-7 text-[#C7C1BA] max-w-[440px] mx-auto">
          Tell us what you need and let&apos;s create something that fits
          your space.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-lilac hover:bg-lilac-dark text-white text-sm font-medium px-7 py-3.5 rounded-sm transition-colors"
        >
          Request a Custom Piece
        </a>
      </div>
    </section>
  );
}
