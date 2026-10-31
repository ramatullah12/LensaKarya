import { useEffect } from 'react'

/** Mengunci scroll body (untuk menu mobile & lightbox fullscreen). */
export default function useLockBody(locked: boolean): void {
  useEffect(() => {
    if (!locked) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [locked])
}

