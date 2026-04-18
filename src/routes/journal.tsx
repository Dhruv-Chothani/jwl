import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import collection from "@/assets/collection.jpg";
import atelier from "@/assets/atelier.jpg";
import necklace from "@/assets/product-necklace.jpg";

const articles = [
  {
    title: "On Granulation: A Lost Art Reborn",
    excerpt: "How an Etruscan technique from 800 BC still shapes our finest pieces today.",
    date: "March 2025",
    image: atelier,
  },
  {
    title: "Choosing an Emerald: A Field Guide",
    excerpt: "What our buyers look for when sourcing in Muzo, Colombia.",
    date: "February 2025",
    image: necklace,
  },
  {
    title: "The Shape of Light",
    excerpt: "Why we cut our diamonds slightly off-spec — and why it matters.",
    date: "January 2025",
    image: collection,
  },
];

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Maison Lumière" },
      { name: "description", content: "Essays on craft, gemology and the slow life of a jewelry house." },
      { property: "og:title", content: "Journal — Maison Lumière" },
      { property: "og:description", content: "Essays on craft, gemology and the slow life of a jewelry house." },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-28 text-center md:px-10 md:py-32">
        <p className="eyebrow">The Journal</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl text-balance">
          Notes from the <em className="font-light">workbench</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-10 grid gap-x-8 gap-y-16 md:grid-cols-3">
        {articles.map((a) => (
          <article key={a.title} className="group">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <p className="eyebrow mt-6">{a.date}</p>
            <h2 className="mt-3 font-display text-2xl leading-snug">{a.title}</h2>
            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{a.excerpt}</p>
            <p className="mt-5 text-xs tracking-[0.3em] uppercase text-gold-deep border-b border-gold/40 inline-block pb-1">
              Read essay →
            </p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
