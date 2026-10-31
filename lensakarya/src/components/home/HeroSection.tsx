import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'
import img from '../../assets/images'
import { photographers } from '../../data/dummy'

const ease = [0.22, 1, 0.36, 1] as const

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-svh min-h-[680px] overflow-hidden bg-ink-950">
      {/* Foto hero dengan efek parallax */}
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <motion.img
          src={img.hero}
          alt="Pasangan pengantin saat golden hour"
          className="h-full w-full object-cover object-[70%_center]"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/45 to-ink-950/10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950/80 to-transparent" />

      <motion.div style={{ opacity: contentOpacity }} className="container-luxe relative flex h-full flex-col justify-center pt-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="eyebrow text-gold-300!"
          >
            Studio Fotografi Profesional · Jakarta
          </motion.span>

          <h1 className="mt-7 font-serif text-[3.2rem] leading-[0.95] font-medium text-white sm:text-7xl lg:text-[6.5rem]">
            {['Setiap cahaya', 'menyimpan'].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.5 + i * 0.12, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block italic text-gold-300"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.74, ease }}
              >
                sebuah cerita.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            LensaKarya mengabadikan momen paling berharga Anda — dari hari pernikahan hingga potret personal — dengan sentuhan
            artistik dan kualitas editorial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/#paket" className="btn-gold">
              Booking Sesi Foto <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#galeri" className="btn-ghost-light">
              <Play className="h-3.5 w-3.5 fill-current" /> Lihat Portofolio
            </Link>
          </motion.div>
        </div>

        {/* Kartu kepercayaan (desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease }}
          className="absolute right-5 bottom-28 hidden rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl sm:right-8 md:block lg:right-10"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {photographers.slice(0, 3).map((p) => (
                <img key={p.id} src={p.photo} alt={p.name} className="h-10 w-10 rounded-full border-2 border-ink-900 object-cover" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 text-sm font-semibold text-white">4.9</span>
              </div>
              <p className="mt-1 text-xs text-white/60">Dipercaya 4.800+ klien</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Indikator scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-white/50 uppercase"
      >
        Scroll
        <span className="relative h-12 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gold-300"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  )
}

