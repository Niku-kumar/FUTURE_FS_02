import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import categoryTech from "@/assets/category-tech.jpg";
import categoryFashion from "@/assets/category-fashion.jpg";
import categoryHome from "@/assets/category-home.jpg";
import categoryWellness from "@/assets/category-wellness.jpg";

const categories = [
  {
    name: "Tech & Gadgets",
    image: categoryTech,
    itemCount: "150+ Items",
  },
  {
    name: "Fashion & Style",
    image: categoryFashion,
    itemCount: "200+ Items",
  },
  {
    name: "Home & Living",
    image: categoryHome,
    itemCount: "180+ Items",
  },
  {
    name: "Wellness & Beauty",
    image: categoryWellness,
    itemCount: "120+ Items",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-large transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative h-80">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    {category.itemCount}
                  </p>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {category.name}
                  </h3>
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                    <span className="font-semibold">Explore</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
