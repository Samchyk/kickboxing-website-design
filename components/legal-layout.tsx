import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

export function LegalLayout({
  index,
  title,
  children,
}: {
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <main>
      <div className="mx-auto w-full max-w-[820px] px-5 pb-12 pt-32 md:px-8 md:pt-40">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
          {index} — Jogi információ
        </span>
        <h1 className="mt-5 text-balance font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
          {title}
        </h1>
      </div>
      <div className="mx-auto w-full max-w-[820px] border-t border-border px-5 py-12 md:px-8">
        <div className="flex flex-col gap-10">{children}</div>
      </div>
    </main>
  )
}

export function LegalBlock({
  heading,
  paragraphs,
}: {
  heading: string
  paragraphs: string[]
}) {
  return (
    <Reveal>
      <section>
        <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl">
          {heading}
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-pretty text-sm leading-relaxed text-muted-foreground"
            >
              {p}
            </p>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
