"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, Truck, Package, ShieldCheck, ShoppingBag, PhoneCall } from "lucide-react";
import confetti from "canvas-confetti";

interface OrderSuccessClientProps {
  searchParams: {
    orderId?: string;
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    pincode?: string;
    amount?: string;
    paymentMethod?: string;
    items?: string;
  };
}

interface OrderItem {
  title: string;
  variantName?: string;
  price: number;
  quantity: number;
}

export default function OrderSuccessClient({ searchParams }: OrderSuccessClientProps) {
  const {
    orderId = "KDPK-XXXXXX",
    name = "",
    phone = "",
    address = "",
    city = "",
    pincode = "",
    amount = "1499",
    paymentMethod = "cod",
    items = "[]",
  } = searchParams;

  // Parse items safely
  let orderItems: OrderItem[] = [];
  try {
    orderItems = JSON.parse(items);
  } catch (e) {
    console.error("Failed to parse success order items", e);
  }

  // Fire confetti on mount
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.4 },
      colors: ["#E67E22", "#7B241C", "#D4AF37", "#FFF9F0"],
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#222222] font-sans flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-[#D4AF37]/25 shadow-xl p-6 md:p-8 space-y-6 text-center relative overflow-hidden">
        
        {/* Top decorative gold arc background */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#E67E22] via-[#D4AF37] to-[#7B241C]" />

        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 border-2 border-green-500/20 rounded-full text-green-600 shadow-md mb-2">
          <CheckCircle className="h-10 w-10 animate-bounce" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#7B241C] tracking-wide">
            Order Placed Successfully!
          </h1>
          <p className="text-xs md:text-sm text-gray-500 font-light max-w-md mx-auto">
            Har Har Mahadev! We have received your order request. Our Varanasi ashram will compile and energize your sacred items with absolute devotion.
          </p>
        </div>

        {/* Order ID Banner */}
        <div className="bg-[#FFF9F0] rounded-2xl p-4 border border-[#D4AF37]/20 shadow-xs max-w-sm mx-auto">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Order ID</span>
          <span className="font-mono text-lg md:text-xl font-bold text-[#E67E22] tracking-wider select-all">{orderId}</span>
        </div>

        {/* Summary Grid */}
        <div className="text-left space-y-4 pt-2">
          
          {/* Purchased Items List */}
          <div className="border border-[#7B241C]/10 rounded-2xl p-4 bg-gray-50/50">
            <h3 className="font-serif text-xs md:text-sm font-bold text-[#7B241C] border-b border-[#7B241C]/10 pb-2 flex items-center gap-1.5">
              <Package className="h-4 w-4 text-[#E67E22]" />
              <span>Purchased Items</span>
            </h3>
            <div className="divide-y divide-[#7B241C]/5 space-y-2 pt-2">
              {orderItems.length > 0 ? (
                orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-baseline text-xs pt-2 first:pt-0">
                    <div>
                      <span className="font-medium text-[#7B241C] block">{item.title}</span>
                      {item.variantName && (
                        <span className="text-[10px] text-gray-400 block mt-0.5">Variant: {item.variantName}</span>
                      )}
                      <span className="text-[10px] text-gray-400 block">Quantity: {item.quantity}</span>
                    </div>
                    <span className="font-serif font-bold text-[#E67E22] shrink-0">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex justify-between text-xs pt-2">
                  <span>Kashi Divine Puja Kit (Standard Kit)</span>
                  <span className="font-serif font-bold text-[#E67E22]">₹{Number(amount).toLocaleString()}</span>
                </div>
              )}
            </div>
            <div className="border-t border-[#7B241C]/10 pt-2.5 mt-2.5 flex justify-between items-baseline text-xs md:text-sm font-bold text-[#7B241C]">
              <span>Paid Amount</span>
              <span className="text-lg text-[#E67E22]">₹{Number(amount).toLocaleString()}</span>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="border border-[#7B241C]/10 rounded-2xl p-4 bg-gray-50/50 space-y-3">
            <h3 className="font-serif text-xs md:text-sm font-bold text-[#7B241C] border-b border-[#7B241C]/10 pb-2 flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-[#E67E22]" />
              <span>Shipping & Customer Coordinates</span>
            </h3>
            <div className="text-xs space-y-1.5 text-gray-600">
              <p><strong>Customer Name:</strong> {name || "Rajesh Kumar"}</p>
              <p><strong>Mobile Number:</strong> {phone || "9876543210"}</p>
              <p><strong>Address:</strong> {address || "123 Assi Ghat"}, {city || "Varanasi"}, {pincode || "221001"}</p>
              <p>
                <strong>Payment Coordinates:</strong>{" "}
                <span className="font-semibold text-[#7B241C]">
                  {paymentMethod === "cod" ? "Cash on Delivery (Pending Payment)" : "Paid Online (Secured)"}
                </span>
              </p>
            </div>
          </div>

          {/* Sourcing Guarantee / Expected Delivery Info */}
          <div className="bg-[#E67E22]/5 border border-[#E67E22]/20 rounded-2xl p-4 space-y-2">
            <h4 className="font-serif text-xs font-bold text-[#7B241C] flex items-center gap-1.5">
              <ShieldCheck className="h-4.5 w-4.5 text-[#E67E22]" />
              <span>Varanasi Dispatch Dispatch Timeline</span>
            </h4>
            <p className="text-[11px] text-gray-600 leading-normal">
              Consignments are packed and dispatched directly from our Varanasi ashram within 24 hours. Transit to Metro cities takes <strong>2-4 business days</strong>, and <strong>4-6 business days</strong> across other regions in India. Live tracking links will be sent to you via SMS and WhatsApp.
            </p>
          </div>

        </div>

        {/* Action buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 py-3.5 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] font-serif font-bold text-sm tracking-wide rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="h-4.5 w-4.5 text-[#D4AF37]" />
            <span>CONTINUE SHOPPING</span>
          </Link>
          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20confirm%20my%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 bg-white border border-[#7B241C]/30 hover:border-[#7B241C] text-[#7B241C] font-serif font-bold text-sm tracking-wide rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="h-4.5 w-4.5 text-[#E67E22]" />
            <span>SUPPORT WHATSAPP</span>
          </a>
        </div>

      </div>
    </div>
  );
}
