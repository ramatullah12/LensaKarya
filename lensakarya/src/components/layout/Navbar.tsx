import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from '../common/Logo'
import useScrolled from '../../hooks/useScrolled'
import useLockBody from '../../hooks/useLockBody'
import { cn } from '../../utils/format'
import { studioInfo } from '../../data/dummy'

// Tahap 1: menu mengarah ke section homepage. Tahap 2 akan diarahkan ke halaman masing-masing.
const navItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Galeri', to: '/#galeri' },
  { label: 'Paket', to: '/#paket' },
  { label: 'Fotografer', to: '/#fotografer' },
  { label: 'Tentang', to: '/#tentang' },
  { label: 'Kontak', to: '/#kontak' },
]

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useLockBody(open)

  // Navbar transparan hanya di atas hero homepage
  const transparent = pathname === '/' && !scrolled && !open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxe',
        transparent ? 'bg-transparent py-6' : 'border-b border-mist-200/70 bg-white/85 py-3.5 backdrop-blur-xl',
      )}
    >
      <nav className="container-luxe flex items-center justify-between">
        <Logo light={transparent} />

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                end
                className={cn(
                  'relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300',
                  transparent ? 'text-white/80 hover:text-white' : 'text-ink-700 hover:text-ink-950',
                )}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className={cn('px-3 text-[13px] font-semibold transition-colors', transparent ? 'text-white hover:text-gold-300' : 'text-ink-900 hover:text-gold-600')}
          >
            Masuk
          </Link>
          <Link to="/#paket" className={cn(transparent ? 'btn-gold' : 'btn-dark', 'px-5! py-2.5!')}>
            Booking Sesi <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden',
            transparent ? 'border-white/30 text-white' : 'border-mist-300 text-ink-950',
          )}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-white lg:hidden"
          >
            <div className="container-luxe flex min-h-full flex-col py-8">
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-mist-200 py-4 font-serif text-3xl text-ink-950"
                    >
                      {item.label}
                      <ArrowUpRight className="h-5 w-5 text-gold-500" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <Link to="/login" onClick={() => setOpen(false)} className="btn-outline">
                  Masuk
                </Link>
                <Link to="/#paket" onClick={() => setOpen(false)} className="btn-dark">
                  Booking
                </Link>
              </div>
              <div className="mt-auto pt-10 text-sm text-mist-500">
                <p>{studioInfo.phone}</p>
                <p>{studioInfo.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
