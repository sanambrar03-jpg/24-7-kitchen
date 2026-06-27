import { motion } from "motion/react";
import { Heart, Sparkles, MapPin, ChefHat } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="story" className="py-24 bg-brand-cream/40 text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Collage & Visual Column */}
          <div className="lg:col-span-5 relative">
            {/* Main Image Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-sm mx-auto lg:max-w-none"
            >
              <img
                src="/src/assets/images/packed_tiffins_1782539467486.jpg"
                alt="Homemade freshly packed healthy vegetarian food"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center space-x-3 text-left">
                <div className="bg-brand-orange text-white p-2 rounded-xl">
                  <ChefHat className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-500 uppercase tracking-widest leading-none">Our Promise</h4>
                  <p className="font-display font-extrabold text-sm text-brand-dark mt-1">
                    Authentic Ghar ka Swaad
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Back decorative floating shape */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-orange/10 rounded-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-green/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Text & Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-brand-orange text-xs font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-green leading-tight">
                Freshly Cooked Meals, <br />
                Just Like Home
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                At <strong className="text-brand-green">24/7 Kitchen</strong>, we believe everyone deserves the comforting warmth of a fresh, hot, home-cooked meal. Moving away from family, busy university schedules, or tiring professional shifts shouldn't mean compromising on your health or the foods you love.
              </p>
              <p>
                We prepare clean, nutritious vegetarian meals every single day using premium quality ingredients and traditional family recipes passed down through generations. Our spices are ground fresh, our rotis are rolled hot by hand, and our vegetables are handpicked daily.
              </p>
              <p>
                Our mission is to provide students, hard-working professionals, and families in Brampton with healthy, budget-friendly meal subscriptions that feel just like home. With 24/7 Kitchen, you're not just buying food; you are becoming part of our warm family.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <Heart className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">Made with Love</h4>
                  <p className="text-xs text-gray-500 mt-1">Authentic, heart-healthy recipes made with absolute care.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <Sparkles className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">Affordable Pricing</h4>
                  <p className="text-xs text-gray-500 mt-1">Generous Indian vegetarian portions designed for student budgets.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
