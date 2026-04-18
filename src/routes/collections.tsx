import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["All", "Rings", "Earrings", "Bracelets", "Necklaces"] as const;

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Maison Lumière" },
      {
        name: "description",
        content: "Browse rings, earrings, bracelets and necklaces handcrafted in our Paris atelier.",
      },
      { property: "og:title", content: "Collections — Maison Lumière" },
      { property: "og:description", content: "Heirloom jewelry across rings, earrings, bracelets and necklaces." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 text-center">
          <p className="eyebrow">The Collections</p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl text-balance">
            A library of <em className="font-light">light</em>.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-foreground/70">
            Pieces released in small editions, each numbered and signed by the artisan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-b border-border pb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-xs tracking-[0.3em] uppercase pb-2 border-b transition-colors ${
                filter === c
                  ? "text-gold border-gold"
                  : "text-foreground/60 border-transparent hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
