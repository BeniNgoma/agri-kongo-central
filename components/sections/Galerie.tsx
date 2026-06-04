"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";

const categories = ["Tous", "Production", "Formation", "Infrastructure", "Marché"];

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "Tous"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const nav = (dir: number) => {
    if (lightbox === null) return;
    const next = (lightbox + dir + filtered.length) % filtered.length;
    setLightbox(next);
  };

  return (
    <section id="galerie" className="bg-green-deep py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border border-gold/30 text-gold mb-4 tracking-wider uppercase"
            style={{ background: "rgba(201,168,76,0.1)" }}>
            Galerie Photos
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Le Programme en <span className="text-gradient">Images</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gold text-white shadow-lg"
                    : "border border-white/20 text-white/70 hover:border-gold/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid mb-4"
                onClick={() => setLightbox(i)}
              >
                <div className="relative rounded-2xl overflow-hidden cursor-pointer group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full object-cover hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gold text-white">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox]?.src ?? ""}
                alt={filtered[lightbox]?.alt ?? ""}
                width={1200}
                height={800}
                className="rounded-2xl w-full object-cover max-h-[80vh]"
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl text-sm text-white"
                style={{ background: "rgba(0,0,0,0.6)" }}>
                {filtered[lightbox]?.alt}
              </div>
              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>
              {/* Nav */}
              <button
                onClick={(e) => { e.stopPropagation(); nav(-1); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nav(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
