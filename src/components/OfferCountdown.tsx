"use client";

import React, { useState, useEffect } from "react";
import { Flame, Clock } from "lucide-react";

export default function OfferCountdown() {
  const [timeLeft, setTimeLeft] = useState(15 * 60 + 45); // 15 mins 45 secs

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60)); // Reset to 15m if hit zero
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}m ${secs.toString().padStart(2, "0")}s`;
  };

  return (
    <div className="w-full bg-[#7B241C] text-[#FFF9F0] border-b border-[#D4AF37]/35 py-2.5 px-4 sticky top-0 z-50 text-center flex flex-wrap items-center justify-center gap-2 md:gap-4 shadow-md text-xs md:text-sm">
      <div className="flex items-center gap-1.5 font-semibold">
        <Flame className="h-4 w-4 text-[#E67E22] fill-[#E67E22] animate-pulse" />
        <span>Shravan Special Devotional Offer: 50% Discount + Free SOUVENIRS!</span>
      </div>
      
      <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15 text-[11px] md:text-xs">
        <Clock className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
        <span className="font-medium tracking-wide">
          Expires in <strong className="font-mono text-[#D4AF37]">{formatTime(timeLeft)}</strong>
        </span>
      </div>
    </div>
  );
}
