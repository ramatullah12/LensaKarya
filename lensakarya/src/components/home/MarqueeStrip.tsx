import { Sparkle } from 'lucide-react'

const words = ['Wedding', 'Prewedding', 'Portrait', 'Maternity', 'Produk', 'Fashion', 'Keluarga', 'Wisuda', 'Event']

/** Pita teks berjalan berisi jenis layanan fotografi. */
export default function MarqueeStrip() {
  const loop = [...words, ...words]
  return (
    <div className="overflow-hidden border-y border-mist-200 bg-mist-50 py-6">
      <div className="flex w-max animate-marquee items-center">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-serif text-3xl text-ink-900 italic sm:text-4xl">{w}</span>
            <Sparkle className="h-4 w-4 text-gold-400" />
          </span>
        ))}
      </div>
    </div>
  )
}

