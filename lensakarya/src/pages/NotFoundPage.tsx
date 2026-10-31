import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="container-luxe flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="eyebrow justify-center">404 Error</span>
      <h1 className="mt-4 font-serif text-6xl text-ink-950 sm:text-7xl">Halaman Tidak Ditemukan</h1>
      <p className="mt-4 max-w-md text-base text-mist-500">
        Maaf, halaman yang Anda cari tidak tersedia atau sedang dalam tahap pengembangan.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link to="/" className="btn-dark">
          <Home className="h-4 w-4" /> Kembali ke Beranda
        </Link>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="btn-outline"
        >
          <ArrowLeft className="h-4 w-4" /> Halaman Sebelumnya
        </button>
      </div>
    </div>
  )
}

