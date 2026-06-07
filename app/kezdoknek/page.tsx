import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading, Timeline } from '@/components/content-blocks'
import { NextLinks } from '@/components/next-links'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Kezdő útmutató',
  description:
    'Most kezded a kickboxot? Lépésről lépésre útmutató: az első edzéstől a felszerelésen át az első hónapok reális elvárásaiig.',
}

const steps = [
  {
    year: '1. lépés',
    title: 'Válassz termet',
    text: 'Keress olyan egyesületet, ahol képzett edző és barátságos közösség vár. A légkör legalább annyira fontos, mint a felszereltség. A legtöbb klub kínál ingyenes próbaedzést — élj vele.',
  },
  {
    year: '2. lépés',
    title: 'Az első edzés',
    text: 'Ne félj a kezdéstől. Senki sem vár tőled tökéletes technikát. Hozz kényelmes ruhát, vizet, és érkezz nyitott fejjel. A bemelegítés és az alaplépések megtanulása lesz a fókusz.',
  },
  {
    year: '3. lépés',
    title: 'Alapfelszerelés',
    text: 'Az első hetekben elég a kézbandázs és egy kölcsönkesztyű. Ahogy elköteleződsz, fokozatosan szerezd be a saját kesztyűdet, sípcsontvédődet és fogvédődet.',
  },
  {
    year: '4. lépés',
    title: 'Türelem és ritmus',
    text: 'A fejlődés nem egyenes vonal. Heti két-három edzéssel néhány hónap alatt érezhető változás jön. A rendszeresség mindennél többet ér, mint a ritka, intenzív rohamok.',
  },
  {
    year: '5. lépés',
    title: 'Az első célok',
    text: 'Tűzz ki apró, elérhető célokat: egy tiszta kombináció, egy menet kifulladás nélkül, az első sparring. A sikerélmény tartja életben a motivációt.',
  },
]

const myths = [
  {
    title: '„Fiatalnak kell lenni hozzá”',
    text: 'A kickboxot bármely életkorban el lehet kezdeni. Az edzés terhelése a te szintedhez igazítható — a cél a saját fejlődésed, nem a versenyzés.',
  },
  {
    title: '„Előbb formába kell jönni”',
    text: 'Pont fordítva: az edzés hozza a formát. Nincs olyan kezdő szint, amelyről ne lehetne elindulni. A terem épp ezért van.',
  },
  {
    title: '„Biztosan megsérülök”',
    text: 'A megfelelő felszereléssel, képzett edzővel és fokozatos terheléssel a kickbox biztonságos. A sérülések többsége a türelmetlenségből, nem a sportágból fakad.',
  },
]

export default function KezdoknekPage() {
  return (
    <main>
      <PageHero
        index="07"
        eyebrow="Kezdőknek"
        title="Az első"
        highlight="lépés"
        lead="A legnehezebb ütés az, amelyet sosem dobtál el — és a legnehezebb edzés az, amelyre sosem mentél el. Ez az útmutató végigvezet az első hónapokon, hogy magabiztosan állj a tatamira."
      />

      <Section>
        <SectionHeading
          eyebrow="Útiterv"
          title="Öt lépés a kezdéshez"
          lead="Nincs varázslat, csak egy követhető sorrend. Haladj végig rajta a saját tempódban."
        />
        <Timeline items={steps} />
      </Section>

      <Section bordered>
        <SectionHeading
          eyebrow="Tévhitek"
          title="Amitől feleslegesen tartasz"
        />
        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {myths.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="grain h-full bg-card p-7 md:p-9">
                <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bordered>
        <Reveal>
          <div className="grain border border-border bg-card p-8 md:p-14">
            <p className="max-w-3xl text-pretty font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-4xl">
              Nem kell harcosnak születni. Elég egyetlen döntés: hogy ma
              belépsz az ajtón.
            </p>
          </div>
        </Reveal>
      </Section>

      <NextLinks
        links={[
          {
            href: '/felszereles',
            label: 'Felszerelés',
            desc: 'Mit szerezz be először, és mire figyelj a választásnál.',
          },
          {
            href: '/technikak',
            label: 'Technikák',
            desc: 'Az alapmozdulatok, amelyekkel az első edzéseken találkozol.',
          },
          {
            href: '/szabalyok',
            label: 'Szabályok',
            desc: 'A küzdelem keretei, ha egyszer a verseny is megfordul a fejedben.',
          },
        ]}
      />
    </main>
  )
}
