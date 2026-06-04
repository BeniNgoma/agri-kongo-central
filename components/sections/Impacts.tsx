"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ShieldCheck, Briefcase, MapPin, Droplets, TrendingUp, Globe } from "lucide-react";
import { impacts } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, Briefcase, MapPin, Droplets, TrendingUp, Globe,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Impacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impacts" className="bg-light-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/10 text-green-mid mb-4 tracking-wider uppercase">
            Impacts Attendus
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-green-deep mb-4">
            Des Impacts <span className="text-gradient">Durables</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Le programme générera des impacts sociaux, économiques et environnementaux durables au
            bénéfice des communautés de Banzangongo, Boko et du Kongo Central.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {impacts.map((impact, i) => {
            const Icon = iconMap[impact.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all cursor-default"
              >
                {/* Color bar */}
                <div
                  className="h-1.5"
                  style={{ background: impact.color === "green" ? "#3a9e68" : "#c9a84c" }}
                />
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={impact.photo}
                    alt={impact.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: impact.color === "green" ? "#3a9e6815" : "#c9a84c15" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: impact.color === "green" ? "#3a9e68" : "#c9a84c" }} />
                  </div>
                  <h3 className="font-playfair font-semibold text-green-deep text-lg mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{impact.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
