import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import Logo from '../common/Logo'
import { InstagramIcon, TiktokIcon, WhatsappIcon, YoutubeIcon } from '../common/SocialIcons'
import { studioInfo } from '../../data/dummy'

const columns = [
  {
    title: 'Jelajahi',
    links: [
      { label: 'Galeri', to: '/#galeri' },
      { label: 'Paket Fotografi', to: '/#paket' },
      { label: 'Fotografer', to: '/#fotografer' },
      { label: 'Testimoni', to: '/#testimoni' },
    ],
  },
  {
    title: 'Layanan',
    links: [
      { label: 'Wedding', to: '/#kategori' },
      { label: 'Prewedding', to: '/#kategori' },
      { label: 'Portrait', to: '/#kategori' },
      { label: 'Produk & Komersial', to: '/#kategori' },
    ],
  },
  {
    title: 'Akun',
    links: [
      { label: 'Masuk', to: '/login' },
      { label: 'Daftar', to: '/register' },
      { label: 'Cek Booking', to: '/login' },
    ],
  },
]

const socials = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'TikTok', Icon: TiktokIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
  { label: 'WhatsApp', Icon: WhatsappIcon },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-luxe relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm leading-relaxed text-white/55">
              Studio fotografi profesional yang mengabadikan setiap cerita dengan rasa, cahaya, dan ketelitian.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-500 hover:border-gold-400 hover:bg-gold-400 hover:text-ink-950"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-300">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-white/60 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-300">Studio</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />{studioInfo.address}</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-gold-400" />{studioInfo.phone}</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-gold-400" />{studioInfo.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <Link to="/#paket" className="group flex flex-wrap items-end justify-between gap-6">
            <span className="font-serif text-5xl leading-none text-white/90 transition-colors duration-500 group-hover:text-gold-300 sm:text-7xl lg:text-8xl">
              Mari berkarya<span className="italic text-gold-400">.</span>
            </span>
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/20 transition-all duration-700 ease-luxe group-hover:rotate-45 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-ink-950">
              <ArrowUpRight className="h-6 w-6" />
            </span>
          </Link>
          <div className="mt-12 flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} LensaKarya Studio. Seluruh hak cipta dilindungi.</p>
            <p>Dibuat dengan cahaya & ketelitian di Jakarta.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

