"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Leaf, Zap, Globe, Play } from "lucide-react";

const stats = [
  { value: "20 ha", label: "Superficie du terrain", icon: Leaf },
  { value: "5", label: "Pôles structurants", icon: Zap },
  { value: "2", label: "Marchés stratégiques", icon: Globe },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background — champ agricole Kongo Central */}
      <Image
        src="/pdf-images/img_006.jpg"
        alt="Terrain agricole Kongo Central — 20 hectares"
        fill
        className="object-cover"
        style={{ filter: "brightness(1.08) saturate(1.12)" }}
        priority
      />

      {/* Gradient overlay — opaque à gauche, transparent à droite */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,20,10,0.82) 0%, rgba(5,20,10,0.55) 45%, rgba(5,20,10,0.10) 100%)",
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

          {/* Colonne gauche — Texte */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease }}
              className="block text-xs font-bold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#4ade80" }}
            >
              Avant-Projet Intégré · Kongo Central
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="font-playfair text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] mb-6"
            >
              Projet Agro-Industriel
              <br />
              pour bâtir{" "}
              <span style={{ color: "#4ade80" }}>l&apos;avenir</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.6, ease }}
              className="text-white/75 text-base lg:text-lg leading-relaxed mb-9 max-w-[480px]"
            >
              Production diversifiée, transformation à haute valeur ajoutée et autonomie énergétique verte sur 20 hectares avec sources d&apos;eau naturelles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.6, ease }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={() => handleScroll("#programme")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm transition-all active:scale-95"
                style={{ background: "#22a855" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#16a34a")}
                onMouseLeave={e => (e.currentTarget.style.background = "#22a855")}
              >
                Découvrir nos projets →
              </button>
              <button
                onClick={() => handleScroll("#a-propos")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm border border-white/40 hover:bg-white/10 active:scale-95 transition-all"
              >
                En savoir plus →
              </button>
            </motion.div>

            {/* Lien présentation */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="flex items-center gap-3 text-white/65 hover:text-white transition-colors text-sm group"
            >
              <div className="w-10 h-10 rounded-full border border-white/35 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Voir la présentation</span>
            </motion.button>
          </div>

          {/* Colonne droite — 3 cartes stats blanches */}
          <div className="flex flex-col gap-4 lg:pl-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.13, duration: 0.65, ease }}
                whileHover={{ x: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-6 flex items-center gap-5 shadow-2xl"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(34,168,85,0.12)" }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: "#22a855" }} />
                </div>
                <div>
                  <div className="font-playfair text-3xl font-bold text-gray-900 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Barre du bas — réseaux sociaux + scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto px-6 lg:px-10 pb-7"
      >
        {/* Réseaux sociaux */}
        <div className="flex items-center gap-3">
          {["f", "in", "ig"].map((label, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-lg border border-white/25 flex items-center justify-center text-white/55 hover:text-white hover:bg-white/10 transition-all text-xs font-bold"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Scroll Down — centré */}
        <button
          onClick={() => handleScroll("#a-propos")}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <div className="w-6 h-9 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 rounded-full bg-white/60"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[10px] tracking-[0.18em] uppercase">Scroll Down</span>
        </button>

        {/* Spacer droit */}
        <div className="w-28" />
      </motion.div>
    </section>
  );
}
