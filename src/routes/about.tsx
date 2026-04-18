import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import atelier from "@/assets/atelier.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier — Maison Lumière" },
      {
        name: "description",
        content: "Four generations of Parisian jewelers crafting heirloom pieces by hand on Rue de la Paix.",
      },
      { property: "og:title", content: "The Atelier — Maison Lumière" },
      { property: "og:description", content: "Inside our Paris workshop, where every piece is made by hand." },
      { property: "og:image", content: atelier },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-28 text-center md:px-10 md:py-36">
        <p className="eyebrow">Since 1924</p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl text-balance leading-[1.05]">
          A house built on <em className="font-light">patience</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <img
          src={atelier}
          alt="Master jeweler at work"
          loading="lazy"
          className="aspect-[7/5] w-full object-cover shadow-luxe"
        />
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            From a single workbench to four generations.
          </h2>
          <div className="mt-8 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              In 1924, Émile Lumière opened a small atelier on Rue de la Paix with
              one goldsmith's hammer and an obsession with light. A century later,
              his great-grandchildren still work in the same room.
            </p>
            <p>
              We make slowly — sometimes a single piece takes a season. Every stone
              is chosen by hand, every setting cut by eye. We do not compromise,
              and we do not hurry.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32 md:px-10 grid gap-10 md:grid-cols-3">
        {[
          { n: "100", l: "Years of craft" },
          { n: "10", l: "Master artisans" },
          { n: "1", l: "Workshop. One city. One name." },
        ].map((s) => (
          <div key={s.l} className="border-t border-gold/40 pt-8">
            <p className="font-display text-6xl text-gold-deep">{s.n}</p>
            <p className="mt-3 text-sm tracking-wide text-foreground/70">{s.l}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
