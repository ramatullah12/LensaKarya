import { useEffect, useState } from 'react'

/** Mengembalikan true ketika halaman sudah di-scroll melewati `offset` px. */
export default function useScrolled(offset = 24): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

