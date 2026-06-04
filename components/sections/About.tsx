"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ShieldCheck, TrendingUp, Users, Leaf } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Sécurité Alimentaire", desc: "Disponibilité accrue des denrées au Kongo Central" },
  { icon: TrendingUp, title: "Développement Économique", desc: "Croissance locale et revenus des ménages agricoles" },
  { icon: Users, title: "Inclusion Sociale", desc: "Emplois durables, femmes et jeunes de Banzangongo & Boko" },
  { icon: Leaf, title: "Agriculture Durable", desc: "Pratiques intelligentes face au climat tropical" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="a-propos" className="bg-light-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/15 text-green-mid mb-4 tracking-wider uppercase">
              À Propos du Programme
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-green-deep mb-6 leading-tight">
              Transformer l'Agriculture au{" "}
              <span className="text-gradient">Kongo Central</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Le programme est porté par le{" "}
              <strong className="text-green-mid">Centre de Développement Intégrale-Bwamanda (CDI-Bwamanda)</strong>{" "}
              en partenariat avec le Ministère de l'Économie Nationale. Il vise à transformer durablement
              l'agriculture dans la province du Kongo Central, particulièrement dans les localités de{" "}
              <strong className="text-green-deep">Banzangongo</strong> et{" "}
              <strong className="text-green-deep">Boko</strong>, situées dans le territoire de{" "}
              <strong className="text-green-deep">Mbanza-Ngungu</strong> — des zones à fort potentiel
              agricole, stratégiquement positionnées sur l'axe de ravitaillement de Kinshasa.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-bright/10 flex items-center justify-center mb-3">
                    <p.icon className="w-5 h-5 text-green-bright" />
                  </div>
                  <div className="font-semibold text-green-deep text-sm mb-1">{p.title}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{p.desc}</div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#programme")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 rounded-xl bg-green-mid text-white font-semibold text-sm hover:bg-green-deep transition-colors shadow-md"
            >
              Lire notre Mission Complète
            </button>
          </motion.div>

          {/* Right — Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                alt="Champs agricoles Banzangongo"
                fill
                className="object-cover"
              />
            </div>
            {/* Small overlay image */}
            <div className="absolute bottom-[-2rem] left-[-2rem] rounded-2xl overflow-hidden border-4 border-white shadow-xl w-44 h-44">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80"
                alt="Récolte Boko"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge flottant */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-semibold border border-gold/40 text-gold-light"
              style={{ background: "rgba(201,168,76,0.2)", backdropFilter: "blur(8px)" }}>
              Agriculture Intelligente &amp; Durable
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
