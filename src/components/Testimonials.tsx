"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";

const reviews = [
  {
    name: "Arun Swaminathan",
    location: "Chennai, Tamil Nadu",
    text: "I was highly skeptical at first, but the moment I opened the box, a wave of sandalwood aroma filled the room. The Nepal Rudraksha mala feels heavy and authentic, and the conch shell blows with a very clear, resonant sound. It feels like Varanasi came straight to my house. Absolutely premium quality.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Meera Deshmukh",
    location: "Pune, Maharashtra",
    text: "Our family performs daily Shiva puja, and this kit has completed our altar setup. The Kashi Vishwanath sweet prasad tasted absolutely fresh, and the Prayagraj Sangam Gangajal is packaged so securely in copper-plated vials. It makes for an exceptionally thoughtful gift for parents.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Devendra Mishra",
    location: "Lucknow, Uttar Pradesh",
    text: "Having lived in Varanasi years ago, I miss the ghats daily. Opening this kit and using the pure cotton saffron gamcha during prayers brought back deep spiritual memories. The black thread from Kaal Bhairav temple is tied on my wrist now. Truly authentic and prepared with pure devotion.",
    rating: 5,
    initial: "D",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#7B241C]/5 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#D4AF37]/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#E67E22] tracking-widest uppercase block">
            Devotee Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#7B241C] tracking-wide leading-tight">
            Loved By Devotees Across India
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-sm md:text-base text-gray-600">
            Hear from families and spiritual practitioners who have welcomed the divine energies of Kashi into their homes.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-[#D4AF37]/20 p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              {/* Quote Mark */}
              <MessageSquareQuote className="absolute right-6 top-6 h-8 w-8 text-[#D4AF37]/15" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Devotee Info */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#7B241C]/5">
                <div className="w-10 h-10 rounded-full bg-[#7B241C]/5 border border-[#D4AF37]/20 flex items-center justify-center font-serif text-sm font-bold text-[#7B241C]">
                  {review.initial}
                </div>
                <div>
                  <h5 className="font-serif text-sm font-bold text-[#7B241C]">
                    {review.name}
                  </h5>
                  <p className="text-[10px] text-gray-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-bold text-lg text-[#7B241C]">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4.5 w-4.5 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Based on <strong>450+ verified ratings</strong> from devotees in Maharashtra, Tamil Nadu, Delhi, and Karnataka.
          </p>
        </div>
      </div>
    </section>
  );
}
