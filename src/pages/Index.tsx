import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { Reviews } from "@/components/sections/Reviews";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Products />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
