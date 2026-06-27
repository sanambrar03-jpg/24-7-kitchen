import { INSTAGRAM_POSTS } from "./data";
import { Instagram, Heart, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function InstagramFeedSection() {
  const handleFollowClick = () => {
    window.open("https://instagram.com/24_7.kitchen", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="instagram" className="py-24 bg-brand-cream bg-gradient-to-b from-brand-cream/60 via-brand-cream/30 to-brand-cream text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-brand-orange text-xs font-black uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block">
            Social Media Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-green leading-tight">
            Follow Our Journey
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Get daily menu updates, behind-the-scenes hygienic kitchen cooking videos, packaging steps, and seasonal offers on our official Instagram account.
          </p>

          {/* Profile Header */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleFollowClick}
              className="inline-flex items-center space-x-3.5 bg-white px-6 py-4 rounded-3xl shadow-sm border border-brand-orange/10 hover:border-brand-orange hover:shadow-md transition-all group"
            >
              <div className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white p-2.5 rounded-2xl group-hover:scale-105 transition-transform shadow-md">
                <Instagram className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="block font-display font-black text-base text-brand-dark">@24_7.kitchen</span>
                <span className="text-xs text-gray-400 font-bold">Official Instagram Account</span>
              </div>
            </button>
          </div>
        </div>

        {/* Instagram Grid Feed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {INSTAGRAM_POSTS.map((post) => (
            <motion.div
              key={post.id}
              onClick={handleFollowClick}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 relative group cursor-pointer aspect-square"
            >
              {/* Image */}
              <img
                src={post.image}
                alt="Instagram post from @24_7.kitchen"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Instagram Hover Stats Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-4 p-6">
                <div className="flex items-center space-x-6 font-bold text-sm">
                  <div className="flex items-center space-x-1.5 hover:text-rose-400 transition-colors">
                    <Heart className="h-5 w-5 fill-white group-hover:fill-current" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 hover:text-sky-300 transition-colors">
                    <MessageCircle className="h-5 w-5 fill-white group-hover:fill-current" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                
                {/* Caption Snippet */}
                <p className="text-[11px] text-gray-200 line-clamp-3 text-center leading-relaxed">
                  {post.caption}
                </p>

                <span className="text-[10px] uppercase font-black tracking-widest text-brand-orange bg-white/15 px-2.5 py-1 rounded-md">
                  View post
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleFollowClick}
            className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:opacity-95 text-white font-extrabold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 inline-flex items-center space-x-2"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow on Instagram</span>
          </button>
        </div>

      </div>
    </section>
  );
}
