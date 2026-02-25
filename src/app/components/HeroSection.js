"use client"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm animate-[slowZoom_20s_linear_infinite]"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 px-6"
      >
        <img
          src="/hero.jpg"
          alt="Couple"
          className="w-56 sm:w-64 md:w-72 mx-auto rounded-2xl shadow-2xl border-4 border-[#C6A75E]"
        />

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-relaxed drop-shadow-[0_4px_12px_rgba(198,167,94,0.35)]">
          Anak Agung Gede Aryasatya
          <br />
          <span className="text-[#C6A75E]">&</span>
          <br />
          Ni Made Amanda Resmita Dewi
        </h1>

        <div className="w-20 h-[2px] bg-[#C6A75E] mx-auto mt-6 opacity-80"></div>

        <p className="mt-6 text-[#F8F3E7] tracking-widest">
          24 – 25 Maret 2026
        </p>
      </motion.div>
    </section>
  )
}