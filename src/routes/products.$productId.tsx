import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { products } from "@/data/products";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Maison Lumière` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Maison Lumière` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Piece not found</h1>
        <Link to="/collections" className="mt-6 inline-block text-gold underline">
          Return to collections
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-3 text-foreground/60 text-sm">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();

  return (
    <SiteLayout>
      <Toaster />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="bg-muted aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <Link to="/collections" className="eyebrow hover:text-gold">
            ← {product.category}
          </Link>
          <h1 className="mt-6 font-display text-5xl md:text-6xl text-balance">
            {product.name}
          </h1>
          <p className="mt-6 text-2xl font-light tracking-wide">
            €{product.price.toLocaleString()}
          </p>
          <div className="my-10 h-px w-16 bg-gold" />
          <p className="text-foreground/75 leading-relaxed text-lg">
            {product.description}
          </p>

          <ul className="mt-10 space-y-3 text-sm text-foreground/65">
            <li>· Hand-finished in our Paris atelier</li>
            <li>· Ethically sourced 18k gold</li>
            <li>· Conflict-free certified stones</li>
            <li>· Lifetime maintenance & resizing</li>
          </ul>

          <div className="mt-12 flex flex-wrap gap-4">
            <button
              onClick={() =>
                toast.success("Added to your selection", {
                  description: `${product.name} has been reserved.`,
                })
              }
              className="bg-onyx text-ivory px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-deep transition-colors"
            >
              Add to Selection
            </button>
            <Link
              to="/contact"
              className="px-2 py-4 text-xs tracking-[0.3em] uppercase border-b border-foreground/40 hover:text-gold hover:border-gold"
            >
              Book Private Viewing
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
