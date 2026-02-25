"use client"
import { useState } from "react"

export default function RSVPForm() {

  const [name, setName] = useState("")
  const [attendance, setAttendance] = useState("Hadir")
  const [date, setDate] = useState("24 Maret 2026")
  const [guests, setGuests] = useState(1)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyhB_DjbqdKFyiMFUkDsxo-8-4icAJpGlA-JuGDEGAuBXOToaIoZXE6uPVBpPp-5oEwpQ/exec"

  const handleSubmit = async () => {
    if (!name) {
      alert("Silakan isi nama terlebih dahulu")
      return
    }

    setLoading(true)
    setSuccess(false)

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",   // <<< TAMBAHKAN INI
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: name,
          kehadiran: attendance,
          tanggal: date,
          jumlah: guests,
          ucapan: message
        }),
      })

      setSuccess(true)

      // Reset form
      setName("")
      setAttendance("Hadir")
      setDate("24 Maret 2026")
      setGuests(1)
      setMessage("")

    } catch (error) {
      alert("Terjadi kesalahan. Coba lagi.")
      }

    setLoading(false)
  }

  return (
    <section className="mt-28 max-w-3xl mx-auto text-center px-6">

      <h2 className="text-2xl text-[#3A2E2A] mb-10 tracking-widest">
        Konfirmasi Kehadiran & Doa Restu
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#C6A75E] space-y-4">

        <input
          type="text"
          placeholder="Nama"
          className="w-full border border-[#C6A75E] p-3 rounded-lg text-[#3A2E2A] focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="w-full border border-[#C6A75E] p-3 rounded-lg text-[#3A2E2A] focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"   
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        >
          <option>Hadir</option>
          <option>Tidak Hadir</option>
        </select>

        <select
          className="w-full border border-[#C6A75E] p-3 rounded-lg text-[#3A2E2A] focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          <option>24 Maret 2026</option>
          <option>25 Maret 2026</option>
          <option>24 & 25 Maret 2026</option>
        </select>

        <input
          type="number"
          min="1"
          className="w-full border border-[#C6A75E] p-3 rounded-lg text-[#3A2E2A] focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <textarea
          placeholder="Ucapan & doa"
          className="w-full border border-[#C6A75E] p-3 rounded-lg text-[#3A2E2A] focus:outline-none focus:ring-2 focus:ring-[#C6A75E]"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#C6A75E] text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Mengirim..." : "Kirim Konfirmasi"}
        </button>

        {success && (
          <p className="text-green-600 mt-4">
            Terima kasih 🙏 Kehadiran Anda telah dikonfirmasi.
          </p>
        )}

      </div>
    </section>
  )
}