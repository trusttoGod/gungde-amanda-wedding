"use client"
import { useState } from "react"

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
]

export default function GallerySection() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="bg-[#F8F3E7] py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-serif text-[#3A2E2A] mb-12 text-center">
        Our Moments
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt=""
            className="max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}