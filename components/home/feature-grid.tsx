import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    href: '/stilusok',
    index: '01',
    title: 'Stílusok és formák',
    desc: 'Point fighting, light és full contact, low kick — a kickbox versenyformái és alapelvei.',
    image: '/images/ring-corner.png',
    span: 'md:col-span-7',
    tall: true,
  },
  {
    href: '/technikak',
    index: '02',
    title: 'Technikák és ütések',
    desc: 'Ütések, rúgások, lábmunka, egyensúly és reakciósebesség kezdőtől haladóig.',
    image: '/images/training-handwrap.png',
    span: 'md:col-span-5',
    tall: true,
  },
  {
    href: '/kondicionalas',
    index: '03',
    title: 'Fizikai kondicionálás',
    desc: 'Állóképesség, robbanékony erő, mozgékonyság, koordináció és regeneráció.',
    image: '/images/heavybag.png',
    span: 'md:col-span-5',
    tall: false,
  },
  {
    href: '/szabalyok',
    index: '04',
    title: 'Szabályok és mérkőzés',
    desc: 'Pontozás, menetszerkezet, küzdelmi alapelvek és a biztonság áttekintése.',
    image: '/images/fighter-silhouette.png',
    span: 'md:col-span-7',
    tall: false,
  },
]

export function FeatureGrid() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Tudástár
            </span>
            <h2 className="mt-4 max-w-xl text-balance font-heading text-3xl font-bold uppercase leading-none tracking-tight text-foreground md:text-5xl">
              Ahol a mozgás tudománnyá válik
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Négy pillér, amelyre minden küzdősportoló útja épül. Válaszd ki,
            merre indulsz.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {features.map((f, i) => (
          <Reveal key={f.href} delay={i * 0.07} className={f.span}>
            <Link
              href={f.href}
              className="group relative flex h-full flex-col justify-end overflow-hidden border border-border bg-card"
            >
              <div
                className={
                  f.tall
                    ? 'relative h-72 w-full overflow-hidden md:h-[28rem]'
                    : 'relative h-60 w-full overflow-hidden md:h-72'
                }
              >
                <Image
                  src={f.image || '/placeholder.svg'}
                  alt={f.title}
                  fill
                  className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="relative p-6 md:p-8">
                <span className="font-mono text-xs text-primary">{f.index}</span>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {f.title}
                  </h3>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
