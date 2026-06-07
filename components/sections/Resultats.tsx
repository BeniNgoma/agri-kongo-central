"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { Leaf, Sprout, Truck, Globe, Zap, TrendingUp } from "lucide-react";

const counters = [
  { value: 20, label: "hectares total", suffix: " ha", icon: Leaf, color: "#3a9e68" },
  { value: 14, label: "terres cultivées", suffix: " ha", icon: Sprout, color: "#c9a84c" },
  { value: 5, label: "pôles structurants", suffix: "", icon: Truck, color: "#3a9e68" },
  { value: 2, label: "marchés stratégiques", suffix: "", icon: Globe, color: "#c9a84c" },
  { value: 100, label: "autonomie énergétique", suffix: "%", icon: Zap, color: "#3a9e68" },
  { value: 120, label: "millions hab. marché", suffix: "M+", icon: TrendingUp, color: "#c9a84c" },
];

const allocationData = [
  { zone: "Vivrières", superficie: 6 },
  { zone: "Fruitières", superficie: 8 },
  { zone: "Transformation", superficie: 2 },
  { zone: "Énergie verte", superficie: 2 },
  { zone: "Eau & Piscic.", superficie: 2 },
  { zone: "Infra & Svcs", superficie: 2 },
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/10 text-green-mid mb-4 tracking-wider uppercase">
            Chiffres Clés du Projet
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-green-deep mb-4">
            Un Projet à Fort Impact
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            20 hectares stratégiquement aménagés en 5 pôles complémentaires pour maximiser la rentabilité,
            la durabilité et l'attractivité auprès des investisseurs.
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

        {/* Chart — Allocation des terres */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-gray-100 max-w-2xl mx-auto w-full"
        >
          <h3 className="font-playfair font-semibold text-green-deep mb-1 text-base sm:text-lg">
            Allocation des 20 hectares par pôle
          </h3>
          <p className="text-gray-400 text-xs mb-4">Superficie en hectares par zone du plan d'aménagement</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={allocationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="zone" tick={{ fill: "#6b7280", fontSize: 11 }} />
              <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} unit=" ha" />
              <Tooltip
                contentStyle={{ background: "rgba(15,36,25,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }}
                formatter={(value) => [`${value} ha`, "Superficie"]}
              />
              <Legend />
              <Bar dataKey="superficie" name="Superficie (ha)" fill="#3a9e68" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
