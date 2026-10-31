import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

/** Animasi fade-up halus ketika elemen masuk viewport. */
export default function Reveal({ children, delay = 0, y = 32, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

