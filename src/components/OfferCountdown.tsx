"use client";

import React from "react";
import { Sparkles, Truck } from "lucide-react";

export default function OfferCountdown() {
  return (
    <div className="w-full bg-[#7B241C] text-[#FFF9F0] border-b border-[#D4AF37]/35 py-2 px-4 relative z-50 text-center flex flex-wrap items-center justify-center gap-2 md:gap-4 shadow-md text-[10px] md:text-xs tracking-wider uppercase font-semibold">
      <div className="flex items-center gap-1.5">
        <Sparkles className="h-3.5 w-3.5 text-[#D4AF37] animate-pulse" />
        <span>Shravan Special: 50% Discount Applied Site-Wide</span>
      </div>
      <div className="hidden sm:block text-[#D4AF37]">•</div>
      <div className="flex items-center gap-1.5">
        <Truck className="h-3.5 w-3.5 text-[#E67E22]" />
        <span>Free Express Delivery & Cash on Delivery (COD) Across India</span>
      </div>
    </div>
  );
}
