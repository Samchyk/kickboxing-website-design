import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function PageHero({
  index,
  eyebrow,
  title,
  highlight,
  lead,
  children,
  align = 'left',
}: {
  index?: string
  eyebrow: string
  title: string
  highlight?: string
  lead?: string
  children?: ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <section className="grain relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-44 md:pb-24">
      {/* glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-amber/10 blur-[110px]"
      />
      <div
        className={cn(
          'relative mx-auto w-full max-w-[1400px] px-5 md:px-8',
          align === 'center' && 'text-center',
        )}
      >
        <Reveal>
          <div
            className={cn(
              'flex items-center gap-3',
              align === 'center' && 'justify-center',
            )}
          >
            {index && (
              <span className="font-mono text-xs text-primary">{index}</span>
            )}
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              {eyebrow}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1
            className={cn(
              'mt-6 max-w-4xl text-balance font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground md:text-7xl',
              align === 'center' && 'mx-auto',
            )}
          >
            {title}{' '}
            {highlight && <span className="text-primary glow-red">{highlight}</span>}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.16}>
            <p
              className={cn(
                'mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg',
                align === 'center' && 'mx-auto',
              )}
            >
              {lead}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={0.24}>{children}</Reveal>}
      </div>
    </section>
  )
}
