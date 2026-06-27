import { MapPin, Navigation, Compass, Truck } from "lucide-react";
import { motion } from "motion/react";

export default function ServiceAreaSection() {
  const deliveryAreas = [
    "Dixie & Bovaird (Our Kitchen)",
    "Trinity Common Mall area",
    "Sheridan College Brampton Campus",
    "Chinguacousy Road sectors",
    "Mount Pleasant Area",
    "Sandalwood Parkway residential",
    "Northgate & Southgate sectors",
    "Springdale community"
  ];

  return (
    <section id="service-area" className="py-24 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Service Area Info Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-brand-orange text-xs font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block">
              Service Location
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-green leading-tight">
              Proudly Serving <br />
              Across Brampton
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed">
              Our hygienic central kitchen is based at the prominent intersection of <strong>Dixie & Bovaird</strong> in Brampton, Ontario. We prepare, pack, and ship all meals fresh directly from this hub.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-700 bg-brand-cream/40 p-4 rounded-2xl border border-brand-orange/10">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 animate-bounce" />
                <span className="font-bold">📍 Dixie & Bovaird, Brampton, ON</span>
              </div>

              <div className="flex items-start space-x-3 text-sm text-gray-700 p-1">
                <Truck className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-brand-green block">Doorstep Delivery Available</span>
                  <span className="text-xs text-gray-500">We drive straight to your house, basement entrance, or student apartment unit with secure insulated carriers.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Key Delivery Coverages
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {deliveryAreas.map((area, i) => (
                  <div key={i} className="flex items-center space-x-1.5 text-xs font-semibold text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Google Map Column */}
          <div className="lg:col-span-7 h-[450px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              id="brampton-map"
              src="https://maps.google.com/maps?q=Dixie%20%26%20Bovaird%2C%20Brampton%2C%20Ontario&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="24/7 Kitchen Brampton Location"
            />
            {/* Visual indicator card over map */}
            <div className="absolute bottom-6 left-6 bg-brand-dark text-white p-4 rounded-2xl shadow-lg flex items-center space-x-3 text-left max-w-xs border border-white/10 backdrop-blur-md bg-opacity-95">
              <div className="bg-brand-orange p-2 rounded-xl text-white">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-xs">Dixie & Bovaird Intersection</h4>
                <p className="text-[10px] text-gray-300 mt-0.5">Central Brampton Ontario Hub</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
