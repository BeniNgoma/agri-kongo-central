"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, TrendingUp, Zap, Leaf } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Souveraineté Alimentaire", desc: "Production vivrière et fruitière diversifiée réduisant la dépendance aux importations" },
  { icon: TrendingUp, title: "Transformation Locale", desc: "Jus, fruits séchés, farine de manioc — valeur ajoutée sur le terrain" },
  { icon: Zap, title: "Autonomie Énergétique", desc: "Énergie solaire & biogaz — projet 100 % vert, conforme ESG" },
  { icon: Leaf, title: "Impact Communautaire", desc: "Emplois locaux, revenus durables et attractivité investisseurs" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="a-propos" className="bg-light-bg py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/15 text-green-mid mb-4 tracking-wider uppercase">
              Contexte & Objectif
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-green-deep mb-6 leading-tight">
              Une Opportunité Stratégique
              <br />
              <span className="text-gradient">au Kongo Central</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
              Dans un contexte marqué en RDC par des{" "}
              <strong className="text-green-mid">défis énergétiques structurels</strong>, une forte dépendance aux
              importations alimentaires transformées et une demande croissante de projets durables à impact,{" "}
              <strong className="text-green-deep">Monsieur Didy Nduenga</strong>, propriétaire d'un terrain de{" "}
              <strong className="text-green-deep">20 hectares avec sources d'eau naturelles</strong> au Kongo Central,
              dispose d'une opportunité stratégique majeure.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
              La structuration du projet est assurée par{" "}
              <strong className="text-green-mid">TEXADA/2026</strong>, qui conduit les études de faisabilité complètes
              et prépare un{" "}
              <strong className="text-green-deep">business plan bancable</strong> conforme aux exigences des banques,
              fonds d'investissement et partenaires financiers locaux et internationaux.
              La proximité stratégique avec{" "}
              <strong className="text-green-deep">Kinshasa</strong> (120M+ habitants) et l'accès direct aux ports de{" "}
              <strong className="text-green-deep">Matadi et Boma</strong> renforcent le potentiel d'export.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-green-bright/10 flex items-center justify-center mb-3">
                    <p.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-bright" />
                  </div>
                  <div className="font-semibold text-green-deep text-xs sm:text-sm mb-1">{p.title}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{p.desc}</div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#programme")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 sm:px-7 py-3 rounded-xl bg-green-mid text-white font-semibold text-sm hover:bg-green-deep active:scale-95 transition-all shadow-md"
            >
              Voir les 5 Pôles du Projet
            </button>
          </motion.div>

          {/* Right — Images du terrain */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[360px] sm:h-[420px] lg:h-[480px]">
              <Image
                src="/about-bg.jpg"
                alt="Terrain agricole Kongo Central — vue aérienne"
                fill
                className="object-cover"
                style={{ filter: "brightness(1.08) contrast(1.05) saturate(1.1)" }}
              />
            </div>
            {/* Overlay image — ananas produit phare */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease }}
              className="absolute bottom-[-1.5rem] left-[-1.5rem] rounded-2xl overflow-hidden border-4 border-white shadow-xl w-36 h-36 sm:w-44 sm:h-44 hidden sm:block"
            >
              <Image
                src="/pdf-images/img_009.jpg"
                alt="Ananas — produit phare du projet"
                fill
                className="object-cover"
                style={{ filter: "brightness(1.1) saturate(1.15)" }}
              />
            </motion.div>
            {/* Badge flottant */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold border border-gold/40 text-gold-light"
              style={{ background: "rgba(201,168,76,0.2)", backdropFilter: "blur(8px)" }}>
              Avant-Projet Intégré · TEXADA 2026
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
