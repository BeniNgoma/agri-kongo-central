"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Users, Truck, TrendingUp, Globe } from "lucide-react";

const stats = [
  { value: "2 000", label: "Producteurs agricoles", icon: Users },
  { value: "290 km", label: "Routes réhabilitées", icon: Truck },
  { value: "+5%", label: "Hausse des revenus", icon: TrendingUp },
  { value: "2M+", label: "Bénéficiaires indirects", icon: Globe },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(58, 158, 104, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80"
        alt="Champs agricoles Kongo Central"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-deep/65" />
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 border border-gold/30 text-gold-light"
              style={{ background: "rgba(201,168,76,0.12)" }}
            >
              🌿 Kongo Central — Banzangongo &amp; Boko, Territoire de Mbanza-Ngungu — RD Congo
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Relance Agricole du{" "}
              <span className="text-gradient">Kongo Central</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Un programme intégré pour transformer l'agriculture, créer de la valeur et améliorer
              durablement les conditions de vie des populations rurales de{" "}
              <strong className="text-gold-light">Banzangongo</strong> et{" "}
              <strong className="text-gold-light">Boko</strong>, dans le territoire de
              Mbanza-Ngungu, province du Kongo Central, RD Congo.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => handleScroll("#programme")}
                className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-gold to-gold-light hover:opacity-90 transition-opacity shadow-xl text-sm"
              >
                Découvrir le Programme
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-8 py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-sm"
              >
                Nous Contacter
              </button>
            </motion.div>
          </div>

          {/* Right — Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + i * 0.15, duration: 0.6 }}
                className="glass rounded-2xl p-5"
              >
                <stat.icon className="w-8 h-8 text-gold mb-3" />
                <div className="font-playfair text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <button
          onClick={() => handleScroll("#a-propos")}
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
}
