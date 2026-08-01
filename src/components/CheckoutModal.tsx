"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Truck, Sparkles, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod", // 'cod' or 'online'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setOrderId("KDPK-" + Math.floor(100000 + Math.random() * 900000));
      
      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#E67E22", "#7B241C", "#D4AF37", "#FFF9F0"],
      });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-lg h-full bg-[#FFF9F0] text-[#222222] shadow-2xl flex flex-col border-l border-[#D4AF37]/30"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#7B241C]/10 flex items-center justify-between bg-[#7B241C] text-[#FFF9F0]">
              <div>
                <h3 className="font-serif text-xl font-bold tracking-wide flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#D4AF37] animate-pulse" />
                  Order Your Puja Kit
                </h3>
                <p className="text-xs text-[#FFF9F0]/80 mt-1">Sourced & sanctified directly in holy Kashi</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-[#FFF9F0] transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Order Summary */}
                  <div className="bg-white rounded-xl p-4 border border-[#D4AF37]/20 shadow-sm space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-[#7B241C]/5">
                      <span className="font-medium text-sm text-[#7B241C]">Kashi Divine Puja Kit</span>
                      <span className="font-serif font-bold text-[#E67E22]">₹1,499</span>
                    </div>
                    <div className="text-xs text-gray-500 flex flex-col gap-1">
                      <div className="flex justify-between">
                        <span>Original Price</span>
                        <span className="line-through">₹2,999</span>
                      </div>
                      <div className="flex justify-between text-green-600 font-medium">
                        <span>Discount (50% Off)</span>
                        <span>-₹1,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sacred Prasad & Gangajal</span>
                        <span className="text-[#D4AF37] font-medium">FREE SOUVENIR</span>
                      </div>
                      <div className="flex justify-between">
                        <span>PAN India Shipping</span>
                        <span className="text-[#E67E22] font-medium">FREE</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#7B241C]/5">
                      <span className="font-serif font-bold text-[#7B241C]">Total Amount to Pay</span>
                      <span className="font-serif font-bold text-lg text-[#7B241C]">₹1,499</span>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="space-y-4">
                    <h4 className="font-serif text-base font-semibold text-[#7B241C] border-b border-[#7B241C]/10 pb-1">
                      Delivery Details
                    </h4>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number for delivery updates"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Shipping Address <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="address"
                          required
                          rows={3}
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="House No, Street, Landmark, Area"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            City/Town <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="e.g. Varanasi"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Pincode <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="pincode"
                            required
                            pattern="[0-9]{6}"
                            value={formData.pincode}
                            onChange={handleChange}
                            placeholder="6-digit ZIP code"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-3">
                    <h4 className="font-serif text-base font-semibold text-[#7B241C] border-b border-[#7B241C]/10 pb-1">
                      Payment Options
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                      <label className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.paymentMethod === "cod" 
                          ? "border-[#E67E22] bg-[#E67E22]/5" 
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === "cod"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="font-bold text-sm text-[#7B241C]">Cash On Delivery</span>
                        <span className="text-[10px] text-[#E67E22] font-semibold mt-1 bg-[#E67E22]/10 px-2 py-0.5 rounded-full">
                          No advance payment
                        </span>
                      </label>

                      <label className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.paymentMethod === "online" 
                          ? "border-[#E67E22] bg-[#E67E22]/5" 
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          checked={formData.paymentMethod === "online"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="font-bold text-sm text-gray-700">Pay Online</span>
                        <span className="text-[10px] text-green-600 font-semibold mt-1 bg-green-50 px-2 py-0.5 rounded-full">
                          Extra Free Gift
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-2 flex items-center justify-around text-gray-500 text-xs gap-3">
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-[#D4AF37]" />
                      <span>100% Safe Checkout</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Truck className="h-4 w-4 text-[#E67E22]" />
                      <span>PAN India Free Delivery</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full py-4 bg-gradient-to-r from-[#7B241C] to-[#511812] hover:from-[#E67E22] hover:to-[#D35400] text-white font-serif font-bold text-base tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                        Invoking Blessings...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>CONFIRM SACRED ORDER</span>
                        <Sparkles className="h-5 w-5 text-[#D4AF37] group-hover:scale-125 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-4 text-center space-y-6 flex flex-col items-center justify-center h-full"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    className="bg-green-100 p-4 rounded-full"
                  >
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </motion.div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-[#7B241C]">
                      Order Placed Successfully!
                    </h4>
                    <p className="text-sm text-gray-600 max-w-sm">
                      Har Har Mahadev! We have received your request for the Kashi Divine Puja Kit.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-[#D4AF37]/20 shadow-sm w-full max-w-sm">
                    <div className="text-xs text-gray-500 mb-1">Order ID</div>
                    <div className="font-mono text-base font-bold text-[#E67E22] tracking-wider">{orderId}</div>
                    <div className="mt-4 pt-3 border-t border-[#7B241C]/5 text-[11px] text-gray-500">
                      We will prepare your kit with absolute devotion. Our executive will call/WhatsApp you shortly to confirm your delivery details.
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        phone: "",
                        address: "",
                        city: "",
                        state: "",
                        pincode: "",
                        paymentMethod: "cod",
                      });
                      onClose();
                    }}
                    className="px-8 py-3 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] font-serif font-semibold rounded-lg shadow transition-colors cursor-pointer"
                  >
                    Return to Page
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
