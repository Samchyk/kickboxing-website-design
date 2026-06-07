import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/content-blocks'
import { ArticleCard } from '@/components/article-card'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Magazin',
  description:
    'Cikkek, technikai elemzések és edzéstippek a kickbox világából. Olvasmányos tartalom kezdőknek és haladóknak.',
}

export default function BlogPage() {
  return (
    <main>
      <PageHero
        index="08"
        eyebrow="Magazin"
        title="Tudás a"
        highlight="ringen túl"
        lead="Technikai elemzések, edzésmódszerek és szemléletformáló írások. Minden cikk egy lépés a mélyebb megértés felé."
      />

      <Section>
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </Section>
    </main>
  )
}
