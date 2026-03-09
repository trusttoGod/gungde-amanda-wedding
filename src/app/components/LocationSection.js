"use client"
import { useSearchParams } from "next/navigation"

export default function LocationSection() {
  const searchParams = useSearchParams()
  const event = searchParams.get("event")

  const show24 = event === "24"
  const show25 = event === "25"
  const showAll = !event

  return (
    <section className="mt-24 max-w-5xl mx-auto text-center px-6">

      <h2 className="text-2xl md:text-3xl font-serif text-[#3A2E2A] mb-16 tracking-widest">
        Lokasi Acara
      </h2>

      <div className="space-y-16">

        {/* ================= RESEPSI 24 ================= */}
        {(show24 || showAll) && (
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[#C6A75E] mb-2">
              Resepsi – 24 Maret 2026
            </h3>

            <p className="text-[#3A2E2A] mb-4">
              Rumah Mempelai Wanita
            </p>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C6A75E]">
              <iframe
                src="https://www.google.com/maps?q=-8.37655984210028,114.7096578790508&hl=id&z=17&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=-8.37655984210028,114.7096578790508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-[#C6A75E] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
              📍 Buka di Google Maps
            </a>
          </div>
        )}

        {/* ================= PAWIWAHAN 25 ================= */}
        {(show25 || showAll) && (
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[#C6A75E] mb-2">
              Pawiwahan – 25 Maret 2026
            </h3>

            <p className="text-[#3A2E2A] mb-4">
              Griya Gede Kawisunia Mendoyo
            </p>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#C6A75E]">
              <iframe
                src="https://www.google.com/maps?q=-8.367654410163581,114.66655948697101&hl=id&z=17&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=-8.367654410163581,114.66655948697101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-[#3A2E2A] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
              📍 Buka di Google Maps
            </a>
          </div>
        )}

      </div>
    </section>
  )
}