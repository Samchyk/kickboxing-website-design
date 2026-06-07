import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import {
  Section,
  SectionHeading,
  NumberedBlocks,
  StatRow,
} from '@/components/content-blocks'
import { NextLinks } from '@/components/next-links'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Érdekességek',
  description:
    'Meglepő tények, számok és történetek a kickbox világából — a ringtől a kultúráig.',
}

const stats = [
  { value: '1970', label: 'A sport születésének évtizede' },
  { value: '70+', label: 'Másodperc alatti rúgássorozatok' },
  { value: '4', label: 'Fő stílusforma világszerte' },
  { value: '100+', label: 'Ország aktív szövetséggel' },
]

const facts = [
  {
    title: 'Több sportág gyermeke',
    text: 'A kickbox a karate, a boksz és a thai box keresztezéséből született az 1970-es években. Célja az volt, hogy a karate technikáit teljes kontaktusban, ringben lehessen mérni.',
  },
  {
    title: 'A láb gyorsasága',
    text: 'Egy jól időzített körrúgás csúcssebessége elérheti az óránkénti több tíz kilométert. A becsapódási idő ezredmásodpercekben mérhető, ezért olyan nehéz védekezni ellene.',
  },
  {
    title: 'A ritmus fegyver',
    text: 'A tapasztalt versenyzők nem csak ütnek — ritmust diktálnak. A megtévesztés, a tempóváltás és a megszakított kombinációk legalább annyira fontosak, mint a nyers erő.',
  },
  {
    title: 'Edzés a fejben',
    text: 'A felsőszintű küzdősportolók idejük jelentős részét mentális felkészüléssel töltik. A vizualizáció, a légzéskontroll és a fókusz éppúgy edzhető, mint az izom.',
  },
  {
    title: 'Nem csak a fiataloké',
    text: 'A kickbox edzésformái minden korosztály számára adaptálhatók. A hangsúly áttehető a technikára és a kondícióra a teljes kontaktus helyett, így rekreációs szinten is biztonságos.',
  },
  {
    title: 'A sarok ereje',
    text: 'A test legerősebb ütőfelülete nem az ököl, hanem a sípcsont és a sarok. A profi versenyzők éppen ezért évekig kondicionálják lábukat a rúgótechnikákhoz.',
  },
]

export default function ErdekessegekPage() {
  return (
    <main>
      <PageHero
        index="07"
        eyebrow="Érdekességek"
        title="Számok és"
        highlight="történetek"
        lead="A kickbox nem csak küzdelem — kultúra, tudomány és emberi teljesítmény. Néhány tény, amely más fényben mutatja meg a sportot."
      />

      <Section>
        <SectionHeading
          eyebrow="Adatok"
          title="A sport számokban"
          lead="Néhány adat, amely érzékelteti a kickbox sebességét, méretét és globális jelenlétét."
        />
        <StatRow stats={stats} />
      </Section>

      <Section bordered>
        <SectionHeading
          eyebrow="Tények"
          title="Amit talán nem tudtál"
          lead="A ringen túl a kickbox tele van meglepő részletekkel — a biomechanikától a mentális felkészülésig."
        />
        <NumberedBlocks items={facts} />
      </Section>

      <Section bordered>
        <Reveal>
          <div className="grain border border-border bg-card p-8 md:p-14">
            <p className="max-w-3xl text-pretty font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-4xl">
              A kickbox nem arról szól, hogy keményebb vagy másnál. Arról szól,
              hogy okosabb, gyorsabb és fegyelmezettebb légy önmagadnál.
            </p>
          </div>
        </Reveal>
      </Section>

      <NextLinks
        links={[
          {
            href: '/tortenet',
            label: 'A sport története',
            desc: 'Hogyan vált a kickbox néhány évtized alatt világsporttá.',
          },
          {
            href: '/blog',
            label: 'Magazin',
            desc: 'Cikkek, elemzések és háttértörténetek a ring körül.',
          },
          {
            href: '/kezdoknek',
            label: 'Kezdőknek',
            desc: 'Ha mindezek után belevágnál — itt az első lépések.',
          },
        ]}
      />
    </main>
  )
}
