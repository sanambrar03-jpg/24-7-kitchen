import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import MonthlyPlans from "./MonthlyPlans";
import AboutUs from "./AboutUs";
import FoodGallery from "./FoodGallery";
import TestimonialsSection from "./TestimonialsSection";
import ServiceAreaSection from "./ServiceAreaSection";
import InstagramFeedSection from "./InstagramFeedSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import OrderModal from "./OrderModal";
import { Search, Heart, Sparkles, MapPin } from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlanId, setModalPlanId] = useState("full-combo");

  const handleOpenOrderModal = (planId?: string) => {
    if (planId) {
      setModalPlanId(planId);
    }
    setIsModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsModalOpen(false);
  };

  // SEO coverage keywords required by the business
  const seoKeywords = [
    "Brampton Tiffin Service",
    "Vegetarian Tiffin Brampton",
    "Indian Tiffin Service Brampton",
    "Homemade Food Brampton",
    "Veg Meal Delivery Brampton",
    "Monthly Tiffin Plans Brampton",
    "Indian Food Delivery Brampton",
    "Vegetarian Meal Plans Brampton"
  ];

  return (
    <div className="bg-[#FFF8E7] bg-opacity-30 min-h-screen text-brand-dark font-sans selection:bg-brand-green/20 selection:text-brand-green">
      
      {/* Premium Navigation Header */}
      <Navbar onOrderClick={() => handleOpenOrderModal("full-combo")} />

      {/* Main Single-Screen Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOrderClick={() => handleOpenOrderModal("full-combo")} />

        {/* 2. Why Choose Us */}
        <WhyChooseUs />

        {/* 3. Monthly Tiffin Plans */}
        <MonthlyPlans onOrderClick={handleOpenOrderModal} />

        {/* 4. About Us (Our Story) */}
        <AboutUs />

        {/* 5. Food Gallery (Interactive Grid) */}
        <FoodGallery />

        {/* 6. Testimonials (Customer Reviews) */}
        <TestimonialsSection />

        {/* 7. Service Area (Delivery Areas & Maps) */}
        <ServiceAreaSection />

        {/* 8. Instagram Journey */}
        <InstagramFeedSection />

        {/* 9. Contact section & lead form */}
        <ContactSection onOrderClick={() => handleOpenOrderModal("full-combo")} />
      </main>

      {/* SEO Requirements Segment: Stylized as DoorDash/UberEats style categories search tags */}
      <section className="bg-brand-cream/40 py-12 border-t border-brand-green/10 text-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex items-center space-x-2 text-brand-green font-display font-extrabold text-sm uppercase tracking-wider mb-6">
            <Search className="h-4 w-4" />
            <span>Popular Meal Subscriptions & Coverage Index</span>
          </div>
          
          <p className="text-xs text-gray-500 font-medium mb-4">
            Looking for authentic home-style Indian cuisine in Ontario? 24/7 Kitchen is Brampton's top rated homemade vegetarian tiffin provider. Find us under these popular searches:
          </p>

          <div className="flex flex-wrap gap-2.5">
            {seoKeywords.map((keyword, idx) => (
              <span
                key={idx}
                className="bg-white border border-gray-200 hover:border-brand-green/30 hover:text-brand-green transition-all px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-600 shadow-sm cursor-default"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[11px] text-gray-400 font-medium">
            <div className="flex items-center space-x-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-orange" />
              <span>Coverage Hub: Dixie Rd & Bovaird Dr W, Brampton, ON L6S 0C5</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-3.5 w-3.5 text-brand-orange fill-brand-orange" />
              <span>Ghar jaisa swaad, har din fresh.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer Section */}
      <FooterSection />

      {/* Interactive Subscription Inquiry Builder Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={handleCloseOrderModal}
        initialPlanId={modalPlanId}
      />

    </div>
  );
}
