import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Camera, Star } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { InstagramIcon } from '../common/SocialIcons'
import { photographers } from '../../data/dummy'

export default function PhotographerSection() {
  return (
    <section id="fotografer" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Tim Fotografer"
          title={<>Mata di balik <span className="italic text-gold-600">setiap karya.</span></>}
          description="Pilih fotografer yang gayanya paling sesuai dengan cerita Anda."
          action={
            <Link to="/#fotografer" className="btn-outline">
              Semua Fotografer <ArrowUpRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {photographers.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist-100">
                <img src={p.photo} alt={p.name} className="img-zoom h-full w-full object-cover grayscale-[35%] transition duration-700 group-hover:grayscale-0" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink-950 backdrop-blur">
                  <Star className="h-3 w-3 fill-gold-400 text-gold-400" /> {p.rating.toFixed(1)}
                </span>
                <div className="absolute inset-x-4 bottom-4 flex translate-y-4 items-center justify-between opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white">
                    <Camera className="h-3.5 w-3.5" /> {p.projects}+ proyek
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-950">
                    <InstagramIcon className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl text-ink-950">{p.name}</h3>
                  <p className="mt-0.5 text-sm text-mist-500">{p.specialty}</p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-mist-200 px-3 py-1 text-xs font-medium text-ink-700">{p.experience} th</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

