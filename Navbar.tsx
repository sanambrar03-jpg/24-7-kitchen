import { useState, useEffect } from "react";
import { Menu, X, Leaf, PhoneCall, Instagram } from "lucide-react";

interface NavbarProps {
  onOrderClick: () => void;
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Us", href: "#why-us" },
    { name: "Plans", href: "#plans" },
    { name: "Truckers", href: "#truckers" },
    { name: "Our Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-brand-dark"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="bg-brand-orange text-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform">
              <Leaf className="h-6 w-6" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-2xl font-extrabold tracking-tight leading-none ${
                scrolled ? "text-brand-green" : "text-white"
              }`}>
                24/7 <span className="text-brand-orange">Kitchen</span>
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase ${
                scrolled ? "text-gray-500" : "text-white/80"
              }`}>
                Taste Like Home
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm tracking-wide transition-colors duration-200 hover:text-brand-orange group`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className={`flex items-center space-x-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
              scrolled 
                ? "bg-brand-green/10 text-brand-green border-brand-green/20" 
                : "bg-white/10 text-white border-white/20"
            }`}>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Delivering to Brampton</span>
            </span>
            <button
              id="nav-order-btn"
              onClick={onOrderClick}
              className="bg-brand-orange text-white hover:bg-amber-600 px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onOrderClick}
              className="bg-brand-orange text-white px-3.5 py-1.5 rounded-full font-semibold text-xs shadow-sm"
            >
              Order
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                scrolled ? "hover:bg-gray-100 text-brand-dark" : "hover:bg-white/10 text-white"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-brand-cream text-brand-dark z-50 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-orange text-white p-2 rounded-xl">
                <Leaf className="h-5 w-5" fill="currentColor" />
              </div>
              <span className="font-display text-xl font-extrabold text-brand-green">
                24/7 <span className="text-brand-orange">Kitchen</span>
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-brand-green/10 text-brand-green w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active delivery in Brampton</span>
            </span>

            <div className="h-px bg-gray-200 my-2" />

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold py-2 px-1 text-gray-800 hover:text-brand-green hover:translate-x-1 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => {
              setIsOpen(false);
              onOrderClick();
            }}
            className="w-full bg-brand-green hover:bg-emerald-800 text-white py-3.5 rounded-xl font-bold text-base shadow-lg transition-colors flex items-center justify-center space-x-2"
          >
            <span>Order Monthly Plan</span>
          </button>
          
          <div className="flex justify-center space-x-4 text-gray-500 pt-2 text-sm">
            <a href="https://instagram.com/24_7.kitchen" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-brand-orange hover:underline font-semibold">
              <Instagram className="h-4 w-4" />
              <span>@24_7.kitchen</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
