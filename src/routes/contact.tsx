import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Private Appointments — Maison Lumière" },
      { name: "description", content: "Visit our Paris atelier or book a private viewing with our concierge." },
      { property: "og:title", content: "Contact — Maison Lumière" },
      { property: "og:description", content: "Book a private appointment at our Paris atelier." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Your request has been received", {
        description: "Our concierge will respond within 24 hours.",
      });
    }, 700);
  }

  return (
    <SiteLayout>
      <Toaster />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 grid gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Private Appointments</p>
          <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            Step into the <em className="font-light">atelier</em>.
          </h1>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Each visit is private and unhurried. Tell us what you're looking for —
            an engagement ring, a wedding band, a piece to mark a milestone —
            and we'll prepare a curated selection for you.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <p className="eyebrow">Atelier</p>
              <p className="mt-2 font-display text-xl">14 Rue de la Paix</p>
              <p className="text-sm text-foreground/70">75002 Paris, France</p>
            </div>
            <div>
              <p className="eyebrow">Concierge</p>
              <p className="mt-2 font-display text-xl">+33 1 42 60 84 00</p>
              <p className="text-sm text-foreground/70">concierge@maisonlumiere.com</p>
            </div>
            <div>
              <p className="eyebrow">Hours</p>
              <p className="mt-2 text-sm text-foreground/70">Tuesday – Saturday · 11h – 19h</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-secondary/60 p-8 md:p-12 space-y-6">
          <div>
            <label className="eyebrow">Full Name</label>
            <input
              required
              name="name"
              className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 text-base focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="eyebrow">Email</label>
            <input
              required
              type="email"
              name="email"
              className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 text-base focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="eyebrow">Interest</label>
            <select
              name="interest"
              className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 text-base focus:border-gold focus:outline-none"
            >
              <option>Engagement ring</option>
              <option>Wedding bands</option>
              <option>High jewelry</option>
              <option>Bespoke commission</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="eyebrow">Message</label>
            <textarea
              name="message"
              rows={4}
              className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 text-base focus:border-gold focus:outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="bg-onyx text-ivory px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-deep transition-colors disabled:opacity-60"
          >
            {sending ? "Sending…" : "Request Appointment"}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}
