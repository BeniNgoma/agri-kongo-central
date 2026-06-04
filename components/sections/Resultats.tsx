"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import { Wheat, Sprout, Truck, Building2, Route, TrendingUp } from "lucide-react";

const counters = [
  { value: 6000, label: "tonnes de maïs", suffix: " t", icon: Wheat, color: "#3a9e68" },
  { value: 4000, label: "tonnes de soja", suffix: " t", icon: Sprout, color: "#c9a84c" },
  { value: 5, label: "camions 25t", suffix: "", icon: Truck, color: "#3a9e68" },
  { value: 2, label: "silos de stockage", suffix: "", icon: Building2, color: "#c9a84c" },
  { value: 290, label: "km de routes", suffix: " km", icon: Route, color: "#3a9e68" },
  { value: 5, label: "hausse revenus", suffix: "%+", icon: TrendingUp, color: "#c9a84c" },
];

const productionData = [
  { culture: "Maïs", objectif: 6000 },
  { culture: "Soja", objectif: 4000 },
];

const benef = [
  { name: "Producteurs", value: 2000, fill: "#3a9e68" },
  { name: "Organisations", value: 80, fill: "#c9a84c" },
  { name: "AVEC", value: 20, fill: "#1a5c35" },
  { name: "Brigadiers", value: 290, fill: "#e8c97a" },
];

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
    <span ref={ref} className="font-playfair text-3xl font-bold" style={{ color: "#c9a84c" }}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Resultats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resultats" className="relative py-24 bg-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1600&q=80"
        alt="Agriculture Kongo Central"
        fill
        className="object-cover opacity-5"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/10 text-green-mid mb-4 tracking-wider uppercase">
            Résultats Attendus
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-green-deep mb-4">
            Des Chiffres qui Parlent
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Le programme ambitionne des résultats concrets et mesurables pour les communautés de
            Banzangongo, Boko et tout le territoire de Mbanza-Ngungu.
          </p>
        </div>

        {/* Counters */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {counters.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: `${c.color}15` }}>
                <c.icon className="w-5 h-5" style={{ color: c.color }} />
              </div>
              <AnimatedCounter value={c.value} suffix={c.suffix} />
              <div className="text-gray-500 text-xs mt-1 leading-tight">{c.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
            <h3 className="font-playfair font-semibold text-green-deep mb-4 text-lg">
              Production prévue (tonnes)
            </h3>
            <ResponsiveContainer width="100%" height={260}>
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
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
            <h3 className="font-playfair font-semibold text-green-deep mb-4 text-lg">
              Répartition des bénéficiaires
            </h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={benef} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                  {benef.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "rgba(15,36,25,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
