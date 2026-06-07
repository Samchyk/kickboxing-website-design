import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading, NumberedBlocks, PrincipleList } from '@/components/content-blocks'
import { NextLinks } from '@/components/next-links'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Technikák',
  description:
    'A kickbox alaptechnikái: ütések, rúgások, védekezés és lábmunka. Részletes bemutató kezdőknek és haladóknak.',
}

const strikes = [
  {
    title: 'Direkt ütés',
    text: 'A jab és a kereszt a küzdelem alapja: a távolság mérésére, a ritmus felvételére és a nyitásra szolgál. A csípőből induló erőátvitel teszi hatékonnyá.',
  },
  {
    title: 'Horog',
    text: 'Az oldalról érkező, ívelt ütés közeli távolságon. A test elfordulása és a lábmunka adja az erejét, nem pusztán a kar.',
  },
  {
    title: 'Felütés',
    text: 'Alulról felfelé irányuló ütés, amely a fedezék mögé hatol. A térd hajlításából induló robbanás a kulcsa.',
  },
  {
    title: 'Körrúgás',
    text: 'A kickbox emblematikus technikája: a csípő teljes fordításával, a lábszár vagy a lábfej becsapódásával. Comb, test és fej szintjén egyaránt indítható.',
  },
  {
    title: 'Front kick',
    text: 'Egyenes, taszító rúgás a talp párnájával. Távolságtartásra és az egyensúly megbontására kiváló.',
  },
  {
    title: 'Oldalrúgás',
    text: 'Erőteljes, egyenes vonalú rúgás oldalról, a sarok becsapódásával. Hosszú hatótávja miatt nehéz ellene védekezni.',
  },
]

const defense = [
  {
    title: 'Fedezék',
    text: 'A kéz és a könyök helyzete dönti el, hány találat ér célt. A magas, zárt fedezék az alapértelmezett biztonság.',
  },
  {
    title: 'Elhajlás és kitérés',
    text: 'A legjobb védekezés, ha az ütés célt téveszt. A fej- és törzsmozgás energiát takarít meg és ellentámadást nyit.',
  },
  {
    title: 'Blokk',
    text: 'A rúgások elnyelése a lábszárral vagy a karral. A megfelelő blokk azonnal ellentámadásba fordítható.',
  },
  {
    title: 'Lábmunka',
    text: 'A láb a védekezés motorja. A szögek elvétele és a folyamatos mozgás teszi megfoghatatlanná a versenyzőt.',
  },
]

export default function TechnikakPage() {
  return (
    <main>
      <PageHero
        index="02"
        eyebrow="Technikák"
        title="Az eszköztár"
        highlight="anatómiája"
        lead="A kickbox a kéz és a láb fegyvereit egyesíti. A technikák önmagukban egyszerűek — a mesteri szint a kombinációkban, az időzítésben és a végrehajtás tisztaságában rejlik."
      />

      <Section>
        <SectionHeading
          eyebrow="Támadás"
          title="Ütések és rúgások"
          lead="A támadó eszköztár két nagy családra oszlik. A magas szintű küzdelem mindkettő folyamatos váltogatásáról szól."
        />
        <NumberedBlocks items={strikes} />
      </Section>

      <Section bordered>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Védekezés" title="A láthatatlan tudás" />
            <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              A közönség az ütéseket ünnepli, a szakértő a védekezést. A
              veretlen versenyző titka mindig a meg nem kapott találatokban
              rejlik.
            </p>
          </div>
          <div className="lg:col-span-7">
            <PrincipleList items={defense} />
          </div>
        </div>
      </Section>

      <Section bordered>
        <Reveal>
          <div className="grain border border-border bg-card p-8 md:p-14">
            <p className="max-w-3xl text-pretty font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-4xl">
              A technikát nem akkor birtoklod, ha el tudod végezni. Akkor, ha
              fáradtan, nyomás alatt is ösztönösen előjön.
            </p>
          </div>
        </Reveal>
      </Section>

      <NextLinks
        links={[
          {
            href: '/kondicionalas',
            label: 'Kondicionálás',
            desc: 'A fizikai alap, amely nélkül a legszebb technika is összeomlik a kimerültségben.',
          },
          {
            href: '/stilusok',
            label: 'Stílusok',
            desc: 'Hogyan rendeződnek a technikák versenyformákká és taktikai rendszerekké.',
          },
          {
            href: '/felszereles',
            label: 'Felszerelés',
            desc: 'A kéz, a láb és a test védelmét szolgáló eszközök a biztonságos edzéshez.',
          },
        ]}
      />
    </main>
  )
}
