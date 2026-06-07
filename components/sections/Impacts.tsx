"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, Briefcase, MapPin, Droplets, TrendingUp, Globe } from "lucide-react";
import { impacts } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, Briefcase, MapPin, Droplets, TrendingUp, Globe,
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Impacts() {
  return (
    <section id="impacts" className="bg-light-bg py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/10 text-green-mid mb-4 tracking-wider uppercase">
            Impacts Attendus
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-green-deep mb-4">
            Des Impacts <span className="text-gradient">Durables</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Le programme générera des impacts sociaux, économiques et environnementaux durables au
            bénéfice des communautés de Boko et du Kongo Central.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {impacts.map((impact, i) => {
            const Icon = iconMap[impact.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.09, duration: 0.65, ease }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 280, damping: 22 } }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow cursor-default"
              >
                <div
                  className="h-1.5"
                  style={{ background: impact.color === "green" ? "#3a9e68" : "#c9a84c" }}
                />
                <div className="relative h-44 sm:h-48">
                  <Image
                    src={impact.photo}
                    alt={impact.title}
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(1.15) contrast(1.06) saturate(1.1)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                    style={{ background: impact.color === "green" ? "#3a9e6815" : "#c9a84c15" }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: impact.color === "green" ? "#3a9e68" : "#c9a84c" }} />
                  </div>
                  <h3 className="font-playfair font-semibold text-green-deep text-base sm:text-lg mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{impact.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
