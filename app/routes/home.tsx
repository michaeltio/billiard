import type { Route } from "./+types/home";

import NavBar from "~/components/custom/Navbar";
import HeroSection from "~/components/sections/HeroSection";
import GallerySection from "~/components/sections/GallerySection";
import PriceSection from "~/components/sections/PriceSection";
import FAQSection from "~/components/sections/FaqSection";
import Footer from "~/components/custom/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Great Billiard" },
    { name: "description", content: "Billiard Place" },
  ];
}

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <GallerySection />
      <PriceSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
