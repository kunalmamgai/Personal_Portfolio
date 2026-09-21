import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from 'react-icons/fi'

export default function ProjectCarousel({ images = [], title = 'Project Gallery' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  if (!images || images.length === 0) return null

  const handleNext = (e) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = (e) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
      {/* Full-width Main Screenshot */}
      <div className="relative h-[22rem] sm:h-[30rem] w-full overflow-hidden bg-slate-950 flex items-center justify-center group">
        <AnimatePresence mode="wait">
          <Motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} Screenshot ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="h-full w-full object-contain p-2 sm:p-4 select-none cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          />
        </AnimatePresence>

        {/* Ambient Gradient Overlays */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Navigation Arrows (if multiple images) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-white backdrop-blur hover:bg-cyan-400 hover:text-slate-950 transition opacity-80 group-hover:opacity-100 shadow-xl"
              title="Previous Screenshot"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-white backdrop-blur hover:bg-cyan-400 hover:text-slate-950 transition opacity-80 group-hover:opacity-100 shadow-xl"
              title="Next Screenshot"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </>
        )}

        {/* Image Badge & Lightbox Trigger */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="rounded-full bg-slate-950/80 border border-white/15 px-3 py-1 text-xs font-mono text-cyan-300 backdrop-blur">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/80 border border-white/15 text-white hover:bg-white/10 transition backdrop-blur"
            title="Full Screen Lightbox"
          >
            <FiMaximize2 className="text-sm" />
          </button>
        </div>
      </div>

      {/* Thumbnail Bar (if multiple images) */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto p-4 border-t border-white/10 bg-slate-900/60 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition ${
                currentIndex === idx
                  ? 'border-cyan-400 ring-2 ring-cyan-400/40 opacity-100'
                  : 'border-white/10 opacity-50 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumb ${idx}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-900 text-white hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              <FiX className="text-2xl" />
            </button>

            <img
              src={images[currentIndex]}
              alt={`Full view ${title}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
