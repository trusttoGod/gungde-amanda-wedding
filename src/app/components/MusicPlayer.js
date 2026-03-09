"use client"
import { useEffect, useRef, useState } from "react"

export default function MusicPlayer({ play }) {

  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // PLAY + FADE IN
  useEffect(() => {

    if (play && audioRef.current) {

      const audio = audioRef.current

      audio.volume = 0

      audio.play().then(() => {

        setIsPlaying(true)

        let volume = 0

        const fadeIn = setInterval(() => {

          if (volume < 0.4) {
            volume += 0.01
            audio.volume = volume
          } else {
            clearInterval(fadeIn)
          }

        }, 150)

      }).catch(() => {})

    }

  }, [play])


  // AUTO PAUSE SAAT PINDAH TAB
  useEffect(() => {

    const audio = audioRef.current

    const handleVisibility = () => {

      if (!audio) return

      if (document.hidden) {

        audio.pause()

      } else if (isPlaying) {

        audio.play().catch(()=>{})

      }

    }

    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility)
    }

  }, [isPlaying])


  const toggleMusic = () => {

    if (!audioRef.current) return

    const audio = audioRef.current

    if (audio.paused) {

      audio.play().catch(()=>{})
      setIsPlaying(true)

    } else {

      audio.pause()
      setIsPlaying(false)

    }

  }


  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/wedding.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 bg-[#C6A75E] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </>
  )
}