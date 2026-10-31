import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { animate, motion, useInView } from 'framer-motion'
import { ArrowRight, Award, Camera, Gem } from 'lucide-react'
import Reveal from '../common/Reveal'
import img from '../../assets/images'
import { stats } from '../../data/dummy'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString('id-ID')}
      {suffix}
    </span>
  )
}

const values = [
  { Icon: Camera, title: 'Peralatan Kelas Dunia', desc: 'Kamera full-frame, lensa prime, dan lighting studio terbaik.' },
  { Icon: Gem, title: 'Editing Premium', desc: 'Color grading signature yang elegan dan tak lekang waktu.' },
  { Icon: Award, title: 'Tim Bersertifikat', desc: 'Fotografer berpengalaman dengan ratusan sesi tiap tahun.' },
]

export default function AboutSection() {
  return (
    <section id="tentang" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Komposisi foto */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:mr-16">
            <img src={img.studio} alt="Interior studio LensaKarya" className="h-full w-full object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-10 right-0 hidden w-56 overflow-hidden rounded-3xl border-8 border-white shadow-2xl sm:block"
          >
            <img src={img.maternity} alt="Contoh karya maternity" className="aspect-[3/4] w-full object-cover" />
          </motion.div>
          <div className="absolute top-8 -left-4 rounded-2xl bg-ink-950 px-6 py-5 text-white shadow-xl sm:-left-8">
            <p className="font-serif text-5xl leading-none text-gold-300">12</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Tahun Berkarya</p>
          </div>
        </Reveal>

        {/* Teks */}
        <div>
          <Reveal>
            <span className="eyebrow">Tentang Studio</span>
            <h2 className="mt-5 text-4xl leading-[1.05] text-ink-950 sm:text-5xl lg:text-6xl text-balance">
              Kami tidak sekadar memotret, kami <span className="italic text-gold-600">merangkai kenangan.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist-500">
              Berdiri sejak 2014, LensaKarya adalah studio fotografi di Jakarta yang memadukan pendekatan dokumenter dengan estetika
              editorial. Setiap sesi dirancang personal — mulai dari konsep, lokasi, hingga hasil akhir yang siap Anda wariskan.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {values.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={0.1 * i}>
                <div className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-50 text-gold-600">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink-950">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist-500">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Link to="/#fotografer" className="btn-dark mt-10">
              Kenali Tim Kami <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Statistik */}
      <div className="container-luxe mt-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-mist-200 bg-mist-200 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-10 text-center">
              <p className="font-serif text-5xl text-ink-950 sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-mist-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

