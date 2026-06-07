import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Section({
  children,
  className,
  bordered = false,
}: {
  children: ReactNode
  className?: string
  bordered?: boolean
}) {
  return (
    <section
      className={cn(
        'mx-auto w-full max-w-[1400px] px-5 py-16 md:px-8 md:py-24',
        bordered && 'border-t border-border',
        className,
      )}
    >
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: string
  lead?: string
}) {
  return (
    <Reveal>
      <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 max-w-2xl text-balance font-heading text-3xl font-bold uppercase leading-none tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          {lead}
        </p>
      )}
    </Reveal>
  )
}

export function NumberedBlocks({
  items,
}: {
  items: { title: string; text: string }[]
}) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 2) * 0.06}>
          <div className="grain h-full bg-card p-7 md:p-9">
            <span className="font-mono text-xs text-primary">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function Timeline({
  items,
}: {
  items: { year: string; title: string; text: string }[]
}) {
  return (
    <div className="mt-12 border-l border-border pl-6 md:pl-10">
      {items.map((item, i) => (
        <Reveal key={item.year} delay={(i % 3) * 0.05}>
          <div className="relative pb-12 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:-left-[47px]"
            />
            <span className="font-mono text-sm text-primary">{item.year}</span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
              {item.title}
            </h3>
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function StatRow({
  stats,
}: {
  stats: { value: string; label: string }[]
}) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.05}>
          <div className="grain bg-card p-7 md:p-9">
            <div className="font-heading text-4xl font-bold text-primary glow-red md:text-5xl">
              {stat.value}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function PrincipleList({
  items,
}: {
  items: { title: string; text: string }[]
}) {
  return (
    <div className="mt-12 flex flex-col">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.05}>
          <div className="group flex flex-col gap-3 border-t border-border py-7 transition-colors last:border-b md:flex-row md:items-center md:gap-10">
            <div className="flex items-center gap-5 md:w-1/3">
              <span className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {item.title}
              </h3>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:w-2/3">
              {item.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
