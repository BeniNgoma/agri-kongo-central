"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  {
    label: "Qui Sommes-Nous",
    href: "#a-propos",
    submenu: [
      { label: "À Propos du Programme", href: "#a-propos", desc: "Notre mission et vision pour le Kongo Central" },
      { label: "Notre Équipe", href: "#equipe", desc: "L'équipe dédiée de Nduenga Agro Industries" },
      { label: "Notre Approche", href: "#programme", desc: "5 composantes pour une transformation durable" },
    ],
  },
  {
    label: "Produits & Services",
    href: "#programme",
    submenu: [
      { label: "Nos 5 Composantes", href: "#programme", desc: "Le cadre stratégique du programme" },
      { label: "Production Agricole (Maïs & Soja)", href: "#activites", desc: "Boko, zone de production principale" },
      { label: "Transformation (Huile & Tourteaux)", href: "#activites", desc: "Usine de transformation du soja" },
      { label: "Infrastructures de Stockage", href: "#activites", desc: "Silos de 250 tonnes à Mbanza-Ngungu" },
      { label: "Extension des Terres", href: "#activites", desc: "10 ha cultivés à Boko, zone de production" },
      { label: "Financement & Coopératives", href: "#activites", desc: "AVEC et accès au crédit agricole" },
    ],
  },
  {
    label: "Impact",
    href: "#resultats",
    submenu: [
      { label: "Résultats Attendus", href: "#resultats", desc: "Chiffres clés et indicateurs de performance" },
      { label: "Impacts du Programme", href: "#impacts", desc: "Effets durables sur les communautés rurales" },
      { label: "Galerie Photos", href: "#galerie", desc: "Terrain à Boko et Mbanza-Ngungu" },
      { label: "Nous Contacter", href: "#contact", desc: "Rejoindre ou partenariat avec Nduenga Agro Industries" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      } bg-white border-b border-gray-100`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo — entier, sans fond, sans rognage */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Nduenga Agro Industries"
              width={72}
              height={72}
              className="object-contain drop-shadow-sm"
              priority
            />
            <div className="text-left hidden md:block">
              <div className="font-playfair font-bold text-base leading-tight bg-gradient-to-r from-green-mid to-green-bright bg-clip-text text-transparent">
                Nduenga Agro Industries
              </div>
              <div className="text-xs leading-tight font-medium text-gray-400 tracking-wide">
                Produire au Congo · Transformer au Congo
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link, idx) =>
              !link.submenu ? (
                <button
                  key={idx}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-700 hover:text-green-mid px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-green-bright/8"
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
                  <button className="flex items-center gap-1 text-gray-700 hover:text-green-mid px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-green-bright/8">
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === idx ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 w-72 mt-1 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white"
                    >
                      {link.submenu.map((sub, sidx) => (
                        <button
                          key={sidx}
                          onClick={() => handleNavClick(sub.href)}
                          className="w-full text-left px-5 py-3 hover:bg-light-bg transition-colors border-b border-gray-50 last:border-0 group"
                        >
                          <div className="text-gray-800 text-sm font-medium group-hover:text-green-mid transition-colors">
                            {sub.label}
                          </div>
                          <div className="text-gray-400 text-xs mt-0.5">{sub.desc}</div>
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
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-green-mid to-green-bright text-white hover:opacity-90 transition-opacity shadow-md"
            >
              Nous Rejoindre
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
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
          className="lg:hidden bg-white border-t border-gray-100 max-h-screen overflow-y-auto shadow-lg"
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
                  className="w-full flex items-center justify-between text-gray-700 hover:text-green-mid px-4 py-3 text-sm font-medium rounded-xl hover:bg-light-bg transition-colors"
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
                        className="w-full text-left text-gray-500 hover:text-green-mid px-4 py-2.5 text-sm rounded-lg hover:bg-light-bg transition-colors"
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
              className="w-full mt-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-green-mid to-green-bright text-white shadow-md"
            >
              Nous Rejoindre
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
