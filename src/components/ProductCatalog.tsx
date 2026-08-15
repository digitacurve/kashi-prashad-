"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("category") || "puja-kits";
    }
    return "puja-kits";
  });

  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("search") || "";
    }
    return "";
  });

  const { addToCart, triggerCheckout } = useCart();

  // Listen to custom category filter and search events emitted by the Header
  useEffect(() => {
    const handleFilter = (e: Event) => {
      const cat = (e as CustomEvent).detail;
      setSelectedCategory(cat);
      setSearchQuery(""); // Clear search on category shift
    };
    const handleSearch = (e: Event) => {
      const query = (e as CustomEvent).detail;
      setSearchQuery(query);
      setSelectedCategory("puja-kits"); // Search focuses on puja kits catalog
    };
    window.addEventListener("filter-category", handleFilter);
    window.addEventListener("search-products", handleSearch);

    return () => {
      window.removeEventListener("filter-category", handleFilter);
      window.removeEventListener("search-products", handleSearch);
    };
  }, []);

  const categories = [
    { name: "Puja Kits", slug: "puja-kits" },
    { name: "Temple Prasad", slug: "temple-prasad" },
    { name: "Gangajal", slug: "gangajal" },
    { name: "Rudraksha", slug: "rudraksha" },
    { name: "Malas", slug: "malas" },
    { name: "Shankhs", slug: "shankhs" },
    { name: "Ratnas", slug: "ratnas" },
    { name: "Agarbatti", slug: "agarbatti" },
    { name: "Temple Accessories", slug: "temple-accessories" },
    { name: "Copper Items", slug: "copper-items" },
    { name: "Gift Boxes", slug: "gift-boxes" },
  ];

  const categoryMap: Record<string, string> = {
    "puja-kits": "Pooja Kits",
    "temple-prasad": "Temple Prasad",
    "gangajal": "Gangajal",
    "rudraksha": "Rudrakshas",
    "malas": "Malas",
    "shankhs": "Shankhs",
    "ratnas": "Ratnas",
    "agarbatti": "Agarbatti",
    "temple-accessories": "Temple Accessories",
    "copper-items": "Copper Items",
    "gift-boxes": "Gift Boxes",
  };

  // Filter products based on search query and category selection
  const filteredProducts = products.filter((prod) => {
    const targetCategory = categoryMap[selectedCategory];
    if (prod.category !== targetCategory) {
      return false;
    }

    if (!searchQuery.trim()) {
      return true;
    }

    const query = searchQuery.toLowerCase();
    const titleMatch = prod.title.toLowerCase().includes(query);
    const descriptionMatch = prod.shortDescription.toLowerCase().includes(query);
    const tagsMatch = prod.tags.some((t) => t.toLowerCase().includes(query));

    return titleMatch || descriptionMatch || tagsMatch;
  });

  return (
    <section id="product-catalog" className="py-16 bg-white border-t border-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">
            Shop Altar Collections
          </h2>
          <p className="text-xs text-gray-500">
            Ritually purified items sourced directly from sacred centers of Varanasi.
          </p>
        </div>

        {/* Search and Category Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-150 pb-4">
          {/* Categories Tab Selector */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  setSelectedCategory(cat.slug);
                  setSearchQuery("");
                }}
                className={`px-4 py-2 rounded-md text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer border ${
                  selectedCategory === cat.slug
                    ? "bg-[#7B241C] text-[#FFF9F0] border-[#7B241C]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#7B241C] hover:text-[#7B241C]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Catalog Search input */}
          <div className="relative w-full md:max-w-[220px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-3 pr-8 py-2 rounded-md border border-gray-200 bg-white outline-none text-xs focus:border-[#7B241C] transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
          </div>
        </div>

        {/* Active Grid Display */}
        <AnimatePresence mode="wait">
          {["puja-kits", "temple-prasad", "gangajal", "rudraksha", "malas", "shankhs", "ratnas", "agarbatti", "temple-accessories", "copper-items", "gift-boxes"].includes(selectedCategory) ? (
            filteredProducts.length === 0 ? (
              <motion.div
                key="empty-search"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 space-y-3"
              >
                <div className="text-gray-400 font-serif text-sm">No products found matching &ldquo;{searchQuery}&rdquo;</div>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[10px] text-[#7B241C] hover:text-[#E67E22] font-bold tracking-wider uppercase underline"
                >
                  Clear Search Filter
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="kits-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProducts.map((prod) => {
                  const defaultVar = prod.variants[0];
                  const isComingSoon = defaultVar.price === null;
                  const hasSavings = !isComingSoon && defaultVar.originalPrice !== null && defaultVar.price !== null && defaultVar.originalPrice > defaultVar.price;
                  const savingsPercent = hasSavings && defaultVar.originalPrice ? Math.round(
                    ((defaultVar.originalPrice - defaultVar.price!) / defaultVar.originalPrice) * 100
                  ) : 0;

                  const isGemstone = prod.category === "Ratnas";

                  return (
                    <motion.div
                      key={prod.slug}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between h-[480px] shadow-xs hover:shadow-md transition-all group"
                    >
                      {/* Product Image Area */}
                      <Link href={`/products/${prod.slug}`} className="relative h-48 w-full bg-gray-50 overflow-hidden shrink-0 block border-b border-gray-100">
                        <Image
                          src={prod.images[0]?.src || "/images/hero_puja_kit.png"}
                          alt={prod.title}
                          fill
                          sizes="(max-w-768px) 100vw, 33vw"
                          loading="lazy"
                          className={
                            isGemstone
                              ? "object-contain p-6 bg-[#FFF9F0]/50 group-hover:scale-105 transition-transform duration-500"
                              : "object-cover group-hover:scale-102 transition-transform duration-500"
                          }
                        />
                        {prod.badge && (
                          <div className="absolute top-3 left-3 z-10">
                            <span className="bg-[#7B241C] text-[#FFF9F0] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#D4AF37]/35 shadow-xs">
                              {prod.badge}
                            </span>
                          </div>
                        )}
                        {hasSavings && (
                          <div className="absolute top-3 right-3 z-10">
                            <span className="bg-[#E67E22] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                              SAVE {savingsPercent}%
                            </span>
                          </div>
                        )}
                      </Link>

                      {/* Content Area */}
                      <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-baseline gap-2">
                            <span className="text-[10px] font-bold text-[#E67E22] uppercase tracking-wider truncate max-w-[70%]">
                              {prod.tagline}
                            </span>
                            {/* Star rating (Hide if unrated/null) */}
                            {prod.rating !== null && (
                              <div className="flex items-center text-[#D4AF37] text-[10px] gap-0.5 shrink-0">
                                <Star className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
                                <span className="font-bold text-gray-700">{prod.rating}</span>
                                <span className="text-gray-400">({prod.reviewsCount})</span>
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

                          {/* Highlights Preview */}
                          <p className="text-[10px] text-gray-400 font-medium truncate">
                            Includes: {defaultVar.keyIncludes.slice(0, 3).map(inc => inc.replace(/.*-\s*/, "")).join(", ")}
                          </p>
                        </div>

                        {/* Pricing & CTA buttons */}
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
                                className="py-1.5 border border-[#7B241C] text-[#7B241C] hover:bg-[#7B241C]/5 font-serif text-[10px] font-bold tracking-wider rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1"
                              >
                                <ShoppingBag className="h-3 w-3" />
                                <span>ADD</span>
                              </button>
                              <button
                                onClick={() => {
                                  addToCart(prod, defaultVar);
                                  triggerCheckout(prod.title, defaultVar.name, defaultVar.price!, defaultVar.originalPrice!);
                                }}
                                className="py-1.5 bg-[#7B241C] hover:bg-[#E67E22] text-white font-serif text-[10px] font-bold tracking-wider rounded-md transition-colors cursor-pointer text-center"
                              >
                                BUY NOW
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )
          ) : (
            /* Future / Empty Category Display: Products Coming Soon */
            <motion.div
              key="coming-soon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto text-center py-16 px-6 bg-white border border-gray-200 rounded-xl space-y-4 shadow-xs"
            >
              <h3 className="font-serif text-lg font-bold text-[#7B241C]">
                {categories.find((c) => c.slug === selectedCategory)?.name} Coming Soon
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Auspicious items for our {categories.find((c) => c.slug === selectedCategory)?.name} collection are currently being handpicked and purified under Vedic priest supervision in Varanasi.
              </p>
              <div className="w-12 h-px bg-gray-200 mx-auto" />
              <p className="text-[10px] text-gray-400 italic">
                Sourced with authenticity. Drop us a WhatsApp message to get notified when these offerings are available.
              </p>
              <button
                onClick={() => setSelectedCategory("puja-kits")}
                className="px-4 py-2 bg-[#7B241C] hover:bg-[#E67E22] text-[#FFF9F0] font-serif text-xs font-bold tracking-wider rounded-md transition-colors cursor-pointer uppercase"
              >
                Return to Puja Kits
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Catalog Guarantees */}
        <div className="mt-12 border-t border-gray-150 pt-8 flex flex-col md:flex-row items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <ShieldCheck className="h-4.5 w-4.5 text-[#7B241C] shrink-0" />
            <span>Vedic Priest-Supervised Assembly</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <ShieldCheck className="h-4.5 w-4.5 text-[#E67E22] shrink-0" />
            <span>No Perishables — Long Altar Durability</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <ShieldCheck className="h-4.5 w-4.5 text-[#7B241C] shrink-0" />
            <span>Free Express Delivery & COD Nationwide</span>
          </div>
        </div>

      </div>
    </section>
  );
}
