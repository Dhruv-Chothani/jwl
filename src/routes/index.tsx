import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import hero from "@/assets/hero.jpg";
import collection from "@/assets/collection.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Lumière — Fine Jewelry Handcrafted in Paris" },
      {
        name: "description",
        content:
          "A century of Parisian craftsmanship. Discover diamond, gold and emerald pieces handmade in our atelier.",
      },
      { property: "og:title", content: "Maison Lumière — Fine Jewelry" },
      { property: "og:description", content: "Heirloom jewelry, hand-finished in Paris since 1924." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden bg-onyx">
        <img
          src={hero}
          alt="Diamond necklace on model"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow text-gold-soft animate-shimmer">Maison Lumière · Paris</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ivory md:text-7xl text-balance">
              Where light becomes <em className="font-light">heirloom</em>.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/80">
              A century of patient craftsmanship. Each piece hand-finished in our
              Parisian atelier from ethically sourced gold and rare stones.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/collections"
                className="group inline-flex items-center gap-3 bg-ivory px-8 py-4 text-xs tracking-[0.25em] text-onyx uppercase transition-all hover:bg-gold-soft"
              >
                Explore Collections
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/about"
                className="px-2 py-4 text-xs tracking-[0.25em] text-ivory/80 uppercase border-b border-ivory/30 hover:text-gold-soft hover:border-gold-soft"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center md:px-10 md:py-36">
        <p className="eyebrow">A House of Light</p>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl text-balance">
          Every facet a memory. Every setting, a quiet vow held between
          <em className="font-light"> hand and stone</em>.
        </h2>
        <p className="mt-8 text-foreground/65 leading-relaxed max-w-2xl mx-auto">
          For four generations, Maison Lumière has crafted jewelry the slow way —
          one stone, one breath, one piece at a time.
        </p>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Featured</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">The Edit</h2>
          </div>
          <Link
            to="/collections"
            className="hidden md:inline-flex text-xs tracking-[0.25em] uppercase text-foreground/70 hover:text-gold border-b border-foreground/30 hover:border-gold pb-1"
          >
            View All
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ATELIER STRIP */}
      <section className="relative mt-12 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[60vh] lg:h-auto">
            <img
              src={collection}
              alt="Curated jewelry flatlay"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="bg-secondary px-6 py-20 md:px-16 lg:py-32 flex items-center">
            <div className="max-w-md">
              <p className="eyebrow">The Atelier</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Made by hand. <em className="font-light">Made to last lifetimes.</em>
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                Inside our workshop on Rue de la Paix, ten artisans practice
                techniques passed through four generations — granulation, milgrain,
                pavé set entirely by eye.
              </p>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-onyx border-b border-onyx pb-2 hover:text-gold hover:border-gold"
              >
                Meet the Makers →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
