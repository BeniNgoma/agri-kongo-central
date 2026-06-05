"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, TrendingUp, Users, Leaf } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Sécurité Alimentaire", desc: "Disponibilité accrue des denrées au Kongo Central" },
  { icon: TrendingUp, title: "Développement Économique", desc: "Croissance locale et revenus des ménages agricoles" },
  { icon: Users, title: "Inclusion Sociale", desc: "Emplois durables pour les femmes et jeunes de Boko" },
  { icon: Leaf, title: "Agriculture Durable", desc: "Pratiques intelligentes face au climat tropical" },
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
              À Propos du Programme
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-green-deep mb-6 leading-tight">
              Transformer l'Agriculture au{" "}
              <span className="text-gradient">Kongo Central</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
              Le programme est porté par{" "}
              <strong className="text-green-mid">Nduenga Agro Industries</strong>.{" "}
              Il vise à transformer durablement
              l'agriculture dans la province du Kongo Central, particulièrement dans la localité de{" "}
              <strong className="text-green-deep">Boko</strong>, située dans le territoire de{" "}
              <strong className="text-green-deep">Mbanza-Ngungu</strong> — zone à fort potentiel
              agricole, stratégiquement positionnée sur l'axe de ravitaillement de Kinshasa.
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
              Lire notre Mission Complète
            </button>
          </motion.div>

          {/* Right — Images */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[360px] sm:h-[420px] lg:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                alt="Champs agricoles Kongo Central"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay image — caché sur mobile pour éviter le débordement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease }}
              className="absolute bottom-[-1.5rem] left-[-1.5rem] rounded-2xl overflow-hidden border-4 border-white shadow-xl w-36 h-36 sm:w-44 sm:h-44 hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80"
                alt="Récolte Boko"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Badge flottant */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold border border-gold/40 text-gold-light"
              style={{ background: "rgba(201,168,76,0.2)", backdropFilter: "blur(8px)" }}>
              Agriculture Intelligente &amp; Durable
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
