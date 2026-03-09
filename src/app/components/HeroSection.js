"use client"
import { motion } from "framer-motion"
import GuestName from "./GuestName"

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
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="relative z-10 px-6"
      >

        {/* FOTO */}
        <img
          src="/hero.jpg"
          alt="Couple"
          className="w-56 sm:w-64 md:w-72 mx-auto rounded-2xl shadow-2xl border-4 border-[#C6A75E]"
        />

        <h1 className="mt-6 text-[#F8F3E7] text-xl tracking-[0.3em] uppercase">
          Wedding Of
        </h1>

        {/* NAMA MEMPELAI */}
        <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white leading-[1.8] tracking-[0.02em]">
          Anak Agung Gede Aryasatya
          <br />
          <span className="text-[#C6A75E] text-3xl">&</span>
          <br />
          <span className="whitespace-nowrap">
            Ni Made Amanda Resmita Dewi
          </span>
        </h1>

        {/* GARIS */}
        <div className="w-20 h-[2px] bg-[#C6A75E] mx-auto mt-6 opacity-80"></div>

        {/* TANGGAL */}
        <p className="mt-6 text-[#F8F3E7] text-lg tracking-widest max-w-[320px] mx-auto">
          24 – 25 Maret 2026
        </p>


        {/* TAMU UNDANGAN */}
        <div className="mt-16 max-w-[320px] mx-auto">
          <h2 className="text-[#F8F3E7] text-xl tracking-widest">
            Kepada Yth.
          </h2>

          <h2 className="text-[#C6A75E] text-4xl sm:text-5xl font-serif mt-2 leading-tight">
            <GuestName />
          </h2>
        </div>

      </motion.div>
    </section>
  )
}