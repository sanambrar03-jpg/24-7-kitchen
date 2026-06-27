// Static data for 24/7 Kitchen Tiffin Service

export interface TiffinPlan {
  id: string;
  name: string;
  description: string;
  badge?: string;
  priceFiveDays: number;
  priceSixDays: number;
  includes: string[];
}

export interface Feature {
  id: string;
  iconName: string; // Used to dynamically map Lucide icons
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  tag?: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
}

export const TIFFIN_PLANS: TiffinPlan[] = [
  {
    id: "mini-combo",
    name: "MINI COMBO",
    description: "Perfect for a single, hearty, balanced daily meal. Specially crafted for students and light eaters.",
    priceFiveDays: 140,
    priceSixDays: 150,
    includes: [
      "1 Curry (Chef's Daily Special)",
      "Creamy Raita",
      "Fresh Crisp Salad",
      "Fragrant Basmati Rice",
      "Traditional Sweet Dish (Gulab Jamun/Kheer)",
      "4 Soft Handmade Rotis"
    ]
  },
  {
    id: "full-combo",
    name: "FULL COMBO",
    description: "Our signature and most satisfying plan. Generous portions to cover your complete lunch or dinner.",
    badge: "Most Popular",
    priceFiveDays: 220,
    priceSixDays: 230,
    includes: [
      "1 Curry (Chef's Choice)",
      "1 Delicious dry Sabzi (Chef's Choice)",
      "Creamy Raita",
      "Fresh Crisp Salad",
      "Fragrant Basmati Rice",
      "Traditional Sweet Dish (Gulab Jamun/Kheer)",
      "8 Soft Handmade Rotis"
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: "homemade-daily",
    iconName: "Flame",
    title: "Homemade Daily",
    description: "Fresh meals prepared every single day, never frozen or pre-packaged."
  },
  {
    id: "vegetarian",
    iconName: "Leaf",
    title: "100% Vegetarian",
    description: "Healthy and delicious pure vegetarian home-style food cooked with love."
  },
  {
    id: "delivery",
    iconName: "Truck",
    title: "Delivery Available",
    description: "Convenient, timely doorstep delivery directly to your home or room."
  },
  {
    id: "taste-home",
    iconName: "Heart",
    title: "Taste Like Home",
    description: "Authentic homemade flavors using traditional family recipes and spices."
  },
  {
    id: "affordable",
    iconName: "Sparkles", // Lucide Sparks or Coins
    title: "Affordable Plans",
    description: "Budget-friendly monthly subscription pricing for students & professionals."
  },
  {
    id: "hygienic",
    iconName: "ShieldCheck",
    title: "Hygienic Kitchen",
    description: "Prepared with absolute cleanliness, food safety, and premium care."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Amanpreet Singh",
    role: "International Student at Sheridan College",
    rating: 5,
    text: "The food tastes exactly like home. As a student in Brampton, finding authentic homemade food that doesn't break the bank was hard. 24/7 Kitchen has been a lifesaver! Highly recommended!",
    tag: "Verified Student"
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Working Professional, Dixie Rd",
    rating: 5,
    text: "Perfect for busy professionals. After a 10-hour shift, coming home to hot, fresh, soft rotis and delicious subji is incredible. Excellent service and super friendly!",
    tag: "Daily subscriber"
  },
  {
    id: "t3",
    name: "Rajesh & Meena Patel",
    role: "Brampton Residents",
    rating: 5,
    text: "The variety is excellent. The curries are light on oil, and the sweet dish of the day is always a delightful surprise. 24/7 Kitchen feels just like our own home kitchen.",
    tag: "Family Plan"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Soft, Puffing Rotis",
    category: "Fresh Rotis",
    image: "/gallery1.jpg"
  },
  {
    id: "g2",
    title: "Rich Paneer Butter Masala",
    category: "Curry",
    image: "/gallery2.jpg"
  },
  {
    id: "g3",
    title: "Fresh, Hot Tiffin Box",
    category: "Packed Tiffins",
    image: "/gallery3.jpg"
  },
  {
    id: "g4",
    title: "Vibrant Mixed Sabzi",
    category: "Dry Sabzi",
    image: "/gallery4.jpg"
  },
  {
    id: "g5",
    title: "Fragrant Basmati Rice",
    category: "Rice",
    image: "/gallery5.jpg"
  },
  {
    id: "g6",
    title: "Creamy Vegetable Raita",
    category: "Raita",
    image: "/gallery6.jpg"
  }
];

import { INSTAGRAM_POSTS } from "./data";
  {
    id: 1,
    image: "/instagram1.jpg",
    link: "#",
  },
  {
    id: 2,
    image: "/instagram2.jpg",
    link: "#",
  },
  {
    id: 3,
    image: "/instagram3.jpg",
    link: "#",
  },
  {
    id: 4,
    image: "/instagram4.jpg",
    link: "#",
  },
  {
    id: 5,
    image: "/instagram5.jpg",
    link: "#",
  },
  {
    id: 6,
    image: "/instagram6.jpg",
    link: "#",
  },
  {
    id: 7,
    image: "/instagram7.jpg",
    link: "#",
  },
  {
    id: 8,
    image: "/instagram8.jpg",
    link: "#",
  },
];
