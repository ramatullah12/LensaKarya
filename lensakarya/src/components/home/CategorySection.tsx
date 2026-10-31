import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { categories } from '../../data/dummy'
import { cn } from '../../utils/format'

export default function CategorySection() {
  return (
    <section id="kategori" className="scroll-mt-20 bg-mist-50 py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Kategori Fotografi"
          title={<>Layanan untuk setiap <span className="italic text-gold-600">momen.</span></>}
          description="Dari hari paling sakral hingga kebutuhan bisnis, kami punya spesialis untuk setiap cerita."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(i === 0 && 'row-span-2 lg:col-span-2', i === 3 && 'lg:row-span-2')}
            >
              <Link
                to="/#galeri"
                className="group relative block h-full overflow-hidden rounded-3xl bg-ink-900"
              >
                <img src={cat.image} alt={cat.name} className="img-zoom h-full w-full object-cover opacity-90" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-300">{cat.count} karya</p>
                    <h3 className="mt-1 text-2xl text-white sm:text-3xl">{cat.name}</h3>
                  </div>
                  <span className="grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-white text-ink-950 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

