import { motion } from "motion/react";
import { Check, ArrowRight, Calendar, Leaf } from "lucide-react";

interface HeroSectionProps {
  onOrderClick: () => void;
}

export default function HeroSection({ onOrderClick }: HeroSectionProps) {
  const trustIndicators = [
    "100% Vegetarian",
    "Homemade Daily",
    "Fresh Ingredients",
    "Delivery Available",
    "Affordable Monthly Plans",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_indian_food_1782539396177.jpg"
          alt="Premium Homemade Indian Vegetarian Thali"
          className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-10000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/65" />
        {/* Subtle texture or glowing ambient point */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col justify-center min-h-[85vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Active Delivery Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-green/30 border border-brand-green/40 backdrop-blur-md px-4 py-2 rounded-full text-white"
            >
              <Leaf className="h-4 w-4 text-brand-orange fill-brand-orange" />
              <span className="text-xs font-bold tracking-wider uppercase">
                Brampton's Premium Tiffin Service
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight"
            >
              Homemade Vegetarian Tiffins <br />
              <span className="text-brand-orange bg-gradient-to-r from-brand-orange to-amber-400 bg-clip-text text-transparent">
                Delivered Across Brampton
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-200 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
            >
              Freshly prepared meals made with authentic homemade taste, quality ingredients, and delivered right to your doorstep. Feel the warmth of home-style cooking with every bite.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={onOrderClick}
                className="bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <span>Order Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href="#plans"
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-full border border-white/20 backdrop-blur-md transition-all hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5 text-brand-orange" />
                <span>View Monthly Plans</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 border-t border-white/10"
            >
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                Our Guarantee
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3.5 gap-x-6">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2 text-white">
                    <div className="bg-brand-green text-white p-1 rounded-full shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-gray-200">{indicator}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Graphical/Card Overlay Visual on desktop */}
          <div className="hidden lg:col-span-5 lg:flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 space-y-6 text-brand-dark relative"
            >
              {/* Floating review badge */}
              <div className="absolute -top-4 -right-4 bg-brand-orange text-white text-xs font-black px-4 py-2 rounded-2xl shadow-lg flex items-center space-x-1 rotate-6">
                <span>⭐ 4.9/5 Rating</span>
              </div>

              <h3 className="font-display font-extrabold text-xl text-brand-green flex items-center space-x-2">
                <span>Daily Chef's Special</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3.5 p-3 rounded-2xl bg-brand-cream/40">
                  <span className="text-2xl">🫓</span>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Fresh Tawa Rotis (Ghee Brushed)</h4>
                    <p className="text-xs text-gray-500">Soft, puffy flatbreads packed hot in aluminum foil.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 p-3 rounded-2xl bg-brand-cream/40">
                  <span className="text-2xl">🥣</span>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Ghar Ka Salad & Raita</h4>
                    <p className="text-xs text-gray-500">Fresh cucumbers, carrots, and sweet-tart spice yogurt.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOrderClick}
                  className="w-full bg-brand-green hover:bg-emerald-800 text-white font-extrabold text-sm py-3.5 rounded-2xl transition-colors shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Order Your Tiffin Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
