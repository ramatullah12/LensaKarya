import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import img from '../../assets/images'

export default function CtaSection() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="group relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink-950"
      >
        <img src={img.prewedding} alt="" className="img-zoom absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/70 to-transparent" />
        <div className="relative px-8 py-20 sm:px-16 sm:py-28">
          <span className="eyebrow text-gold-300!">Jadwal Terbatas</span>
          <h2 className="mt-5 max-w-2xl text-4xl leading-[1.05] text-white sm:text-6xl text-balance">
            Amankan tanggal spesial Anda <span className="italic text-gold-300">sekarang.</span>
          </h2>
          <p className="mt-5 max-w-lg text-white/65">
            Jadwal fotografer favorit cepat penuh, terutama di musim pernikahan. Booking lebih awal untuk memastikan ketersediaan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/#paket" className="btn-gold">
              Mulai Booking <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#kontak" className="btn-ghost-light">
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

