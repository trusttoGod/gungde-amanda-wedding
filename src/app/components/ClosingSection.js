"use client"
import { motion } from "framer-motion"

export default function ClosingSection() {
  return (
    <section className="relative bg-[#3A2E2A] text-white py-20 md:py-24 text-center overflow-hidden">

      {/* ORNAMENT ATAS - ABSOLUTE */}
      <img
        src="/ornament.png"
        alt="ornament"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none opacity-20 pointer-events-none"
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-[#C6A75E] mb-6">
          Terima Kasih
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-[#F8F3E7] mb-10">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>

        <p className="text-xl md:text-2xl font-serif tracking-widest text-[#F8F3E7] mb-10">
          Om Shanti Shanti Shanti Om
        </p>

        <div className="text-[#C6A75E] font-serif text-lg md:text-xl leading-relaxed">
          Anak Agung Gede Aryasatya
          <br />
          &amp;
          <br />
          Ni Made Amanda Resmita Dewi
        </div>
      </motion.div>

      {/* ORNAMENT BAWAH - ABSOLUTE */}
      <img
        src="/ornament.png"
        alt="ornament"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none opacity-15 pointer-events-none rotate-180"
      />

    </section>
  )
}