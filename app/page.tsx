import { HomeHero } from '@/components/home/home-hero'
import { Marquee } from '@/components/home/marquee'
import { FeatureGrid } from '@/components/home/feature-grid'
import { HistoryPreview } from '@/components/home/history-preview'
import { ConditioningBand } from '@/components/home/conditioning-band'
import { FactsPreview } from '@/components/home/facts-preview'
import { BlogPreview } from '@/components/home/blog-preview'

export default function Page() {
  return (
    <main>
      <HomeHero />
      <Marquee />
      <FeatureGrid />
      <HistoryPreview />
      <ConditioningBand />
      <FactsPreview />
      <BlogPreview />
    </main>
  )
}
