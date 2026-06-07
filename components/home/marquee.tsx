'use client'

import { motion } from 'motion/react'

const WORDS = [
  'Full Contact',
  'Low Kick',
  'Light Contact',
  'Point Fighting',
  'K-1 Stílus',
  'Footwork',
  'Reflex',
  'Robbanékonyság',
]

export function Marquee() {
  return (
    <div className="grain relative overflow-hidden border-y border-border bg-card py-5">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {[...WORDS, ...WORDS].map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground/80 md:text-3xl">
              {word}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
