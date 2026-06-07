"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Clock, CheckCircle, Share2, Link, MessageSquare, Play } from "lucide-react";

const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const [form, setForm] = useState({
    prenom: "", nom: "", email: "", telephone: "", organisation: "", objet: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-light-bg py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-green-bright/10 text-green-mid mb-4 tracking-wider uppercase">
            Contact
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-green-deep mb-4">
            Nous <span className="text-gradient">Rejoindre</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Investisseur, bailleur de fonds, partenaire stratégique ou institution financière —
            contactez l'équipe TEXADA pour les études de faisabilité et le business plan du projet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-bright/15 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-bright" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-green-deep mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-500 text-sm">
                    L'équipe TEXADA vous répondra dans les 48 heures ouvrables.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 rounded-xl text-sm bg-green-mid text-white hover:bg-green-deep transition-colors"
                  >
                    Nouveau message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Prénom</label>
                      <input
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-green-bright transition-colors"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Nom</label>
                      <input
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-green-bright transition-colors"
                        placeholder="Mabunda"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-green-bright transition-colors"
                      placeholder="jean@exemple.cd"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Téléphone</label>
                      <input
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-green-bright transition-colors"
                        placeholder="+243 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Organisation</label>
                      <input
                        name="organisation"
                        value={form.organisation}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-green-bright transition-colors"
                        placeholder="Nduenga Agro Industries"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Objet</label>
                    <select
                      name="objet"
                      value={form.objet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-green-bright transition-colors bg-white"
                    >
                      <option value="">Sélectionner un objet</option>
                      <option value="investissement">Investissement dans le projet</option>
                      <option value="partenariat">Partenariat stratégique</option>
                      <option value="financement">Financement & crédit bancaire</option>
                      <option value="faisabilite">Études de faisabilité</option>
                      <option value="information">Demande d'information</option>
                      <option value="presse">Presse / Média</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-green-bright transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-gold to-gold-light hover:opacity-90 active:scale-95 transition-all shadow-md"
                  >
                    Envoyer le Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="space-y-5 sm:space-y-6"
          >
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-gray-100 space-y-4 sm:space-y-5">
              {[
                { icon: MapPin, label: "Propriétaire & Promoteur", value: "M. Didy Nduenga — Terrain 20 ha, Kongo Central, RD Congo" },
                { icon: MapPin, label: "Structuration & Études", value: "TEXADA/2026 — Gisele Baganda, Chef de Projet" },
                { icon: Phone, label: "Téléphone", value: "+243 XXX XXX XXX" },
                { icon: Mail, label: "Email", value: "contact@texada-projet.cd" },
                { icon: Clock, label: "Horaires", value: "Lun–Ven 08h00–17h00 (heure de Kinshasa)" },
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-green-bright/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <info.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-bright" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-400 mb-0.5">{info.label}</div>
                    <div className="text-xs sm:text-sm text-gray-700">{info.value}</div>
                  </div>
                </div>
              ))}
              <div className="pt-1 flex gap-3">
                {[Share2, Link, MessageSquare, Play].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-xl bg-green-bright/10 flex items-center justify-center hover:bg-green-mid transition-colors group">
                    <Icon className="w-4 h-4 text-green-mid group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 h-64 sm:h-72">
              <MapComponent />
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-wrap gap-3 sm:gap-4">
              {[
                { color: "#c9a84c", name: "Terrain 20 ha", role: "Kongo Central — sources d'eau naturelles" },
                { color: "#ffffff", name: "Kinshasa & Matadi", role: "Marchés & ports stratégiques" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full border border-gray-200 flex-shrink-0" style={{ background: item.color }} />
                  <span className="font-medium text-gray-700">{item.name}</span>
                  <span className="text-gray-400">— {item.role}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
