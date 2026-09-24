"use client";

import { useEffect, useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/2348022379266?text=Hello%20Oparex%20Global%20Venture%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20furniture.";

const LINKS = [
  { href: "#collection", label: "Collection" },
  { href: "#about", label: "About" },
  { href: "#custom", label: "Custom Furniture" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all pt-[calc(env(safe-area-inset-top,0px)+14px)] ${
          solid
            ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_theme(colors.stone)] pb-3"
            : "pb-5"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between">
          <div
            className={`font-display text-sm tracking-[0.14em] leading-tight ${
              solid ? "text-charcoal" : "text-white"
            }`}
          >
            OPAREX
            <span className="block text-[10px] tracking-[0.2em] opacity-75">
              GLOBAL VENTURE
            </span>
          </div>

          <div
            className={`hidden md:flex gap-9 text-sm ${
              solid ? "text-ink" : "text-white/90"
            }`}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-lilac-light">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-lilac hover:bg-lilac-dark text-white text-sm font-medium px-6 py-3 rounded-sm transition-colors"
          >
            WhatsApp Us
          </a>

          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className={`md:hidden text-2xl ${solid ? "text-ink" : "text-white"}`}
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-charcoal flex flex-col items-center justify-center gap-7">
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-cream text-2xl"
          >
            ✕
          </button>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-xl text-cream"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-display text-xl text-cream"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </>
  );
}
