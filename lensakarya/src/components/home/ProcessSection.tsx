import { motion } from 'framer-motion'
import { CalendarCheck, CreditCard, Images, LayoutGrid } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { bookingSteps } from '../../data/dummy'

const icons = [LayoutGrid, CalendarCheck, CreditCard, Images]

export default function ProcessSection() {
  return (
    <section className="bg-mist-50 py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          align="center"
          eyebrow="Cara Booking"
          title={<>Empat langkah <span className="italic text-gold-600">sederhana.</span></>}
          description="Proses pemesanan yang transparan — dari memilih paket hingga menerima hasil foto."
        />

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-10 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent lg:block" />
          {bookingSteps.map((step, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="card-luxe relative p-8 text-center hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.15)]"
              >
                <span className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-ink-950 text-gold-300 ring-8 ring-mist-50">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-gold-400 text-xs font-bold text-ink-950">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-2xl text-ink-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

