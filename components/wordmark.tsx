import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Wordmark({
  className,
  showMark = true,
}: {
  className?: string
  showMark?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="HUNGARY KICKBOXING főoldal"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      {showMark && (
        <span className="relative flex h-7 w-7 items-center justify-center">
          {/* custom fist / impact mark */}
          <span className="absolute inset-0 rotate-45 border border-primary/70 transition-all duration-500 group-hover:rotate-[135deg]" />
          <span className="absolute inset-[5px] rotate-45 bg-primary transition-all duration-500 group-hover:scale-90" />
          <span className="relative h-1 w-1 rounded-full bg-primary-foreground" />
        </span>
      )}
      <span className="font-heading text-lg font-bold uppercase leading-none tracking-[0.18em] text-foreground">
        Hungary
        <span className="text-muted-foreground transition-colors group-hover:text-foreground">
          kikszbox
        </span>
      </span>
    </Link>
  )
}
