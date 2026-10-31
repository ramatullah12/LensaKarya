import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import useLockBody from '../../hooks/useLockBody'
import type { GalleryItem } from '../../types'

interface LightboxProps {
  items: GalleryItem[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

/** Tampilan foto fullscreen dengan navigasi keyboard (← → Esc). */
export default function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const open = index !== null
  useLockBody(open)

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return
      onChange((index + dir + items.length) % items.length)
    },
    [index, items.length, onChange],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, go, onClose])

  const item = index !== null ? items[index] : null

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-ink-950/97 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-5 text-white sm:px-8">
            <p className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase">
              {(index ?? 0) + 1} / {items.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-ink-950"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
            <AnimatePresence mode="wait">
              <motion.img
                key={item.id}
                src={item.image}
                alt={item.title}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>

            {[-1, 1].map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  go(dir as 1 | -1)
                }}
                className={`absolute top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white backdrop-blur transition hover:bg-white hover:text-ink-950 ${dir === -1 ? 'left-3 sm:left-6' : 'right-3 sm:right-6'}`}
                aria-label={dir === -1 ? 'Sebelumnya' : 'Berikutnya'}
              >
                {dir === -1 ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            ))}
          </div>

          <div className="px-5 py-6 text-center text-white sm:px-8" onClick={(e) => e.stopPropagation()}>
            <p className="text-[11px] font-semibold tracking-[0.25em] text-gold-300 uppercase">{item.category}</p>
            <h3 className="mt-1 text-2xl sm:text-3xl">{item.title}</h3>
            <p className="mt-1 text-sm text-white/50">oleh {item.photographer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

