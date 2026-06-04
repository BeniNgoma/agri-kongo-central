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

const crops = [
  { emoji: "🌽", name: "Maïs", desc: "Culture principale" },
  { emoji: "🥜", name: "Arachide", desc: "Oléagineux local" },
  { emoji: "🌱", name: "Soja", desc: "Transformation locale" },
  { emoji: "🌿", name: "Manioc", desc: "Sécurité alimentaire" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-green-deep">

      {/* ── Background image avec overlay diagonal ── */}
      <Image
        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80"
        alt="Champs agricoles Kongo Central"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay gradient diagonal — gauche foncé, droite plus transparent */}
      <div className="absolute inset-0"
        style={{
          background: "linear-gradient(110deg, rgba(15,36,25,0.92) 0%, rgba(15,36,25,0.78) 45%, rgba(15,36,25,0.45) 100%)"
        }}
      />
      {/* Ligne décorative diagonale */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[38%] w-px h-full opacity-20"
          style={{ background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)" }} />
      </div>

      {/* ── Contenu principal ── */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-24">
        <div className="grid lg:grid-cols-5 gap-10 items-center w-full">

          {/* ── Colonne gauche (3/5) ── */}
          <div className="lg:col-span-3">

            {/* Badge localisation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-5 border border-gold/30 text-gold-light"
              style={{ background: "rgba(201,168,76,0.12)" }}
            >
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              Banzangongo & Boko — Territoire de Mbanza-Ngungu, Kongo Central, RDC
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            >
              Relance Agricole
              <br />
              <span className="text-gradient">du Kongo Central</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white/75 text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Transformer durablement la production de{" "}
              <span className="text-gold-light font-semibold">maïs</span> et{" "}
              <span className="text-gold-light font-semibold">d'arachide</span> pour améliorer les
              conditions de vie des communautés rurales de Banzangongo et Boko.
            </motion.p>

            {/* Tags cultures — identité Kongo Central */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {crops.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/90 border border-white/15"
                  style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}
                >
                  <span className="text-base">{c.emoji}</span>
                  <span>{c.name}</span>
                  <span className="text-white/40 hidden sm:inline">· {c.desc}</span>
                </div>
              ))}
            </motion.div>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => handleScroll("#programme")}
                className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-gold to-gold-light hover:opacity-90 transition-opacity shadow-xl"
              >
                Découvrir le Programme
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm border border-white/25 hover:bg-white/10 transition-colors"
              >
                Nous Contacter
              </button>
            </motion.div>
          </div>

          {/* ── Colonne droite (2/5) — Stats cards ── */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
                className="rounded-2xl p-5 group hover:scale-105 transition-transform"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(201,168,76,0.2)" }}>
                  <stat.icon className="w-4.5 h-4.5 text-gold" style={{ width: "18px", height: "18px" }} />
                </div>
                <div className="font-playfair text-2xl font-bold text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="text-white/55 text-xs leading-tight">{stat.label}</div>
              </motion.div>
            ))}

            {/* Card image maïs/arachide */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="col-span-2 rounded-2xl overflow-hidden relative h-28"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                alt="Maïs et arachide Kongo Central"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-3"
                style={{ background: "linear-gradient(to top, rgba(15,36,25,0.85), transparent)" }}>
                <div className="text-xs text-white/80 font-medium flex items-center gap-2">
                  <span>🌽 Maïs</span>
                  <span className="text-gold/50">·</span>
                  <span>🥜 Arachide</span>
                  <span className="text-gold/50">·</span>
                  <span>Kongo Central</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bande cultures en bas ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5 flex-wrap">
            {[
              { emoji: "🌽", label: "Maïs · 6 000 t" },
              { emoji: "🥜", label: "Arachide · Production locale" },
              { emoji: "🌱", label: "Soja · 4 000 t" },
              { emoji: "🚛", label: "5 Camions · Transport" },
              { emoji: "🏗️", label: "2 Silos · Stockage" },
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
