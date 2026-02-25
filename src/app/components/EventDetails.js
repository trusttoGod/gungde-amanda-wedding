export default function EventDetails() {
  return (
    <section className="mt-20 max-w-3xl mx-auto text-center">

      <h2 className="text-2xl md:text-3xl text-[#3A2E2A] mb-10 tracking-widest">
        Detail Acara
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

      {/* Resepsi */}
      <div className="border border-[#C6A75E] p-8 rounded-2xl shadow-lg bg-white text-center">

        <h3 className="text-lg md:text-xl font-semibold text-[#C6A75E]">
          Resepsi
        </h3>

        {/* 👑 Royal Divider */}
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto my-4"></div>

        <p className="text-base md:text-lg text-[#3A2E2A]">
          24 Maret 2026
        </p>

        <p className="text-sm md:text-base italic tracking-wide text-[#3A2E2A] mt-2">
          Pkl 09.00 WITA - 21.00 WITA
        </p>

      </div>


      {/* Pawiwahan */}
      <div className="border border-[#C6A75E] p-8 rounded-2xl shadow-lg bg-white text-center">

        <h3 className="text-lg md:text-xl font-semibold text-[#C6A75E]">
          Upacara Pawiwahan
        </h3>

        {/* 👑 Royal Divider */}
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto my-4"></div>

        <p className="text-base md:text-lg text-[#3A2E2A]">
          25 Maret 2026
        </p>

        <p className="text-sm md:text-base italic tracking-wide text-[#3A2E2A] mt-2">
          Pkl 16.00 WITA - Selesai
        </p>

      </div>

      </div>
    </section>
  )
}