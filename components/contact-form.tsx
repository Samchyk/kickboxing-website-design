'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send, Check } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary'

  if (submitted) {
    return (
      <div className="grain flex flex-col items-start gap-4 border border-border bg-card p-8 md:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
          Üzenet elküldve
        </h3>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          Köszönjük, hogy írtál nekünk, {form.name || 'harcos'}! Hamarosan
          válaszolunk a megadott e-mail címre.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', message: '' })
          }}
          className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground"
        >
          Új üzenet írása
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grain flex flex-col gap-5 border border-border bg-card p-7 md:p-10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          Név
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Teljes neved"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="nev@example.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          Üzenet
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Miben segíthetünk?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-2 bg-primary px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Üzenet küldése
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  )
}
