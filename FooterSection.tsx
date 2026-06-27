import { Leaf, Instagram, MapPin, Heart, ShieldCheck } from "lucide-react";

export default function FooterSection() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Monthly Plans", href: "#plans" },
    { name: "Our Story", href: "#story" },
    { name: "Food Gallery", href: "#gallery" },
    { name: "Service Area", href: "#service-area" },
    { name: "Instagram Journey", href: "#instagram" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <footer className="bg-brand-dark text-white border-t border-brand-green/20">
      
      {/* Top Footer Banner */}
      <div className="bg-brand-green/20 border-b border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🍛</span>
            <span className="text-sm font-semibold text-gray-200">
              Fresh vegetarian home style food, prepared under high hygiene standards.
            </span>
          </div>
          <span className="flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span>Serving Brampton & Surrounding Sectors</span>
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-orange text-white p-2 rounded-xl">
                <Leaf className="h-5 w-5" fill="currentColor" />
              </div>
              <span className="font-display text-2xl font-black text-white">
                24/7 <span className="text-brand-orange">Kitchen</span>
              </span>
            </div>
            <p className="text-xs text-brand-orange font-bold uppercase tracking-wider">
              Taste Like Home, Made With Love
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              We deliver premium, healthy, 100% Indian vegetarian homemade tiffin packages across Brampton. Crafted with fresh ingredients and authentic taste daily.
            </p>
            <div className="pt-2">
              <a
                href="https://instagram.com/24_7.kitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white/5 hover:bg-brand-orange text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow @24_7.kitchen</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-1 gap-3.5">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Support Info Column */}
          <div className="md:col-span-4 space-y-6 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-1">
              Location Hub
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white">24/7 Kitchen Hub</span>
                  <span className="text-xs text-gray-400">Dixie & Bovaird, Brampton, Ontario</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <Instagram className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white">Instagram Direct Message</span>
                  <a
                    href="https://instagram.com/24_7.kitchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-orange hover:underline font-bold"
                  >
                    @24_7.kitchen
                  </a>
                </div>
              </div>
            </div>

            {/* Quality Seals */}
            <div className="pt-4 border-t border-white/5 flex items-center space-x-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">
              <span>✓ Pure Veg</span>
              <span>•</span>
              <span>✓ Fresh Cooked</span>
              <span>•</span>
              <span>✓ Brampton Local</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-xs text-gray-400 font-medium">
          <p>
            &copy; 2026 24/7 Kitchen. All Rights Reserved.
          </p>
          <p className="flex items-center space-x-1 justify-center">
            <span>Taste Like Home, Made With</span>
            <Heart className="h-3.5 w-3.5 text-brand-orange fill-brand-orange" />
            <span>for Brampton residents.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
