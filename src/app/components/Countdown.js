"use client"
import { useEffect, useState } from "react"

export default function Countdown() {
  const weddingDate = new Date("2026-03-24T00:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mt-12">
      <h2 className="text-[#3A2E2A] text-xl mb-6 tracking-widest">
        Menuju Hari Resepsi
      </h2>

      <div className="flex justify-center gap-6 text-center">
        {["days","hours","minutes","seconds"].map((unit) => (
          <div key={unit} className="bg-[#C6A75E] text-white p-4 rounded-xl w-20 shadow-lg">
            <p className="text-2xl font-bold">{timeLeft[unit]}</p>
            <p className="text-xs uppercase">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  )
}