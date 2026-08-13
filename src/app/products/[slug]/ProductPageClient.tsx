"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Star,
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  AlertCircle
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import DetailedChecklist from "@/components/DetailedChecklist";
import CartDrawer from "@/components/CartDrawer";
import WhatsInside from "@/components/WhatsInside";
import EmotionalSection from "@/components/EmotionalSection";
import { Product, ProductVariant } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductPageClientProps {
  product: Product;
  allProducts: Product[];
}

export default function ProductPageClient({ product, allProducts }: ProductPageClientProps) {
  // Variant & Tab & FAQ states
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [activeTab, setActiveTab] = useState<"description" | "comparison" | "specs">("description");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const { addToCart, triggerCheckout, isCheckoutOpen, setIsCheckoutOpen } = useCart();

  // Reset states during render when product changes (e.g. navigation between kits) to avoid cascading effects
  const [prevProduct, setPrevProduct] = useState(product);
  if (product.slug !== prevProduct.slug) {
    setPrevProduct(product);
    setSelectedVariant(product.variants[0]);
    setActiveImageIdx(0);
    setActiveTab("description");
    setActiveFAQ(null);
  }

  // Recommendations (all other products in catalog)
  const recommendations = allProducts.filter((p) => p.slug !== product.slug);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 2. Sticky Header */}
      <div className="sticky top-0 z-40 w-full">
        <Header />
      </div>

      <main className="flex-grow pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* Breadcrumbs */}
          <div className="text-xs text-gray-500 mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-[#E67E22] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#7B241C] font-semibold">{product.title}</span>
          </div>

          {/* 2-Column Product Detail Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">

            {/* Left Column: Interactive Product Images */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square w-full rounded-2xl border border-[#D4AF37]/35 bg-white shadow-md overflow-hidden group">
                <Image
                  src={product.images[activeImageIdx]?.src || "/images/hero_puja_kit.png"}
                  alt={product.images[activeImageIdx]?.alt || product.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#7B241C] text-[#FFF9F0] text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-[#D4AF37]/50 shadow flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-[#D4AF37] animate-pulse" />
                    {selectedVariant.badge}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative aspect-square w-full rounded-xl border overflow-hidden cursor-pointer transition-all ${activeImageIdx === idx
                        ? "border-[#E67E22] ring-2 ring-[#E67E22]/15 shadow-md"
                        : "border-[#D4AF37]/25 hover:border-[#E67E22]"
                      }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Buying controls & Pricing */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">

              {/* Product Info & Scarcity Banners */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="flex items-center gap-1 bg-white border border-[#D4AF37]/35 text-[#7B241C] px-3.5 py-1 rounded-full font-semibold shadow-xs">
                    <ShieldCheck className="h-4 w-4 text-[#E67E22]" />
                    <span>Vedic Priest-Supervised Assembly</span>
                  </span>
                  <span className="bg-[#7B241C] text-[#FFF9F0] px-3.5 py-1 rounded-full font-semibold border border-[#D4AF37]/25 shadow-xs flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-[#D4AF37] animate-pulse" />
                    <span>Pure Varanasi Source</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-[#E67E22] tracking-wider block">
                    Kashi Prasad Collection
                  </span>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#7B241C] tracking-wide leading-tight">
                    {product.title}
                  </h1>
                </div>

                {/* Rating */}
                {product.rating !== null && (
                  <div className="flex items-center gap-1 text-sm text-[#D4AF37]">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="font-medium text-gray-700 ml-1">{product.rating}</span>
                    <span className="text-gray-400 font-light">|</span>
                    <span className="text-[#7B241C] underline hover:text-[#E67E22] transition-colors cursor-pointer">
                      {product.reviewsCount} Devotee Reviews
                    </span>
                  </div>
                )}

                <div className="w-16 h-0.5 bg-[#D4AF37]" />

                {/* Pricing display */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6 flex items-center justify-between shadow-xs relative overflow-hidden">
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 font-medium">Sacred Offering Price</div>
                    <div className="flex items-baseline gap-3">
                      {selectedVariant.price === null ? (
                        <span className="font-serif font-bold text-xl text-gray-500">
                          Price Coming Soon
                        </span>
                      ) : (
                        <>
                          <span className="font-serif font-bold text-3xl text-[#7B241C]">
                            ₹{selectedVariant.price.toLocaleString()}
                          </span>
                          {selectedVariant.originalPrice !== null && selectedVariant.originalPrice > selectedVariant.price && (
                            <span className="line-through text-sm text-gray-400">
                              ₹{selectedVariant.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    {selectedVariant.price !== null && selectedVariant.originalPrice !== null && selectedVariant.originalPrice > selectedVariant.price && (
                      <span className="text-[10px] md:text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full font-bold inline-block">
                        SAVE {Math.round(((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100)}%
                      </span>
                    )}
                    <div className="text-[10px] text-gray-500 mt-1 italic font-light">Includes free shipping</div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  {selectedVariant.description}
                </p>

                {/* Variant Selector (Only renders if product has multiple variants) */}
                {product.variants.length > 1 && (
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[#7B241C]">Choose Kit Variant:</span>
                      <span className="text-gray-500 italic font-medium">Suitable for: {selectedVariant.suitableFor}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {product.variants.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setSelectedVariant(v)}
                          className={`p-3 rounded-xl border-2 text-left cursor-pointer transition-all ${selectedVariant.id === v.id
                              ? "border-[#E67E22] bg-[#E67E22]/5 shadow-sm"
                              : "border-gray-200 bg-white hover:border-[#D4AF37]/50"
                            }`}
                        >
                          <div className="font-serif font-bold text-xs md:text-sm text-[#7B241C]">{v.name}</div>
                          <div className="text-xs font-bold text-[#E67E22] mt-1">
                            {v.price === null ? "Coming Soon" : `₹${v.price.toLocaleString()}`}
                          </div>
                          <div className="text-[9px] text-gray-500 mt-0.5 font-light">For {v.suitableFor}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons & Core trust */}
              <div className="space-y-4 pt-4 border-t border-[#7B241C]/10">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-gray-700 bg-white border border-[#D4AF37]/15 rounded-lg p-2.5 shadow-sm">
                    <Truck className="h-4.5 w-4.5 text-[#E67E22] shrink-0" />
                    <div>
                      <div className="font-bold">Free Shipping</div>
                      <div className="text-[10px] text-gray-500 font-light">Fast dispatch from Varanasi</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 bg-white border border-[#D4AF37]/15 rounded-lg p-2.5 shadow-sm">
                    <ShieldCheck className="h-4.5 w-4.5 text-[#7B241C] shrink-0" />
                    <div>
                      <div className="font-bold">Cash On Delivery</div>
                      <div className="text-[10px] text-gray-500 font-light">Pay at your doorstep</div>
                    </div>
                  </div>
                </div>

                {selectedVariant.price === null ? (
                  <button
                    disabled
                    className="w-full py-4 bg-gray-50 border border-gray-200 text-gray-400 font-serif font-bold text-base tracking-wide rounded-xl cursor-not-allowed text-center uppercase"
                  >
                    Coming Soon
                  </button>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <button
                      onClick={() => addToCart(product, selectedVariant)}
                      className="w-full py-4 bg-white border border-[#7B241C] hover:bg-[#7B241C]/5 text-[#7B241C] font-serif font-bold text-base tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      <span>ADD TO CART</span>
                    </button>
                    <button
                      onClick={() => {
                        addToCart(product, selectedVariant);
                        triggerCheckout(product.title, selectedVariant.name, selectedVariant.price!, selectedVariant.originalPrice!);
                      }}
                      className="w-full py-4 bg-gradient-to-r from-[#7B241C] to-[#511812] hover:from-[#E67E22] hover:to-[#D35400] text-white font-serif font-bold text-base tracking-wide rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>BUY NOW (FREE COD)</span>
                    </button>
                  </div>
                )}

                <div className="text-[10px] text-center text-gray-500 flex items-center justify-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5 text-[#E67E22]" />
                  <span>Guaranteed 100% Non-Perishable Material — Shipped Safely in Protective Packaging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Summary of "What's Included" */}
          <section className="bg-white rounded-2xl border border-[#D4AF37]/35 p-6 md:p-8 shadow-sm mb-8">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold text-[#E67E22] tracking-wider uppercase">Sacred Contents</span>
              <h3 className="font-serif text-2xl font-bold text-[#7B241C]">
                What&apos;s Included in the {selectedVariant.name}
              </h3>
              <p className="text-xs text-gray-500">
                A summary of the core items compiled under direct priest supervision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedVariant.keyIncludes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#FFF9F0]/50 p-3.5 rounded-xl border border-[#D4AF37]/15">
                  <div className="bg-[#7B241C] text-[#D4AF37] p-1 rounded-full shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Complete Kit Contents Checklist (NEW dynamic checklist) */}
          <div className="mb-16">
            <DetailedChecklist
              items={selectedVariant.detailedItems}
              variantName={`${product.title} - ${selectedVariant.name}`}
            />
          </div>

          {/* Tabs Section: Description, Comparison, Specs */}
          <div className="mb-16">
            <div className="flex border-b border-[#D4AF37]/20 mb-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-3 px-6 font-serif text-sm md:text-base font-bold whitespace-nowrap cursor-pointer transition-all border-b-2 ${activeTab === "description"
                    ? "border-[#7B241C] text-[#7B241C]"
                    : "border-transparent text-gray-500 hover:text-[#7B241C]"
                  }`}
              >
                Long Description
              </button>

              {product.variants.length > 1 && (
                <button
                  onClick={() => setActiveTab("comparison")}
                  className={`py-3 px-6 font-serif text-sm md:text-base font-bold whitespace-nowrap cursor-pointer transition-all border-b-2 ${activeTab === "comparison"
                      ? "border-[#7B241C] text-[#7B241C]"
                      : "border-transparent text-gray-500 hover:text-[#7B241C]"
                    }`}
                >
                  Variant Comparison
                </button>
              )}

              <button
                onClick={() => setActiveTab("specs")}
                className={`py-3 px-6 font-serif text-sm md:text-base font-bold whitespace-nowrap cursor-pointer transition-all border-b-2 ${activeTab === "specs"
                    ? "border-[#7B241C] text-[#7B241C]"
                    : "border-transparent text-gray-500 hover:text-[#7B241C]"
                  }`}
              >
                Product Specifications
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "description" && (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed font-light"
                >
                  {product.longDescription.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </motion.div>
              )}

              {activeTab === "comparison" && product.variants.length > 1 && (
                <motion.div
                  key="comp"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="overflow-x-auto"
                >
                  {/* Dynamic Variant Comparison Matrix */}
                  <table className="w-full text-left text-xs md:text-sm border-collapse rounded-xl overflow-hidden shadow-sm border border-[#D4AF37]/20">
                    <thead>
                      <tr className="bg-[#7B241C] text-[#FFF9F0] font-serif">
                        <th className="p-4">Feature</th>
                        {product.variants.map((v) => (
                          <th key={v.id} className="p-4">{v.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
                      <tr>
                        <td className="p-4 font-bold bg-[#FFF9F0]/30 text-[#7B241C]">Price</td>
                        {product.variants.map((v) => (
                          <td key={v.id} className="p-4 font-semibold text-[#E67E22]">
                            {v.price === null ? "Coming Soon" : `₹${v.price.toLocaleString()}`}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-[#FFF9F0]/30 text-[#7B241C]">Suitable For</td>
                        {product.variants.map((v) => (
                          <td key={v.id} className="p-4">{v.suitableFor}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-[#FFF9F0]/30 text-[#7B241C]">Total Items Count</td>
                        {product.variants.map((v) => (
                          <td key={v.id} className="p-4 font-bold">{v.detailedItems.length} pieces</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-bold bg-[#FFF9F0]/30 text-[#7B241C]">Key Highlights</td>
                        {product.variants.map((v) => (
                          <td key={v.id} className="p-4">
                            <ul className="list-disc pl-4 space-y-1 text-xs">
                              {v.keyIncludes.slice(0, 3).map((ki, i) => (
                                <li key={i}>{ki}</li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </motion.div>
              )}

              {activeTab === "specs" && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {product.specifications.map((group, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-[#D4AF37]/25 p-5 shadow-sm space-y-4">
                      <h4 className="font-serif font-bold text-[#7B241C] border-b border-[#D4AF37]/15 pb-2">
                        {group.groupName}
                      </h4>
                      <div className="space-y-3 text-xs md:text-sm text-gray-700">
                        {group.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex justify-between">
                            <span className="text-gray-500">{spec.label}</span>
                            <span className="font-medium">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Shipping Guarantee Banner */}
          <section className="bg-gradient-to-r from-[#7B241C] to-[#511812] rounded-2xl p-6 md:p-8 text-[#FFF9F0] border border-[#D4AF37]/35 shadow-lg relative overflow-hidden mb-16">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-[#D4AF37] tracking-wider uppercase border border-white/10">
                <Truck className="h-3.5 w-3.5" />
                <span>Premium Delivery Service</span>
              </span>
              <h3 className="font-serif text-xl md:text-3xl font-bold tracking-wide">
                {product.shippingTitle}
              </h3>
              <p className="text-xs md:text-sm text-[#FFF9F0]/85 font-light leading-relaxed">
                {product.shippingText}
              </p>
            </div>
          </section>

          {/* Dynamic FAQs accordions */}
          <section className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold text-[#E67E22] tracking-widest uppercase block">Got Questions?</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#7B241C] tracking-wide">Frequently Asked Questions</h3>
              <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-[#D4AF37]/25 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                    className="w-full p-5 text-left font-serif font-bold text-sm md:text-base text-[#7B241C] hover:text-[#E67E22] flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <span>{faq.q}</span>
                    {activeFAQ === idx ? <ChevronUp className="h-4.5 w-4.5 text-[#E67E22]" /> : <ChevronDown className="h-4.5 w-4.5 text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {activeFAQ === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-[#D4AF37]/10"
                      >
                        <p className="p-5 text-xs md:text-sm text-gray-600 leading-relaxed font-light bg-[#FFF9F0]/25">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Signature Kit Story sections (Relocated from Homepage) */}
          {product.slug === "kashi-divine-puja-kit" && (
            <div className="space-y-4">
              <WhatsInside onOrderClick={() => {
                addToCart(product, selectedVariant);
                triggerCheckout(product.title, selectedVariant.name, selectedVariant.price!, selectedVariant.originalPrice!);
              }} />
              <EmotionalSection />
            </div>
          )}

          {/* Recommendations section */}
          {recommendations.length > 0 && (
            <section className="border-t border-[#D4AF37]/20 pt-16">
              <div className="text-center mb-10 space-y-1">
                <span className="text-xs font-bold text-[#E67E22] tracking-wider uppercase">Altars collection</span>
                <h3 className="font-serif text-2xl font-bold text-[#7B241C]">You May Also Like</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto justify-center">
                {recommendations.map((rec) => (
                  <div key={rec.slug} className="bg-white rounded-2xl border border-[#D4AF37]/20 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group mx-auto w-full max-w-sm">
                    <div className="relative aspect-[4/3] w-full bg-gray-50 overflow-hidden">
                      <Image
                        src={rec.images[0]?.src || "/images/hero_puja_kit.png"}
                        alt={rec.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-[#7B241C] text-[#FFF9F0] text-[9px] font-bold tracking-wider px-2 py-0.5 rounded border border-[#D4AF37]/35 uppercase">
                        {rec.badge}
                      </div>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-serif text-lg font-bold text-[#7B241C] group-hover:text-[#E67E22] transition-colors">
                          {rec.title}
                        </h4>
                        <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-3">
                          {rec.shortDescription}
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-[#7B241C]/5 pt-3">
                        <div className="flex items-baseline gap-1.5">
                          {rec.variants[0]?.price === null ? (
                            <span className="font-serif font-bold text-xs text-gray-500">
                              Price Coming Soon
                            </span>
                          ) : (
                            <>
                              <span className="font-serif font-bold text-base text-[#7B241C]">
                                ₹{rec.variants[0]?.price?.toLocaleString()}
                              </span>
                              {rec.variants[0]?.originalPrice !== null && (
                                <span className="line-through text-[10px] text-gray-400">
                                  ₹{rec.variants[0]?.originalPrice?.toLocaleString()}
                                </span>
                              )}
                            </>
                          )}
                        </div>
                        <Link
                          href={`/products/${rec.slug}`}
                          className="text-xs font-bold text-[#E67E22] hover:text-[#7B241C] flex items-center gap-1 transition-colors"
                        >
                          <span>View Product</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* 5. Checkout Drawer Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        productName={product.title}
        selectedVariant={selectedVariant.name}
        price={selectedVariant.price ?? undefined}
        originalPrice={selectedVariant.originalPrice ?? undefined}
      />
    </div>
  );
}
