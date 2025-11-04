import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import FeaturedCollection from "@/components/FeaturedCollection";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Categories />
        <FeaturedProducts />
        <PromoBanner />
        <FeaturedCollection />
        <Benefits />
        <BrandStory />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
