import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading, NumberedBlocks, PrincipleList } from '@/components/content-blocks'
import { NextLinks } from '@/components/next-links'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Kondicionálás',
  description:
    'A kickboxos kondicionálás alapjai: állóképesség, robbanékonyság, törzsstabilitás és regeneráció. Hogyan épül fel a harci forma?',
}

const pillars = [
  {
    title: 'Állóképesség',
    text: 'A menetek végéig kitartó aerob és anaerob alap. Intervallumok, kötélugrás és futás építi azt a motort, amely a kimerültségben is működik.',
  },
  {
    title: 'Robbanékonyság',
    text: 'A gyorsaság és az erő találkozása. Plyometria, pad- és súlyzós gyakorlatok adják azt a hirtelen energiát, amely a találatokat döntővé teszi.',
  },
  {
    title: 'Törzsstabilitás',
    text: 'Minden ütés és rúgás a törzsön keresztül továbbítja az erőt. Az erős mag nélkül a végtagok ereje elvész, és a sérülésveszély megnő.',
  },
  {
    title: 'Mobilitás',
    text: 'A magas rúgások és a gyors helyzetváltások rugalmas csípőt és vállat kívánnak. A mozgékonyság a technika szabadságának alapja.',
  },
]

const recovery = [
  {
    title: 'Alvás',
    text: 'A regeneráció legfontosabb eszköze ingyen van. A minőségi alvásban épül az izom és töltődik az idegrendszer.',
  },
  {
    title: 'Táplálkozás',
    text: 'A teljesítmény üzemanyaga. A megfelelő fehérje, szénhidrát és folyadékbevitel nélkül az edzés terhelés marad, nem fejlődés.',
  },
  {
    title: 'Aktív pihenés',
    text: 'A könnyű mozgás, nyújtás és lazítás felgyorsítja a regenerációt és csökkenti az izomlázat. A pihenés is része a tervnek.',
  },
]

export default function KondicionalasPage() {
  return (
    <main>
      <PageHero
        index="06"
        eyebrow="Kondicionálás"
        title="A belső"
        highlight="motor"
        lead="A technika a jéghegy csúcsa. Alatta a kondíció láthatatlan tömege tartja a versenyzőt: az állóképesség, az erő és a regeneráció hármasa dönti el, ki bírja tovább."
      />

      <Section>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <Image
                src="/images/training-handwrap.png"
                alt="Kézbandázs felhelyezése edzés előtt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Négy pillér"
              title="A harci forma alapjai"
              lead="A kickboxos test nem egyetlen képességre épül, hanem több, egymást támogató rendszer egyensúlyára."
            />
          </div>
        </div>
        <NumberedBlocks items={pillars} />
      </Section>

      <Section bordered>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Regeneráció" title="Ahol a fejlődés történik" />
            <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              Az izom nem az edzésen, hanem a pihenés alatt erősödik. A
              regeneráció elhanyagolása a leggyakoribb hiba, amely a fejlődést
              megállítja és a sérüléseket meghívja.
            </p>
          </div>
          <div className="lg:col-span-7">
            <PrincipleList items={recovery} />
          </div>
        </div>
      </Section>

      <NextLinks
        links={[
          {
            href: '/technikak',
            label: 'Technikák',
            desc: 'A mozdulatok, amelyeknek a kondíció ad fedezetet.',
          },
          {
            href: '/kezdoknek',
            label: 'Kezdőknek',
            desc: 'Hogyan építsd fel az alapokat lépésről lépésre.',
          },
          {
            href: '/erdekessegek',
            label: 'Érdekességek',
            desc: 'Tudományos tények a küzdősportolók teljesítményéről.',
          },
        ]}
      />
    </main>
  )
}
