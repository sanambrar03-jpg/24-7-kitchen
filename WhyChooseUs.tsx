import { FEATURES } from "./data";
import * as Icons from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  // Simple helper to get the Lucide component dynamically
  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    if (!LucideIcon) return <Icons.HelpCircle className="h-6 w-6" />;
    return <LucideIcon className="h-6 w-6" />;
  };

  return (
    <section id="why-us" className="py-24 bg-brand-cream bg-gradient-to-b from-brand-cream/60 via-brand-cream to-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-orange text-xs font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
            Our Benefits
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-green leading-tight">
            Why Families and Students <br className="hidden sm:inline" />
            Choose 24/7 Kitchen
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            We cook with the same integrity and affection as mothers do back home. Here is why our subscription plans are highly rated in Brampton.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:border-brand-green/20 hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left group"
            >
              {/* Icon Container */}
              <div className="bg-brand-cream text-brand-green p-4 rounded-2xl mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 shadow-sm">
                {getIcon(feature.iconName)}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-brand-green transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Live counter / active status */}
        <div className="mt-16 p-6 rounded-3xl bg-brand-green/5 border border-brand-green/10 flex flex-col md:flex-row justify-around items-center text-center gap-6">
          <div>
            <span className="block font-display text-3xl font-black text-brand-green">100%</span>
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Indian Desi Ghee & Oils</span>
          </div>
          <div className="hidden md:block w-px h-10 bg-brand-green/15" />
          <div>
            <span className="block font-display text-3xl font-black text-brand-green">Daily Fresh</span>
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Prepared Under 4 Hours of Delivery</span>
          </div>
          <div className="hidden md:block w-px h-10 bg-brand-green/15" />
          <div>
            <span className="block font-display text-3xl font-black text-brand-green">Zero</span>
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Preservatives or MSG Additives</span>
          </div>
        </div>

      </div>
    </section>
  );
}
