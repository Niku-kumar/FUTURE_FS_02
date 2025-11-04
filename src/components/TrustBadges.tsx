import { Shield, Lock, Package, CreditCard } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Verified Secure",
    description: "SSL Encrypted",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Your data is safe",
  },
  {
    icon: Package,
    title: "Insured Shipping",
    description: "Tracked delivery",
  },
  {
    icon: CreditCard,
    title: "Safe Payments",
    description: "PCI DSS Compliant",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
