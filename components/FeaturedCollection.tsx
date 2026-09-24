import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/supabase/types";

export default function FeaturedCollection({
  products,
}: {
  products: Product[];
}) {
  return (
    <section id="collection" className="py-24">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[560px] mb-14">
          <p className="text-sm text-lilac mb-2.5">Featured Collection</p>
          <h2 className="font-display text-[28px] sm:text-[42px]">
            Furniture made to stand out
          </h2>
          <p className="mt-3.5 text-ink-soft">
            Explore carefully selected furniture pieces designed to
            complement modern living spaces. Demo pieces shown — replace
            with real product photography.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-stone">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
