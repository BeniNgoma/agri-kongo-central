"use client";

import { motion } from "motion/react";
import { teamMembers } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Equipe() {
  return (
    <section id="equipe" className="bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/10 text-green-mid mb-4 tracking-wider uppercase">
            Notre Équipe
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-green-deep mb-4">
            Les Acteurs du{" "}
            <span className="text-gradient">Changement</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Une équipe pluridisciplinaire dédiée à la transformation agricole de Boko
            et du territoire de Mbanza-Ngungu.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease }}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-light-bg transition-colors ${
                i < teamMembers.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Numéro */}
              <span className="text-xs font-bold text-gray-300 w-5 flex-shrink-0 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Nom */}
              <span className="font-playfair font-semibold text-green-deep text-sm sm:text-base flex-1 min-w-0 truncate">
                {member.name}
              </span>

              {/* Rôle */}
              <span className="text-gray-500 text-xs sm:text-sm hidden sm:block flex-1 min-w-0 truncate">
                {member.role}
              </span>

              {/* Société */}
              <span
                className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.12)", color: "#a07820" }}
              >
                {member.company}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
