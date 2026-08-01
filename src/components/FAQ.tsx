"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Is the Prasad authentic?",
    a: "Yes, absolutely. The Prasad included in the kit consists of sweet offerings (like saffron pedas or dry fruit laddoos) and a sacred thread directly offered at the altars of the Kashi Vishwanath and Kaal Bhairav temples in Varanasi. We collect them fresh and pack them in sealed copper-plated containers to maintain hygiene and purity.",
  },
  {
    q: "Where is the Gangajal sourced from?",
    a: "We include two types of holy water: one collected from the mid-stream of the River Ganges in Kashi (Varanasi) in the early hours to ensure minimal external contact, and the second collected from the holy confluence (Triveni Sangam) in Prayagraj. Both are filtered under strict purity standards and sealed inside glass or copper containers.",
  },
  {
    q: "How many days does it take for delivery?",
    a: "Standard shipping takes between 3 to 5 business days for metro cities, and up to 7 business days for remote locations across India. We dispatch all packages directly from Varanasi. You will receive real-time tracking links via SMS and WhatsApp once the package is dispatched.",
  },
  {
    q: "Is Cash on Delivery (COD) available?",
    a: "Yes, COD is fully available for orders across India at no additional charge. You only pay ₹1,499 in cash or via UPI to the delivery person once the package is safely handed to you.",
  },
  {
    q: "Can I gift this Puja Kit to someone else?",
    a: "Yes, the kit is an auspicious and premium spiritual gift for housewarmings, parent anniversaries, Diwali, or major Pujas. You can order it directly to their shipping address. If you pay online, you can let us know, and we will exclude the pricing invoice from the box and include a custom handwritten blessing note.",
  },
  {
    q: "Can I order multiple kits?",
    a: "Yes, you can order multiple kits for large family gatherings or corporate spiritual gifting. In the checkout modal, enter your details and our team will get in touch with you via phone/WhatsApp to arrange bulk orders and potential volume discounts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQ schema markup for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-[#FFF9F0] relative overflow-hidden">
      {/* Schema Injection */}
      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#E67E22] tracking-widest uppercase block">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#7B241C] tracking-wide leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#D4AF37]/25 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#FFF9F0]/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-[#E67E22] shrink-0" />
                    <span className="font-serif text-sm md:text-base font-bold text-[#7B241C] tracking-wide">
                      {faq.q}
                    </span>
                  </div>
                  <div className="text-[#7B241C] p-1 bg-[#FFF9F0] rounded-full border border-[#D4AF37]/20">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-[#7B241C]/5 text-xs md:text-sm text-gray-600 leading-relaxed pl-14">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
