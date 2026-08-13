"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ShoppingBag, Search, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { cartCount, setIsCartOpen } = useCart();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Puja Kits", slug: "puja-kits" },
    { name: "Shankhs", slug: "shankhs" },
    { name: "Malas", slug: "malas" },
    { name: "Ratnas", slug: "ratnas" },
    { name: "Rudraksha", slug: "rudraksha" },
    { name: "Agarbatti", slug: "agarbatti" },
  ];

  const handleCategoryClick = (catSlug: string) => {
    setIsOpen(false);
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      router.push(`/?category=${catSlug}`);
    } else {
      const event = new CustomEvent("filter-category", { detail: catSlug });
      window.dispatchEvent(event);
      const el = document.getElementById("product-catalog");
      if (el) {
        const offset = 140; // Avoid header overlap
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      router.push(`/?search=${encodeURIComponent(searchInput)}`);
    } else {
      const event = new CustomEvent("search-products", { detail: searchInput });
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

  return (
    <>
      <header
        className={`relative w-full z-40 transition-all duration-200 h-16 bg-white border-b border-gray-200 flex items-center ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-[#7B241C] text-[#D4AF37] border border-[#D4AF37]/35 shadow-xs">
              <svg
                className="w-4.5 h-4.5 text-[#D4AF37]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22C12 22 20 18 20 12C20 6.5 12 2 12 2C12 2 4 6.5 4 12C4 18 12 22 12 22Z" />
                <path d="M12 2V22" />
                <path d="M12 12C12 12 16 10 18 12C20 14 19 16 19 16" />
                <path d="M12 12C12 12 8 10 6 12C4 14 5 16 5 16" />
              </svg>
            </div>
            <span className="font-serif font-bold text-base md:text-lg text-[#7B241C] tracking-wide">
              Kashi Prasad
            </span>
          </Link>

          {/* Center: Category Links (Shopify layout) */}
          <nav className="hidden lg:flex items-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryClick(cat.slug)}
                className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#7B241C] transition-colors cursor-pointer"
              >
                {cat.name}
              </button>
            ))}
          </nav>

          {/* Right: Search, Track, Cart, Menu */}
          <div className="flex items-center gap-2 md:gap-4 justify-end shrink-0">
            
            {/* Dense search bar */}
            <form onSubmit={handleSearchSubmit} className="relative hidden md:block w-36 lg:w-44">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search..."
                className="w-full pl-3 pr-8 py-1 bg-gray-50 border border-gray-200 rounded-md outline-none text-xs focus:bg-white focus:border-gray-400 transition-colors"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Search className="h-3.5 w-3.5" />
              </button>
            </form>

            {/* Quick Track Order Link */}
            <button
              onClick={() => {
                // Dispatch event to open Track Order modal inside Footer
                const footer = document.querySelector("footer");
                if (footer) footer.scrollIntoView({ behavior: "smooth" });
                // Emit event to open the track modal directly
                setTimeout(() => {
                  window.dispatchEvent(new CustomEvent("open-policy-track"));
                }, 500);
              }}
              className="hidden sm:flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:text-[#7B241C] transition-colors cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Track Order</span>
            </button>

            {/* Shopping Cart Icon Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-[#7B241C] hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
              aria-label="Open cart drawer"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#7B241C] text-white font-sans font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 z-40 border-b border-gray-200 bg-white shadow-lg overflow-hidden lg:hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {/* Mobile Search Form */}
                <form onSubmit={handleSearchSubmit} className="relative w-full">
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search sacred items..."
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md outline-none text-xs focus:bg-white focus:border-gray-400"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search className="h-4 w-4" />
                  </button>
                </form>

                {/* Mobile Categories Links */}
                <div className="flex flex-col divide-y divide-gray-100">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => handleCategoryClick(cat.slug)}
                      className="text-left font-sans text-xs font-bold uppercase tracking-wider py-3 text-gray-700 hover:text-[#7B241C] transition-colors cursor-pointer"
                    >
                      {cat.name}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      const footer = document.querySelector("footer");
                      if (footer) footer.scrollIntoView({ behavior: "smooth" });
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent("open-policy-track"));
                      }, 500);
                    }}
                    className="text-left font-sans text-xs font-bold uppercase tracking-wider py-3 text-gray-500 hover:text-[#7B241C] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Track Order</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
