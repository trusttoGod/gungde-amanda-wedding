"use client"

import { useSearchParams } from "next/navigation"

export default function GuestName() {
  const searchParams = useSearchParams()
  const guest = searchParams.get("to")

  return (
    <p className="text-2xl text-[#C6A75E] mt-2">
      {guest ? decodeURIComponent(guest) : "Tamu Undangan"}
    </p>
  )
}