import { Link } from "react-router-dom";

const exploreLinks = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "Our Atelier" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Private Appointments" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-onyx text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4 md:gap-12 md:px-10 md:py-20">
        <div className="sm:col-span-2">
          <h3 className="font-display text-2xl text-ivory sm:text-3xl">Maison Lumière</h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
            A century of craftsmanship. Each piece is hand-finished in our Parisian atelier
            from ethically sourced gold and conflict-free stones.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold-soft">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold-soft">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/60">
            <li>14 Rue de la Paix</li>
            <li>75002 Paris, France</li>
            <li>
              <a
                href="mailto:concierge@maisonlumiere.com"
                className="break-all transition-colors hover:text-gold-soft"
              >
                concierge@maisonlumiere.com
              </a>
            </li>
            <li>
              <a href="tel:+33142608400" className="transition-colors hover:text-gold-soft">
                +33 1 42 60 84 00
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-ivory/40 md:flex-row md:px-10 md:text-left">
          <p>© {new Date().getFullYear()} Maison Lumière. All rights reserved.</p>
          <p>Crafted with patience in Paris.</p>
        </div>
      </div>
    </footer>
  );
}
