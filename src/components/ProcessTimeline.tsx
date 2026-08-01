"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, HeartHandshake, Gift, ShieldAlert, Home } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ShoppingCart,
    title: "Place Your Order",
    desc: "Choose Cash on Delivery or Pay Online. Provide your delivery address in under 60 seconds.",
  },
  {
    step: "02",
    icon: HeartHandshake,
    title: "Sacred Preparation",
    desc: "Our team sanitizes, chants mantras, and compiles all 10 sacred items at our Varanasi ashram.",
  },
  {
    step: "03",
    icon: Gift,
    title: "Temple Prasad Added",
    desc: "Authentic temple-offered Prasad and sacred thread are added fresh to your custom kit package.",
  },
  {
    step: "04",
    icon: ShieldAlert,
    title: "Safely Packed",
    desc: "All products are cushioned and placed in premium cardboard packing to prevent transit damage.",
  },
  {
    step: "05",
    icon: Home,
    title: "Delivered To Your Home",
    desc: "Receive shipping tracking updates via WhatsApp. Delivered directly to your home altar with care.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[#FFF9F0] relative overflow-hidden">
      {/* Decorative center grid lines */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#7B241C_1px,transparent_1px),linear-gradient(to_bottom,#7B241C_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold text-[#E67E22] tracking-widest uppercase block">
            Sacred Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#7B241C] tracking-wide leading-tight">
            How Your Blessing Is Prepared
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-sm md:text-base text-gray-600">
            We follow a meticulous, Vedic-guided flow to compile, sanitize, bless, and deliver your Kashi Puja Kit.
          </p>
        </div>

        {/* Timeline (Mobile: Vertical, Desktop: Vertical or Grid) */}
        <div className="relative border-l-2 border-[#D4AF37]/30 max-w-3xl mx-auto pl-8 md:pl-12 space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Connector Bullet */}
              <div className="absolute -left-[45px] md:-left-[61px] top-0 w-8 h-8 rounded-full bg-[#FFF9F0] border-2 border-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#7B241C] group-hover:bg-[#7B241C] group-hover:text-[#FFF9F0] transition-colors duration-300 shadow-sm">
                {step.step}
              </div>

              {/* Box Content */}
              <div className="bg-white rounded-2xl border border-[#D4AF37]/20 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#7B241C]/5 flex items-center justify-center text-[#7B241C] shrink-0">
                  <step.icon className="h-5 w-5" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#7B241C] tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
