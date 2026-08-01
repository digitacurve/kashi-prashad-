"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const photos = [
  {
    src: "/images/hero_puja_kit.png",
    alt: "Kashi Divine Puja Kit - Complete items neatly arranged in our custom wood-embossed box",
    title: "Complete Puja Kit",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/kashi_ghats_sunrise.png",
    alt: "Holy early morning sunrise over Kashi Ghats alongside the Ganges river",
    title: "Sacred Kashi Sunrise",
    size: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/images/temple_prasad_box.png",
    alt: "Authentic Kashi Vishwanath temple prasad sweets served in a copper bowl",
    title: "Fresh Temple Prasad",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/puja_kit_packaging.png",
    alt: "Premium white cardstock packaging with gold foil temple gate engravings",
    title: "Apple-Style Packaging",
    size: "md:col-span-1 md:row-span-1",
  },
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section className="py-24 bg-[#FFF9F0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#E67E22] tracking-widest uppercase block">
            Visual Sanctum
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#7B241C] tracking-wide leading-tight">
            Authentic Photo Gallery
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-sm md:text-base text-gray-600">
            Real photos detailing the premium packaging, organic spiritual materials, and the sacred city of Kashi.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-[#D4AF37]/25 shadow-sm hover:shadow-lg transition-shadow duration-300 ${photo.size}`}
              onClick={() => setActivePhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-w-768px) 100vw, 33vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Spiritual Capture
                </span>
                <h4 className="font-serif text-lg font-bold leading-tight mt-1">{photo.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setActivePhoto(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10 space-y-4"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-center max-w-2xl px-4 text-white">
                <h4 className="font-serif text-xl font-bold text-[#D4AF37]">{activePhoto.title}</h4>
                <p className="text-xs text-gray-300 mt-1.5 leading-relaxed">{activePhoto.alt}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
