"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Truck, Sparkles, CheckCircle, ShoppingBag } from "lucide-react";
import confetti from "canvas-confetti";
import { useCart } from "@/context/CartContext";

interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayFailedResponse {
  error: {
    code: string;
    description: string;
    source: string;
    step: string;
    reason: string;
    metadata: {
      order_id: string;
      payment_id: string;
    };
  };
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  selectedVariant?: string;
  price?: number;
  originalPrice?: number;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  productName = "Kashi Divine Puja Kit",
  selectedVariant = "",
  price = 1499,
  originalPrice = 2999
}: CheckoutModalProps) {
  const { checkoutData, cartItems, clearCart } = useCart();
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
  const [paymentError, setPaymentError] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Clear errors asynchronously to avoid React render loop warning
      timer = setTimeout(() => setPaymentError(null), 0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      if (timer) clearTimeout(timer);
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setPaymentError(null);

    const isDirect = checkoutData?.isDirect ?? true;
    const checkoutItems = isDirect
      ? [
          {
            price: checkoutData?.price ?? price,
            quantity: 1,
          },
        ]
      : cartItems.map((item) => ({
          price: item.price,
          quantity: item.quantity,
        }));

    const finalPrice = checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (formData.paymentMethod === "cod") {
      // Simulate API call for COD
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setOrderId("KDPK-" + Math.floor(100000 + Math.random() * 900000));

        if (!isDirect) {
          clearCart();
        }

        // Fire confetti
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#E67E22", "#7B241C", "#D4AF37", "#FFF9F0"],
        });
      }, 1500);
    } else {
      // Razorpay Online Payment Flow
      try {
        const amountInPaise = finalPrice * 100;
        
        // 1. Create order on the backend
        const res = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: amountInPaise,
            currency: "INR",
            receipt: `receipt_checkout_${Date.now()}`,
          }),
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || "Failed to generate Razorpay order ID");
        }

        const orderData = await res.json();
        const { order_id } = orderData;

        // Verify Razorpay SDK is loaded
        if (!window.Razorpay) {
          throw new Error("Razorpay SDK could not be loaded. Check your connection.");
        }

        // 2. Configure and open Razorpay modal
        const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        const options = {
          key: keyId,
          amount: amountInPaise,
          currency: "INR",
          name: "Kashi Divine Puja Kit",
          description: productName + (selectedVariant ? ` - ${selectedVariant}` : ""),
          image: "/images/hero_puja_kit.png",
          order_id: order_id,
          handler: async function (response: RazorpaySuccessResponse) {
            try {
              setIsSubmitting(true);
              
              // 3. Verify signature on the backend
              const verifyRes = await fetch("/api/verify-payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              if (!verifyRes.ok) {
                const verifyErr = await verifyRes.json();
                throw new Error(verifyErr.error || "Payment signature verification failed");
              }

              // Payment verification succeeded!
              setIsSuccess(true);
              setOrderId(response.razorpay_order_id);
              
              if (!isDirect) {
                clearCart();
              }

              // Fire confetti
              confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ["#E67E22", "#7B241C", "#D4AF37", "#FFF9F0"],
              });
            } catch (err: unknown) {
              const errorObj = err as Error;
              console.error("Verification error:", errorObj);
              setPaymentError(errorObj.message || "Failed to verify signature");
            } finally {
              setIsSubmitting(false);
            }
          },
          prefill: {
            name: formData.name,
            contact: formData.phone,
          },
          notes: {
            address: formData.address,
            city: formData.city,
            pincode: formData.pincode,
          },
          theme: {
            color: "#7B241C",
          },
          modal: {
            ondismiss: function () {
              setIsSubmitting(false);
              setPaymentError("Payment process cancelled by the user.");
            },
          },
        };

        const rzp = new window.Razorpay(options);
        
        rzp.on("payment.failed", function (response: RazorpayFailedResponse) {
          setIsSubmitting(false);
          setPaymentError("Payment failed: " + response.error.description);
        });

        rzp.open();
      } catch (err: unknown) {
        const errorObj = err as Error;
        console.error("Online payment checkout initialization error:", errorObj);
        setPaymentError(errorObj.message || "Failed to initialize payment gateway");
        setIsSubmitting(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-stretch justify-end overflow-hidden">
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
            className="relative z-10 w-full max-w-lg h-screen max-h-screen bg-[#FFF9F0] text-[#222222] shadow-2xl flex flex-col border-l border-[#D4AF37]/30"
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
                    <div className="text-xs font-bold text-[#7B241C] uppercase tracking-wider border-b border-[#7B241C]/5 pb-2 flex items-center gap-1.5">
                      <ShoppingBag className="h-4 w-4 text-[#E67E22]" />
                      <span>Items to Order</span>
                    </div>
                    <div className="divide-y divide-[#7B241C]/5 max-h-48 overflow-y-auto space-y-2.5 pb-2">
                      {(() => {
                        const isDirect = checkoutData?.isDirect ?? true;
                        const checkoutItems = isDirect
                          ? [
                              {
                                title: checkoutData?.productName || productName,
                                variantName: checkoutData?.selectedVariant || selectedVariant,
                                price: checkoutData?.price ?? price,
                                originalPrice: checkoutData?.originalPrice ?? originalPrice,
                                quantity: 1,
                              },
                            ]
                          : cartItems.map((item) => ({
                              title: item.title,
                              variantName: item.variantName,
                              price: item.price,
                              originalPrice: item.originalPrice,
                              quantity: item.quantity,
                            }));

                        return checkoutItems.map((item, index) => (
                          <div key={index} className="flex justify-between items-start pt-2 first:pt-0">
                            <div>
                              <span className="font-medium text-xs md:text-sm text-[#7B241C] line-clamp-1">
                                {item.title}
                              </span>
                              {item.variantName && (
                                <span className="text-[10px] text-gray-500 block">
                                  Variant: {item.variantName}
                                </span>
                              )}
                              <span className="text-[10px] text-gray-400">Qty: {item.quantity}</span>
                            </div>
                            <span className="font-serif font-bold text-xs md:text-sm text-[#E67E22] shrink-0">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        ));
                      })()}
                    </div>

                    {/* Cost summary */}
                    {(() => {
                      const isDirect = checkoutData?.isDirect ?? true;
                      const checkoutItems = isDirect
                        ? [
                            {
                              price: checkoutData?.price ?? price,
                              originalPrice: checkoutData?.originalPrice ?? originalPrice,
                              quantity: 1,
                            },
                          ]
                        : cartItems.map((item) => ({
                            price: item.price,
                            originalPrice: item.originalPrice,
                            quantity: item.quantity,
                          }));

                      const finalPrice = checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
                      const finalOriginalPrice = checkoutItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
                      const finalSavings = finalOriginalPrice - finalPrice;

                      return (
                        <>
                          <div className="text-xs text-gray-500 flex flex-col gap-1 pt-2 border-t border-[#7B241C]/5">
                            <div className="flex justify-between">
                              <span>Original Price</span>
                              <span className="line-through">₹{finalOriginalPrice.toLocaleString()}</span>
                            </div>
                            {finalSavings > 0 && (
                              <div className="flex justify-between text-green-600 font-medium">
                                <span>Discount ({(100 - (finalPrice / finalOriginalPrice) * 100).toFixed(0)}% Off)</span>
                                <span>-₹{finalSavings.toLocaleString()}</span>
                              </div>
                            )}
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
                            <span className="font-serif font-bold text-lg text-[#7B241C]">
                              ₹{finalPrice.toLocaleString()}
                            </span>
                          </div>
                        </>
                      );
                    })()}
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
                      <label className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === "cod"
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

                      <label className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === "online"
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

                  {/* Payment Error Display */}
                  {paymentError && (
                    <div className="bg-red-50 text-red-700 p-3.5 rounded-xl border border-red-200 text-xs text-center font-medium shadow-sm">
                      {paymentError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full py-4 bg-gradient-to-r from-[#7B241C] to-[#511812] hover:from-[#E67E22] hover:to-[#D35400] text-white font-serif font-bold text-base tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                        {formData.paymentMethod === "online" ? "Opening Payment Gateway..." : "Invoking Blessings..."}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>{formData.paymentMethod === "online" ? "PROCEED TO SECURE PAYMENT" : "CONFIRM SACRED ORDER"}</span>
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
                      Har Har Mahadev! We have received your request for the {productName}{selectedVariant ? ` (${selectedVariant})` : ""}.
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
                      setPaymentError(null);
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
