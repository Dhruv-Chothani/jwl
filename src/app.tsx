import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { HomePage } from "@/pages/Home";
import { CollectionsPage } from "@/pages/Collections";
import { ProductPage } from "@/pages/Product";
import { AboutPage } from "@/pages/About";
import { JournalPage } from "@/pages/Journal";
import { ContactPage } from "@/pages/Contact";
import { NotFoundPage } from "@/pages/NotFound";

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
