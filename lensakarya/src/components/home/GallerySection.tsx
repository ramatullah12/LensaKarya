import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Maximize2 } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Lightbox from '../gallery/Lightbox'
import { galleryItems } from '../../data/dummy'
import { cn } from '../../utils/format'

export default function GallerySection() {
  const filters = useMemo(() => ['Semua', ...Array.from(new Set(galleryItems.map((g) => g.category)))], [])
  const [active, setActive] = useState('Semua')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const items = active === 'Semua' ? galleryItems : galleryItems.filter((g) => g.category === active)

  return (
    <section id="galeri" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Portofolio"
          title={<>Galeri karya <span className="italic text-gold-600">pilihan.</span></>}
          description="Kurasi foto terbaik dari ribuan sesi yang telah kami abadikan."
          action={
            <Link to="/#galeri" className="btn-outline">
              Lihat Semua Galeri <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        {/* Filter kategori */}
        <div className="no-scrollbar -mx-5 mt-12 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                'relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300',
                active === f ? 'text-white' : 'text-ink-700 hover:text-ink-950 bg-mist-100',
              )}
            >
              {active === f && (
                <motion.span layoutId="gallery-filter" className="absolute inset-0 rounded-full bg-ink-950" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        {/* Masonry */}
        <motion.div layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="group relative mb-5 cursor-zoom-in break-inside-avoid overflow-hidden rounded-3xl bg-mist-100"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={cn(
                    'img-zoom w-full object-cover',
                    item.orientation === 'portrait' && 'aspect-[3/4]',
                    item.orientation === 'landscape' && 'aspect-[4/3]',
                    item.orientation === 'square' && 'aspect-square',
                  )}
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/85 via-ink-950/0 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                  <p className="translate-y-3 text-[11px] font-semibold tracking-[0.25em] text-gold-300 uppercase transition-transform duration-500 group-hover:translate-y-0">
                    {item.category}
                  </p>
                  <h3 className="mt-1 translate-y-3 text-2xl text-white transition-transform delay-75 duration-500 group-hover:translate-y-0">{item.title}</h3>
                  <p className="mt-1 text-xs text-white/60">oleh {item.photographer}</p>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox items={items} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    </section>
  )
}

