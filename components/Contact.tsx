const WHATSAPP_LINK =
  "https://wa.me/2348022379266?text=Hello%20Oparex%20Global%20Venture%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20furniture.";

const ROWS: { label: string; value: string }[] = [
  { label: "WhatsApp", value: "0802 237 9266" },
  { label: "Phone", value: "Coming soon" },
  { label: "Instagram", value: "Coming soon" },
  { label: "Location", value: "Coming soon" },
  { label: "Email", value: "Coming soon" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1180px] mx-auto px-6 grid md:grid-cols-[1.1fr_1fr] gap-14">
        <div>
          <p className="text-sm text-lilac mb-2.5">Get in Touch</p>
          <h2 className="font-display text-[28px] sm:text-[42px]">
            Oparex Global Venture
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lilac hover:bg-lilac-dark text-white text-sm font-medium px-7 py-3.5 rounded-sm mt-6 transition-colors"
          >
            Chat on WhatsApp
          </a>
          <ul className="mt-6">
            {ROWS.map((row) => (
              <li
                key={row.label}
                className="py-3.5 border-t border-stone flex justify-between text-[15px] text-ink-soft"
              >
                {row.label}
                <b className="text-ink font-medium">{row.value}</b>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-stone rounded-sm min-h-[260px] flex items-center justify-center text-ink-soft text-sm">
          Location map placeholder
        </div>
      </div>
    </section>
  );
}
