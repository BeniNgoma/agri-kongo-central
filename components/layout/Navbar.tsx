"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Leaf, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  {
    label: "Qui Sommes-Nous",
    href: "#a-propos",
    submenu: [
      { label: "À Propos du Programme", href: "#a-propos", desc: "Notre mission et vision pour le Kongo Central" },
      { label: "Notre Équipe", href: "#equipe", desc: "L'équipe dédiée de CDI-Bwamanda" },
      { label: "Notre Approche", href: "#programme", desc: "5 composantes pour une transformation durable" },
    ],
  },
  {
    label: "Produits & Services",
    href: "#programme",
    submenu: [
      { label: "Nos 5 Composantes", href: "#programme", desc: "Le cadre stratégique du programme" },
      { label: "Production Agricole (Maïs & Soja)", href: "#activites", desc: "Banzangongo et Boko, zones de production" },
      { label: "Transformation (Huile & Tourteaux)", href: "#activites", desc: "Usine de transformation du soja" },
      { label: "Infrastructures de Stockage", href: "#activites", desc: "Silos de 250 tonnes à Mbanza-Ngungu" },
      { label: "Routes de Desserte", href: "#activites", desc: "290 km réhabilités vers Kinshasa" },
      { label: "Financement & Coopératives", href: "#activites", desc: "AVEC et accès au crédit agricole" },
    ],
  },
  {
    label: "Impact",
    href: "#resultats",
    submenu: [
      { label: "Résultats Attendus", href: "#resultats", desc: "Chiffres clés et indicateurs de performance" },
      { label: "Impacts du Programme", href: "#impacts", desc: "Effets durables sur les communautés rurales" },
      { label: "Galerie Photos", href: "#galerie", desc: "Terrain à Banzangongo, Boko et Mbanza-Ngungu" },
      { label: "Nous Contacter", href: "#contact", desc: "Rejoindre ou partenariat avec CDI-Bwamanda" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-green-deep/90 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-bright to-gold flex items-center justify-center shadow-lg">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-playfair font-bold text-white text-sm leading-tight">
                CDI-Bwamanda
              </div>
              <div className="text-gold-light text-xs leading-tight hidden sm:block">
                Programme Agricole — Kongo Central
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, idx) =>
              !link.submenu ? (
                <button
                  key={idx}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/90 hover:text-gold-light px-4 py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-white/90 hover:text-gold-light px-4 py-2 text-sm font-medium transition-colors">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {openDropdown === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 w-72 mt-1 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                      style={{ backdropFilter: "blur(24px)", background: "rgba(15,36,25,0.95)" }}
                    >
                      {link.submenu.map((sub, sidx) => (
                        <button
                          key={sidx}
                          onClick={() => handleNavClick(sub.href)}
                          className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors group border-b border-white/5 last:border-0"
                        >
                          <div className="text-white text-sm font-medium group-hover:text-gold-light transition-colors">
                            {sub.label}
                          </div>
                          <div className="text-white/50 text-xs mt-0.5">{sub.desc}</div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-green-bright to-gold text-white hover:opacity-90 transition-opacity shadow-lg"
            >
              Nous Rejoindre
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-green-deep/98 border-t border-white/10 max-h-screen overflow-y-auto"
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                <button
                  onClick={() => {
                    if (link.submenu) {
                      setMobileAccordion(mobileAccordion === idx ? null : idx);
                    } else {
                      handleNavClick(link.href);
                    }
                  }}
                  className="w-full flex items-center justify-between text-white/90 hover:text-gold-light px-4 py-3 text-sm font-medium rounded-xl hover:bg-white/5 transition-colors"
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileAccordion === idx ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {link.submenu && mobileAccordion === idx && (
                  <div className="pl-4 space-y-0.5">
                    {link.submenu.map((sub, sidx) => (
                      <button
                        key={sidx}
                        onClick={() => handleNavClick(sub.href)}
                        className="w-full text-left text-white/70 hover:text-gold-light px-4 py-2.5 text-sm rounded-lg hover:bg-white/5 transition-colors"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full mt-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-green-bright to-gold text-white"
            >
              Nous Rejoindre
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
