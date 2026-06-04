"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Link, Mail } from "lucide-react";
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
              {/* Photo */}
              <div className="relative h-56">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-end p-4 bg-green-deep/80 transition-opacity"
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
