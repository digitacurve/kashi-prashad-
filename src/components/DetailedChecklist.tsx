"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ClipboardList } from "lucide-react";
import { DetailedItem } from "@/data/products";

interface DetailedChecklistProps {
  items: DetailedItem[];
  variantName: string;
}

export default function DetailedChecklist({ items, variantName }: DetailedChecklistProps) {
  // Store checked state by item name + index (in case names duplicate)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setCheckedItems({});
  }

  const toggleItem = (name: string, index: number) => {
    const key = `${name}-${index}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const totalItems = items.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const percentComplete = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  // Group items by category
  const categories: Record<string, DetailedItem[]> = {
    "Murtis, Photos & Books": [],
    "Sacred Metalware & Vessels": [],
    "Sacred Ingredients & Herbs": [],
    "Ritual Cloths & Aasans": [],
    "Aroma & Lamps": [],
    "Packaging & Organization": []
  };

  // Populate categories dynamically, matching only defined categories
  items.forEach((item) => {
    if (categories[item.category]) {
      categories[item.category].push(item);
    } else {
      // Fallback
      categories["Sacred Ingredients & Herbs"].push(item);
    }
  });

  return (
    <section className="bg-white rounded-3xl border border-[#D4AF37]/35 p-6 md:p-10 shadow-sm relative overflow-hidden">
      {/* Background ring texture */}
      <div className="absolute right-0 top-0 w-64 h-64 opacity-5 bg-[radial-gradient(#7B241C_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#7B241C]/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E67E22] uppercase tracking-wider bg-[#E67E22]/10 px-3 py-1 rounded-full">
            <ClipboardList className="h-3.5 w-3.5" />
            <span>Interactive Devotional Inventory</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#7B241C] tracking-wide">
            📦 Complete Kit Contents ({variantName})
          </h3>
          <p className="text-xs md:text-sm text-gray-500 font-light">
            Check off items as you unpack or prepare them on your Chowki table. Every single component is listed individually.
          </p>
        </div>

        {/* Packing Counter & Progress Bar */}
        <div className="bg-[#FFF9F0] border border-[#D4AF37]/30 rounded-2xl p-4 min-w-[220px] shadow-inner space-y-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-gray-700">Preparation Progress:</span>
            <span className="text-[#7B241C] font-mono">{checkedCount} / {totalItems} Packed</span>
          </div>

          {/* Progress bar container */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E67E22] to-[#7B241C]"
              initial={{ width: 0 }}
              animate={{ width: `${percentComplete}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="text-[10px] text-center text-gray-500 italic">
            {percentComplete === 100 ? "🎉 Ready for Lord Satyanarayan's Pooja!" : "Tap items to cross them off"}
          </div>
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="space-y-8">
        {Object.entries(categories).map(([catName, catItems]) => {
          if (catItems.length === 0) return null;

          return (
            <div key={catName} className="space-y-4">
              {/* Category Header */}
              <h4 className="font-serif text-base md:text-lg font-bold text-[#7B241C] flex items-center gap-2 border-b border-[#D4AF37]/20 pb-2">
                <span className="w-1.5 h-4.5 bg-[#E67E22] rounded-full inline-block" />
                <span>{catName}</span>
                <span className="text-xs text-gray-400 font-sans font-normal ml-1">({catItems.length} items)</span>
              </h4>

              {/* Grid checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {catItems.map((item, idx) => {
                  // Find original index in list to keep check state key stable
                  const originalIdx = items.findIndex((originalItem, index) => originalItem.name === item.name && index === idx);
                  const isChecked = checkedItems[`${item.name}-${originalIdx}`] || false;

                  return (
                    <button
                      key={`${item.name}-${idx}`}
                      onClick={() => toggleItem(item.name, originalIdx)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left cursor-pointer transition-all w-full select-none ${isChecked
                          ? "bg-green-50/50 border-green-300 shadow-inner"
                          : "bg-white border-[#D4AF37]/15 hover:border-[#D4AF37]/50"
                        }`}
                    >
                      {/* Checkbox Icon */}
                      <div className="shrink-0 transition-colors duration-200">
                        {isChecked ? (
                          <div className="h-5 w-5 rounded-md bg-green-600 text-white flex items-center justify-center border border-green-700 shadow-sm">
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="h-5 w-5 rounded-md bg-white border-2 border-gray-300 hover:border-[#E67E22] transition-colors" />
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 flex items-baseline justify-between gap-2 min-w-0">
                        <span className={`text-xs md:text-sm font-semibold truncate ${isChecked ? "line-through text-gray-400" : "text-gray-700"}`}>
                          {item.name}
                        </span>
                        <span className="text-[10px] md:text-xs font-bold text-[#E67E22] bg-[#E67E22]/10 px-2 py-0.5 rounded-full shrink-0">
                          {item.quantity}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
