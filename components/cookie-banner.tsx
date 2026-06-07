'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

const STORAGE_KEY = 'hk-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 900)
        return () => clearTimeout(t)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const decide = (value: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {}
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 28 }}
          className="fixed inset-x-3 bottom-3 z-[60] md:inset-x-auto md:bottom-6 md:right-6 md:max-w-md"
          role="dialog"
          aria-label="Süti tájékoztató"
        >
          <div className="grain border border-border bg-card/95 p-5 backdrop-blur-xl md:p-6">
            <div className="mb-3 h-px w-10 bg-primary" />
            <h2 className="mb-2 font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Sütik használata
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Az oldal sütiket használ a működés és az élmény javítása
              érdekében. Részletekért olvasd el a{' '}
              <Link
                href="/sutik"
                className="text-foreground underline underline-offset-4 hover:text-primary"
              >
                cookie szabályzatot
              </Link>
              .
            </p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => decide('accepted')}
                className="flex-1 bg-primary py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Elfogadom
              </button>
              <button
                type="button"
                onClick={() => decide('rejected')}
                className="flex-1 border border-border py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                Elutasítom
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
