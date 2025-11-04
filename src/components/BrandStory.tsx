import { Button } from "@/components/ui/button";
import { Award, Users, Globe, Heart } from "lucide-react";
import brandStory from "@/assets/brand-story.jpg";

const values = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Handpicked products that meet our rigorous standards",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our top priority",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Shipping to over 100 countries worldwide",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Committed to ethical and eco-friendly practices",
  },
];

const BrandStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Excellence
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Since 2015
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Born from a passion for quality and design, LuxeStore has grown into a trusted destination for those who appreciate the finer things in life. Every product in our collection is carefully selected to bring you the perfect blend of form, function, and luxury.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe that exceptional products should be accessible to everyone. That's why we work directly with manufacturers and artisans around the world to bring you premium quality at fair prices.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <Button size="lg" variant="outline" className="border-2">
              Learn More About Us
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={brandStory}
                alt="Brand Story"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
