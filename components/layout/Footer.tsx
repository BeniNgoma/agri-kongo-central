import Image from "next/image";
import { Share2, Link, MessageSquare, Play, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Contexte & Objectif", href: "#a-propos" },
    { label: "Vision du Projet", href: "#programme" },
    { label: "TEXADA / M. Didy Nduenga", href: "#a-propos" },
  ],
  services: [
    { label: "Production Agricole Vivrière", href: "#activites" },
    { label: "Cultures Fruitières (Ananas...)", href: "#activites" },
    { label: "Transformation Agroalimentaire", href: "#activites" },
    { label: "Énergie Verte & Biogaz", href: "#activites" },
    { label: "Pisciculture & Irrigation", href: "#activites" },
  ],
  impact: [
    { label: "Chiffres Clés du Projet", href: "#resultats" },
    { label: "Impacts Attendus", href: "#impacts" },
    { label: "Galerie Photos", href: "#galerie" },
    { label: "Nous Contacter", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050f0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1 — Logo + description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Nduenga Agro Industries"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <div className="font-playfair font-bold text-white text-sm leading-tight">
                  Projet Kongo Central
                </div>
                <div className="text-gold/80 text-xs leading-tight">
                  Agro-Industriel & Énergétique Vert
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Projet agricole, agro-industriel & énergétique vert sur{" "}
              <strong className="text-white/80">20 hectares</strong> au Kongo Central, RD Congo.
              Propriétaire : <strong className="text-white/80">M. Didy Nduenga</strong> · Structuration :{" "}
              <strong className="text-white/80">TEXADA/2026</strong>.
            </p>
            <div className="flex items-center gap-3">
              {[Share2, Link, MessageSquare, Play].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-green-mid transition-colors flex items-center justify-center"
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Qui Sommes-Nous */}
          <div>
            <h4 className="font-playfair font-semibold text-gold mb-4 text-sm uppercase tracking-wider">
              Qui Sommes-Nous
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Produits & Services */}
          <div>
            <h4 className="font-playfair font-semibold text-gold mb-4 text-sm uppercase tracking-wider">
              Produits & Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Impact & Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-gold mb-4 text-sm uppercase tracking-wider">
              Impact & Contact
            </h4>
            <ul className="space-y-2.5 mb-5">
              {footerLinks.impact.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <MapPin className="w-3.5 h-3.5 text-gold/70 flex-shrink-0" />
                <span>Terrain 20 ha, Kongo Central, RDC</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Mail className="w-3.5 h-3.5 text-gold/70 flex-shrink-0" />
                <span>contact@texada-projet.cd</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Phone className="w-3.5 h-3.5 text-gold/70 flex-shrink-0" />
                <span>+243 XXX XXX XXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>
            © 2026 Projet Agro-Industriel & Énergétique Vert — Kongo Central, RD Congo. Structuration : TEXADA/2026. Tous droits réservés.
          </span>
          <div className="flex items-center gap-1 text-white/30">
            <Image src="/logo.png" alt="logo" width={16} height={16} className="rounded-full opacity-60" />
            <span>M. Didy Nduenga · Kongo Central</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
