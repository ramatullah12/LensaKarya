import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/dummy'
import { cn } from '../../utils/format'

export default function TestimonialSection() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  // Auto-slide setiap 7 detik
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000)
    return () => window.clearInterval(id)
  }, [index])

  const go = (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section id="testimoni" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-mist-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={t.id}
                src={t.photo}
                alt={t.name}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
          <span className="absolute -right-4 -bottom-6 grid h-24 w-24 place-items-center rounded-full bg-gold-400 text-ink-950 shadow-xl sm:-right-6">
            <Quote className="h-9 w-9 fill-current" />
          </span>
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <span className="eyebrow">Testimoni Klien</span>
          <div className="relative mt-8 min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1 text-gold-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-serif text-3xl leading-snug text-ink-950 sm:text-4xl text-balance">“{t.message}”</blockquote>
                <div className="mt-8">
                  <p className="font-semibold text-ink-950">{t.name}</p>
                  <p className="text-sm text-mist-500">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex gap-2">
              {[-1, 1].map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => go(dir)}
                  className="grid h-12 w-12 place-items-center rounded-full border border-mist-300 text-ink-950 transition-all duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
                  aria-label={dir === -1 ? 'Sebelumnya' : 'Berikutnya'}
                >
                  {dir === -1 ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Testimoni ${i + 1}`}
                  className={cn('h-1.5 rounded-full transition-all duration-500', i === index ? 'w-10 bg-gold-500' : 'w-4 bg-mist-300')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

