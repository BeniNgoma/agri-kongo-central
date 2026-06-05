"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { Wheat, Sprout, Truck, Building2, Leaf, TrendingUp } from "lucide-react";

const counters = [
  { value: 3000, label: "tonnes de maïs", suffix: " t", icon: Wheat, color: "#3a9e68" },
  { value: 2000, label: "tonnes de soja", suffix: " t", icon: Sprout, color: "#c9a84c" },
  { value: 2, label: "camions 25t", suffix: "", icon: Truck, color: "#3a9e68" },
  { value: 2, label: "silos de stockage", suffix: "", icon: Building2, color: "#c9a84c" },
  { value: 10, label: "hectares cultivés", suffix: " ha", icon: Leaf, color: "#3a9e68" },
  { value: 5, label: "hausse revenus", suffix: "%+", icon: TrendingUp, color: "#c9a84c" },
];

const productionData = [
  { culture: "Maïs", objectif: 3000 },
  { culture: "Soja", objectif: 2000 },
];

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="font-playfair text-2xl sm:text-3xl font-bold" style={{ color: "#c9a84c" }}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Resultats() {
  return (
    <section id="resultats" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1600&q=80"
        alt="Agriculture Kongo Central"
        fill
        className="object-cover opacity-5"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/10 text-green-mid mb-4 tracking-wider uppercase">
            Résultats Attendus
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-green-deep mb-4">
            Des Chiffres qui Parlent
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Le programme ambitionne des résultats concrets et mesurables pour les communautés de
            Boko et tout le territoire de Mbanza-Ngungu.
          </p>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {counters.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-gray-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: `${c.color}15` }}>
                <c.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: c.color }} />
              </div>
              <AnimatedCounter value={c.value} suffix={c.suffix} />
              <div className="text-gray-500 text-[10px] sm:text-xs mt-1 leading-tight">{c.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-gray-100 max-w-2xl mx-auto w-full"
        >
          <h3 className="font-playfair font-semibold text-green-deep mb-4 text-base sm:text-lg">
            Production prévue (tonnes)
          </h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="culture" tick={{ fill: "#6b7280", fontSize: 12 }} />
              <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
              <Tooltip
                contentStyle={{ background: "rgba(15,36,25,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }}
              />
              <Legend />
              <Bar dataKey="objectif" name="Objectif (t)" fill="#3a9e68" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
