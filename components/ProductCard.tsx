import SafeImage from "@/components/SafeImage";
import type { Product } from "@/lib/supabase/types";

const WHATSAPP_LINK = "https://wa.me/2348022379266";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-cream border border-transparent hover:border-lilac/40 transition-colors">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        {product.image_url && (
          <SafeImage
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 760px) 100vw, 33vw"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 text-xs text-white bg-lilac/95 px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all"
        >
          Enquire on WhatsApp
        </a>
      </div>
      <div className="px-[22px] py-6">
        <div className="text-xs text-ink-soft mb-1">{product.category}</div>
        <h3 className="font-display text-[19px] mb-1.5">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-ink-soft mb-2.5">{product.description}</p>
        )}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-lilac border-b border-lilac hover:text-lilac-dark hover:border-lilac-dark pb-0.5"
        >
          Request Price
        </a>
      </div>
    </div>
  );
}
