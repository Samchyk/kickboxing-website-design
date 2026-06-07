import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const facts = [
  {
    stat: '0,15 mp',
    text: 'Ennyi idő alatt érkezhet meg egy jól időzített egyenes ütés — gyorsabban, mint a pislantás.',
  },
  {
    stat: '4 forma',
    text: 'A point fightingtól a full contactig — minden versenyforma más ritmust és taktikát kíván.',
  },
  {
    stat: '8 felület',
    text: 'A kéz, a könyök, a térd és a láb — a test számos pontja válhat eszközzé a küzdelemben.',
  },
]

export function FactsPreview() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Érdekességek
            </span>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold uppercase leading-none tracking-tight text-foreground md:text-5xl">
              Amit a sebességről tudni érdemes
            </h2>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              A kickbox a precizitás és a robbanékonyság sportja. Néhány tény,
              amely más szemmel láttatja a küzdelmet.
            </p>
            <Link
              href="/erdekessegek"
              className="group mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground"
            >
              Több érdekesség
              <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8">
          {facts.map((f, i) => (
            <Reveal key={f.stat} delay={i * 0.08}>
              <div className="grain flex h-full flex-col justify-between border border-border bg-card p-7">
                <div className="font-heading text-4xl font-bold uppercase tracking-tight text-primary glow-red md:text-5xl">
                  {f.stat}
                </div>
                <p className="mt-8 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
