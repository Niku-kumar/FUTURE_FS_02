import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import featuredProduct from "@/assets/featured-product.jpg";

const features = [
  "Premium sapphire crystal display",
  "7-day battery life",
  "Water resistant up to 50m",
  "Advanced health tracking",
  "Genuine leather band",
];

const FeaturedCollection = () => {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
            <div className="relative bg-muted rounded-2xl overflow-hidden shadow-large">
              <img
                src={featuredProduct}
                alt="Limited Edition Smartwatch"
                className="w-full h-auto"
              />
              <Badge className="absolute top-6 left-6 bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold">
                Limited Edition
              </Badge>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-muted-foreground">(500+ reviews)</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Apex Elite Smartwatch
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              The perfect fusion of technology and elegance. Limited to only 1000 pieces worldwide.
            </p>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-bold text-primary">$599</span>
              <span className="text-2xl text-muted-foreground line-through">$899</span>
              <Badge variant="destructive" className="text-sm">33% OFF</Badge>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                View Details
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              ✓ Free shipping worldwide  •  ✓ 2-year warranty  •  ✓ 30-day returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
