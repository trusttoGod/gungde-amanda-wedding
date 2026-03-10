"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Swal from "sweetalert2"

export default function RSVPForm() {

  const searchParams = useSearchParams()
  const event = searchParams.get("event")

  const defaultDate =
    event === "24"
      ? "24 Maret 2026"
      : event === "25"
      ? "25 Maret 2026"
      : "24 Maret 2026"

  const [name, setName] = useState("")
  const [attendance, setAttendance] = useState("Hadir")
  const [date, setDate] = useState(defaultDate)
  const [guests, setGuests] = useState(1)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const [comments, setComments] = useState([])

  const [page, setPage] = useState(1)
  const commentsPerPage = 6

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzxnycsokwQFAQC-RxbkptyknJb-Kt_i9cC_M6pKUzEykfpsPchVeJA9H7vup4fVkPh7g/exec"


  const loadComments = async () => {

    try {

      const res = await fetch(`${SCRIPT_URL}?t=${Date.now()}`)
      const data = await res.json()

      setComments(data.reverse())

    } catch (err) {

      console.log(err)

    }

  }


  useEffect(() => {

    loadComments()

    const interval = setInterval(() => {
      loadComments()
    }, 5000)

    return () => clearInterval(interval)

  }, [])


  useEffect(() => {
    setDate(defaultDate)
  }, [event])


  const handleSubmit = async () => {

    if (!name) {

      Swal.fire({
        icon: "warning",
        text: "Silakan isi nama terlebih dahulu"
      })

      return
    }

    setLoading(true)

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nama: name,
        kehadiran: attendance,
        tanggal: date,
        jumlah: guests,
        ucapan: message
      })
    })

    setName("")
    setGuests(1)
    setMessage("")

    setTimeout(loadComments, 1000)

    setLoading(false)

    Swal.fire({
      icon: "success",
      title: "Suksma 🙏",
      text: "Suksma sudah mengisi doa & ucapan",
      confirmButtonColor: "#C6A75E"
    })

  }



  const startIndex = (page - 1) * commentsPerPage
  const endIndex = startIndex + commentsPerPage
  const visibleComments = comments.slice(startIndex, endIndex)
  const totalPages = Math.ceil(comments.length / commentsPerPage)



  const getPages = () => {

    const pages = []

    if (page > 2) pages.push("...")

    for (
      let i = Math.max(1, page - 1);
      i <= Math.min(totalPages, page + 1);
      i++
    ) {
      pages.push(i)
    }

    if (page < totalPages - 1) pages.push("...")

    return pages

  }



  return (
    <section className="mt-28 max-w-3xl mx-auto px-6">

      <h2 className="text-2xl text-center text-black mb-10 tracking-widest">
        RSVP & Wish
      </h2>


      <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#C6A75E] space-y-4">

        <input
          type="text"
          placeholder="Nama"
          className="w-full border border-[#C6A75E] p-3 rounded-lg text-black"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />


        <select
          className="w-full border border-[#C6A75E] p-3 rounded-lg text-black"
          value={attendance}
          onChange={(e)=>setAttendance(e.target.value)}
        >
          <option>Hadir</option>
          <option>Tidak Hadir</option>
        </select>


        {!event && (
          <select
            className="w-full border border-[#C6A75E] p-3 rounded-lg text-black"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
          >
            <option value="24 Maret 2026">
              24 Maret 2026 – Resepsi 
            </option>

            <option value="25 Maret 2026">
              25 Maret 2026 – Pawiwahan
            </option>

            <option value="24 & 25 Maret 2026">
              24 & 25 Maret 2026
            </option>
          </select>
        )}


        {event === "24" && (
          <div className="w-full border border-[#C6A75E] p-3 rounded-lg bg-[#F8F3E7] text-black font-semibold">
            24 Maret 2026 – Resepsi Internal
          </div>
        )}


        {event === "25" && (
          <div className="w-full border border-[#C6A75E] p-3 rounded-lg bg-[#F8F3E7] text-black font-semibold">
            25 Maret 2026 – Pawiwahan & Resepsi Umum
          </div>
        )}


        <input
          type="number"
          min="1"
          className="w-full border border-[#C6A75E] p-3 rounded-lg text-black"
          value={guests}
          onChange={(e)=>setGuests(e.target.value)}
        />


        <textarea
          placeholder="Ucapan & doa"
          className="w-full border border-[#C6A75E] p-3 rounded-lg text-black"
          rows="3"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />


        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#C6A75E] text-white py-3 rounded-lg"
        >
          {loading ? "Mengirim..." : "Send"}
        </button>

      </div>



      <div className="mt-16">

        <h3 className="text-xl text-black mb-6 font-semibold text-center">
          Ucapan & Doa
        </h3>


        <div className="space-y-6 max-h-[450px] overflow-y-auto">

          {visibleComments.map((item, i) => (

            <div
              key={i}
              className="border-b border-[#E5D9C8] pb-4 text-center"
            >

              <p className="font-bold text-black text-lg">
                {item.nama}
              </p>

              <p className="text-black mt-1">
                {item.ucapan}
              </p>

            </div>

          ))}

        </div>



        <div className="flex justify-center items-center mt-8 gap-3 text-black">

          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 border rounded hover:bg-[#C6A75E] hover:text-white disabled:opacity-40"
          >
            Previous
          </button>


          {getPages().map((p, i) =>
            p === "..." ? (
              <span key={i}>...</span>
            ) : (
              <button
                key={i}
                onClick={() => setPage(p)}
                className={`px-3 py-1 border rounded ${
                  page === p
                    ? "bg-[#C6A75E] text-white"
                    : "hover:bg-[#C6A75E] hover:text-white"
                }`}
              >
                {p}
              </button>
            )
          )}


          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded hover:bg-[#C6A75E] hover:text-white disabled:opacity-40"
          >
            Next
          </button>

        </div>

      </div>

    </section>
  )

}