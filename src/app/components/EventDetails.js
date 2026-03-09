"use client"
import { useSearchParams } from "next/navigation"

export default function EventDetails() {
  const searchParams = useSearchParams()
  const event = searchParams.get("event")

  const show24 = event === "24"
  const show25 = event === "25"
  const showAll = !event

  return (
    <section className="bg-[#F8F3E7] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-[#3A2E2A] mb-12">
          Detail Acara
        </h2>

        <div className="space-y-8">

          {(show24 || showAll) && (
            <div className="border border-[#C6A75E] p-8 rounded-3xl shadow-lg bg-white">
              <h3 className="text-xl font-semibold text-[#C6A75E] mb-4">
                Resepsi 
              </h3>
              <p className="text-lg text-[#3A2E2A]">
                24 Maret 2026
              </p>
              <p className="italic mt-2 text-[#3A2E2A] text-xl">
                Pkl. 11.00 WITA - Selesai
              </p>
            </div>
          )}

          {(show25 || showAll) && (
            <div className="border border-[#C6A75E] p-8 rounded-2xl shadow-lg bg-white">
              <h3 className="text-xl font-semibold text-[#C6A75E] mb-4">
                Pawiwahan
              </h3>
              <p className="text-lg text-[#3A2E2A]">
                25 Maret 2026
              </p>
              <p className="italic mt-2 text-[#3A2E2A] text-xl">
                Pkl. 17.00 WITA - Selesai
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}