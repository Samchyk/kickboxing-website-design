import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading, Timeline, StatRow } from '@/components/content-blocks'
import { NextLinks } from '@/components/next-links'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'A kickbox magyar története',
  description:
    'A magyar kickbox útja a kezdetektől a világbajnoki címekig: egyesületek, generációk és a hazai küzdősport felemelkedése.',
}

const timeline = [
  {
    year: '1970-es évek',
    title: 'A kezdetek',
    text: 'A kickbox a karate és a boksz találkozásából született nyugaton. Magyarországra a küzdősportok iránti lelkesedés és az első edzők külföldi tapasztalatai hozták el a sportágat.',
  },
  {
    year: '1980-as évek',
    title: 'Az első egyesületek',
    text: 'Megalakulnak az első hazai klubok, ahol elszánt úttörők rakják le a magyar kickbox alapjait. A felszerelés szűkös, a lelkesedés annál nagyobb.',
  },
  {
    year: '1990-es évek',
    title: 'Szervezett verseny­sport',
    text: 'A rendszerváltás után a sportág intézményesül: szövetség, bajnokságok és válogatott keretek születnek. A magyar versenyzők megjelennek a nemzetközi porondon.',
  },
  {
    year: '2000-es évek',
    title: 'Világszínvonal',
    text: 'A magyar kickbox a világ élvonalába emelkedik. Európa- és világbajnoki érmek sora bizonyítja, hogy a hazai műhelyek képesek a legjobbakat kinevelni.',
  },
  {
    year: 'Napjaink',
    title: 'Új generáció',
    text: 'A sportág a szabadidős és a versenyzői rétegben egyaránt virágzik. A modern edzésmódszerek és a tudományos felkészülés új lehetőségeket nyitnak a fiatalok előtt.',
  },
]

const stats = [
  { value: '50+', label: 'Év fejlődés' },
  { value: '100+', label: 'Hazai egyesület' },
  { value: '4', label: 'Versenyforma' },
  { value: '∞', label: 'Küzdőszellem' },
]

export default function TortenetPage() {
  return (
    <main>
      <PageHero
        index="03"
        eyebrow="Magyar történet"
        title="Évtizedek a"
        highlight="ringben"
        lead="A magyar kickbox története a kitartásról szól: egy importált sportágból néhány évtized alatt világszínvonalú iskola épült, amely generációkat nevelt fel a fegyelem és a küzdés tiszteletére."
      />

      <Section>
        <StatRow stats={stats} />
      </Section>

      <Section bordered>
        <SectionHeading
          eyebrow="Idővonal"
          title="A felemelkedés állomásai"
          lead="A kezdeti lépésektől a nemzetközi sikerekig — a magyar kickbox legfontosabb korszakai."
        />
        <Timeline items={timeline} />
      </Section>

      <Section bordered>
        <Reveal>
          <div className="grain border border-border bg-card p-8 md:p-14">
            <p className="max-w-3xl text-pretty font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-4xl">
              Minden érem mögött ezernyi edzés, számtalan vereség és egyetlen
              közös vonás áll: a feladás hiánya.
            </p>
          </div>
        </Reveal>
      </Section>

      <NextLinks
        links={[
          {
            href: '/erdekessegek',
            label: 'Érdekességek',
            desc: 'Meglepő tények és számok a sportág világából.',
          },
          {
            href: '/stilusok',
            label: 'Stílusok',
            desc: 'A versenyformák, amelyekben a magyar sikerek születtek.',
          },
          {
            href: '/blog',
            label: 'Magazin',
            desc: 'Mélyebb történetek, elemzések és portrék a kickbox világából.',
          },
        ]}
      />
    </main>
  )
}
