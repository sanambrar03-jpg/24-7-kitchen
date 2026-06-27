import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Instagram, Truck, Check, Send, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.3 6.3 0 0 0 6.39-6.27V9.21a8.6 8.6 0 0 0 5 1.56V7.33a4.93 4.93 0 0 1-3.07-1.04z"/>
  </svg>
);

interface ContactSectionProps {
  onOrderClick: () => void;
}

export default function ContactSection({ onOrderClick }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("subscribe");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please provide your name and phone number so we can reach you.");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setSubject("subscribe");
    setMessage("");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/24_7.kitchen", "_blank", "noopener,noreferrer");
  };

  const handleTikTokClick = () => {
    window.open("https://tiktok.com/@24sevenkitchen", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-white text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-orange text-xs font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-green leading-tight">
            Get Your Tiffin Today
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Ready to experience authentic, fresh, homemade Indian vegetarian food in Brampton? Send us a message, order your plan, or directly DM us on Instagram to secure your delivery slot!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Contact Details Card Column */}
          <div className="lg:col-span-5 space-y-8 bg-brand-cream/30 p-8 md:p-10 rounded-3xl border border-brand-green/10 text-left">
            <div>
              <h3 className="font-display text-2xl font-black text-brand-green">
                24/7 Kitchen
              </h3>
              <p className="text-xs text-brand-orange font-bold uppercase tracking-widest mt-1">
                Taste Like Home, Made With Love
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-brand-green/15">
              {/* Address detail */}
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green text-white p-3 rounded-xl shrink-0 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider leading-none">Our Location</h4>
                  <p className="text-sm font-semibold text-brand-dark mt-1.5">
                    Dixie & Bovaird, Brampton, Ontario, Canada
                  </p>
                </div>
              </div>

              {/* Instagram handle */}
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green text-white p-3 rounded-xl shrink-0 shadow-sm">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider leading-none">Instagram DM</h4>
                  <a 
                    href="https://instagram.com/24_7.kitchen" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-extrabold text-brand-orange hover:underline block mt-1.5"
                  >
                    @24_7.kitchen
                  </a>
                </div>
              </div>

              {/* TikTok handle */}
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green text-white p-3 rounded-xl shrink-0 shadow-sm">
                  <TikTokIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider leading-none">TikTok</h4>
                  <a 
                    href="https://tiktok.com/@24sevenkitchen" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-extrabold text-brand-orange hover:underline block mt-1.5"
                  >
                    @24sevenkitchen
                  </a>
                </div>
              </div>

              {/* Delivery info */}
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green text-white p-3 rounded-xl shrink-0 shadow-sm">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider leading-none">Delivery Area</h4>
                  <p className="text-sm font-semibold text-brand-dark mt-1.5">
                    Brampton and nearby areas (Available Daily)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <button
                onClick={handleInstagramClick}
                className="w-full bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-sm py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>DM on Instagram</span>
              </button>
              
              <button
                onClick={handleTikTokClick}
                className="w-full bg-black hover:bg-gray-800 text-white font-extrabold text-sm py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <TikTokIcon className="h-5 w-5" />
                <span>Follow on TikTok</span>
              </button>

              <button
                onClick={onOrderClick}
                className="w-full bg-brand-green hover:bg-emerald-800 text-white font-extrabold text-xs py-3 rounded-2xl transition-all uppercase tracking-wider"
              >
                Order Tiffin Subscription
              </button>
            </div>
          </div>

          {/* Quick Inquiry Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                <h3 className="font-display text-xl font-bold text-brand-dark flex items-center space-x-2">
                  <span>Send a Quick Message</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jaspreet Kaur"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (647) 987-6543"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Inquiry Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green focus:outline-none bg-white"
                  >
                    <option value="subscribe">Subscribe to a Monthly Plan</option>
                    <option value="general">General Inquiry</option>
                    <option value="catering">Small Event / Party Catering</option>
                    <option value="trial">Request a One-Day Trial Meal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Message / Special Request (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your delivery address or college student discount request!"
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-emerald-800 text-white font-extrabold text-sm py-4 rounded-2xl shadow-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 py-6 text-center"
              >
                <div className="h-16 w-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8" />
                </div>
                
                <h3 className="font-display text-2xl font-black text-brand-green">
                  Inquiry Prepared!
                </h3>
                
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>! We've structured your inquiry. Because we coordinate all subscriptions directly via Instagram for speed and convenience, click below to paste this note to us!
                </p>

                <div className="bg-brand-cream/40 p-5 rounded-2xl text-left border border-brand-green/10 max-w-md mx-auto text-xs space-y-1 text-gray-700">
                  <p><strong>Name:</strong> {name}</p>
                  <p><strong>Phone:</strong> {phone}</p>
                  <p><strong>Topic:</strong> {subject === "subscribe" ? "Monthly Subscription" : "Inquiry"}</p>
                  {message && <p><strong>Note:</strong> "{message}"</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
                  <button
                    onClick={handleInstagramClick}
                    className="bg-brand-orange hover:bg-amber-600 text-white px-6 py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all flex-1"
                  >
                    <Instagram className="h-4.5 w-4.5" />
                    <span>Open Instagram & Paste</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-6 py-3.5 rounded-xl font-bold text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
