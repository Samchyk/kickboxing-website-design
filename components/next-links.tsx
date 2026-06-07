import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function NextLinks({
  links,
}: {
  links: { href: string; label: string; desc: string }[]
}) {
  return (
    <section className="grain border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Folytasd a felfedezést
          </span>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {links.map((link, i) => (
            <Reveal key={link.href} delay={i * 0.07}>
              <Link
                href={link.href}
                className="group flex h-full flex-col justify-between border border-border bg-card p-7 transition-colors hover:border-primary/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                    {link.label}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {link.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
