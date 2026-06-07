"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sprout, Users, Globe, Play } from "lucide-react";

const stats = [
  { value: "20 ha",  label: "Superficie du terrain", icon: Sprout },
  { value: "5",      label: "Pôles structurants",    icon: Users  },
  { value: "2",      label: "Marchés stratégiques",  icon: Globe  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Fond desktop (paysage) ── */}
      <Image
        src="/hero-bg.jpg"
        alt="Champ agricole Kongo Central — tracteur au coucher de soleil"
        fill
        className="object-cover object-center hidden lg:block"
        priority
      />
      {/* ── Fond mobile (portrait) ── */}
      <Image
        src="/hero-bg-mobile.jpg"
        alt="Champ agricole Kongo Central — tracteur au coucher de soleil"
        fill
        className="object-cover object-top block lg:hidden"
        priority
      />

      {/* ── Overlay : sombre en haut-gauche, transparent vers droite ── */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(120deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.52) 35%, rgba(0,0,0,0.18) 62%, rgba(0,0,0,0.04) 100%)" }}
      />
      {/* Assombrit légèrement le haut (navbar) */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 28%)" }}
      />

      {/* ── Contenu principal (poussé vers le bas) ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-end">

          {/* Colonne gauche — texte */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55, ease }}
              className="block text-xs font-bold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#4ade80" }}
            >
              Avant-Projet Intégré · Kongo Central
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="font-playfair text-4xl sm:text-5xl lg:text-[3.35rem] font-bold text-white leading-[1.1] mb-5"
            >
              Projet Agro-Industriel
              <br />
              pour bâtir{" "}
              <span style={{ color: "#4ade80" }}>l&apos;avenir</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease }}
              className="text-white/75 text-base lg:text-[1.05rem] leading-relaxed mb-8 max-w-[430px]"
            >
              Production diversifiée, transformation à haute valeur ajoutée
              et autonomie énergétique verte sur 20 hectares au Kongo Central.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.55, ease }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo("#programme")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm transition-all active:scale-95"
                style={{ background: "#22a855" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#16a34a")}
                onMouseLeave={e => (e.currentTarget.style.background = "#22a855")}
              >
                Découvrir nos projets →
              </button>
              <button
                onClick={() => scrollTo("#a-propos")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-sm border border-white/40 hover:bg-white/10 active:scale-95 transition-all"
              >
                En savoir plus →
              </button>
            </motion.div>
          </div>

          {/* Colonne droite — 3 cartes EN LIGNE */}
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.65, ease }}
                className="rounded-2xl p-4 lg:p-6 flex flex-col items-center text-center gap-3 shadow-xl"
                style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(14px)" }}
              >
                <div
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(34,168,85,0.10)" }}
                >
                  <stat.icon
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    style={{ color: "#22a855" }}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="font-bold text-xl lg:text-2xl text-gray-900 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-[11px] lg:text-xs mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Barre du bas ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="relative z-10 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-10 pb-6"
      >
        {/* Gauche — Voir notre vidéo */}
        <button className="flex items-center gap-3 text-white/65 hover:text-white transition-colors text-sm group">
          <div className="w-10 h-10 rounded-full border border-white/35 flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          </div>
          <span>Voir la présentation</span>
        </button>

        {/* Centre — Scroll Down */}
        <button
          onClick={() => scrollTo("#a-propos")}
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

        {/* Droite — Social icons */}
        <div className="flex items-center gap-3 ml-auto">
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
      </motion.div>

    </section>
  );
}
