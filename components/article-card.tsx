import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Article } from '@/lib/articles'

export function ArticleCard({
  article,
  index,
}: {
  article: Article
  index?: number
}) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group relative flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-primary/60 md:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          {article.category}
        </span>
        {typeof index === 'number' && (
          <span className="font-mono text-[11px] text-muted-foreground">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-balance font-heading text-xl font-bold uppercase leading-tight tracking-wide text-foreground transition-colors group-hover:text-primary md:text-2xl">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
        {article.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {article.readTime} olvasás
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </Link>
  )
}
