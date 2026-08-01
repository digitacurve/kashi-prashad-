"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ShoppingBag } from "lucide-react";

// Component imports
import OfferCountdown from "@/components/OfferCountdown";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhatsInside from "@/components/WhatsInside";
import EmotionalSection from "@/components/EmotionalSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SpecialFeatures from "@/components/SpecialFeatures";
import CheckoutModal from "@/components/CheckoutModal";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const scrollToWhatsInside = () => {
    const el = document.getElementById("whats-inside");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Countdown Urgency Ticker */}
      <OfferCountdown />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOrderClick={openCheckout} onViewInsideClick={scrollToWhatsInside} />

        {/* 3. Horizontal Trust badges Grid */}
        <TrustBar />

        {/* 4. Products details - What's Inside */}
        <WhatsInside onOrderClick={openCheckout} />

        {/* 5. Deep Spiritual / Emotional statement */}
        <EmotionalSection />

        {/* 6. Brand USPs & Guarantees */}
        <WhyChooseUs />

        {/* 7. Preparation Step-by-Step Flow */}
        <ProcessTimeline />

        {/* 8. Photographic Grid */}
        <Gallery />

        {/* 9. Testimonials & Google Stars */}
        <Testimonials />

        {/* 10. Accordion FAQ Section */}
        <FAQ />

        {/* 11. Final Conversion Call-To-Action (CTA) */}
        <section className="relative py-24 md:py-32 bg-[#7B241C] text-[#FFF9F0] text-center overflow-hidden border-t-2 border-[#D4AF37]/45">
          {/* Background Ring pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/35 bg-white/5 px-3 py-1.5 rounded-full text-xs font-bold text-[#D4AF37] tracking-wider uppercase">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Limited Shravan Offer</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
                Bring Home The Blessings Of Mahadev
              </h2>
              <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
            </div>

            <p className="text-sm md:text-lg text-[#FFF9F0]/80 font-serif font-light max-w-2xl mx-auto leading-relaxed">
              Transform your daily spiritual practice and bring the sanctified vibrations of holy Varanasi to your altar. Hand-compiled and blessed under temple priest supervision.
            </p>

            {/* Pricing details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-sm mx-auto shadow-inner space-y-2">
              <div className="text-xs text-[#FFF9F0]/70 font-semibold tracking-wider uppercase">
                Special Consignment Price
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="font-serif font-bold text-3xl md:text-4xl text-[#D4AF37]">
                  ₹1,499
                </span>
                <span className="line-through text-xs md:text-sm text-[#FFF9F0]/50">
                  ₹2,999
                </span>
              </div>
              <div className="text-[10px] text-green-400 font-bold bg-green-950/40 py-1 px-3 rounded-full inline-block">
                50% OFF • FREE CASH ON DELIVERY (COD)
              </div>
            </div>

            <button
              onClick={openCheckout}
              className="px-10 py-5 bg-gradient-to-r from-[#E67E22] to-[#D35400] hover:from-white hover:to-white hover:text-[#7B241C] text-white font-serif font-bold text-lg tracking-wide rounded-xl shadow-2xl hover:shadow-white/10 transition-all duration-300 flex items-center justify-center gap-2.5 mx-auto group cursor-pointer"
            >
              <ShoppingBag className="h-5.5 w-5.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span>ORDER YOUR SACRED KIT</span>
            </button>

            <div className="text-xs text-[#FFF9F0]/60">
              * Shipped directly from Dashashwamedh, Varanasi. Delivery tracked on WhatsApp.
            </div>
          </div>
        </section>
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Advanced special features (WhatsApp shortcuts, to top, exit-intent, toast) */}
      <SpecialFeatures onOrderClick={openCheckout} />

      {/* 14. Slide-over checkout drawer form */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
}
