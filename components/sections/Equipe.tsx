"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link, Mail, Building2 } from "lucide-react";
import { teamMembers } from "@/lib/data";

export default function Equipe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="equipe" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/10 text-green-mid mb-4 tracking-wider uppercase">
            Notre Équipe
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-green-deep mb-4">
            Les Acteurs du{" "}
            <span className="text-gradient">Changement</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Une équipe pluridisciplinaire dédiée à la transformation agricole de Banzangongo, Boko
            et du territoire de Mbanza-Ngungu.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative bg-light-bg rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-default"
            >
              {/* Bannière société */}
              <div
                className="relative h-56 flex flex-col items-center justify-center p-5 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0f2419 0%, #1a5c35 65%, #2d7a4f 100%)",
                }}
              >
                {/* Cercles décoratifs africains */}
                <div className="absolute top-3 left-3 w-20 h-20 rounded-full border border-white/10" />
                <div className="absolute bottom-3 right-3 w-14 h-14 rounded-full border border-gold/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/5" />

                <div className="relative z-10 text-center">
                  {/* Icône société */}
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: "rgba(201,168,76,0.2)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    <Building2 className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-gold/70 text-[10px] font-semibold uppercase tracking-widest mb-2">
                    Organisation
                  </p>
                  <p className="font-playfair text-white font-bold text-sm leading-snug text-center px-2">
                    {member.company}
                  </p>
                </div>

                {/* Hover — bio */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-end p-4 bg-green-deep/90 transition-opacity"
                >
                  <p className="text-white/90 text-xs leading-relaxed">{member.bio}</p>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-playfair font-semibold text-green-deep text-sm leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs mb-3">{member.role}</p>
                <div className="flex items-center gap-2">
                  <a href="#" className="w-7 h-7 rounded-lg bg-green-bright/10 flex items-center justify-center hover:bg-green-bright/20 transition-colors">
                    <Link className="w-3.5 h-3.5 text-green-mid" />
                  </a>
                  <a href="#" className="w-7 h-7 rounded-lg bg-green-bright/10 flex items-center justify-center hover:bg-green-bright/20 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-green-mid" />
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
