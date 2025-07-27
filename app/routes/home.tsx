import type { Route } from "./+types/home";

import NavBar from "~/components/custom/NavBar";
import HeroSection from "~/components/sections/HeroSection";
import GallerySection from "~/components/sections/GallerySection";
import PriceSection from "~/components/sections/PriceSection";
import FAQSection from "~/components/sections/FAQSection";
import Footer from "~/components/custom/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Great Billiard" },
    { name: "description", content: "Billiard Place" },
  ];
}

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <GallerySection />
      <PriceSection />
      <FAQSection />
      <Footer />
    </>
  );
}
