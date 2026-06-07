import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { articles, getArticle } from '@/lib/articles'
import { ArticleCard } from '@/components/article-card'
import { Reveal } from '@/components/reveal'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Cikk nem található' }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3)
  const fallback = articles.filter((a) => a.slug !== article.slug).slice(0, 3)
  const suggestions = related.length >= 2 ? related : fallback

  return (
    <main>
      <article>
        <header className="relative mx-auto w-full max-w-[820px] px-5 pb-12 pt-32 md:px-8 md:pt-40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Vissza a magazinhoz
          </Link>

          <div className="mt-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            <span>{article.category}</span>
            <span className="h-px w-8 bg-border" />
            <span className="text-muted-foreground">
              {article.readTime} olvasás
            </span>
          </div>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
        </header>

        <div className="mx-auto w-full max-w-[820px] border-t border-border px-5 py-12 md:px-8">
          <div className="flex flex-col gap-6">
            {article.body.map((paragraph, i) => (
              <Reveal key={i} delay={(i % 4) * 0.04}>
                <p
                  className={
                    i === 0
                      ? 'text-pretty text-lg leading-relaxed text-foreground first-letter:float-left first-letter:mr-3 first-letter:font-heading first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-primary'
                      : 'text-pretty text-base leading-relaxed text-muted-foreground'
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <section className="mx-auto w-full max-w-[1400px] border-t border-border px-5 py-16 md:px-8 md:py-24">
        <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          Tovább olvasnál
        </span>
        <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Kapcsolódó írások
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {suggestions.map((a, i) => (
            <ArticleCard key={a.slug} article={a} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
