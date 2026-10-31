import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { studioInfo } from '../../data/dummy'

const contactItems = [
  { Icon: MapPin, label: 'Alamat Studio', value: studioInfo.address },
  { Icon: Phone, label: 'Telepon / WhatsApp', value: studioInfo.phone },
  { Icon: Mail, label: 'Email', value: studioInfo.email },
  { Icon: Clock, label: 'Jam Operasional', value: studioInfo.hours },
]

const inputClass =
  'w-full rounded-2xl border border-mist-200 bg-mist-50 px-5 py-4 text-sm text-ink-950 placeholder:text-mist-400 transition focus:border-gold-400 focus:bg-white focus:ring-4 focus:ring-gold-100 focus:outline-none'

export default function ContactSection() {
  // Tahap 1: form hanya tampilan (belum terhubung ke API). Akan diintegrasikan pada tahap berikutnya.
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section id="kontak" className="scroll-mt-20 bg-mist-50 py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Kontak Studio"
          title={<>Ceritakan rencana <span className="italic text-gold-600">Anda.</span></>}
          description="Tim kami siap membantu merancang sesi foto yang paling sesuai. Balasan dalam 1x24 jam."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {contactItems.map(({ Icon, label, value }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className="card-luxe flex gap-5 p-6 hover:border-gold-200">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink-950 text-gold-300">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-mist-500 uppercase">{label}</p>
                    <p className="mt-1 text-sm leading-relaxed font-medium text-ink-950">{value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={onSubmit} className="card-luxe p-7 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-ink-700">Nama Lengkap</span>
                  <input required name="name" className={inputClass} placeholder="Nama Anda" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-ink-700">Email</span>
                  <input required type="email" name="email" className={inputClass} placeholder="nama@email.com" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-ink-700">No. WhatsApp</span>
                  <input name="phone" className={inputClass} placeholder="08xx xxxx xxxx" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-ink-700">Jenis Sesi</span>
                  <select name="type" className={inputClass} defaultValue="">
                    <option value="" disabled>Pilih kategori</option>
                    <option>Wedding</option>
                    <option>Prewedding</option>
                    <option>Portrait</option>
                    <option>Produk</option>
                    <option>Keluarga</option>
                    <option>Event</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold text-ink-700">Pesan</span>
                  <textarea required name="message" rows={5} className={`${inputClass} resize-none`} placeholder="Ceritakan konsep, tanggal, dan lokasi impian Anda…" />
                </label>
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                {sent ? (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" /> Terima kasih! Pesan Anda sudah kami terima.
                  </motion.p>
                ) : (
                  <p className="text-xs text-mist-500">Data Anda aman dan tidak dibagikan ke pihak lain.</p>
                )}
                <button type="submit" className="btn-dark">
                  Kirim Pesan <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

