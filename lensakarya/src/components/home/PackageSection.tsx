import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Clock, Sparkles } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { packages } from '../../data/dummy'
import { cn, formatDuration, formatRupiah } from '../../utils/format'

export default function PackageSection() {
  return (
    <section id="paket" className="relative scroll-mt-20 overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full bg-gold-500/10 blur-3xl" />
      <div className="container-luxe relative">
        <SectionHeading
          light
          align="center"
          eyebrow="Paket Fotografi"
          title={<>Investasi untuk kenangan <span className="italic text-gold-300">abadi.</span></>}
          description="Paket transparan tanpa biaya tersembunyi. Semua sudah termasuk editing premium & galeri online privat."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'group relative flex flex-col overflow-hidden rounded-[2rem] border transition-all duration-700 ease-luxe hover:-translate-y-2',
                pkg.popular ? 'border-gold-400/60 bg-white text-ink-950 lg:-mt-6 lg:mb-6' : 'border-white/10 bg-white/[0.04] hover:border-white/25',
              )}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="img-zoom h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <span className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wider text-ink-950 uppercase backdrop-blur">
                  {pkg.category}
                </span>
                {pkg.popular && (
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold tracking-wider text-ink-950 uppercase">
                    <Sparkles className="h-3 w-3" /> Terpopuler
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="text-3xl">{pkg.name}</h3>
                <p className={cn('mt-2 text-sm leading-relaxed', pkg.popular ? 'text-mist-500' : 'text-white/55')}>{pkg.description}</p>

                <div className="mt-6 flex items-end justify-between gap-3">
                  <div>
                    <p className={cn('text-[11px] font-semibold tracking-[0.2em] uppercase', pkg.popular ? 'text-mist-500' : 'text-white/40')}>Mulai dari</p>
                    <p className="mt-1 font-serif text-4xl leading-none">{formatRupiah(pkg.price)}</p>
                  </div>
                  <span className={cn('inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium', pkg.popular ? 'bg-mist-100 text-ink-700' : 'bg-white/10 text-white/70')}>
                    <Clock className="h-3.5 w-3.5" /> {formatDuration(pkg.duration)}
                  </span>
                </div>

                <ul className={cn('mt-7 space-y-3 border-t pt-7 text-sm', pkg.popular ? 'border-mist-200' : 'border-white/10')}>
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={cn('mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full', pkg.popular ? 'bg-gold-100 text-gold-700' : 'bg-gold-400/15 text-gold-300')}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className={pkg.popular ? 'text-ink-700' : 'text-white/75'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/login" className={cn('mt-8 w-full', pkg.popular ? 'btn-dark' : 'btn-gold')}>
                  Pilih Paket <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-white/50">
          Butuh paket khusus?{' '}
          <Link to="/#kontak" className="font-semibold text-gold-300 underline-offset-4 hover:underline">
            Konsultasikan dengan tim kami
          </Link>
        </p>
      </div>
    </section>
  )
}

