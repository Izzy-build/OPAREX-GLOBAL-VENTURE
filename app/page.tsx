import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import Categories from "@/components/Categories";
import ChairShowcase from "@/components/ChairShowcase";
import BedframeShowcase from "@/components/BedframeShowcase";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Craftsmanship from "@/components/Craftsmanship";
import CustomCTA from "@/components/CustomCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getFeaturedProducts } from "@/lib/data/products";

// Server component: fetches products (Supabase if configured, otherwise
// the mock data in lib/data/products.ts) at request time.
export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollection products={products} />
      <Categories />
      <ChairShowcase />
      <BedframeShowcase />
      <Gallery />
      <About />
      <Craftsmanship />
      <CustomCTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
