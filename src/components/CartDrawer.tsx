"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    originalSubtotal,
    triggerCartCheckout
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  const totalSavings = originalSubtotal - subtotal;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-stretch justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-md h-screen max-h-screen bg-[#FFF9F0] text-[#222222] shadow-2xl flex flex-col border-l border-[#D4AF37]/35"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#7B241C]/10 flex items-center justify-between bg-[#7B241C] text-[#FFF9F0]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-[#D4AF37]" />
                <h3 className="font-serif text-lg font-bold tracking-wide">Your Sacred Cart</h3>
                <span className="bg-[#D4AF37] text-[#7B241C] font-sans font-bold text-xs px-2 py-0.5 rounded-full">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-[#FFF9F0] transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-[#7B241C]/5 flex items-center justify-center text-[#7B241C]">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-[#7B241C] text-lg">Your Cart is Empty</h4>
                    <p className="text-xs text-gray-500 max-w-xs">
                      Invite auspiciousness into your home by selecting from our Varanasi altar collections.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById("product-catalog");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-2.5 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] font-serif font-bold text-xs tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    BROWSE ALTAR KITS
                  </button>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div
                    key={`${item.slug}-${item.variantId}-${idx}`}
                    className="flex gap-4 p-4 bg-white border border-[#D4AF37]/15 rounded-xl shadow-xs"
                  >
                    {/* Item Image */}
                    <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-[#D4AF37]/10">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Item details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-bold text-[#7B241C] leading-snug line-clamp-1">
                            {item.title}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.slug, item.variantId)}
                            className="text-gray-400 hover:text-red-600 transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        {item.variantName && (
                          <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full inline-block mt-0.5">
                            {item.variantName}
                          </span>
                        )}
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-gray-200 rounded-md bg-[#FFF9F0]/30">
                          <button
                            onClick={() => updateQuantity(item.slug, item.variantId, item.quantity - 1)}
                            className="p-1.5 hover:bg-gray-100 text-gray-600 rounded-l-md transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-xs font-semibold text-gray-700">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.slug, item.variantId, item.quantity + 1)}
                            className="p-1.5 hover:bg-gray-100 text-gray-600 rounded-r-md transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="font-serif text-sm font-bold text-[#E67E22]">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </span>
                          {item.originalPrice > item.price && (
                            <span className="block text-[10px] line-through text-gray-400">
                              ₹{(item.originalPrice * item.quantity).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer summary */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#7B241C]/10 bg-white space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline text-gray-500 text-xs">
                    <span>Original Items Total</span>
                    <span className="line-through">₹{originalSubtotal.toLocaleString()}</span>
                  </div>
                  {totalSavings > 0 && (
                    <div className="flex justify-between items-baseline text-green-600 text-xs font-semibold">
                      <span>Sacred Savings</span>
                      <span>-₹{totalSavings.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-baseline pt-1">
                    <span className="font-serif font-bold text-[#7B241C] text-base">Order Subtotal</span>
                    <span className="font-serif font-bold text-lg text-[#7B241C]">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Secure Guarantees */}
                <div className="py-2.5 bg-[#FFF9F0] border border-[#D4AF37]/15 rounded-xl px-4 flex items-center justify-around gap-2 text-[10px] text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#7B241C]" />
                    <span>Pure Varanasi Items</span>
                  </div>
                  <div className="w-px h-5 bg-gray-200" />
                  <div className="flex items-center gap-1.5">
                    <Truck className="h-4 w-4 text-[#E67E22]" />
                    <span>COD & Free Shipping</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    triggerCartCheckout();
                  }}
                  className="w-full py-4 bg-gradient-to-r from-[#7B241C] to-[#511812] hover:from-[#E67E22] hover:to-[#D35400] text-white font-serif font-bold text-sm tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>PROCEED TO CHECKOUT (COD)</span>
                </button>

                <p className="text-[10px] text-center text-gray-400">
                  * Shipping prepared under Vedic sacerdote guidelines. Fast dispatch from Kashi.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
