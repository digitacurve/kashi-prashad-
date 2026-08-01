"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, Play, Eye } from "lucide-react";

interface HeroProps {
  onOrderClick: () => void;
  onViewInsideClick: () => void;
}

export default function Hero({ onOrderClick, onViewInsideClick }: HeroProps) {
  // Counters for People Viewing & Batch Stock
  const [viewers, setViewers] = useState(14);
  const [stock, setStock] = useState(8);

  useEffect(() => {
    // People viewing random shift
    const viewerInterval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const nextVal = prev + delta;
        return nextVal < 6 ? 6 : nextVal > 24 ? 24 : nextVal;
      });
    }, 8000);

    // Stock decrement logic (simulated scarcity)
    const stockInterval = setInterval(() => {
      setStock((prev) => (prev > 3 ? prev - 1 : 3));
    }, 45000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(stockInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#FFF9F0]">
      
      {/* Background Sunrise Image Wrapper with soft opacity overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kashi_ghats_sunrise.png"
          alt="Sacred Kashi Ghats Sunrise Backdrop"
          fill
          priority
          className="object-cover object-bottom opacity-20"
        />
        {/* Saffron & Gold Radial Overlay for ambient light rays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF9F0] via-[#FFF9F0]/85 to-[#E67E22]/10" />
      </div>

      {/* Floating Golden Particles (SVG-based layout) */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37]/35 blur-[1px]"
            style={{
              width: Math.random() * 6 + 3 + "px",
              height: Math.random() * 6 + 3 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Subtle Swinging Temple Bell (Top Right corner of section) */}
      <div className="absolute top-10 right-[10%] z-10 pointer-events-none hidden md:block">
        <motion.div
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="origin-top flex flex-col items-center"
        >
          {/* Hanger rope */}
          <div className="w-0.5 h-10 bg-[#D4AF37]/80" />
          {/* Bell Icon */}
          <svg className="h-10 w-10 text-[#D4AF37] fill-[#D4AF37]/10" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
            />
          </svg>
        </motion.div>
      </div>

      {/* Floating Diya (Bottom Left) */}
      <div className="absolute bottom-10 left-[8%] z-10 pointer-events-none hidden lg:block">
        <motion.div
          className="animate-float-slow flex flex-col items-center"
        >
          {/* Diya SVG drawing */}
          <svg className="h-14 w-14 text-[#E67E22]" viewBox="0 0 64 64" fill="none">
            {/* Flame */}
            <motion.path
              d="M32 4C32 4 25 16 29 22C32 26 35 22 35 22C35 22 39 16 32 4Z"
              fill="#F1C40F"
              stroke="#E67E22"
              strokeWidth="2"
              animate={{ scale: [1, 1.1, 1], y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Body */}
            <path
              d="M8 38C8 38 12 50 32 50C52 50 56 38 56 38C56 38 46 44 32 44C18 44 8 38 8 38Z"
              fill="#7B241C"
              stroke="#D4AF37"
              strokeWidth="2.5"
            />
            {/* Base shadow */}
            <ellipse cx="32" cy="52" rx="20" ry="4" fill="rgba(0,0,0,0.1)" />
          </svg>
        </motion.div>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading, Counters, Sub-heading, and Action Buttons */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
          
          {/* Real-time viewer & stock counters */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 bg-[#FFF9F0] border border-[#D4AF37]/35 text-[#7B241C] font-semibold px-3 py-1 rounded-full shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E67E22] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E67E22]"></span>
              </span>
              <span>{viewers} devotees viewing this kit</span>
            </span>

            <span className="flex items-center gap-1.5 bg-[#7B241C] text-[#FFF9F0] font-semibold px-3 py-1 rounded-full shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              <span>Only {stock} kits left in today's batch</span>
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-wide text-[#7B241C] leading-tight md:leading-[1.12]">
              Bring the Divine <span className="text-[#E67E22]">Blessings of Kashi</span> to Your Home
            </h1>
            <div className="w-20 h-0.5 bg-[#D4AF37]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base md:text-lg text-gray-700 leading-relaxed font-light max-w-xl"
          >
            Receive authentic temple prasad, sacred mid-stream Gangajal, Nepal Rudraksha, sandalwood Chandan Mala, and essential puja items sourced directly from the holy city of Kashi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {/* Primary Order Button */}
            <button
              onClick={onOrderClick}
              className="px-8 py-4.5 bg-gradient-to-r from-[#7B241C] to-[#511812] hover:from-[#E67E22] hover:to-[#D35400] text-white font-serif font-bold text-base tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>ORDER YOUR KIT (COD)</span>
              <ArrowRight className="h-5 w-5 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Secondary View Inside Button */}
            <button
              onClick={onViewInsideClick}
              className="px-8 py-4.5 bg-white border border-[#7B241C]/30 text-[#7B241C] font-serif font-bold text-base tracking-wide rounded-xl hover:border-[#7B241C] hover:bg-[#FFF9F0] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="h-5 w-5" />
              <span>VIEW WHAT'S INSIDE</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Premium product photography with glowing ambient rays */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 85 }}
          className="lg:col-span-5 relative"
        >
          {/* Ambient Gold Glow backdrop */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#E67E22]/15 to-[#D4AF37]/15 rounded-full filter blur-2xl pointer-events-none" />
          
          <div className="relative rounded-2xl border border-[#D4AF37]/35 p-2 bg-white/40 backdrop-blur-md shadow-2xl overflow-hidden group">
            <Image
              src="/images/hero_puja_kit.png"
              alt="Premium Kashi Divine Puja Kit Luxurious Packaging box layout"
              width={600}
              height={600}
              priority
              className="rounded-xl w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
