"use client"
import { motion } from "framer-motion"

export default function OpeningEnvelope({ onOpen }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#1f1a17] via-[#2a201c] to-[#3A2E2A] z-50 px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-[#F8F3E7] text-center rounded-2xl shadow-2xl p-10 max-w-md w-full"
      >

        <p className="text-sm tracking-[0.3em] text-[#C6A75E] mb-4 uppercase">
          The Wedding Of
        </p>

        <h1 className="text-xl md:text-2xl font-serif text-[#3A2E2A] leading-relaxed">
          Anak Agung Gede Aryasatya
          <br />
          &
          <br />
          Ni Made Amanda Resmita Dewi
        </h1>

        <div className="w-12 h-[1px] bg-[#C6A75E] mx-auto my-6 opacity-60"></div>

        <button
          onClick={onOpen}
          className="bg-[#C6A75E] text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-[#b8934f] transition duration-300 tracking-wide"
        >
          Buka Undangan
        </button>

      </motion.div>
    </div>
  )
}