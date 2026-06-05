"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

const mainPartners = [
  {
    emoji: "🏛️",
    name: "FOREC",
    fullname: "Fonds de Relance de l'Économie Congolaise",
    role: "Financeur stratégique du programme de relance agricole au Kongo Central",
  },
  {
    emoji: "⚖️",
    name: "Ministère de l'Économie",
    fullname: "Ministère de l'Économie Nationale — RDC",
    role: "Pilote stratégique des politiques économiques et du développement du secteur productif",
  },
  {
    emoji: "🌱",
    name: "CDI Bwamanda",
    fullname: "Centre de Développement Intégrale-Bwamanda",
    role: "Acteur opérationnel engagé pour la transformation agricole et le développement durable",
  },
];

const secondaryPartners = [
  "FAO", "PNUD", "CEREP", "Gouvernement Kongo Central",
  "Autorités locales de Boko",
  "Territoire de Mbanza-Ngungu",
];

export default function Partenaires() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partenaires" className="relative bg-green-deep py-24 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
        alt="Partenaires"
        fill
        className="object-cover opacity-10"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border border-gold/30 text-gold mb-4 tracking-wider uppercase"
            style={{ background: "rgba(201,168,76,0.1)" }}>
            Nos Partenaires
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Un Partenariat Fondé sur des{" "}
            <span className="text-gradient">Valeurs Communes</span>
          </h2>
        </div>

        {/* Main partners */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {mainPartners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-3xl p-8 text-center cursor-default"
            >
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="font-playfair text-xl font-bold text-white mb-1">{p.name}</h3>
              <div className="text-gold text-xs mb-4 font-medium">{p.fullname}</div>
              <p className="text-white/60 text-sm leading-relaxed">{p.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10 mb-10" />

        {/* Secondary partners */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {secondaryPartners.map((name, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.06 }}
              className="px-4 py-2 rounded-full text-sm text-white/70 border border-white/15 hover:border-gold/40 hover:text-gold-light transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {name}
            </motion.span>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto rounded-3xl p-8 text-center border border-gold/20"
          style={{ background: "rgba(201,168,76,0.08)" }}
        >
          <div className="text-gold text-4xl font-serif mb-4">&ldquo;</div>
          <p className="text-white/90 text-lg font-playfair italic leading-relaxed mb-4">
            Ensemble, nous semons les bases d'une agriculture résiliente et d'un développement
            durable au Kongo Central — de Boko jusqu'à Kinshasa.
          </p>
          <div className="text-4xl text-gold font-serif">&rdquo;</div>
          <div className="text-gold text-sm mt-4 font-medium">
            — Partenaires engagés pour le développement agricole
          </div>
        </motion.div>
      </div>
    </section>
  );
}
