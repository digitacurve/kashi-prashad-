"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift, Droplets, Box, Globe, ShieldCheck, Award } from "lucide-react";

const trustItems = [
  {
    icon: Gift,
    title: "Temple Sourced Prasad",
    desc: "Directly from holy sanctum",
  },
  {
    icon: Droplets,
    title: "Authentic Kashi Gangajal",
    desc: "Pure & sealed Gangajal",
  },
  {
    icon: Box,
    title: "Carefully Packed",
    desc: "Prepared with deep devotion",
  },
  {
    icon: Globe,
    title: "PAN India Delivery",
    desc: "Secure doorstep shipping",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    desc: "Cash on delivery available",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Aesthetic sacred materials",
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-10 max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-2xl border border-[#D4AF37]/35 shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
        {trustItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#FFF9F0] border border-[#D4AF37]/20 flex items-center justify-center text-[#7B241C] group-hover:bg-[#7B241C] group-hover:text-[#FFF9F0] transition-all duration-300 shadow-sm mb-3">
              <item.icon className="h-5 w-5" />
            </div>
            <h5 className="font-serif text-xs md:text-sm font-bold text-[#7B241C] tracking-wide mb-1">
              {item.title}
            </h5>
            <p className="text-[10px] text-gray-500 max-w-[130px] leading-tight">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
