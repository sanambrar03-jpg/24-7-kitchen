import { useState } from "react";
import { GALLERY_ITEMS, GalleryItem } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye } from "lucide-react";

export default function FoodGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Dishes" },
    { id: "fresh rotis", name: "Fresh Rotis" },
    { id: "curry", name: "Curry" },
    { id: "dry sabzi", name: "Sabzi" },
    { id: "packed tiffins", name: "Packed Tiffins" },
    { id: "sides", name: "Sides (Rice & Raita)" }
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "sides") {
      return item.category === "Rice" || item.category === "Raita";
    }
    return item.category.toLowerCase() === activeFilter;
  });

  return (
    <section id="gallery" className="py-24 bg-white text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-brand-orange text-xs font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
            Culinary Showcase
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-green leading-tight">
            Our Homemade Creations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Take a look at what we prepare fresh in our hygienic kitchen every single day. 100% vegetarian, loaded with authentic homemade flavors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                activeFilter === cat.id
                  ? "bg-brand-green text-white shadow-md"
                  : "bg-brand-cream/40 text-gray-600 hover:text-brand-green hover:bg-brand-cream"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative bg-brand-cream/10 rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-brand-green/20 transition-all duration-300 aspect-square"
              >
                {/* Food Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/45 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Category Label */}
                <span className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </span>

                {/* Info Text (Slides in on mobile/hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left flex flex-col justify-end text-white">
                  <span className="text-brand-orange flex items-center space-x-1 mb-1">
                    <Sparkles className="h-3 w-3" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Chef's daily selection</span>
                  </span>
                  <h4 className="font-display font-black text-lg md:text-xl tracking-tight leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Freshly prepared daily with handpicked pure Canadian and organic Indian ingredients.
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom gallery footer note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-xs font-semibold flex items-center justify-center space-x-2">
            <span>🍛 Menu changes daily to ensure variety for weekly subscribers!</span>
          </p>
        </div>

      </div>
    </section>
  );
}
