import { useState } from "react";
import { X, Check, Copy, Instagram, Calendar, MapPin, MessageSquare, Sparkles, AlertCircle } from "lucide-react";
import { TIFFIN_PLANS, TiffinPlan } from "./data";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

export default function OrderModal({ isOpen, onClose, initialPlanId }: OrderModalProps) {
  const [step, setStep] = useState(1);
  const [selectedPlanId, setSelectedPlanId] = useState(initialPlanId || "full-combo");
  const [scheduleType, setScheduleType] = useState<"5-days" | "6-days">("5-days");
  const [deliverySlot, setDeliverySlot] = useState<"lunch" | "dinner">("dinner");
  
  // Customer details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  
  const [copied, setCopied] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  if (!isOpen) return null;

  const currentPlan = TIFFIN_PLANS.find((p) => p.id === selectedPlanId);

const isTruckersCombo =
  currentPlan?.id === "COMBO 1" ||
  currentPlan?.id === "COMBO 2" ||
  currentPlan?.id === "COMBO 3";

const basePrice =
  scheduleType === "5-days"
    ? currentPlan.priceFiveDays
    : currentPlan.priceSixDays;

const totalCost = basePrice;

  // Generate copy text for Instagram DM
  const generateOrderMessage = () => {
    return `Hello 24/7 Kitchen! 🌟 I'd like to subscribe to a tiffin plan. Here are my details:

📋 PLAN DETAILS:
• Plan: ${currentPlan.name}
• Schedule: ${scheduleType === "5-days" ? "Monday to Friday (5 days)" : "Monday to Saturday (6 days)"}
• Delivery Slot: ${deliverySlot === "lunch" ? "Lunch (11:30 AM - 1:30 PM)" : "Dinner (5:30 PM - 8:00 PM)"}

📍 DELIVERY DETAILS:
• Name: ${name || "[Your Name]"}
• Phone: ${phone || "[Your Phone Number]"}
• Address: ${address || "[Your Brampton Address]"}
• Start Date: ${startDate || "As soon as possible"}

💰 Estimated Price: $${totalCost}/month
Can you please confirm delivery availability for my address? Thank you!`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateOrderMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlaceOrder = async () => {
    if (isSubmitting) return;
setIsSubmitting(true);

const orderData = {
    name,
    phone,
    address,
    plan: currentPlan?.name,
    startDate,
    total: scheduleType === "5-days"
  ? currentPlan.priceFiveDays
  : currentPlan.priceSixDays,
  };

try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwLipnu-GailTS7SIvqEQ-yJvQDm_f-7f4owcbn2dEguFAJCXv9OdKnO6D-4MJlPr3B/exec", {
  method: "POST",
  body: JSON.stringify(orderData),
});
const result = await response.json();

    if (result.success) {
  setIsSubmitting(false);
  setShowSuccess(true);

  setTimeout(() => {
    setShowSuccess(false);
    onClose();
  }, 3000);
}
} else {
  setIsSubmitting(false);
  alert("Something went wrong.");
}
  } catch (err) {
  setIsSubmitting(false);
  console.error(err);
  alert(err.message);
}
};

  const nextStep = () => {
    if (step === 2) {
      if (!name.trim() || !phone.trim() || !address.trim()) {
        alert("Please fill in your name, phone number, and delivery address to continue.");
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-brand-green/10 my-8">
        
        {/* Header banner */}
        <div className="bg-brand-green text-white p-6 flex justify-between items-center relative">
          <div>
            <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              Subscription inquiry
            </span>
            <h3 className="font-display text-2xl font-extrabold mt-1.5">
              Order Your Tiffin Plan
            </h3>
            <p className="text-emerald-100 text-xs mt-0.5">
              Freshly prepared homemade meals delivered in Brampton, Ontario
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors absolute top-6 right-6"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Step Indicators */}
        <div className="bg-brand-cream/40 px-6 py-3 border-b border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
          <div className="flex items-center space-x-6">
            <span className={step === 1 ? "text-brand-green font-bold" : step > 1 ? "text-emerald-700" : ""}>
              1. Choose Food Plan
            </span>
            <span className="text-gray-300">/</span>
            <span className={step === 2 ? "text-brand-green font-bold" : step > 2 ? "text-emerald-700" : ""}>
              2. Delivery Address
            </span>
            <span className="text-gray-300">/</span>
            <span className={step === 3 ? "text-brand-green font-bold" : ""}>
              3. Confirm & DM
            </span>
          </div>
          <span className="text-brand-orange bg-amber-50 px-2 py-0.5 rounded-md text-[10px]">
            Step {step} of 3
          </span>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
          
          {/* STEP 1: Select Plan */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Select Plan Toggle */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  Select Tiffin Plan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TIFFIN_PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden ${
                        selectedPlanId === plan.id
                          ? "border-brand-green bg-emerald-50/40 ring-2 ring-brand-green"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-display font-black text-sm tracking-wide text-brand-dark">
                          {plan.name}
                        </span>
                        {selectedPlanId === plan.id && (
                          <span className="h-5 w-5 bg-brand-green text-white rounded-full flex items-center justify-center">
                            <Check className="h-3 w-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {plan.description}
                      </p>
                      <div className="mt-3 flex items-baseline space-x-1">
                        <span className="text-lg font-extrabold text-brand-green">
                          ${plan.priceFiveDays}
                        </span>
                        <span className="text-[10px] text-gray-400">
  {plan.id === "mini-combo" || plan.id === "full-combo"
    ? "/month"
    : "/meal"}
</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule Select */}
              {!isTruckersCombo && (
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  Choose Weekly Schedule:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setScheduleType("5-days")}
                    className={`py-3 px-4 rounded-xl border text-center font-semibold text-sm transition-all ${
                      scheduleType === "5-days"
                        ? "bg-brand-green text-white border-brand-green shadow-md"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Monday - Friday
                    <span className="block text-[10px] font-normal opacity-90">
                      $${currentPlan.priceFiveDays}
{!isTruckersCombo && "/month"}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setScheduleType("6-days")}
                    className={`py-3 px-4 rounded-xl border text-center font-semibold text-sm transition-all ${
                      scheduleType === "6-days"
                        ? "bg-brand-green text-white border-brand-green shadow-md"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Monday - Saturday
                    <span className="block text-[10px] font-normal opacity-90">
                      $${currentPlan.priceSixDays}
{!isTruckersCombo && "/month"}
                    </span>
                  </button>
                </div>
              </div>
)}
              {/* Delivery Timing Slot */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  Preferred Delivery Slot:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliverySlot("lunch")}
                    className={`py-3 px-4 rounded-xl border text-center font-semibold text-sm transition-all ${
                      deliverySlot === "lunch"
                        ? "bg-brand-orange text-white border-brand-orange shadow-md"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    🌞 Lunch Slot
                    <span className="block text-[10px] font-normal opacity-95">
                      11:30 AM - 1:30 PM
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliverySlot("dinner")}
                    className={`py-3 px-4 rounded-xl border text-center font-semibold text-sm transition-all ${
                      deliverySlot === "dinner"
                        ? "bg-brand-orange text-white border-brand-orange shadow-md"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    🌙 Dinner Slot
                    <span className="block text-[10px] font-normal opacity-95">
                      5:30 PM - 8:00 PM
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Address & Date Details */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="p-4 bg-brand-cream text-brand-dark rounded-2xl border border-brand-orange/10 flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-brand-green">Active Delivery Area Notice:</span> We deliver delicious fresh hot meals everyday across Brampton, ON (near Dixie & Bovaird, Chinguacousy, Mount Pleasant, Sheridan College Brampton, and neighboring residential sectors).
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Harpreet Singh"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Mobile Phone Number (for Delivery Text Alerts) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +1 (647) 123-4567"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Full Brampton Delivery Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Apt 304, 15 Dixie Rd, Brampton, ON L6S 0A1"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green focus:outline-none"
                />
                <span className="text-[10px] text-gray-400 mt-1 block">
                  Please provide complete buzz codes, unit numbers, or basement instructions if applicable.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Preferred Subscription Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Confirm Summary & Submit via Instagram DM */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Receipt Preview */}
              <div className="bg-brand-cream/30 border-2 border-dashed border-brand-green/20 rounded-2xl p-5 md:p-6 text-brand-dark">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <h4 className="font-display font-extrabold text-lg text-brand-green">
                      24/7 Kitchen Receipt
                    </h4>
                    <p className="text-[10px] text-gray-400">Order Inquiry Summary</p>
                  </div>
                  <Sparkles className="h-5 w-5 text-brand-orange animate-bounce" />
                </div>

                <div className="py-4 space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Plan Option:</span>
                    <span className="font-bold">{currentPlan.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Weekly Schedule:</span>
                    <span className="font-bold">
                      {scheduleType === "5-days" ? "Monday - Friday (5 days)" : "Monday - Saturday (6 days)"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery Slot:</span>
                    <span className="font-bold capitalize">{deliverySlot} Slot</span>
                  </div>

                  <div className="pt-2.5 border-t border-gray-100 space-y-1 bg-white/40 p-2.5 rounded-lg">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Deliver to:</span>
                      <span className="font-medium text-right max-w-[200px] truncate">{name}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Phone:</span>
                      <span className="font-medium">{phone}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Address:</span>
                      <span className="font-medium text-right max-w-[200px] truncate">{address}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex justify-between items-baseline">
                  <span className="font-bold text-sm text-gray-800">Total Estimated Cost:</span>
                  <div className="text-right">
                    <span className="font-display text-2xl font-black text-brand-green">
                      ${totalCost}
                    </span>
                    <span className="text-[10px] text-gray-400 block">
  CAD / {currentPlan?.id === "mini-combo" || currentPlan?.id === "full-combo" ? "Month" : "Meal"} (Tax-free)
</span>
                  </div>
                </div>
              </div>

              {/* Action instructions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2.5 text-xs text-gray-500 bg-amber-50 p-3.5 rounded-xl border border-amber-100">
                  <AlertCircle className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                  <p>
                    <strong>How to complete your order:</strong> Click the primary green button below. This will **automatically copy** your order details to your clipboard and open our official Instagram profile <span className="font-bold text-brand-orange">@24_7.kitchen</span>. Simply send us a Direct Message (DM) and paste the details! We'll confirm your delivery slot instantly.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
  type="button"
  onClick={handlePlaceOrder}
  disabled={isSubmitting}
  className="flex-1 bg-brand-green hover:bg-emerald-800 text-white py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <Instagram className="h-5 w-5" />
  <span>{isSubmitting ? "Placing Order..." : "Place Order"}</span>
</button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 py-4 px-5 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="h-5 w-5 text-emerald-500" />
                        <span className="text-emerald-600">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-5 w-5 text-gray-400" />
                        <span>Copy Order Text</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="text-gray-500 hover:text-gray-800 text-sm font-semibold transition-colors"
              >
                Back
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2">
  <span className="text-xs font-semibold text-gray-500 mr-2">
    Total:
    <span className="text-brand-green font-bold text-sm">
      ${totalCost}/{isTruckersCombo ? "meal" : "month"}
    </span>
  </span>
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-brand-orange hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center space-x-1"
              >
                <span>Continue</span>
              </button>
            ) : (
               <button
  type="button"
  onClick={() => {
    setStep(1);
    onClose();
  }}
  className="bg-brand-green hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg"
>
  🎉 Awesome!
</button>
            )}
          </div>
        </div>
        {showSuccess && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-3xl p-8 text-center shadow-2xl animate-bounce max-w-sm w-[90%]">
      <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-5xl">
        ✅
      </div>

      <h2 className="text-2xl font-bold text-green-700 mt-5">
        Order Confirmed!
      </h2>

      <p className="text-gray-600 mt-2">
        Thank you for choosing <b>24/7 Kitchen</b>.<br />
        Your order has been placed successfully.
      </p>
    </div>
  </div>
)}

      </div>
    </div>
  );
}
