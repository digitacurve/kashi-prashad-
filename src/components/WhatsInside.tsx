"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, Eye, ShieldCheck } from "lucide-react";

interface PujaItem {
  name: string;
  category: string;
  tag?: string;
  desc: string;
  ritualValue: string;
  details: string;
}

const items: PujaItem[] = [
  {
    name: "Nepal Panchmukhi Rudraksha Mala",
    category: "Sacred Beadwork",
    tag: "108+1 Beads",
    desc: "Authentic, high-vibration 5-faced Rudraksha seeds sourced from Nepal and sanctified in Varanasi. Perfect for daily chanting (Japa) or wearing for divine protection.",
    ritualValue: "Balances the chakras and calms the nervous system under Shiva's grace.",
    details: "Individually selected for bead uniformity and strong natural grooves. Includes a red silk tassel."
  },
  {
    name: "2 Scented Chandan Malas",
    category: "Fragrant Woods",
    tag: "Set of 2",
    desc: "Made from pure sandalwood paste wood, these malas emit a soothing, woody fragrance. Excellent for cool meditation, calming thoughts, and spiritual alignment.",
    ritualValue: "Reduces planetary heat and brings peace and mental clarity during prayers.",
    details: "Hand-knotted beads with a cooling sensory feedback. Dual pack for wearing and altar placement."
  },
  {
    name: "Kashi Vishwanath Prasad",
    category: "Divine Prasad",
    tag: "Sanctified",
    desc: "Blessed sweets (Saffron Peda / dry fruit laddoos) directly offered at the main sanctum sanctorum of the Kashi Vishwanath Temple, packaged in sterile airtight copper containers.",
    ritualValue: "Brings Mahadev's direct blessings and spiritual nourishment into your home.",
    details: "Prepared in traditional pure ghee by temple-authorized priests. Long shelf-life packaging."
  },
  {
    name: "Kaal Bhairav Prasad & Raksha Sutra",
    category: "Protection Prasad",
    tag: "Temple Blessed",
    desc: "The sacred black thread (Raksha Sutra) and holy ashes from the Kaal Bhairav temple. Acts as a spiritual shield against negative influences and hurdles.",
    ritualValue: "Kaal Bhairav protects from fear, negative energy, and internal obstacles.",
    details: "Blessed during the special evening Aarti at the Kaal Bhairav shrine. Tie on the right wrist."
  },
  {
    name: "Karungali Mala (Ebony Wood)",
    category: "Sacred Beadwork",
    tag: "Highly Energized",
    desc: "Crafted from authentic, dense black ebony wood (Karungali). Known to absorb negative vibes, generate immense heat-reducing energy, and improve willpower.",
    ritualValue: "Attracts positive forces, enhances concentration, and removes mental blocks.",
    details: "Made from the core of mature ebony trees, hand-polished without artificial chemical dyes."
  },
  {
    name: "Sacred Ganges Water (Kashi)",
    category: "Holy Water",
    tag: "Mid-Stream Collection",
    desc: "Unfiltered, pristine Gangajal collected from the mid-stream of the holy Ganga in Varanasi during the early morning hours, ensuring the highest spiritual purity.",
    ritualValue: "Purifies the soul, washes away karma, and sanctifies any space or altar.",
    details: "Packed in a leak-proof, food-grade copper-plated container to retain its divine properties."
  },
  {
    name: "Triveni Sangam Gangajal (Prayagraj)",
    category: "Holy Water",
    tag: "Sangam Sourced",
    desc: "Sacred water collected from the holy confluence of Ganga, Yamuna, and the mythical Saraswati at Prayagraj. Represents the ultimate junction of cosmic energies.",
    ritualValue: "Brings harmony, cleanses the home, and is ideal for major family homams/pujas.",
    details: "Sealed under Vedic guidelines. Sourced from the exact center of the Sangam point."
  },
  {
    name: "Vedic Dakshinavarti Shankh",
    category: "Sacred Shell",
    tag: "Natural blowing shell",
    desc: "A hand-selected, polished white blowing conch shell. Blowing the shankh releases therapeutic sonic waves that purify the surrounding atmosphere.",
    ritualValue: "Announces auspicious beginnings, dispels negative energy, and attracts Lakshmi.",
    details: "Naturally harvested marine conch, checked for clean resonance and ease of blowing."
  },
  {
    name: "Embroidered Silk Chunri",
    category: "Deity Apparel",
    tag: "Gilded Zari",
    desc: "A rich red silk drape bordered with golden Zari embroidery and sacred Swastika emblems. Used to drape the deity idols or frame the home temple.",
    ritualValue: "Signifies devotion, respect, and shelter under the Mother Goddess (Shakti).",
    details: "Soft silk fabric, resistant to fading, designed to hold lamps and flowers beautifully."
  },
  {
    name: "Pure Cotton Puja Gamcha",
    category: "Ritual Cloth",
    tag: "100% Organic",
    desc: "A traditional saffron-dyed cotton cloth worn by the devotee or used as a clean seat/altar lining during daily prayers. Soft, breathable, and pure.",
    ritualValue: "Keeps the devotee in a clean, dedicated state of consciousness during puja.",
    details: "Woven by local Kashi weavers. Zero chemicals, skin-friendly natural saffron coloring."
  },
];

export default function WhatsInside({ onOrderClick }: { onOrderClick: () => void }) {
  const [selectedItem, setSelectedItem] = useState<PujaItem | null>(null);

  return (
    <section id="whats-inside" className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full border border-[#D4AF37]/10 -mr-48 pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full border border-[#D4AF37]/10 -ml-48 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#E67E22] tracking-widest uppercase block">
            The Complete Collection
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">
            What&apos;s Inside the Signature Kit
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
          <p className="text-sm md:text-base text-gray-600">
            A meticulous collection of 10 highly sacred objects, sourced directly from Kashi and Prayagraj, designed to transform your home into a temple.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header & Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E67E22] bg-[#E67E22]/10 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.tag && (
                    <span className="text-[10px] text-[#7B241C] font-semibold bg-[#7B241C]/5 border border-[#7B241C]/10 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#7B241C] tracking-wide group-hover:text-[#E67E22] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-[#FFF9F0]/50 border-t border-[#D4AF37]/10 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-medium italic flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                  {item.category === "Holy Water" ? "Purifying" : "Sourced in Kashi"}
                </span>

                <button
                  onClick={() => setSelectedItem(item)}
                  className="text-xs font-semibold text-[#7B241C] hover:text-[#E67E22] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Eye className="h-3.5 w-3.5" />
                  View Sacred Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={onOrderClick}
            className="px-8 py-4 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] font-serif font-bold text-base tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            ORDER YOUR KIT NOW
          </button>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedItem(null)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#FFF9F0] border-2 border-[#D4AF37]/50 rounded-2xl p-6 md:p-8 max-w-md w-full relative z-10 shadow-2xl text-left"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#E67E22] tracking-wider">
                    {selectedItem.category}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#7B241C] mt-1">{selectedItem.name}</h4>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-[#7B241C] p-1.5 bg-white border border-[#D4AF37]/20 rounded-full transition-colors cursor-pointer"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="w-12 h-0.5 bg-[#D4AF37]" />

              <div className="space-y-3 text-sm text-gray-700">
                <p>{selectedItem.desc}</p>

                <div className="bg-[#7B241C]/5 p-3 rounded-lg border border-[#7B241C]/10 space-y-1">
                  <div className="text-xs font-bold text-[#7B241C] flex items-center gap-1">
                    <Compass className="h-3.5 w-3.5" />
                    Spiritual & Ritual Value
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{selectedItem.ritualValue}</p>
                </div>

                <div className="bg-[#D4AF37]/10 p-3 rounded-lg border border-[#D4AF37]/20 space-y-1">
                  <div className="text-xs font-bold text-[#7B241C] flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Quality & Craftsmanship
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{selectedItem.details}</p>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOrderClick();
                  }}
                  className="flex-1 py-3 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] text-center font-serif text-xs font-bold tracking-wider rounded-lg shadow-md transition-colors cursor-pointer"
                >
                  ORDER NOW WITH KIT
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-3 bg-white border border-[#7B241C]/20 hover:border-[#7B241C] text-gray-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
