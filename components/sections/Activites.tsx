"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Sprout, Users, TrendingUp, Truck, BarChart2, CheckCircle, X } from "lucide-react";
import { activities } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Sprout, Users, TrendingUp, Truck, BarChart2,
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Activites() {
  const [selected, setSelected] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <section id="activites" className="bg-green-deep py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 sm:mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border border-gold/30 text-gold mb-4 tracking-wider uppercase"
            style={{ background: "rgba(201,168,76,0.1)" }}
          >
            Principales Activités
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Actions Concrètes sur le{" "}
            <span className="text-gradient">Terrain</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Des actions complémentaires visant à renforcer durablement la productivité, l'organisation et
            la compétitivité agricole à Boko et Mbanza-Ngungu.
          </p>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Left fade edge */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10"
          style={{ background: "linear-gradient(to right, #0f2419 0%, transparent 100%)" }}
        />
        {/* Right fade edge */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10"
          style={{ background: "linear-gradient(to left, #0f2419 0%, transparent 100%)" }}
        />

        {/* Scrolling track — duplicate cards for seamless loop */}
        <div
          className="flex gap-5 w-max"
          style={{
            animation: "marquee-rtl 32s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            paddingLeft: "20px",
          }}
        >
          {[...activities, ...activities].map((act, i) => {
            const Icon = iconMap[act.icon] ?? Sprout;
            const idx = i % activities.length;
            return (
              <motion.button
                key={i}
                onClick={() => setSelected(idx)}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 280, damping: 22 },
                }}
                whileTap={{ scale: 0.97 }}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
                style={{ width: 270, height: 340 }}
              >
                {/* Photo */}
                <Image
                  src={act.photo}
                  alt={act.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,28,18,0.97) 0%, rgba(10,28,18,0.55) 45%, rgba(10,28,18,0.1) 100%)",
                  }}
                />
                {/* Number badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-gold text-white shadow-lg tracking-wide">
                    {act.id}
                  </span>
                </div>
                {/* Icon */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-playfair font-semibold text-white text-sm leading-snug mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {act.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1.5 text-gold text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span>Voir les détails</span>
                    <span className="text-xs">→</span>
                  </motion.div>
                </div>
                {/* Gold border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/50 transition-colors duration-400" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            style={{ background: "rgba(8,20,14,0.88)", backdropFilter: "blur(14px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.38, ease }}
              className="relative bg-green-deep rounded-3xl overflow-hidden shadow-2xl w-full max-w-xl"
              style={{ border: "1px solid rgba(255,255,255,0.1)", maxHeight: "88vh", overflowY: "auto" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo */}
              <div className="relative h-52 sm:h-60 flex-shrink-0">
                <Image
                  src={activities[selected].photo}
                  alt={activities[selected].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep via-green-deep/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold text-white shadow">
                    {activities[selected].id}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3">
                  {activities[selected].title}
                </h3>
                <p className="text-white/65 leading-relaxed mb-6 text-sm sm:text-base">
                  {activities[selected].description}
                </p>
                <ul className="space-y-2.5">
                  {activities[selected].points.map((pt, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.07, duration: 0.38, ease }}
                      className="flex items-start gap-2.5 text-white/80 text-xs sm:text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-bright flex-shrink-0 mt-0.5" />
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
