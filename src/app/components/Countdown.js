"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function Countdown() {

  const searchParams = useSearchParams()
  const event = searchParams.get("event")

  const resepsiDate = new Date("2026-03-24T00:00:00").getTime()
  const pawiwahanDate = new Date("2026-03-25T00:00:00").getTime()

  const [timeResepsi, setTimeResepsi] = useState({})
  const [timePawiwahan, setTimePawiwahan] = useState({})

  const calculateTime = (target) => {

    const now = new Date().getTime()
    const distance = target - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }

  }

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeResepsi(calculateTime(resepsiDate))
      setTimePawiwahan(calculateTime(pawiwahanDate))

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  const CountdownBox = ({title, time}) => (

    <div className="mt-12">

      <h2 className="text-[#3A2E2A] text-xl mb-6 tracking-widest">
        {title}
      </h2>

      <div className="flex justify-center gap-6 text-center">

        {["days","hours","minutes","seconds"].map((unit) => (

          <div
            key={unit}
            className="bg-[#C6A75E] text-white p-4 rounded-xl w-20 shadow-lg"
          >

            <p className="text-2xl font-bold">
              {time[unit]}
            </p>

            <p className="text-xs uppercase">
              {unit}
            </p>

          </div>

        ))}

      </div>

    </div>

  )

  return (

    <div>

      {event === "24" && (
        <CountdownBox
          title="Menuju Hari Resepsi"
          time={timeResepsi}
        />
      )}

      {event === "25" && (
        <CountdownBox
          title="Menuju Hari Pawiwahan"
          time={timePawiwahan}
        />
      )}

      {!event && (
        <>
          <CountdownBox
            title="Menuju Hari Resepsi"
            time={timeResepsi}
          />

          <CountdownBox
            title="Menuju Hari Pawiwahan"
            time={timePawiwahan}
          />
        </>
      )}

    </div>

  )

}