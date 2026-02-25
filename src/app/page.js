"use client"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import OpeningEnvelope from "./components/OpeningEnvelope"
import Countdown from "./components/Countdown"
import EventDetails from "./components/EventDetails"
import LocationSection from "./components/LocationSection"
import RSVPForm from "./components/RSVPForm"
import MusicPlayer from "./components/MusicPlayer"
import HeroSection from "./components/HeroSection"
import GallerySection from "./components/GallerySection"
import FadeInSection from "./components/FadeInSection"
import ClosingSection from "./components/ClosingSection"

export default function Home() {
  const searchParams = useSearchParams()
  const guest = searchParams.get("to") || "Tamu Undangan"
  const [opened, setOpened] = useState(false)

  if (!opened) {
    return <OpeningEnvelope onOpen={() => setOpened(true)} />
  }

  return (
    <>
      {/* HERO FULL SCREEN */}
      <HeroSection />

      {/* CONTENT AFTER HERO */}
      <main className="bg-[#F8F3E7] text-center py-16 px-5">

        <p className="text-lg text-[#3A2E2A]">
          Kepada Yth.
        </p>

        <p className="text-2xl text-[#C6A75E] font-semibold mt-2 mb-12">
          {guest}
        </p>

        <FadeInSection>
          <Countdown />
        </FadeInSection>

        <FadeInSection>
          <GallerySection />
        </FadeInSection>

        <FadeInSection>
          <EventDetails />
        </FadeInSection>

        <FadeInSection>
          <LocationSection />
        </FadeInSection>

        <FadeInSection>
          <RSVPForm />
        </FadeInSection>
        
      </main>
      <FadeInSection>
          <ClosingSection />
      </FadeInSection>
      <MusicPlayer play={opened} />
    </>
  )
}