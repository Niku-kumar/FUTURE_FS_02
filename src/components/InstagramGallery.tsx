import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import categoryTech from "@/assets/category-tech.jpg";
import categoryFashion from "@/assets/category-fashion.jpg";

const instagramPosts = [
  { image: product1, likes: "2.3k" },
  { image: product2, likes: "1.8k" },
  { image: product3, likes: "3.1k" },
  { image: product4, likes: "2.7k" },
  { image: categoryTech, likes: "1.9k" },
  { image: categoryFashion, likes: "2.5k" },
];

const InstagramGallery = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              @luxestore
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow us for daily inspiration, new arrivals, and exclusive behind-the-scenes content
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                  <span className="text-sm font-semibold">{post.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Instagram className="mr-2 h-5 w-5" />
            Follow Us on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
