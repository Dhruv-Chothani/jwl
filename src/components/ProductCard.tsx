import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$productId"
      params={{ productId: product.id }}
      className="group block"
    >
      <div className="relative overflow-hidden bg-muted aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3 className="mt-2 font-display text-xl">{product.name}</h3>
        </div>
        <p className="mt-2 text-sm tracking-wide text-foreground/70">
          €{product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
