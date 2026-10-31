import { Link } from 'react-router-dom'
import { Aperture } from 'lucide-react'
import { cn } from '../../utils/format'

interface LogoProps {
  light?: boolean
  className?: string
}

export default function Logo({ light = false, className }: LogoProps) {
  return (
    <Link to="/" className={cn('group inline-flex items-center gap-2.5', className)} aria-label="LensaKarya beranda">
      <span
        className={cn(
          'grid h-9 w-9 place-items-center rounded-full border transition-all duration-700 ease-luxe group-hover:rotate-90',
          light ? 'border-white/30 text-gold-300' : 'border-ink-900/15 text-gold-500',
        )}
      >
        <Aperture className="h-4.5 w-4.5" strokeWidth={1.6} />
      </span>
      <span className={cn('font-serif text-2xl font-semibold leading-none tracking-tight', light ? 'text-white' : 'text-ink-950')}>
        Lensa<span className="italic text-gold-500">Karya</span>
      </span>
    </Link>
  )
}

