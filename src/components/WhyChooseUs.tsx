"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Heart, Sparkles, Send, Sparkle } from "lucide-react";

const USPs = [
  {
    icon: Sparkles,
    title: "Authentic Temple Prasad",
    desc: "Offerings made at the inner sanctum of Kashi Vishwanath and Kaal Bhairav temples, carefully preserved and shipped to you.",
  },
  {
    icon: CheckCircle2,
    title: "Original Sacred Items",
    desc: "100% genuine Nepal Rudraksha, sandalwood malas, and pure white blowing shankhs checked individually for spiritual potency.",
  },
  {
    icon: Sparkle,
    title: "Premium Packaging",
    desc: "A stunning, heavy-textured matte box adorned with golden foil engraving. Feels like opening a holy sanctuary box.",
  },
  {
    icon: Send,
    title: "Fast Delivery",
    desc: "Expedited shipping options across India. Delivery to major metro areas within 3 to 5 business days.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Shipping",
    desc: "Airtight sealing for liquid Gangajal and custom cardboard enclosures ensure your items arrive without damage.",
  },
  {
    icon: Heart,
    title: "Prepared With Devotion",
    desc: "Our team handles every product with cleaned hands, chants, and absolute purity. It is a blessing, not a product.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#E67E22] tracking-widest uppercase block">
            Crafted For Devotees
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">
            Why Devotees Choose Kashi Prasad
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
          <p className="text-sm md:text-base text-gray-600">
            We bridge the distance between your home and Mahadev&apos;s sacred soil with absolute integrity, premium quality, and spiritual authenticity.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {USPs.map((usp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-xs hover:shadow-sm transition-all duration-300 relative group overflow-hidden"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-[#7B241C] mb-5 group-hover:bg-[#7B241C] group-hover:text-white transition-colors duration-300">
                <usp.icon className="h-5 w-5" />
              </div>

              <h4 className="font-serif text-lg font-bold text-[#7B241C] mb-3 group-hover:text-[#E67E22] transition-colors">
                {usp.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {usp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
