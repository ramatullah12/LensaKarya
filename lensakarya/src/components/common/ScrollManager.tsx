import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll ke atas saat pindah halaman, atau ke elemen #hash bila ada. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        // beri jeda agar halaman selesai dirender
        const t = window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
        return () => window.clearTimeout(t)
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}

