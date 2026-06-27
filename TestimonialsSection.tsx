import { TESTIMONIALS } from "./data";
import { Star, ShieldCheck, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-brand-cream bg-gradient-to-b from-white via-brand-cream/30 to-brand-cream/60 text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-orange text-xs font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-green leading-tight">
            Loved by Brampton Students <br className="hidden sm:inline" />
            & Local Families
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Don't just take our word for it. Read honest reviews from Sheridan College students, daily working subscribers, and families in Brampton.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 relative flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative quotation icon */}
              <Quote className="absolute top-6 right-8 h-8 w-8 text-brand-orange/10 transform rotate-180" />

              <div>
                {/* Stars */}
                <div className="flex space-x-1.5 mb-5 text-brand-orange">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed font-medium text-left mb-6">
                  “{review.text}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-4">
                <div className="text-left">
                  <h4 className="font-display font-extrabold text-sm text-brand-dark">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {review.role}
                  </p>
                </div>
                {review.tag && (
                  <span className="bg-brand-green/10 text-brand-green text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-md flex items-center space-x-0.5">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                    <span>{review.tag}</span>
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Brand stats footer display */}
        <div className="mt-16 text-center max-w-md mx-auto p-4 bg-brand-green text-white rounded-2xl shadow-lg">
          <span className="text-xs font-bold block">🍛 Satisfying 150+ Brampton residents daily</span>
        </div>

      </div>
    </section>
  );
}
