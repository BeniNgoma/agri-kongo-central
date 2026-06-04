"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Sprout, Users, TrendingUp, Truck, BarChart2, CheckCircle } from "lucide-react";
import { activities } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Sprout, Users, TrendingUp, Truck, BarChart2,
};

export default function Activites() {
  const [active, setActive] = useState(0);

  return (
    <section id="activites" className="bg-green-deep py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border border-gold/30 text-gold mb-4 tracking-wider uppercase"
            style={{ background: "rgba(201,168,76,0.1)" }}>
            Principales Activités
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Actions Concrètes sur le{" "}
            <span className="text-gradient">Terrain</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Des actions complémentaires visant à renforcer durablement la productivité, l'organisation et la
            compétitivité agricole à Banzangongo, Boko et Mbanza-Ngungu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tabs — left column */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {activities.map((act, i) => {
              const Icon = iconMap[act.icon] ?? Sprout;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal min-w-max lg:min-w-0 ${
                    active === i
                      ? "bg-gold text-white shadow-lg"
                      : "glass text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    <span className="text-xs opacity-70">{act.id} </span>
                    {act.title.split(" ").slice(0, 3).join(" ")}…
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content — right */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-3xl overflow-hidden"
              >
                <div className="relative h-64 lg:h-72">
                  <Image
                    src={activities[active].photo}
                    alt={activities[active].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-deep/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold text-white">
                      {activities[active].id}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                    {activities[active].title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
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
      </div>
    </section>
  );
}
