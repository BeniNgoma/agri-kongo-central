"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sprout, Factory, Zap, Droplets, Building2 } from "lucide-react";

const poles = [
  {
    num: "01",
    icon: Sprout,
    title: "Production Agricole Diversifiée",
    subtitle: "14 ha",
    desc: "6 ha de cultures vivrières (manioc, maïs, patate douce, haricot, légumes) assurant la sécurité alimentaire et des revenus rapides, plus 8 ha de cultures fruitières commerciales avec l'ananas comme produit phare (3 ha), banane plantain (2 ha), papaye (1 ha) et agrumes (2 ha).",
    color: "#3a9e68",
    photo: "/pdf-images/img_009.jpg",
  },
  {
    num: "02",
    icon: Factory,
    title: "Transformation Agroalimentaire",
    subtitle: "2 ha",
    desc: "Zone industrielle dédiée à la transformation à haute valeur ajoutée : jus naturels de fruits tropicaux, fruits séchés, farine de manioc, conditionnement et emballage. Unités industrielles, chambres froides, hangars et zones de chargement vers Kinshasa et Matadi.",
    color: "#c9a84c",
    photo: "/pdf-images/img_011.jpg",
  },
  {
    num: "03",
    icon: Zap,
    title: "Énergie Verte & Autonomie Énergétique",
    subtitle: "2 ha",
    desc: "Panneaux photovoltaïques (solaire) et biogaz/biodiesel issus des déchets agricoles pour produire électricité, énergie thermique et fertilisants organiques. Continuité opérationnelle garantie — projet 100 % vert conforme aux critères ESG.",
    color: "#3a9e68",
    photo: "/pdf-images/img_013.jpg",
  },
  {
    num: "04",
    icon: Droplets,
    title: "Eau, Irrigation & Pisciculture",
    subtitle: "2 ha",
    desc: "Valorisation des sources d'eau naturelles internes pour l'irrigation gravitaire de l'ensemble du terrain. Bassins piscicoles (tilapia, silure), réservoirs d'irrigation et canaux internes pour sécuriser la production hydrique et diversifier les revenus.",
    color: "#c9a84c",
    photo: "/pdf-images/img_016.jpg",
  },
  {
    num: "05",
    icon: Building2,
    title: "Infrastructures, Logements & Services",
    subtitle: "2 ha",
    desc: "Logements des employés et techniciens, pistes internes, parking camions et équipements agricoles, pépinière, compost et fertilisation organique, espaces de gestion, de contrôle et de traçabilité pour garantir la performance opérationnelle du projet.",
    color: "#3a9e68",
    photo: "/pdf-images/img_018.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Programme() {
  return (
    <section id="programme" className="bg-green-deep py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border border-gold/30 text-gold mb-4 tracking-wider uppercase"
            style={{ background: "rgba(201,168,76,0.1)" }}>
            Les 5 Pôles Structurants
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Un Pôle Agro-Industriel{" "}
            <span className="text-gradient">Intégré & Vert</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Le projet repose sur cinq pôles structurants complémentaires sur 20 hectares, garantissant
            résilience, rentabilité et crédibilité auprès des investisseurs locaux et internationaux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {poles.map((pole, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.65, ease }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 280, damping: 22 } }}
              className={`relative glass rounded-2xl sm:rounded-3xl overflow-hidden cursor-default group ${
                i === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              {/* Photo du pôle */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={pole.photo}
                  alt={pole.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: "brightness(1.12) contrast(1.05) saturate(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/60 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: pole.color }}>
                  {pole.subtitle}
                </div>
              </div>

              {/* Contenu texte */}
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold mb-4"
                  style={{ background: `${pole.color}30`, color: pole.color }}>
                  {pole.num}
                </div>

                <pole.icon className="w-9 h-9 sm:w-10 sm:h-10 mb-4" style={{ color: pole.color }} />

                <h3 className="font-playfair text-lg sm:text-xl font-semibold text-white mb-3 leading-tight">
                  {pole.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{pole.desc}</p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                style={{ background: pole.color }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
