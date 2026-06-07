import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ArticleCard } from '@/components/article-card'
import { articles } from '@/lib/articles'

export function BlogPreview() {
  const featured = articles.slice(0, 3)
  return (
    <section className="grain border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Magazin
              </span>
              <h2 className="mt-4 max-w-xl text-balance font-heading text-3xl font-bold uppercase leading-none tracking-tight text-foreground md:text-5xl">
                Olvasnivaló a küzdelemről
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground"
            >
              Összes írás
              <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featured.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <ArticleCard article={article} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
