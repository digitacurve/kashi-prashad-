"use client";

import React, { useState } from "react";
import { Star, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Deterministic pseudo-random helper for SSR safety (react hydrations)
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Component imports
import OfferCountdown from "@/components/OfferCountdown";
import Header from "@/components/Header";
import ProductCatalog from "@/components/ProductCatalog";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SpecialFeatures from "@/components/SpecialFeatures";
import CheckoutModal from "@/components/CheckoutModal";
import CartDrawer from "@/components/CartDrawer";

import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { addToCart, triggerCheckout, isCheckoutOpen, setIsCheckoutOpen } = useCart();

  // Render marigold petals drifting down
  const marigoldPetals = Array.from({ length: 15 }, (_, i) => {
    const seed = i + 1;
    const left = pseudoRandom(seed * 3) * 100;
    const duration = pseudoRandom(seed * 7) * 12 + 8;
    const delay = pseudoRandom(seed * 9) * 5;
    const size = pseudoRandom(seed * 11) * 8 + 8;
    return { left, duration, delay, size };
  });

  // Floating upward gold sparks
  const goldSparks = Array.from({ length: 15 }, (_, i) => {
    const seed = i + 2;
    const left = pseudoRandom(seed * 4) * 100;
    const duration = pseudoRandom(seed * 8) * 10 + 10;
    const size = pseudoRandom(seed * 12) * 4 + 2;
    return { left, duration, size };
  });

  const handleCategoryClick = (catSlug: string) => {
    const event = new CustomEvent("filter-category", { detail: catSlug });
    window.dispatchEvent(event);
    const el = document.getElementById("product-catalog");
    if (el) {
      const offset = 140; // Account for sticky headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleCollectionClick = (query: string, catSlug?: string) => {
    if (catSlug) {
      handleCategoryClick(catSlug);
    } else if (query) {
      const event = new CustomEvent("search-products", { detail: query });
      window.dispatchEvent(event);
      const el = document.getElementById("product-catalog");
      if (el) {
        const offset = 140;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  // Scroll directly to categories bar
  const scrollToCategories = () => {
    const el = document.getElementById("shop-categories");
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Scroll directly to catalog grid
  const scrollToCatalog = () => {
    const el = document.getElementById("product-catalog");
    if (el) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Categories configuration (10 items)
  const categories = [
    { name: "Puja Kits", slug: "puja-kits", image: "/images/hero_puja_kit.png" },
    { name: "Temple Prasad", slug: "temple-prasad", image: "/images/temple_prasad_box.png" },
    { name: "Gangajal", slug: "gangajal", image: "/images/puja_kit_packaging.png" },
    { name: "Rudraksha", slug: "rudraksha", image: "/images/hero_puja_kit.png" },
    { name: "Malas", slug: "malas", image: "/images/puja_kit_packaging.png" },
    { name: "Ratnas", slug: "ratnas", image: "/images/public:images:ratnas:/01_ratna_regenerated.png" },
    { name: "Shankhs", slug: "shankhs", image: "/images/temple_prasad_box.png" },
    { name: "Agarbatti & Dhoop", slug: "agarbatti", image: "/images/puja_kit_packaging.png" },
    { name: "Brass & Copper Items", slug: "copper-items", image: "/images/temple_prasad_box.png" },
    { name: "Spiritual Gift Boxes", slug: "gift-boxes", image: "/images/puja_kit_packaging.png" },
    { name: "Temple Accessories", slug: "temple-accessories", image: "/images/hero_puja_kit.png" }
  ];

  // Best Sellers (diverse mixed list)
  const bestSellers = [
    products.find((p) => p.slug === "kashi-divine-puja-kit") || products[0],
    products.find((p) => p.slug === "rudraksha-01") || products[0],
    products.find((p) => p.slug === "mala-01") || products[0],
    products.find((p) => p.slug === "shankh-01") || products[0]
  ];

  // Curated category selections (max 4 per section)
  const prasadItems = products.filter((p) => p.category === "Temple Prasad").slice(0, 4);
  const gangajalItems = products.filter((p) => p.category === "Gangajal").slice(0, 4);
  const rudrakshaItems = products.filter((p) => p.category === "Rudrakshas").slice(0, 4);
  const shankhItems = products.filter((p) => p.category === "Shankhs").slice(0, 4);
  const malaItems = products.filter((p) => p.category === "Malas").slice(0, 4);
  const brassCopper = products.filter((p) => ["Temple Accessories", "Copper Items"].includes(p.category)).slice(0, 4);
  const agarbattiItems = products.filter((p) => p.category === "Agarbatti").slice(0, 4);

  // Festival Collections Config
  const festivalCollections = [
    { name: "Maha Shivratri Blessings", query: "Rudraksha", tag: "Shivratri Special" },
    { name: "Diwali Laxmi-Ganesh Puja", query: "Lakshmi", tag: "Festival Specials" },
    { name: "Housewarming Griha Pravesh", query: "Griha", tag: "New Beginnings" },
    { name: "Weekly Satyanarayan Vrat", query: "Satyanarayan", tag: "Home Blessings" }
  ];

  // Featured Collections Config (Diverse Sourcing with World-Class Colorful Gradients & Glows)
  const featuredCollections = [
    { 
      name: "Shiv Rudraksha Collection", 
      query: "Rudraksha", 
      catSlug: "rudraksha", 
      tag: "Cosmic Protection", 
      image: "/images/public:images:rudrakshas:/05_mukhi_rudraksha_regenerated.png", 
      desc: "Sacred, certified energized Rudrakshas and malas purified under priest supervision.",
      gradient: "from-[#0F0C1B] via-[#1D102F] to-[#0F0C1B]", 
      glow: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 65%)",
      borderColor: "border-[#7C3AED]/25 group-hover:border-[#7C3AED]",
      tagStyle: "bg-[#7C3AED] text-white border-[#A78BFA]/30"
    },
    { 
      name: "Vedic Gemstones (Ratnas)", 
      query: "Ratna", 
      catSlug: "ratnas", 
      tag: "Planetary Healing", 
      image: "/images/public:images:ratnas:/01_ratna_regenerated.png", 
      desc: "Authentic, high-vibration gemstone ratnas purified under strict Vedic priest supervision.",
      gradient: "from-[#1F0712] via-[#350F25] to-[#1F0712]", 
      glow: "radial-gradient(circle, rgba(236,72,153,0.35) 0%, transparent 65%)",
      borderColor: "border-[#EC4899]/25 group-hover:border-[#EC4899]",
      tagStyle: "bg-[#EC4899] text-white border-[#F472B6]/30"
    },
    { 
      name: "Sacred Malas & Rosaries", 
      query: "Mala", 
      catSlug: "malas", 
      tag: "Meditation Rosaries", 
      image: "/images/public:images:malas:/01_mala_regenerated.png", 
      desc: "Sacred rosaries crafted from Tulsi, Sandalwood, and Rudraksha beads for spiritual practice.",
      gradient: "from-[#1E0D03] via-[#331505] to-[#1E0D03]", 
      glow: "radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 65%)",
      borderColor: "border-[#D97706]/25 group-hover:border-[#D97706]",
      tagStyle: "bg-[#D97706] text-white border-[#F59E0B]/30"
    },
    { 
      name: "Blowing Conch Shells (Shankhs)", 
      query: "Shankh", 
      catSlug: "shankhs", 
      tag: "Sound of Purity", 
      image: "/images/public:images:shankhs:/01_sankh_regenerated.png", 
      desc: "Handpicked pristine conch shells (Shankhs) to cleanse and energize your altar space.",
      gradient: "from-[#021A1A] via-[#052C2C] to-[#021A1A]", 
      glow: "radial-gradient(circle, rgba(20,184,166,0.35) 0%, transparent 65%)",
      borderColor: "border-[#14B8A6]/25 group-hover:border-[#14B8A6]",
      tagStyle: "bg-[#0D9488] text-white border-[#14B8A6]/30"
    },
    { 
      name: "Varanasi Temple Prasad", 
      query: "Prasad", 
      catSlug: "temple-prasad", 
      tag: "Holy Offerings", 
      image: "/images/temple_prasad_box.png", 
      desc: "Sanctified dry prasad and laddu offerings directly blessed at major Kashi temples.",
      gradient: "from-[#241302] via-[#3A1E02] to-[#241302]", 
      glow: "radial-gradient(circle, rgba(249,115,22,0.35) 0%, transparent 65%)",
      borderColor: "border-[#EA580C]/25 group-hover:border-[#EA580C]",
      tagStyle: "bg-[#EA580C] text-white border-[#F97316]/30"
    },
    { 
      name: "Holy Gangajal & Puja Kits", 
      query: "Gangajal", 
      catSlug: "gangajal", 
      tag: "Sacred Ganges Water", 
      image: "/images/puja_kit_packaging.png", 
      desc: "Pure, mid-stream Ganga water gathered directly at Varanasi and authentic puja kit elements.",
      gradient: "from-[#031A12] via-[#062E1F] to-[#031A12]", 
      glow: "radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 65%)",
      borderColor: "border-[#10B981]/25 group-hover:border-[#10B981]",
      tagStyle: "bg-[#059669] text-white border-[#10B981]/30"
    }
  ];

  const [featuredIndex, setFeaturedIndex] = useState(0);

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredCollections.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredCollections.length) % featuredCollections.length);
  };

  // Auto-play interval effect for slider
  React.useEffect(() => {
    const timer = setInterval(() => {
      nextFeatured();
    }, 4500); // Transitions every 4.5 seconds

    return () => clearInterval(timer);
  }, [featuredIndex]);

  // Get 3 visible slides for desktop carousel
  const visibleFeatured = [
    featuredCollections[featuredIndex],
    featuredCollections[(featuredIndex + 1) % featuredCollections.length],
    featuredCollections[(featuredIndex + 2) % featuredCollections.length],
  ];


  // Local card rendering helper to avoid large layout repetitions
  const ProductCard = ({ prod }: { prod: Product }) => {
    const defaultVar = prod.variants[0];
    const isComingSoon = defaultVar.price === null;
    const hasSavings = !isComingSoon && defaultVar.originalPrice !== null && defaultVar.price !== null && defaultVar.originalPrice > defaultVar.price;
    const savingsPercent = hasSavings && defaultVar.originalPrice ? Math.round(
      ((defaultVar.originalPrice - defaultVar.price!) / defaultVar.originalPrice) * 100
    ) : 0;
    const isGemstone = prod.category === "Ratnas";

    return (
      <div
        className="bg-white rounded-xl border border-gray-150 flex flex-col justify-between h-[480px] overflow-hidden hover:shadow-md transition-all group"
      >
        <Link href={`/products/${prod.slug}`} className="relative h-48 w-full bg-gray-50 overflow-hidden block border-b border-gray-100">
          <Image
            src={prod.images[0]?.src || "/images/hero_puja_kit.png"}
            alt={prod.title}
            fill
            sizes="(max-w-768px) 100vw, 25vw"
            loading="lazy"
            className={
              isGemstone
                ? "object-contain p-6 bg-[#FFF9F0]/50 group-hover:scale-105 transition-transform duration-500"
                : "object-cover group-hover:scale-102 transition-transform duration-500"
            }
          />
          <span className="absolute top-3 left-3 bg-[#7B241C] text-[#FFF9F0] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#D4AF37]/25 shadow-xs uppercase tracking-wider">
            {isComingSoon ? "Coming Soon" : "Sacred"}
          </span>
          {hasSavings && (
            <span className="absolute top-3 right-3 bg-[#E67E22] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
              SAVE {savingsPercent}%
            </span>
          )}
        </Link>

        <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[10px] text-gray-500">
              <span className="text-[#E67E22] font-semibold uppercase tracking-wider">{prod.tagline}</span>
              {prod.rating !== null && (
                <div className="flex items-center gap-0.5 text-[#D4AF37]">
                  <Star className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
                  <span className="font-bold text-gray-700">{prod.rating}</span>
                </div>
              )}
            </div>

            <Link href={`/products/${prod.slug}`}>
              <h3 className="font-serif text-sm font-bold text-gray-900 group-hover:text-[#7B241C] transition-colors leading-tight line-clamp-1">
                {prod.title}
              </h3>
            </Link>

            <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-2">
              {prod.shortDescription}
            </p>
          </div>

          <div className="space-y-2 pt-2.5 border-t border-gray-100 shrink-0">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-1.5">
                {isComingSoon ? (
                  <span className="font-serif font-bold text-gray-500 text-xs md:text-sm">
                    Price Coming Soon
                  </span>
                ) : (
                  <>
                    <span className="font-serif font-bold text-[#7B241C] text-sm md:text-base">
                      ₹{defaultVar.price?.toLocaleString()}
                    </span>
                    {hasSavings && defaultVar.originalPrice && (
                      <span className="line-through text-[10px] text-gray-400">
                        ₹{defaultVar.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </>
                )}
              </div>
              {!isComingSoon && (
                <span className="text-[8px] text-[#E67E22] font-semibold uppercase tracking-wider">COD Available</span>
              )}
            </div>

            {isComingSoon ? (
              <div className="w-full">
                <button
                  disabled
                  className="w-full py-2 bg-gray-50 border border-gray-200 text-gray-400 font-serif text-[10px] font-bold tracking-wider rounded-md cursor-not-allowed text-center uppercase"
                >
                  Coming Soon
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => addToCart(prod, defaultVar)}
                  className="py-1.5 border border-[#7B241C] text-[#7B241C] hover:bg-[#7B241C]/5 font-serif text-[10px] font-bold tracking-wider rounded-md transition-colors cursor-pointer"
                >
                  ADD
                </button>
                <button
                  onClick={() => {
                    addToCart(prod, defaultVar);
                    triggerCheckout(prod.title, defaultVar.name, defaultVar.price ?? 0, defaultVar.originalPrice ?? 0);
                  }}
                  className="py-1.5 bg-[#7B241C] hover:bg-[#E67E22] text-white font-serif text-[10px] font-bold tracking-wider rounded-md transition-colors cursor-pointer text-center"
                >
                  BUY NOW
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Header Container */}
      <div className="sticky top-0 z-40 w-full">
        {/* Announcement Bar */}
        <OfferCountdown />

        {/* Header Navigation */}
        <Header />
      </div>

      <main className="flex-1">
        
        {/* SECTION 1: Premium Editorial Hero Banner */}
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-[#0B0D19] overflow-hidden pt-20 pb-16">
          
          {/* Ambient sunrise backdrop with layered gradients */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/kashi_ghats_sunrise.png"
              alt="Sacred Varanasi Sunrise Backlight"
              fill
              priority
              className="object-cover opacity-45 filter saturate-[0.85]"
            />
            
            {/* Custom Saffron Gold Vignette Radial overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 30%, rgba(230, 126, 34, 0.18) 0%, rgba(11, 13, 25, 0.95) 75%)"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D19] via-transparent to-[#0B0D19]/70 pointer-events-none" />
          </div>

          {/* Floating Gold Sparks (upward) */}
          <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
            {goldSparks.map((p, idx) => (
              <motion.div
                key={`spark-${idx}`}
                className="absolute rounded-full bg-[#D4AF37]/50"
                style={{
                  left: `${p.left}%`,
                  width: p.size,
                  height: p.size,
                  bottom: -10,
                }}
                animate={{
                  y: ["0vh", "-110vh"],
                  x: [0, p.left > 50 ? -20 : 20, 0],
                  opacity: [0, 0.8, 0.8, 0]
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* Floating Marigold Petals (downward) */}
          <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
            {marigoldPetals.map((p, idx) => (
              <motion.div
                key={`petal-${idx}`}
                className="absolute rounded-full bg-[#E67E22]/70 filter blur-[0.5px]"
                style={{
                  left: `${p.left}%`,
                  width: p.size,
                  height: p.size * 1.5,
                  borderRadius: "80% 10% 55% 10%",
                  transform: "rotate(45deg)",
                  top: -20,
                }}
                animate={{
                  y: ["0vh", "110vh"],
                  x: [0, p.left > 50 ? -30 : 30, 0],
                  rotate: [45, 360, 720],
                  opacity: [0, 0.9, 0.9, 0]
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* Swinging Temple Bell (Top Right corner) */}
          <div className="absolute top-24 right-[12%] z-10 pointer-events-none hidden md:block">
            <motion.div
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="origin-top flex flex-col items-center"
            >
              <div className="w-0.5 h-12 bg-[#D4AF37]/60" />
              <svg className="h-9 w-9 text-[#D4AF37] fill-[#D4AF37]/10 filter drop-shadow-md" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
                />
              </svg>
            </motion.div>
          </div>

          {/* Floating Diya (Bottom Left) */}
          <div className="absolute bottom-16 left-[10%] z-10 pointer-events-none hidden lg:block">
            <motion.div
              className="flex flex-col items-center filter drop-shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="h-12 w-12 text-[#E67E22]" viewBox="0 0 64 64" fill="none">
                <motion.path
                  d="M32 4C32 4 25 16 29 22C32 26 35 22 35 22C35 22 39 16 32 4Z"
                  fill="#F1C40F"
                  stroke="#E67E22"
                  strokeWidth="2"
                  animate={{ scale: [1, 1.15, 1], y: [0, -1.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <path
                  d="M8 38C8 38 12 50 32 50C52 50 56 38 56 38C56 38 46 44 32 44C18 44 8 38 8 38Z"
                  fill="#7B241C"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                />
                <ellipse cx="32" cy="52" rx="18" ry="3.5" fill="rgba(0,0,0,0.3)" />
              </svg>
            </motion.div>
          </div>

          {/* Main Grid Content Layout */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
            
            {/* Left Column: Premium Editorial Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-[#D4AF37]/35 text-[#FFF9F0] text-[9px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#E67E22]" />
                  <span>Priest-Supervised Assembly</span>
                </span>
                <span className="flex items-center gap-1.5 bg-[#7B241C]/95 text-[#FFF9F0] text-[9px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md border border-[#D4AF37]/25">
                  <Sparkles className="h-3 w-3 text-[#D4AF37] animate-pulse" />
                  <span>Varanasi Sourced</span>
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-white leading-[1.12]">
                  Welcome Kashi&apos;s <span className="text-[#E67E22] bg-gradient-to-r from-[#E67E22] via-[#F1C40F] to-[#E67E22] bg-clip-text text-transparent">Divine Energies</span> Into Your Home
                </h1>
                <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto lg:mx-0" />
              </div>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                Experience Varanasi&apos;s spiritual resonance. Connect with Shiva&apos;s holy city through authentic temple offerings, certified gemstones, and ritual essentials sanctified on the banks of holy Ganga.
              </p>

              {/* Bullet list */}
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 max-w-md mx-auto lg:mx-0 text-left text-[11px] sm:text-xs text-gray-300 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span> Sanctified on the Ganga
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span> 100% Vedic Purity
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span> Direct Altar Sourcing
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold">✓</span> Supervised by Priests
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2">
                <button
                  onClick={scrollToCatalog}
                  className="px-7 py-3.5 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] font-serif font-bold text-xs tracking-widest rounded-lg transition-all duration-300 uppercase border border-[#D4AF37]/35 shadow-lg cursor-pointer hover:-translate-y-0.5"
                >
                  Shop Collection
                </button>
                <button
                  onClick={scrollToCategories}
                  className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-[#FFF9F0] font-serif font-bold text-xs tracking-widest rounded-lg backdrop-blur-xs transition-all duration-300 uppercase border border-white/20 hover:border-white/40 cursor-pointer hover:-translate-y-0.5"
                >
                  Explore Categories
                </button>
              </div>
            </div>

            {/* Right Column: Glassmorphic Product Highlight Card Showcase */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E67E22]/15 to-[#D4AF37]/15 rounded-full filter blur-2xl pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative w-full max-w-[360px] aspect-[4/5] bg-white/5 backdrop-blur-md rounded-3xl border border-[#D4AF37]/35 p-3.5 shadow-2xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Decorative border corners */}
                <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/40" />
                <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/40" />
                <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/40" />
                <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/40" />

                {/* Product image container */}
                <div className="relative w-full h-[62%] rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-[#FFF9F0]/10 shadow-inner">
                  <Image
                    src="/images/hero_puja_kit.png"
                    alt="Sacred Divine Puja Kit from Varanasi"
                    fill
                    priority
                    className="object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#7B241C] text-[#FFF9F0] text-[8px] font-bold tracking-widest px-2 py-0.5 rounded border border-[#D4AF37]/35 uppercase shadow flex items-center gap-1">
                    <Sparkles className="h-2.5 w-2.5 text-[#D4AF37]" />
                    <span>Sacred Kit</span>
                  </div>
                </div>

                {/* Card description details */}
                <div className="space-y-2 pt-3 pb-1 px-1.5 text-left">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#E67E22]">Altar Curation</span>
                    <div className="flex items-center gap-0.5 text-[#D4AF37]">
                      <Star className="h-3 w-3 fill-[#D4AF37]" />
                      <span className="text-[10px] font-bold text-white">4.9</span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-base font-bold text-white tracking-wide leading-tight">
                    Kashi Divine Puja Kit
                  </h3>
                  
                  <p className="text-[10px] text-gray-300 font-light leading-relaxed line-clamp-2">
                    Direct Kashi sourcing under strict supervision. Includes Ganga Jal, Rudraksha Mala, and 14 authentic worship items.
                  </p>
                  
                  <div className="flex items-center justify-between pt-2.5 border-t border-white/10 mt-1">
                    <div>
                      <span className="text-[8px] text-gray-400 block uppercase">Price</span>
                      <span className="font-serif text-sm font-bold text-[#D4AF37]">₹1,499</span>
                    </div>
                    <button
                      onClick={scrollToCatalog}
                      className="px-3.5 py-1.5 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] text-[9px] font-bold tracking-wider rounded uppercase border border-[#D4AF37]/35 transition-colors cursor-pointer"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* SECTION 2: Shop by Category */}
        <section id="shop-categories" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 space-y-1">
              <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Explore Collections</span>
              <h2 className="font-serif text-2xl font-bold text-gray-900 tracking-wide">Shop By Category</h2>
              <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
              {categories.map((cat) => (
                <div
                  key={cat.slug}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className="flex flex-col items-center gap-3 group cursor-pointer w-[72px] sm:w-[84px]"
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gray-200 overflow-hidden shadow-xs group-hover:border-[#7B241C] transition-all bg-gray-50 flex items-center justify-center">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="64px"
                      loading="lazy"
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-700 group-hover:text-[#7B241C] transition-colors text-center leading-tight">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Featured Collections Slider */}
        <section className="py-24 bg-[#070913] border-t border-white/5 relative overflow-hidden">
          
          {/* Animated colorful background halos that morph based on the active collection's theme */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-25 transition-all duration-1000 pointer-events-none"
            style={{
              background: featuredCollections[featuredIndex].glow
            }}
          />

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[10px] font-bold text-[#E67E22] tracking-widest uppercase block bg-gradient-to-r from-[#E67E22] to-[#F1C40F] bg-clip-text text-transparent">
                  Altar Curations
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                  Featured Sacred Collections
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#E67E22] mx-auto md:mx-0 mt-3" />
              </div>
              
              {/* Pagination controls for desktop */}
              <div className="hidden md:flex items-center gap-4 mt-6 md:mt-0">
                <button
                  onClick={prevFeatured}
                  className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37] transition-all cursor-pointer bg-white/5 backdrop-blur-md shadow-lg"
                  aria-label="Previous Collection"
                >
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="font-serif text-sm font-bold text-[#D4AF37] tracking-widest min-w-[72px] text-center uppercase">
                  {String(featuredIndex + 1).padStart(2, '0')} / {String(featuredCollections.length).padStart(2, '0')}
                </span>
                <button
                  onClick={nextFeatured}
                  className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37] transition-all cursor-pointer bg-white/5 backdrop-blur-md shadow-lg"
                  aria-label="Next Collection"
                >
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Slider cards container */}
            <div className="relative w-full overflow-hidden min-h-[440px]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                  key={featuredIndex}
                >
                  {visibleFeatured.map((coll, idx) => {
                    const isGemstone = coll.catSlug === "ratnas";
                    const isMala = coll.catSlug === "malas";
                    const isRudraksha = coll.catSlug === "rudraksha";
                    const isShankh = coll.catSlug === "shankhs";
                    
                    return (
                      <motion.div
                        key={coll.name}
                        layout
                        initial={{ opacity: 0, scale: 0.9, x: 80 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -80 }}
                        transition={{ type: "spring", stiffness: 180, damping: 22 }}
                        onClick={() => handleCollectionClick(coll.query, coll.catSlug)}
                        className={`relative rounded-3xl border ${coll.borderColor} bg-gradient-to-b ${coll.gradient} backdrop-blur-xl p-4 shadow-2xl overflow-hidden group flex flex-col h-[420px] justify-between cursor-pointer transition-all duration-500 hover:-translate-y-2`}
                      >
                        {/* Glow halo behind each card */}
                        <div 
                          className="absolute -top-12 -left-12 w-32 h-32 rounded-full filter blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                          style={{ background: coll.glow }}
                        />

                        {/* Image wrapper */}
                        <div className="relative h-52 w-full rounded-2xl overflow-hidden border border-white/5 bg-[#FFF9F0]/5 shadow-inner shrink-0">
                          <Image
                            src={coll.image}
                            alt={coll.name}
                            fill
                            sizes="(max-w-768px) 100vw, 33vw"
                            className={`group-hover:scale-108 transition-transform duration-700 ${
                              isGemstone
                                ? "object-contain p-8 bg-[#FFF9F0]/15"
                                : isMala || isRudraksha || isShankh
                                  ? "object-contain p-5 bg-[#FFF9F0]/5"
                                  : "object-cover opacity-80"
                            }`}
                          />
                          <span className={`absolute top-4 left-4 ${coll.tagStyle} text-[8px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md border`}>
                            {coll.tag}
                          </span>
                        </div>

                        {/* Text Content */}
                        <div className="pt-5 pb-2 px-1.5 flex-grow flex flex-col justify-between space-y-4 relative z-10">
                          <div className="space-y-2">
                            <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                              {coll.name}
                            </h3>
                            <p className="text-xs text-gray-300 font-light leading-relaxed line-clamp-3">
                              {coll.desc}
                            </p>
                          </div>
                          <span className="text-[10px] text-[#D4AF37] font-extrabold group-hover:text-white flex items-center gap-1.5 uppercase tracking-widest transition-colors">
                            <span>Explore collection</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile / General progress tracker */}
            <div className="mt-12 flex flex-col items-center gap-5">
              {/* Progress bar line */}
              <div className="w-full max-w-[320px] h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] to-[#E67E22]"
                  initial={{ width: "16.6%" }}
                  animate={{ width: `${((featuredIndex + 1) / featuredCollections.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Controls for mobile view */}
              <div className="flex md:hidden items-center gap-6">
                <button
                  onClick={prevFeatured}
                  className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-white bg-white/5 transition-colors cursor-pointer"
                  aria-label="Previous Collection"
                >
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="font-serif text-xs font-bold text-gray-400 tracking-wider">
                  {featuredIndex + 1} of {featuredCollections.length}
                </span>
                <button
                  onClick={nextFeatured}
                  className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-white bg-white/5 transition-colors cursor-pointer"
                  aria-label="Next Collection"
                >
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: Promotional Lifestyle Banner */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-[#FFF9F0] border border-[#D4AF37]/35 rounded-2xl p-8 md:p-16 text-center space-y-4 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
              <span className="text-[9px] text-[#E67E22] font-bold uppercase tracking-widest block">The Vessel of Divinity</span>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#7B241C] max-w-xl mx-auto leading-tight">
                Authentic Worship Essentials Crafted & Purified in Varanasi
              </h2>
              <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
              <p className="text-xs md:text-sm text-gray-600 font-light max-w-lg mx-auto leading-relaxed">
                Experience the spiritual energy of Ganges rituals. Every offering is prepared with absolute hygiene, Vedic purity, and priestly supervision in holy Varanasi.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Best Sellers */}
        <section className="py-20 bg-white border-t border-gray-150">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-gray-200">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Most Loved Altars</span>
                <h2 className="font-serif text-2xl font-bold text-gray-900 tracking-wide">Best Sellers</h2>
              </div>
              <button
                onClick={scrollToCatalog}
                className="text-[10px] font-bold text-[#7B241C] hover:text-[#E67E22] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer border-b border-transparent hover:border-[#E67E22]"
              >
                <span>View All</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellers.map((prod) => (
                <ProductCard key={prod.slug} prod={prod} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Festival Collection */}
        <section className="py-20 bg-[#FFF9F0]/30 border-t border-gray-150">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-1">
              <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Sacred Occasions</span>
              <h2 className="font-serif text-2xl font-bold text-gray-900 tracking-wide">Festival Collection</h2>
              <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {festivalCollections.map((fest, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCollectionClick(fest.query)}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#7B241C] cursor-pointer shadow-xs hover:shadow-sm transition-all duration-300 group text-center flex flex-col justify-between h-40"
                >
                  <span className="text-[9px] text-[#E67E22] font-bold uppercase tracking-wider block">{fest.tag}</span>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#7B241C] transition-colors leading-tight">
                    {fest.name}
                  </h4>
                  <span className="text-[10px] text-gray-400 font-bold group-hover:text-[#E67E22] flex items-center justify-center gap-1 uppercase tracking-wider">
                    <span>Shop Festival</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: Temple Prasad Collection */}
        {prasadItems.length > 0 && (
          <section className="py-20 bg-white border-t border-gray-150">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-gray-150">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Sanctified Offerings</span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">Temple Prasad</h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("temple-prasad")}
                  className="text-[10px] font-bold text-[#7B241C] hover:text-[#E67E22] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer border-b border-transparent hover:border-[#E67E22]"
                >
                  <span>View All</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {prasadItems.map((prod) => (
                  <ProductCard key={prod.slug} prod={prod} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 8: Gangajal Collection */}
        {gangajalItems.length > 0 && (
          <section className="py-20 bg-[#FFF9F0]/30 border-t border-gray-150">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-gray-150">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Holy Ganges Water</span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">Gangajal Collection</h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("gangajal")}
                  className="text-[10px] font-bold text-[#7B241C] hover:text-[#E67E22] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer border-b border-transparent hover:border-[#E67E22]"
                >
                  <span>View All</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {gangajalItems.map((prod) => (
                  <ProductCard key={prod.slug} prod={prod} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 9: Rudraksha Collection */}
        {rudrakshaItems.length > 0 && (
          <section className="py-20 bg-white border-t border-gray-150">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-gray-150">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Holy Altar Beads</span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">Rudraksha Collection</h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("rudraksha")}
                  className="text-[10px] font-bold text-[#7B241C] hover:text-[#E67E22] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer border-b border-transparent hover:border-[#E67E22]"
                >
                  <span>View All</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {rudrakshaItems.map((prod) => (
                  <ProductCard key={prod.slug} prod={prod} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 10: Shankh Collection */}
        {shankhItems.length > 0 && (
          <section className="py-20 bg-[#FFF9F0]/30 border-t border-gray-150">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-gray-150">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Blowing Conch Shells</span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">Shankh Collection</h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("shankhs")}
                  className="text-[10px] font-bold text-[#7B241C] hover:text-[#E67E22] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer border-b border-transparent hover:border-[#E67E22]"
                >
                  <span>View All</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {shankhItems.map((prod) => (
                  <ProductCard key={prod.slug} prod={prod} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 11: Mala Collection */}
        {malaItems.length > 0 && (
          <section className="py-20 bg-white border-t border-gray-150">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-gray-150">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Meditation Rosaries</span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">Mala Collection</h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("malas")}
                  className="text-[10px] font-bold text-[#7B241C] hover:text-[#E67E22] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer border-b border-transparent hover:border-[#E67E22]"
                >
                  <span>View All</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {malaItems.map((prod) => (
                  <ProductCard key={prod.slug} prod={prod} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 12: Brass & Copper Collection */}
        {brassCopper.length > 0 && (
          <section className="py-20 bg-[#FFF9F0]/30 border-t border-gray-150">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-gray-150">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Sacred Metalwork</span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">Brass & Copper Collection</h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("copper-items")}
                  className="text-[10px] font-bold text-[#7B241C] hover:text-[#E67E22] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer border-b border-transparent hover:border-[#E67E22]"
                >
                  <span>View All</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brassCopper.map((prod) => (
                  <ProductCard key={prod.slug} prod={prod} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 13: Agarbatti & Dhoop Collection */}
        {agarbattiItems.length > 0 && (
          <section className="py-20 bg-white border-t border-gray-150">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-gray-150">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Aromatic Incense</span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">Agarbatti & Dhoop Collection</h2>
                </div>
                <button
                  onClick={() => handleCategoryClick("agarbatti")}
                  className="text-[10px] font-bold text-[#7B241C] hover:text-[#E67E22] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer border-b border-transparent hover:border-[#E67E22]"
                >
                  <span>View All</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {agarbattiItems.map((prod) => (
                  <ProductCard key={prod.slug} prod={prod} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 14: Why Choose Kashi Prasad */}
        <WhyChooseUs />

        {/* SECTION 15: Our Story */}
        <section className="py-20 bg-[#FFF9F0]/60 border-t border-b border-gray-150 text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <span className="text-[10px] font-bold text-[#E67E22] tracking-widest uppercase block">The Legacy</span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#7B241C] tracking-wide">Our Story</h2>
            <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto" />
            <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed max-w-xl mx-auto">
              Deep inside the narrow lanes of Varanasi, Kashi Prasad was founded on a simple vision: to bridge the gap between Shiva&apos;s holy city and devotees worldwide. We compile genuine spiritual essentials, certified beads, and temple offerings to safeguard age-old ritual practices.
            </p>
          </div>
        </section>

        {/* SECTION 16: Temple Authenticity & Sourcing */}
        <section className="relative py-24 flex items-center justify-center bg-gray-900 overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/kashi_ghats_sunrise.png"
              alt="Rigveda Quote Ambient Background"
              fill
              className="object-cover opacity-15 filter blur-xs"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-6">
            <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest block">From the Rigveda</span>
            <p className="font-serif text-lg md:text-2xl text-[#FFF9F0] italic leading-relaxed font-light">
              &ldquo;Om. Let the divine rays of the sun, the sacred flow of Ganga, and the cosmic energy of Lord Shiva purify our homes and minds.&rdquo;
            </p>
            <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto" />
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block font-serif">Temple Authenticity & Sourcing</span>
          </div>
        </section>

        {/* SECTION 17: Customer Testimonials */}
        <Testimonials />

        {/* SECTION 18: Sacred Moments Gallery */}
        <Gallery />

        {/* SECTION 19: FAQ */}
        <FAQ />

        {/* Product Catalog search section */}
        <ProductCatalog />

      </main>

      {/* SECTION 20: Footer */}
      <Footer />

      {/* Cart Drawer Panel */}
      <CartDrawer />

      {/* WhatsApp features */}
      <SpecialFeatures onOrderClick={scrollToCatalog} />

      {/* Checkout Drawer Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
}
