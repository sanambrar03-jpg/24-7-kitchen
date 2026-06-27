import { useState } from "react";
import { TIFFIN_PLANS } from "./data";
import { Check, Flame, Sparkles, ArrowRight, ShieldCheck, MapPin, Leaf, Truck, Heart, Users } from "lucide-react";
import { motion } from "motion/react";

interface MonthlyPlansProps {
  onOrderClick: (planId: string) => void;
}

export default function MonthlyPlans({ onOrderClick }: MonthlyPlansProps) {
  const [billingCycle, setBillingCycle] = useState<"5-days" | "6-days">("5-days");

  return (
    <section id="plans" className="py-24 bg-brand-cream/20 text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Inspired by Flyer) */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
          <div className="inline-flex flex-col items-center justify-center space-y-3">
             <span className="bg-brand-green text-white text-xl md:text-2xl font-black uppercase tracking-widest px-8 py-2 rounded-sm shadow-md rotate-[-1deg]">
               Monthly Tiffin Plans
             </span>
             <div className="flex items-center text-brand-dark font-black text-lg md:text-xl uppercase tracking-wide">
               <MapPin className="h-6 w-6 text-brand-orange mr-2" />
               Dixie & Bovaird, Brampton
             </div>
          </div>
          
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-2xl mx-auto mt-4">
            Choose the perfect portions for your lifestyle. Free daily delivery across Brampton included in all plans. No hidden setup fees, cancel or hold anytime.
          </p>

          {/* Schedule Billing Toggle */}
          <div className="flex justify-center pt-2">
            <div className="bg-white p-1.5 rounded-2xl border border-brand-green/20 inline-flex items-center space-x-1 shadow-sm">
              <button
                onClick={() => setBillingCycle("5-days")}
                className={`px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all ${
                  billingCycle === "5-days"
                    ? "bg-brand-green text-white shadow-md"
                    : "text-gray-600 hover:text-brand-green hover:bg-brand-cream/50"
                }`}
              >
                📅 Mon - Fri (5 Days)
              </button>
              <button
                onClick={() => setBillingCycle("6-days")}
                className={`px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all ${
                  billingCycle === "6-days"
                    ? "bg-brand-green text-white shadow-md"
                    : "text-gray-600 hover:text-brand-green hover:bg-brand-cream/50"
                }`}
              >
                📅 Mon - Sat (6 Days)
              </button>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {TIFFIN_PLANS.map((plan, index) => {
            const isPopular = plan.badge === "Most Popular";
            const isMini = plan.name === "MINI COMBO";
            const price = billingCycle === "5-days" ? plan.priceFiveDays : plan.priceSixDays;
            
            // Subtitle based on flyer
            const subtitle = isMini 
              ? "Simple • Fresh • Satisfying" 
              : "Complete • Healthy • Homemade";

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-3xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden bg-white shadow-xl border-2 ${
                  isMini ? "border-brand-green/20" : "border-brand-orange/20 ring-4 ring-brand-orange/10"
                }`}
              >
                {/* Plan Header */}
                <div className={`py-6 px-8 text-center border-b-4 ${
                  isMini ? "bg-brand-green text-white border-brand-dark" : "bg-brand-orange text-white border-amber-600"
                }`}>
                  <h3 className="font-display text-3xl font-black tracking-widest uppercase flex items-center justify-center space-x-3">
                    <Leaf className="h-6 w-6 opacity-80" />
                    <span>{plan.name}</span>
                    <Leaf className="h-6 w-6 opacity-80" />
                  </h3>
                  <p className="text-sm mt-2 font-medium italic opacity-90 tracking-wide">
                    {subtitle}
                  </p>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  {/* Included Items */}
                  <div className="space-y-4 flex-1">
                    <div className="space-y-3.5">
                      {plan.includes.map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 text-base">
                          <span className={`p-1 rounded-full shrink-0 shadow-sm ${
                            isMini ? "bg-brand-green text-white" : "bg-brand-orange text-white"
                          }`}>
                            <Check className="h-4 w-4 stroke-[3]" />
                          </span>
                          <span className="text-gray-800 font-bold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Display */}
                  <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200 text-center">
                    <div className="inline-flex flex-col items-center">
                       <span className="text-sm font-extrabold text-gray-500 uppercase tracking-widest mb-1">
                         {billingCycle === "5-days" ? "MON-FRI" : "MON-SAT"}
                       </span>
                       <div className="flex items-baseline space-x-1 justify-center">
                         <span className={`text-6xl font-black tracking-tight font-display ${
                           isMini ? "text-brand-green" : "text-brand-orange"
                         }`}>
                           ${price}
                         </span>
                         <span className="text-lg font-bold text-gray-500">
                           /month
                         </span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Order Button */}
                <div className="p-6 pt-0 bg-white mt-auto">
                  <button
                    onClick={() => onOrderClick(plan.id)}
                    className={`w-full py-4 rounded-2xl font-black text-base transition-all shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2 ${
                      isMini
                        ? "bg-brand-green hover:bg-brand-dark text-white"
                        : "bg-brand-orange hover:bg-amber-600 text-white"
                    }`}
                  >
                    <span>Order {isMini ? "Mini" : "Full"} Combo</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Badges (from flyer) */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <Leaf className="h-8 w-8 text-brand-green" />
            <span className="font-bold text-xs uppercase tracking-tight text-gray-800">100%<br/>Vegetarian</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <Heart className="h-8 w-8 text-brand-orange" />
            <span className="font-bold text-xs uppercase tracking-tight text-gray-800">Homemade<br/>Fresh Food</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <Truck className="h-8 w-8 text-brand-green" />
            <span className="font-bold text-xs uppercase tracking-tight text-gray-800">Delivery<br/>Available</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <ShieldCheck className="h-8 w-8 text-brand-orange" />
            <span className="font-bold text-xs uppercase tracking-tight text-gray-800">Hygienic<br/>Kitchen</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100 col-span-2 md:col-span-1">
            <Users className="h-8 w-8 text-brand-green" />
            <span className="font-bold text-xs uppercase tracking-tight text-gray-800">Student<br/>Friendly Prices</span>
          </div>
        </div>

      </div>
    </section>
  );
}
