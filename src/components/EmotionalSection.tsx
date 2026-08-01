"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

export default function EmotionalSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#7B241C] text-[#FFF9F0] overflow-hidden">
      {/* Decorative Gold Silhouette Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Devotional Copywriter text */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-white/5 px-3 py-1.5 rounded-full text-xs font-bold text-[#D4AF37] tracking-wider uppercase"
          >
            <Sparkles className="h-4 w-4 animate-spin-slow" />
            <span>Spiritual Consecration</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
              More Than A Puja Kit
            </h2>
            <div className="w-20 h-0.5 bg-[#D4AF37]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-base md:text-lg text-[#FFF9F0]/85 font-serif font-light leading-relaxed"
          >
            <p className="font-bold text-white text-lg md:text-xl">
              This is not just a collection of sacred items.
            </p>
            <p>
              It is a direct spiritual connection to the holy city of Lord Shiva—Kashi. A city where time stands still, and the cosmic energy of the Ganges flows to wash away lifetimes of karma.
            </p>
            <p>
              Every single element—from the Nepal-sourced Rudraksha to the mid-stream collected Gangajal—has been carefully gathered and sanctified. We prepared this kit so devotees across India can experience the powerful, divine vibrations of Kashi without traveling.
            </p>
          </motion.div>

          {/* Core devotions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 max-w-md"
          >
            <Heart className="h-6 w-6 text-[#D4AF37] fill-[#D4AF37] animate-pulse shrink-0" />
            <div className="text-xs text-[#FFF9F0]/90 leading-normal">
              <strong>100% Sourced In Kashi:</strong> Every item is packaged at our Varanasi ashram point with prayers, chants, and absolute hygienic care.
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium Image frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 80 }}
          className="lg:col-span-5 relative"
        >
          {/* Gold Glowing border decoration */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-2xl blur-xl" />
          <div className="relative rounded-2xl border-2 border-[#D4AF37]/45 p-2 bg-[#FFF9F0]/5 shadow-2xl overflow-hidden">
            <Image
              src="/images/puja_kit_packaging.png"
              alt="Kashi Divine Puja Kit Luxurious Gift Box Detail"
              width={600}
              height={600}
              className="rounded-xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
