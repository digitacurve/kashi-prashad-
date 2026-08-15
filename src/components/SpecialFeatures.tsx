"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, ArrowUp, ShoppingBag, Sparkles } from "lucide-react";

interface SpecialFeaturesProps {
  onOrderClick: () => void;
}

export default function SpecialFeatures({ onOrderClick }: SpecialFeaturesProps) {
  // Back to Top State
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Sticky Bottom Bar State
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top if scrolled past 300px
      setShowScrollTop(window.scrollY > 300);

      // Show sticky bar if scrolled past 600px on mobile
      if (window.innerWidth < 768) {
        setShowStickyBar(window.scrollY > 600);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Buttons: WhatsApp & Call (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Back to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-3 bg-white border border-[#D4AF37]/35 rounded-full text-[#7B241C] shadow-lg hover:bg-[#FFF9F0] hover:text-[#E67E22] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Click to Call */}
        <a
          href="tel:+919999999999"
          className="p-3 bg-[#E67E22] hover:bg-[#D35400] text-white rounded-full shadow-lg flex items-center justify-center transition-colors group relative"
          aria-label="Call Support"
        >
          <Phone className="h-5 w-5" />
          <span className="absolute right-12 bg-[#7B241C] text-[#FFF9F0] text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Click to Call
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919999999999?text=I%20want%20to%20know%20more%20about%20the%20Kashi%20Divine%20Puja%20Kit"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg flex items-center justify-center transition-colors group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-5 w-5 fill-white text-[#25D366]" />
          <span className="absolute right-12 bg-[#7B241C] text-[#FFF9F0] text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            WhatsApp Support
          </span>
        </a>
      </div>

      {/* Sticky Bottom Checkout Bar (Mobile Only) */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#D4AF37]/30 shadow-2xl p-3 md:hidden flex items-center justify-between gap-3 px-4"
          >
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-base text-[#7B241C]">₹1,499</span>
                <span className="line-through text-[10px] text-gray-400">₹2,999</span>
              </div>
              <span className="text-[9px] text-[#E67E22] font-semibold bg-[#E67E22]/10 px-2 py-0.5 rounded-full block mt-0.5">
                50% OFF + Free Prasad
              </span>
            </div>
            
            <button
              onClick={onOrderClick}
              className="flex-1 py-3 bg-[#7B241C] hover:bg-[#E67E22] text-white font-serif font-bold text-xs tracking-wider rounded-lg shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>ORDER NOW (COD)</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
