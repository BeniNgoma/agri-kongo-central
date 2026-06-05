"use client";

import { motion } from "motion/react";
import { Link, Mail, Building2 } from "lucide-react";
import { teamMembers } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Equipe() {
  return (
    <section id="equipe" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/10 text-green-mid mb-4 tracking-wider uppercase">
            Notre Équipe
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-green-deep mb-4">
            Les Acteurs du{" "}
            <span className="text-gradient">Changement</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Une équipe pluridisciplinaire dédiée à la transformation agricole de Boko
            et du territoire de Mbanza-Ngungu.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
              className="group relative bg-light-bg rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-default"
            >
              {/* Bannière société */}
              <div
                className="relative h-44 sm:h-56 flex flex-col items-center justify-center p-4 sm:p-5 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0f2419 0%, #1a5c35 65%, #2d7a4f 100%)" }}
              >
                <div className="absolute top-3 left-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/10" />
                <div className="absolute bottom-3 right-3 w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-gold/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/5" />

                <div className="relative z-10 text-center">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center"
                    style={{ background: "rgba(201,168,76,0.2)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  </div>
                  <p className="text-gold/70 text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest mb-1.5">
                    Organisation
                  </p>
                  <p className="font-playfair text-white font-bold text-xs sm:text-sm leading-snug text-center px-1 sm:px-2">
                    {member.company}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-end p-3 sm:p-4 bg-green-deep/90 transition-opacity"
                >
                  <p className="text-white/90 text-xs leading-relaxed">{member.bio}</p>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-3 sm:p-4">
                <h3 className="font-playfair font-semibold text-green-deep text-xs sm:text-sm leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-[11px] sm:text-xs mb-3">{member.role}</p>
                <div className="flex items-center gap-2">
                  <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-green-bright/10 flex items-center justify-center hover:bg-green-bright/20 transition-colors">
                    <Link className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-mid" />
                  </a>
                  <a href="#" className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-green-bright/10 flex items-center justify-center hover:bg-green-bright/20 transition-colors">
                    <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-mid" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
