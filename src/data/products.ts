import ring from "@/assets/product-ring.jpg";
import earrings from "@/assets/product-earrings.jpg";
import bracelet from "@/assets/product-bracelet.jpg";
import necklace from "@/assets/product-necklace.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Rings" | "Earrings" | "Bracelets" | "Necklaces";
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "celeste-solitaire",
    name: "Céleste Solitaire",
    category: "Rings",
    price: 8400,
    image: ring,
    description:
      "A 1.5ct brilliant-cut diamond cradled in six hand-forged 18k yellow gold prongs. Quietly extraordinary.",
  },
  {
    id: "perle-drop",
    name: "Perle de Lune",
    category: "Earrings",
    price: 1980,
    image: earrings,
    description:
      "South Sea pearls suspended from polished 18k gold. Designed to catch evening light.",
  },
  {
    id: "fil-dor",
    name: "Fil d'Or",
    category: "Bracelets",
    price: 2640,
    image: bracelet,
    description:
      "A whisper-thin chain punctuated with a single pavé diamond. To be worn always.",
  },
  {
    id: "emeraude",
    name: "Émeraude Royale",
    category: "Necklaces",
    price: 24500,
    image: necklace,
    description:
      "Colombian emeralds and old-mine diamonds set in platinum. A piece to be inherited.",
  },
];
