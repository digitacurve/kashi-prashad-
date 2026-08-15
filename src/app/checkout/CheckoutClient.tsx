"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Truck, ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { products, Product, ProductVariant } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface CheckoutClientProps {
  searchParams: {
    buyNow?: string;
    slug?: string;
    variant?: string;
  };
}

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

function generateReceiptId() {
  return `receipt_checkout_${Date.now()}`;
}

export default function CheckoutClient({ searchParams }: CheckoutClientProps) {
  const router = useRouter();
  const { cartItems, clearCart, isHydrated } = useCart();

  const isBuyNow = searchParams.buyNow === "true";
  const slug = searchParams.slug;
  const variantId = searchParams.variant;

  // Resolve Buy Now items
  let buyNowProduct: Product | undefined;
  let buyNowVariant: ProductVariant | undefined;
  if (isBuyNow && slug) {
    buyNowProduct = products.find((p) => p.slug === slug);
    if (buyNowProduct && variantId) {
      buyNowVariant = buyNowProduct.variants.find((v) => v.id === variantId);
    }
  }

  // Checkout Items array
  const checkoutItems = isBuyNow && buyNowProduct && buyNowVariant
    ? [
        {
          slug: buyNowProduct.slug,
          title: buyNowProduct.title,
          variantId: buyNowVariant.id,
          variantName: buyNowVariant.name,
          price: buyNowVariant.price ?? 0,
          originalPrice: buyNowVariant.originalPrice ?? 0,
          image: buyNowProduct.images[0]?.src || "/images/hero_puja_kit.png",
          quantity: 1,
        },
      ]
    : cartItems;

  const totalAmount = checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalOriginalAmount = checkoutItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
  const totalSavings = totalOriginalAmount - totalAmount;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod", // 'cod' or 'online'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  // Sync state drop-downs or text inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile Number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    if (!formData.address.trim()) newErrors.address = "Shipping Address is required";
    if (!formData.city.trim()) newErrors.city = "City/Town is required";
    
    const pincodeRegex = /^\d{6}$/;
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit postal pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setPaymentError(null);

    // Prepare success URL payload
    const itemsPayload = JSON.stringify(
      checkoutItems.map((item) => ({
        title: item.title,
        variantName: item.variantName,
        price: item.price,
        quantity: item.quantity,
      }))
    );

    const redirectSuccess = (orderIdVal: string, methodVal: string) => {
      const query = new URLSearchParams({
        orderId: orderIdVal,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
        amount: totalAmount.toString(),
        paymentMethod: methodVal,
        items: itemsPayload,
      });
      router.push(`/order-success?${query.toString()}`);
    };

    if (formData.paymentMethod === "cod") {
      // COD flow
      setTimeout(() => {
        const orderIdVal = "KDPK-" + Math.floor(100000 + Math.random() * 900000);
        if (!isBuyNow) {
          clearCart();
        }
        setIsSubmitting(false);
        
        // Fire confetti
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#E67E22", "#7B241C", "#D4AF37", "#FFF9F0"],
        });

        redirectSuccess(orderIdVal, "cod");
      }, 1500);
    } else {
      // Pay Online (Razorpay) Flow
      try {
        const amountInPaise = totalAmount * 100;
        
        const res = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: amountInPaise,
            currency: "INR",
            receipt: generateReceiptId(),
          }),
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || "Failed to generate Razorpay order ID");
        }

        const orderData = await res.json();
        const { order_id } = orderData;

        if (!window.Razorpay) {
          throw new Error("Razorpay SDK could not be loaded. Check your connection.");
        }

        const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        const options = {
          key: keyId,
          amount: amountInPaise,
          currency: "INR",
          name: "Kashi Divine Puja Kit",
          description: checkoutItems.map(i => i.title).join(", "),
          image: "/images/hero_puja_kit.png",
          order_id: order_id,
          handler: async function (response: RazorpaySuccessResponse) {
            try {
              setIsSubmitting(true);
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

              if (!isBuyNow) {
                clearCart();
              }
              
              // Fire confetti
              confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ["#E67E22", "#7B241C", "#D4AF37", "#FFF9F0"],
              });

              redirectSuccess(response.razorpay_order_id, "online");
            } catch (err: unknown) {
              const errorObj = err as Error;
              console.error("Verification error:", errorObj);
              setPaymentError(errorObj.message || "Failed to verify signature");
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

  // Prevent flash before hydration resolves cartItems
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-[#FFF9F0] flex items-center justify-center">
        <Loader2 className="h-10 w-10 text-[#7B241C] animate-spin" />
      </div>
    );
  }

  // Handle empty state gracefully
  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF9F0] flex flex-col items-center justify-center px-4 space-y-6">
        <div className="w-20 h-20 bg-white border border-[#D4AF37]/30 rounded-full flex items-center justify-center text-[#7B241C] shadow-lg">
          <ShieldCheck className="h-10 w-10 text-[#E67E22]" />
        </div>
        <div className="text-center space-y-2 max-w-sm">
          <h1 className="font-serif text-2xl font-bold text-[#7B241C]">Checkout Empty</h1>
          <p className="text-sm text-gray-600">Your cart is currently empty, and no active direct checkout was selected.</p>
        </div>
        <Link
          href="/"
          className="px-6 py-3 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] font-serif font-bold rounded-lg shadow-md transition-colors"
        >
          Explore Altar Kits
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#222222] font-sans flex flex-col">
      {/* 1. Distraction-Free Header */}
      <header className="bg-white border-b border-[#D4AF37]/20 py-4.5 px-4 sticky top-0 z-50 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-xl md:text-2xl font-bold text-[#7B241C] group-hover:text-[#E67E22] transition-colors tracking-wide">
              Kashi Prasad
            </span>
          </Link>
          <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-500 font-medium">
            <ShieldCheck className="h-4.5 w-4.5 text-[#E67E22] animate-pulse" />
            <span className="text-[#7B241C] font-semibold">100% Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* 2. Main Content Wrapper */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8 md:py-12">
        {/* Back Link */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#7B241C] transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Product</span>
        </button>

        {paymentError && (
          <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 text-xs flex items-center gap-2 font-medium shadow-sm">
            <AlertCircle className="h-4.5 w-4.5 text-red-600 shrink-0" />
            <span>{paymentError}</span>
          </div>
        )}

        {/* Desktop grid layout */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* MOBILE ORDER SUMMARY (Renders first on mobile viewports) */}
          <div className="block lg:hidden w-full bg-white rounded-2xl border border-[#D4AF37]/20 shadow-md p-5 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#7B241C] border-b border-[#7B241C]/10 pb-2">
              Order Summary
            </h3>
            <div className="divide-y divide-[#7B241C]/5 space-y-3 pb-3">
              {checkoutItems.map((item) => (
                <div key={`${item.slug}-${item.variantId}`} className="flex justify-between items-start gap-4 pt-3 first:pt-0">
                  <div className="flex gap-3">
                    <div className="relative h-12 w-12 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-xs text-[#7B241C] line-clamp-1">{item.title}</span>
                      {item.variantName && (
                        <span className="text-[10px] text-gray-500 block">Variant: {item.variantName}</span>
                      )}
                      <span className="text-[10px] text-gray-400">Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-serif font-bold text-xs text-[#E67E22] shrink-0">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#7B241C]/10 pt-3 space-y-2 text-xs">
              <div className="flex justify-between text-gray-500">
                <span>Original Total</span>
                <span className="line-through">₹{totalOriginalAmount.toLocaleString()}</span>
              </div>
              {totalSavings > 0 && (
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Savings</span>
                  <span>-₹{totalSavings.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-[#7B241C] font-bold text-sm pt-2 border-t border-[#7B241C]/5">
                <span>Total Amount</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN: Shipping & Payment Form details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Delivery Details Card */}
            <div className="bg-white rounded-2xl border border-[#D4AF37]/25 shadow-md p-6 md:p-8 space-y-6">
              <div className="border-b border-[#7B241C]/10 pb-3">
                <h2 className="font-serif text-xl font-bold text-[#7B241C]">Delivery Details</h2>
                <p className="text-xs text-gray-500 mt-1">Please enter your shipping address coordinates accurately.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-[#7B241C] tracking-wide uppercase">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-[#E67E22]"} focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 font-medium">{errors.name}</p>}
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#7B241C] tracking-wide uppercase">Mobile Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    maxLength={10}
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-[#E67E22]"} focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 font-medium">{errors.phone}</p>}
                </div>

                {/* Pincode */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#7B241C] tracking-wide uppercase">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="e.g. 221001"
                    maxLength={6}
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.pincode ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-[#E67E22]"} focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm`}
                  />
                  {errors.pincode && <p className="text-[11px] text-red-500 font-medium">{errors.pincode}</p>}
                </div>

                {/* Shipping Address */}
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-[#7B241C] tracking-wide uppercase">Shipping Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House/Flat No., Street, Landmark"
                    rows={3}
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.address ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-[#E67E22]"} focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm`}
                  />
                  {errors.address && <p className="text-[11px] text-red-500 font-medium">{errors.address}</p>}
                </div>

                {/* City/Town */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#7B241C] tracking-wide uppercase">City/Town *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Varanasi"
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.city ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-[#E67E22]"} focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm`}
                  />
                  {errors.city && <p className="text-[11px] text-red-500 font-medium">{errors.city}</p>}
                </div>

                {/* State */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#7B241C] tracking-wide uppercase">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="e.g. Uttar Pradesh"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#E67E22] focus:ring-1 focus:ring-[#E67E22] bg-white outline-none transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Payment Options Card */}
            <div className="bg-white rounded-2xl border border-[#D4AF37]/25 shadow-md p-6 md:p-8 space-y-6">
              <div className="border-b border-[#7B241C]/10 pb-3">
                <h2 className="font-serif text-xl font-bold text-[#7B241C]">Payment Method</h2>
                <p className="text-xs text-gray-500 mt-1">Select your preferred payment coordinator.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Cash on Delivery */}
                <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === "cod" ? "border-[#E67E22] bg-[#E67E22]/5" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                    className="mt-1 accent-[#7B241C]"
                  />
                  <div>
                    <span className="font-serif font-bold text-sm text-[#7B241C] block">Cash on Delivery</span>
                    <span className="text-[11px] text-[#E67E22] font-semibold bg-[#E67E22]/10 px-2 py-0.5 rounded-full inline-block mt-1">
                      No advance payment
                    </span>
                  </div>
                </label>

                {/* Pay Online */}
                <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === "online" ? "border-[#E67E22] bg-[#E67E22]/5" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === "online"}
                    onChange={handleChange}
                    className="mt-1 accent-[#7B241C]"
                  />
                  <div>
                    <span className="font-serif font-bold text-sm text-[#7B241C] block">Pay Online</span>
                    <span className="text-[11px] text-[#7B241C] font-semibold bg-[#7B241C]/10 px-2 py-0.5 rounded-full inline-block mt-1">
                      Extra Free Gift
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button (CTA - stacked on mobile under payment options) */}
            <div className="block lg:hidden pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4.5 bg-gradient-to-r from-[#7B241C] to-[#511812] hover:from-[#E67E22] hover:to-[#D35400] text-white font-serif font-bold text-base tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>PROCESSING ORDER...</span>
                  </>
                ) : (
                  <span>
                    {formData.paymentMethod === "cod" ? "CONFIRM SACRED ORDER" : "PROCEED TO SECURE PAYMENT"}
                  </span>
                )}
              </button>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-medium">
                <Truck className="h-4 w-4 text-[#E67E22]" />
                <span>Express dispatch direct from holy city Varanasi</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Desktop Order Summary (Renders on desktop viewports) */}
          <div className="hidden lg:block lg:col-span-5 bg-white rounded-2xl border border-[#D4AF37]/25 shadow-md p-6 md:p-8 space-y-6">
            <h3 className="font-serif text-lg font-bold text-[#7B241C] border-b border-[#7B241C]/10 pb-3">
              Order Summary
            </h3>
            
            <div className="divide-y divide-[#7B241C]/5 max-h-[350px] overflow-y-auto pr-1 space-y-3 pb-3">
              {checkoutItems.map((item) => (
                <div key={`${item.slug}-${item.variantId}`} className="flex justify-between items-start gap-4 pt-3 first:pt-0">
                  <div className="flex gap-3">
                    <div className="relative h-14 w-14 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-xs md:text-sm text-[#7B241C] line-clamp-2 leading-snug">
                        {item.title}
                      </span>
                      {item.variantName && (
                        <span className="text-[10px] text-gray-500 block mt-0.5">Variant: {item.variantName}</span>
                      )}
                      <span className="text-[10px] text-gray-400 block mt-0.5">Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-serif font-bold text-xs md:text-sm text-[#E67E22] shrink-0">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#7B241C]/10 pt-4 space-y-3 text-xs md:text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Original Subtotal</span>
                <span className="line-through">₹{totalOriginalAmount.toLocaleString()}</span>
              </div>
              {totalSavings > 0 && (
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Sacred Savings</span>
                  <span>-₹{totalSavings.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-500">
                <span>Shipping & Handing</span>
                <span className="text-green-600 font-bold uppercase text-xs">FREE</span>
              </div>
              <div className="flex justify-between text-[#7B241C] font-bold text-base pt-3 border-t border-[#7B241C]/10">
                <span>Total Amount</span>
                <span className="text-[#E67E22]">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-[#7B241C] to-[#511812] hover:from-[#E67E22] hover:to-[#D35400] text-white font-serif font-bold text-sm tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>PROCESSING...</span>
                </>
              ) : (
                <span>
                  {formData.paymentMethod === "cod" ? "CONFIRM SACRED ORDER" : "PROCEED TO PAY ONLINE"}
                </span>
              )}
            </button>

            <div className="text-[10px] text-center text-gray-400 space-y-1.5 pt-2">
              <p className="flex items-center justify-center gap-1.5 text-gray-500 font-medium">
                <ShieldCheck className="h-4 w-4 text-[#7B241C]" />
                <span>100% Sanctified Altars Guaranteed Sourcing</span>
              </p>
            </div>
          </div>

        </form>
      </main>
    </div>
  );
}
