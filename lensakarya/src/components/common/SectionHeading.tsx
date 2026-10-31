import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { cn } from '../../utils/format'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  action?: ReactNode
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false, action }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={cn('flex flex-col gap-6 md:flex-row md:items-end md:justify-between', centered && 'md:flex-col md:items-center')}>
      <Reveal className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
        <span className={cn('eyebrow', centered && 'justify-center')}>{eyebrow}</span>
        <h2 className={cn('mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl text-balance', light ? 'text-white' : 'text-ink-950')}>
          {title}
        </h2>
        {description && (
          <p className={cn('mt-5 text-base leading-relaxed sm:text-lg', light ? 'text-white/60' : 'text-mist-500')}>{description}</p>
        )}
      </Reveal>
      {action && <Reveal delay={0.15}>{action}</Reveal>}
    </div>
  )
}

