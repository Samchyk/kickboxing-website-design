import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading, NumberedBlocks, PrincipleList } from '@/components/content-blocks'
import { NextLinks } from '@/components/next-links'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Szabályok és pontozás',
  description:
    'Hogyan zajlik egy kickbox mérkőzés? Menetszerkezet, pontozás, tiltott technikák és a bírók szerepe érthetően.',
}

const scoring = [
  {
    title: 'Találatérték',
    text: 'Az értékelhető találat tiszta, kontrollált és engedélyezett felületre érkezik. A pontozás a technika tisztaságát és hatékonyságát jutalmazza, nem a nyers erőt.',
  },
  {
    title: 'Menetszerkezet',
    text: 'A mérkőzések több, általában két perces menetből állnak, közöttük pihenővel. A forma és a korosztály határozza meg a pontos időt és a menetszámot.',
  },
  {
    title: 'Győzelmi módok',
    text: 'A küzdelem eldőlhet pontozással, technikai fölénnyel, az ellenfél feladásával vagy a bíró döntésével. A formától függ, mely módok engedélyezettek.',
  },
  {
    title: 'Súlycsoportok',
    text: 'A versenyzők testtömeg szerint mérkőznek, hogy a küzdelem igazságos legyen. A mérlegelés a verseny szerves része.',
  },
]

const fouls = [
  {
    title: 'Tiltott felületek',
    text: 'A tarkó, a gerinc, az ágyék és az ízületek elleni támadás minden formában tilos. A szabályok a versenyzők testi épségét védik.',
  },
  {
    title: 'Tiltott technikák',
    text: 'A fejelés, a könyök- és térdtechnikák (a forma szerint), valamint a fogás és a lökés szabálytalannak minősül.',
  },
  {
    title: 'Sportszerűtlenség',
    text: 'A bíró utasításainak figyelmen kívül hagyása, a passzív küzdelem vagy a megtévesztő viselkedés figyelmeztetést és pontlevonást von maga után.',
  },
  {
    title: 'Következmények',
    text: 'A szabálytalanságok fokozatosan büntethetők: figyelmeztetés, pontlevonás, végső esetben kizárás. A fair play nem ajánlás, hanem alapkövetelmény.',
  },
]

export default function SzabalyokPage() {
  return (
    <main>
      <PageHero
        index="04"
        eyebrow="Szabályok"
        title="A küzdelem"
        highlight="kerete"
        lead="A szabályok nem korlátozzák a küzdelmet, hanem értelmet adnak neki. Ismeretükben a mérkőzés egy logikus, követhető párbeszéddé válik támadás és védekezés között."
      />

      <Section>
        <SectionHeading
          eyebrow="Pontozás"
          title="Hogyan dől el a mérkőzés"
          lead="A győzelem nem a leglátványosabb, hanem a legpontosabb és legkontrolláltabb teljesítményé."
        />
        <NumberedBlocks items={scoring} />
      </Section>

      <Section bordered>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Tiltások" title="Amit nem szabad" />
            <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              A szabálykönyv legfontosabb fejezete a biztonságról szól. A
              versenyző felelőssége nem ér véget a saját teljesítményénél: az
              ellenfél épségéért is kiáll.
            </p>
          </div>
          <div className="lg:col-span-7">
            <PrincipleList items={fouls} />
          </div>
        </div>
      </Section>

      <Section bordered>
        <Reveal>
          <div className="grain border border-border bg-card p-8 md:p-14">
            <p className="max-w-3xl text-pretty font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-4xl">
              A szabályok ismerete nem korlát, hanem fegyver. Aki érti a
              kereteket, az tudja, hol nyílik a lehetőség.
            </p>
          </div>
        </Reveal>
      </Section>

      <NextLinks
        links={[
          {
            href: '/stilusok',
            label: 'Stílusok',
            desc: 'A formák, amelyek eltérő szabályrendszerrel működnek.',
          },
          {
            href: '/technikak',
            label: 'Technikák',
            desc: 'Az engedélyezett eszköztár, amelyből a pontok születnek.',
          },
          {
            href: '/kezdoknek',
            label: 'Kezdőknek',
            desc: 'Az első verseny előtt érdemes tudni — gyakorlati tanácsok.',
          },
        ]}
      />
    </main>
  )
}
