import Link from 'next/link'
import { Wordmark } from '@/components/wordmark'
import { footerLinks } from '@/lib/site-config'

function Column({
  title,
  links,
}: {
  title: string
  links: readonly { href: string; label: string }[]
}) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      {/* oversized kinetic backdrop word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-0 right-0 select-none text-center font-heading text-[22vw] font-bold uppercase leading-none tracking-tighter text-foreground/[0.03]"
      >
        Küzdés
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Wordmark />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Független tudástár a kickbox művészetéről. Erő, precizitás és
              fegyelem — a küzdelem mint mozgásforma és életszemlélet.
            </p>
          </div>
          <Column title="Tudástár" links={footerLinks.tudas} />
          <Column title="Felfedezés" links={footerLinks.felfedezes} />
          <Column title="Információ" links={footerLinks.jogi} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Hungarykikszbox — A küzdelem művészete
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Oktatási és ismeretterjesztő tartalom
          </p>
        </div>
      </div>
    </footer>
  )
}
