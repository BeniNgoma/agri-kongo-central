"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Users, Truck, TrendingUp, Globe, MapPin } from "lucide-react";

const stats = [
  { value: "2 000", label: "Producteurs agricoles", icon: Users },
  { value: "290 km", label: "Routes réhabilitées", icon: Truck },
  { value: "+5%", label: "Hausse des revenus", icon: TrendingUp },
  { value: "2M+", label: "Bénéficiaires indirects", icon: Globe },
];

const products = [
  {
    name: "Maïs",
    emoji: "🌽",
    photo: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
    label: "6 000 t",
  },
  {
    name: "Arachide",
    emoji: "🥜",
    photo: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80",
    label: "Production locale",
  },
  {
    name: "Soja",
    emoji: "🌱",
    photo: "https://images.unsplash.com/photo-1614961909622-4b8451a8de31?w=400&q=80",
    label: "4 000 t",
  },
  {
    name: "Manioc",
    emoji: "🌿",
    photo: "https://images.unsplash.com/photo-1551754177-0e0d5c2a3c96?w=400&q=80",
    label: "Sécurité alim.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-green-deep">

      {/* Background africain */}
      <Image
        src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=1920&q=80"
        alt="Agriculture africaine Kongo Central"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(110deg, rgba(15,36,25,0.93) 0%, rgba(15,36,25,0.80) 45%, rgba(15,36,25,0.48) 100%)" }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[38%] w-px h-full opacity-20"
          style={{ background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)" }} />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-24">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center w-full">

          {/* Colonne gauche */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-5 border border-gold/30 text-gold-light"
              style={{ background: "rgba(201,168,76,0.12)" }}
            >
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="leading-tight">Boko — Territoire de Mbanza-Ngungu, Kongo Central, RDC</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease }}
              className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            >
              Relance Agricole
              <br />
              <span className="text-gradient">du Kongo Central</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease }}
              className="text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Transformer durablement la production de{" "}
              <span className="text-gold-light font-semibold">maïs</span> et{" "}
              <span className="text-gold-light font-semibold">d'arachide</span> pour améliorer les
              conditions de vie des communautés rurales de Boko.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6, ease }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => handleScroll("#programme")}
                className="px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-gold to-gold-light hover:opacity-90 active:scale-95 transition-all shadow-xl"
              >
                Découvrir le Programme
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-white text-sm border border-white/25 hover:bg-white/10 active:scale-95 transition-all"
              >
                Nous Contacter
              </button>
            </motion.div>
          </div>

          {/* Colonne droite — Stats + Photos produits */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.6, ease }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="rounded-2xl p-4 sm:p-5"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(201,168,76,0.2)" }}>
                  <stat.icon style={{ width: "17px", height: "17px", color: "#c9a84c" }} />
                </div>
                <div className="font-playfair text-xl sm:text-2xl font-bold text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="text-white/55 text-[11px] leading-tight">{stat.label}</div>
              </motion.div>
            ))}

            {/* Grille 4 produits africains — 2×2 sur mobile, 4×1 sur sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6, ease }}
              className="col-span-2 grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.12)", height: "112px" }}
            >
              {products.map((p, i) => (
                <div key={i} className="relative overflow-hidden group">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-end p-1.5"
                    style={{ background: "linear-gradient(to top, rgba(15,36,25,0.92) 0%, rgba(15,36,25,0.3) 60%, transparent 100%)" }}
                  >
                    <span className="text-base sm:text-lg leading-none mb-0.5">{p.emoji}</span>
                    <span className="text-white text-[10px] font-semibold leading-tight text-center">{p.name}</span>
                    <span className="text-gold/80 text-[9px] leading-tight text-center hidden sm:block">{p.label}</span>
                  </div>
                  {i < 3 && (
                    <div className="absolute right-0 top-2 bottom-2 w-px bg-white/15" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bande cultures en bas */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease }}
        className="relative z-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {[
              { emoji: "🌽", label: "Maïs · 6 000 t" },
              { emoji: "🥜", label: "Arachide" },
              { emoji: "🌱", label: "Soja · 4 000 t" },
              { emoji: "🚛", label: "5 Camions" },
              { emoji: "🏗️", label: "2 Silos" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-white/60 text-xs">
                <span>{item.emoji}</span>
                <span>{item.label}</span>
                {i < 4 && <span className="text-gold/30 hidden sm:inline ml-3">│</span>}
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("#a-propos")}
            className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            <span>Explorer</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
