"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Sprout, Users, TrendingUp, Truck, BarChart2, CheckCircle } from "lucide-react";
import { activities } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Sprout, Users, TrendingUp, Truck, BarChart2,
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Activites() {
  const [active, setActive] = useState(0);

  return (
    <section id="activites" className="bg-green-deep py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border border-gold/30 text-gold mb-4 tracking-wider uppercase"
            style={{ background: "rgba(201,168,76,0.1)" }}
          >
            Principales Activités
          </span>
          <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Actions Concrètes sur le{" "}
            <span className="text-gradient">Terrain</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            Des actions complémentaires visant à renforcer durablement la productivité,
            l'organisation et la compétitivité agricole à Boko et Mbanza-Ngungu.
          </p>
        </motion.div>

        {/* Mobile tab grid — 2 rows × 3 cols, visible only < lg */}
        <div className="grid grid-cols-3 gap-2 mb-4 lg:hidden">
          {activities.map((act, i) => {
            const Icon = iconMap[act.icon] ?? Sprout;
            return (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-1 px-2 py-3 rounded-xl text-center transition-all ${
                  active === i
                    ? "bg-gold text-white shadow-lg"
                    : "glass text-white/65 active:bg-white/15"
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className={`text-[10px] font-bold ${active === i ? "text-white/80" : "text-white/40"}`}>
                  {act.id}
                </span>
                <span className="text-[10px] font-medium leading-tight text-center line-clamp-2 w-full">
                  {act.title.split(" ").slice(0, 3).join(" ")}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Desktop layout — tabs left + content right */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {/* Vertical tabs */}
          <div className="flex flex-col gap-2">
            {activities.map((act, i) => {
              const Icon = iconMap[act.icon] ?? Sprout;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    active === i
                      ? "bg-gold text-white shadow-lg"
                      : "glass text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    <span className="opacity-70 mr-1">{act.id}</span>
                    {act.title.split(" ").slice(0, 3).join(" ")}…
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`desktop-${active}`}
                initial={{ opacity: 0, x: 16, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -16, scale: 0.98 }}
                transition={{ duration: 0.3, ease }}
                className="glass rounded-3xl overflow-hidden"
              >
                <div className="relative h-72">
                  <Image
                    src={activities[active].photo}
                    alt={activities[active].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-deep/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold text-white">
                      {activities[active].id}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                    {activities[active].title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6 text-base">
                    {activities[active].description}
                  </p>
                  <ul className="space-y-2">
                    {activities[active].points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-bright flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile content panel — visible only < lg */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${active}`}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.28, ease }}
              className="glass rounded-2xl overflow-hidden"
            >
              {/* Image plus courte sur mobile */}
              <div className="relative h-44 sm:h-56">
                <Image
                  src={activities[active].photo}
                  alt={activities[active].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/85 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gold text-white">
                    {activities[active].id}
                  </span>
                </div>
              </div>
              {/* Texte compact sur mobile */}
              <div className="p-4 sm:p-6">
                <h3 className="font-playfair text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                  {activities[active].title}
                </h3>
                <p className="text-white/65 leading-relaxed mb-4 text-xs sm:text-sm">
                  {activities[active].description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {activities[active].points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/75 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-green-bright flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
