export default function Footer() {
  return (
    <footer className="bg-charcoal text-[#B8B0A6] py-14 pb-8">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <h3 className="text-cream text-[19px] tracking-[0.1em]">
              OPAREX GLOBAL VENTURE
            </h3>
            <p className="mt-2 text-sm max-w-[26ch]">
              Furniture designed for beautiful spaces.
            </p>
          </div>
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-2.5">
              <a href="#collection" className="text-sm hover:text-lilac-light">
                Collection
              </a>
              <a href="#about" className="text-sm hover:text-lilac-light">
                About
              </a>
              <a href="#custom" className="text-sm hover:text-lilac-light">
                Custom Furniture
              </a>
              <a href="#contact" className="text-sm hover:text-lilac-light">
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/2348022379266"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-lilac-light"
              >
                WhatsApp
              </a>
              <a href="#" className="text-sm hover:text-lilac-light">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="pt-5 text-xs flex flex-wrap justify-between gap-2">
          <span>© 2026 Oparex Global Venture. All rights reserved.</span>
          <span>Demo site — content placeholder</span>
        </div>
      </div>
    </footer>
  );
}
