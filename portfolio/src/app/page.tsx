// app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <main className={`min-h-screen transition ${theme === "light" ? "bg-white" : "bg-black"} text-[#1848a0]`}>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full backdrop-blur-lg shadow-sm z-50 px-8 py-4 flex justify-between items-center ${theme === "light" ? "bg-white/80" : "bg-black/80"}`}>
        <h1 className="text-2xl font-bold text-[#1848a0]">Joelle Koffi</h1>
        <div className="flex gap-6 text-[#1848a0] font-semibold">
          <Link href="#about" className="hover:text-[#26d48c] transition">À propos</Link>
          <Link href="#projects" className="hover:text-[#26d48c] transition">Projets</Link>
          <Link href="#contact" className="hover:text-[#26d48c] transition">Contact</Link>
        </div>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`px-4 py-2 rounded-md border bg-[#1848a0] text-sm transition ${theme === "light" ? "hover:bg-[#08255cff] text-white" : "hover:bg-[#08255cff] text-white"}`}
        >
          {theme === "light" ? "☾ Mode sombre" : "☀ Mode clair"}
        </button>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center mb-8"
        >
          <div className="absolute inset-0 rounded-full blur-2xl bg-[#26d48c] opacity-60 animate-pulse"></div>

          <img
            src="/joellePhoto.png"
            alt="Photo de profil"
            className="w-60 h-60 rounded-full object-cover border-4 border-[#26d48c] shadow-xl relative z-10"
          />
        </motion.div>
        <motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="relative flex items-center justify-center mb-8"
>
  {/* Glow néon */}
  <div className="absolute rounded-full bg-[#26d48c] opacity-60 blur-2xl w-56 h-56 animate-pulse"></div>

  {/* Cercle avec padding */}
  <div className="w-44 h-44 rounded-full p-2 bg-white dark:bg-black border-4 border-[#26d48c] shadow-xl relative z-10 flex items-center justify-center">
    <img
      src="/photo.jpg"
      alt="Photo de profil"
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-[#1848a0]"
        >
          Bonjour, je suis <span className="text-[#26d48c]">Joelle Koffi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-lg text-[#1848a0] max-w-2xl"
        >
          Développeur Web & Mobile spécialisé en Next.js, Flutter et création d'expériences digitales.
        </motion.p>

        <div className="mt-8 flex gap-4">
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-lg bg-[#1848a0] text-white font-semibold shadow-md hover:bg-[#26d48c] transition"
          >
            Voir mes projets
          </motion.a>

          <motion.a
            href="/CV_Joelle_Koffi.pdf"
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-lg border-2 border-[#1848a0] text-[#1848a0] font-semibold hover:bg-[#1848a0] hover:text-white transition"
          >
            Télécharger mon CV
          </motion.a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1848a0] text-center mb-4">À propos de moi</h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-[#1848a0] max-w-3xl mx-auto"
        >
          Passionnée par la tech et l'entrepreneuriat, je crée des solutions web & mobile modernes. Expert Next.js, Flutter, Firebase, Supabase et UI/UX. Je construis des applications rapides, élégantes et intuitives.
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1848a0] text-center mb-10">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["App Mobile Flutter", "API Laravel", "Portfolio Next.js", "Dashboard Admin", "App Santé MVP", "Site E-commerce"].map((title, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="p-6 border rounded-xl shadow-sm bg-white border-[#1848a0] hover:shadow-lg cursor-pointer transition"
            >
              <h3 className="text-xl font-bold text-[#26d48c] mb-2">{title}</h3>
              <p className="text-[#1848a0]">
                Un aperçu du projet, les fonctionnalités principales et les technologies utilisées.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1848a0] text-center mb-8">Me contacter</h2>
        <form className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8 flex flex-col gap-4">
          <input type="text" placeholder="Nom" className="border p-3 rounded-md" />
          <input type="email" placeholder="Email" className="border p-3 rounded-md" />
          <textarea placeholder="Votre message" rows={5} className="border p-3 rounded-md" />
          <button className="bg-[#1848a0] text-white font-semibold py-3 rounded-md hover:bg-[#26d48c] transition">
            Envoyer
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-[#1848a0]">
        © {new Date().getFullYear()} Joelle Koffi — Tous droits réservés.
      </footer>
    </main>
  );
}