'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const pillars = [
  { label: 'Állóképesség', value: 'Kitartás' },
  { label: 'Robbanékony erő', value: 'Erő' },
  { label: 'Mozgékonyság', value: 'Hajlékony' },
  { label: 'Reakció', value: 'Gyorsaság' },
  { label: 'Koordináció', value: 'Pontosság' },
  { label: 'Regeneráció', value: 'Pihenés' },
]

export function ConditioningBand() {
  return (
    <section className="grain relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-balance font-heading text-3xl font-bold uppercase leading-none tracking-tight md:text-5xl">
            A test, amely elviseli a küzdelmet
          </h2>
          <Link
            href="/kondicionalas"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]"
          >
            Kondicionálás részletei
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px border border-primary-foreground/20 bg-primary-foreground/20 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-primary p-6 md:p-8"
            >
              <div className="font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">
                {p.value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                {p.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
