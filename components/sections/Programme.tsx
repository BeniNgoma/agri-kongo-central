"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Sprout, Shovel, Factory, GraduationCap, TrendingUp } from "lucide-react";

const composantes = [
  {
    num: "01",
    icon: Sprout,
    title: "Production Agricole Durable",
    desc: "Amélioration des pratiques culturales, accès aux intrants de qualité et promotion de l'agriculture intelligente face au climat à Banzangongo et Boko.",
    color: "#3a9e68",
  },
  {
    num: "02",
    icon: Shovel,
    title: "Matériels Aratoires",
    desc: "Accès aux outils agricoles manuels (machète, houe, bêche, etc.) adaptés pour accroître la productivité et réduire la pénibilité du travail.",
    color: "#c9a84c",
  },
  {
    num: "03",
    icon: Factory,
    title: "Infrastructures & Transformation",
    desc: "Construction d'infrastructures de stockage et de transformation pour ajouter de la valeur aux productions locales — silos à Mbanza-Ngungu et usine soja.",
    color: "#3a9e68",
  },
  {
    num: "04",
    icon: GraduationCap,
    title: "Renforcement des Capacités & Inclusion Sociale",
    desc: "Formation des producteurs de Banzangongo et Boko, inclusion des femmes et des jeunes, et appui aux 80 organisations paysannes du territoire.",
    color: "#c9a84c",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Accès au Financement & aux Marchés",
    desc: "Facilitation de l'accès au crédit, développement des chaînes de valeur et connexion aux marchés locaux, régionaux et de Kinshasa via la RN1.",
    color: "#3a9e68",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Programme() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programme" className="bg-green-deep py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border border-gold/30 text-gold mb-4 tracking-wider uppercase"
            style={{ background: "rgba(201,168,76,0.1)" }}>
            Composantes du Programme
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            5 Piliers pour une{" "}
            <span className="text-gradient">Transformation Durable</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Le programme s'articule autour de cinq composantes complémentaires pour assurer une
            transformation agricole durable et inclusive à Banzangongo, Boko et dans tout le
            territoire de Mbanza-Ngungu.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {composantes.map((c, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative glass rounded-3xl p-8 cursor-default overflow-hidden group ${
                i === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold mb-5"
                style={{ background: `${c.color}30`, color: c.color }}>
                {c.num}
              </div>

              <c.icon className="w-10 h-10 mb-4" style={{ color: c.color }} />

              <h3 className="font-playfair text-xl font-semibold text-white mb-3 leading-tight">
                {c.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>

              {/* Bottom bar */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                style={{ background: c.color }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
