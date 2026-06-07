'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown } from 'lucide-react'

export function HomeHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* parallax background image */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero-fighter.png"
          alt="Kickboxoló magasan ívelő rúgás közben, drámai fény-árnyék kontrasztban"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/40" />
      </motion.div>

      {/* vertical side marker */}
      <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 md:block">
        <span className="block rotate-90 font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
          Erő · Precizitás · Fegyelem
        </span>
      </div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto w-full max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary"
        >
          <span className="h-px w-10 bg-primary" />
          A küzdelem művészete
        </motion.span>

        <h1 className="mt-5 font-heading text-[16vw] font-bold uppercase leading-[0.82] tracking-tighter text-foreground md:text-[12rem]">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="block"
          >
            Ütés.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="block text-stroke"
          >
            Rúgás.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="block text-primary glow-red"
          >
            Ritmus.
          </motion.span>
        </h1>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground"
          >
            Lépj be a kickbox világába — ahol a test mozgása, a fény és az árnyék
            találkozik. Stílusok, technikák, edzésmódszerek és a sport magyar
            története egyetlen helyen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/stilusok"
              className="bg-primary px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Fedezd fel a stílusokat
            </Link>
            <Link
              href="/kezdoknek"
              className="border border-border px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary"
            >
              Kezdő útmutató
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  )
}
