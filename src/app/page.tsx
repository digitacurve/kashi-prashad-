"use client";

import React from "react";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

  // Featured Collections Config
  const featuredCollections = [
    { name: "Shiv Collection", query: "Rudraksha", catSlug: "rudraksha", tag: "Mahadev's Grace", image: "/images/hero_puja_kit.png", desc: "Sacred energized Rudrakshas and malas purification by Kaal Bhairav priests." },
    { name: "Vishnu Collection", query: "Vishnu", tag: "Preserver's Aura", image: "/images/temple_prasad_box.png", desc: "Auspicious yellow offerings, Tulsi malas, and Satyanarayan essentials." },
    { name: "Lakshmi Collection", query: "Lakshmi", tag: "Wealth & Prosperity", image: "/images/puja_kit_packaging.png", desc: "Pure copper metalwork, red chandan beads, and Lakshmi puja items." }
  ];

  // Local card rendering helper to avoid large layout repetitions
  const ProductCard = ({ prod }: { prod: Product }) => {
    const defaultVar = prod.variants[0];
    const isComingSoon = defaultVar.price === null;
    const hasSavings = !isComingSoon && defaultVar.originalPrice !== null && defaultVar.price !== null && defaultVar.originalPrice > defaultVar.price;
    const savingsPercent = hasSavings && defaultVar.originalPrice ? Math.round(
      ((defaultVar.originalPrice - defaultVar.price!) / defaultVar.originalPrice) * 100
    ) : 0;

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
            className="object-cover group-hover:scale-102 transition-transform duration-500"
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
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/kashi_ghats_sunrise_1785274643577.png"
              alt="Sacred Varanasi Ghats Sunrise Rituals Ambient Backdrop"
              fill
              priority
              className="object-cover opacity-50 filter saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/80" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center mt-20">
            <div className="bg-[#FFF9F0]/95 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-[#D4AF37]/35 shadow-2xl space-y-6 max-w-2xl mx-auto">
              <span className="text-[10px] font-bold text-[#E67E22] tracking-widest uppercase block">
                Pure Kashi Blessings
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#7B241C] leading-tight">
                Authentic Temple Prasad & Sacred Essentials
              </h1>
              <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto" />
              <p className="text-xs md:text-sm text-gray-700 font-light leading-relaxed max-w-md mx-auto">
                Welcome the divine energies of Shiva&apos;s holy city into your home. Sourced under strict priest supervision and sanctified on the banks of Ganga.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={scrollToCatalog}
                  className="px-6 py-3 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] font-serif font-bold text-xs tracking-widest rounded-lg transition-colors cursor-pointer uppercase border border-[#D4AF37]/35"
                >
                  Shop Collection
                </button>
                <button
                  onClick={scrollToCategories}
                  className="px-6 py-3 bg-white border border-[#7B241C]/30 text-[#7B241C] font-serif font-bold text-xs tracking-widest rounded-lg hover:bg-[#FFF9F0] transition-colors cursor-pointer uppercase"
                >
                  Explore Categories
                </button>
              </div>
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

        {/* SECTION 3: Featured Collections */}
        <section className="py-20 bg-[#FFF9F0]/30 border-t border-gray-150">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-1">
              <span className="text-[10px] font-bold text-[#E67E22] tracking-wider uppercase">Altar Curations</span>
              <h2 className="font-serif text-2xl font-bold text-gray-900 tracking-wide">Featured Collections</h2>
              <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCollections.map((coll, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCollectionClick(coll.query, coll.catSlug)}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col h-[400px] justify-between cursor-pointer"
                >
                  <div className="relative h-48 w-full bg-gray-50 overflow-hidden">
                    <Image
                      src={coll.image}
                      alt={coll.name}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 text-gray-800 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {coll.tag}
                    </span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h4 className="font-serif text-base font-bold text-gray-900 group-hover:text-[#7B241C] transition-colors leading-tight">
                        {coll.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-3">
                        {coll.desc}
                      </p>
                    </div>
                    <span className="text-[9px] text-[#7B241C] font-bold group-hover:text-[#E67E22] flex items-center gap-1 uppercase tracking-widest">
                      <span>Explore Collection</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              ))}
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
              src="/images/kashi_ghats_sunrise_1785274643577.png"
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
