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

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Soft, Puffing Rotis",
    category: "Fresh Rotis",
    image: "/images/fresh_rotis_1782539411736.jpg"
  },
  {
    id: "g2",
    title: "Rich Paneer Butter Masala",
    category: "Curry",
    image: "/images/paneer_curry_1782539452393.jpg"
  },
  {
    id: "g3",
    title: "Fresh, Hot Tiffin Box",
    category: "Packed Tiffins",
    image: "/images/packed_tiffins_1782539467486.jpg"
  },
  {
    id: "g4",
    title: "Vibrant Mixed Sabzi",
    category: "Dry Sabzi",
    image: "/src/assets/images/indian_sabzi_1782539484517.jpg"
  },
  {
    id: "g5",
    title: "Fragrant Basmati Rice",
    category: "Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g6",
    title: "Creamy Mixed Vegetable Raita",
    category: "Raita",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "i1",
    image: "/src/assets/images/fresh_rotis_1782539411736.jpg",
    caption: "Freshly inflated hot rotis coming off the tawa! 💨 Made daily with premium whole wheat flour. No preservatives, just pure love! #247Kitchen #BramptonTiffin #GharKaKhana",
    likes: "142",
    comments: "18"
  },
  {
    id: "i2",
    image: "/src/assets/images/paneer_curry_1782539452393.jpg",
    caption: "Rich, creamy, and slow-cooked paneer butter masala! 🥘 Our curries are made with freshly ground spices and zero artificial food coloring. Taste the authenticity. #BramptonEats #PureVeg",
    likes: "189",
    comments: "24"
  },
  {
    id: "i3",
    image: "/src/assets/images/packed_tiffins_1782539467486.jpg",
    caption: "Hygienically packed and ready for delivery across Brampton! 🚚 Ensuring your meals reach you hot, fresh, and securely sealed. Order your weekly slot now! #TiffinDelivery #BramptonStudents",
    likes: "215",
    comments: "31"
  },
  {
    id: "i4",
    image: "/src/assets/images/indian_sabzi_1782539484517.jpg",
    caption: "Colors of health! 🌈 Fresh green peas, potatoes, carrots, and cottage cheese sautéed to perfection. What's your favorite daily sabzi? Let us know in comments! 👇 #HealthyEating #BramptonFoodies",
    likes: "156",
    comments: "15"
  }
];
