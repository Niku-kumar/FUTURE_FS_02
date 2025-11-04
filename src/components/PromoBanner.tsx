import { Button } from "@/components/ui/button";
import { Sparkles, Clock } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-primary-foreground font-semibold">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Summer Sale Extravaganza
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get up to <span className="text-secondary font-bold text-3xl">50% OFF</span> on selected items. Premium quality at unbeatable prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold shadow-glow"
            >
              Shop Sale Now
            </Button>
            <div className="flex items-center gap-2 text-primary-foreground">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Ends in 3 days</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
            <div>
              <p className="text-3xl font-bold text-secondary">2000+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
            <div className="w-px bg-primary-foreground/20" />
            <div>
              <p className="text-3xl font-bold text-secondary">500+</p>
              <p className="text-sm">Products on Sale</p>
            </div>
            <div className="w-px bg-primary-foreground/20" />
            <div>
              <p className="text-3xl font-bold text-secondary">4.9★</p>
              <p className="text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
