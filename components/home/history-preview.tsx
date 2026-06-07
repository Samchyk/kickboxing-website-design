'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const timeline = [
  {
    era: 'A kezdetek',
    text: 'A kickbox a 20. század második felében jelent meg, a keleti és nyugati küzdősportok találkozásából.',
  },
  {
    era: 'Megérkezés',
    text: 'Magyarországon a rendszerváltás körüli években kezdett szélesebb körben elterjedni a sportág.',
  },
  {
    era: 'Felemelkedés',
    text: 'A hazai versenyzők egyre több nemzetközi megmérettetésen bizonyítottak a különböző formákban.',
  },
  {
    era: 'Napjaink',
    text: 'Ma a kickbox az ország egyik legdinamikusabban fejlődő küzdősportja, kezdőktől a profikig.',
  },
]

export function HistoryPreview() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section
      ref={ref}
      className="grain relative overflow-hidden border-y border-border bg-card"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-0 lg:grid-cols-2">
        <div className="relative min-h-[60vh] overflow-hidden lg:min-h-full">
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image
              src="/images/fighter-silhouette.png"
              alt="Kickboxoló sziluett küzdőállásban, drámai megvilágításban"
              fill
              className="object-cover opacity-55"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-card/30 to-card" />
          <div className="absolute bottom-8 left-6 md:left-8">
            <span className="font-heading text-[20vw] font-bold uppercase leading-none tracking-tighter text-foreground/10 lg:text-[10rem]">
              Múlt
            </span>
          </div>
        </div>

        <div className="px-5 py-16 md:px-8 md:py-24">
          <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            A magyar kickbox története
          </span>
          <h2 className="mt-5 max-w-md text-balance font-heading text-3xl font-bold uppercase leading-none tracking-tight text-foreground md:text-5xl">
            Egy sportág, amely utat tört magának
          </h2>

          <ol className="mt-10 space-y-0">
            {timeline.map((item, i) => (
              <motion.li
                key={item.era}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 border-l border-border py-5 pl-6"
              >
                <span className="font-mono text-xs text-primary">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                    {item.era}
                  </h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          <Link
            href="/tortenet"
            className="group mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground"
          >
            A teljes történet
            <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
