import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading, NumberedBlocks } from '@/components/content-blocks'
import { NextLinks } from '@/components/next-links'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Felszerelés',
  description:
    'A kickbox alapfelszerelése: kesztyű, kézbandázs, sípcsontvédő, fogvédő és ruházat. Mire figyelj a választásnál?',
}

const gear = [
  {
    title: 'Kesztyű',
    text: 'A kéz és a csukló legfontosabb védelme. A súlya unciában mérve a célt szolgálja: az edzőkesztyű nehezebb és párnázottabb, mint a versenykesztyű. A jó illeszkedés alapfeltétel.',
  },
  {
    title: 'Kézbandázs',
    text: 'A kesztyű alá tekert bandázs rögzíti a csuklót és az ujjpercek apró csontjait. Láthatatlan, mégis az egyik legfontosabb védőeszköz a tartós sérülések megelőzésében.',
  },
  {
    title: 'Sípcsontvédő',
    text: 'A lábszárat és a lábfejet védi a rúgások és blokkok terhelésétől. Edzésen és a legtöbb amatőr formában kötelező, a hosszú távú lábegészség záloga.',
  },
  {
    title: 'Fogvédő',
    text: 'Egyéni illesztésű fogvédő óvja a fogakat és csökkenti az állra mért ütések kockázatát. Apró eszköz, hatalmas jelentőséggel.',
  },
  {
    title: 'Fejvédő',
    text: 'Sparringon és bizonyos amatőr formákban a fej védelmét szolgálja. Nem a találatokat szünteti meg, hanem a felületi sérüléseket csökkenti.',
  },
  {
    title: 'Ruházat és lábbeli',
    text: 'A légáteresztő, mozgást nem korlátozó ruházat és a forma szerinti lábbeli vagy mezítlábas küzdelem mind a teljesítményt és a higiéniát szolgálja.',
  },
]

export default function FelszerelesPage() {
  return (
    <main>
      <PageHero
        index="05"
        eyebrow="Felszerelés"
        title="A test"
        highlight="páncélja"
        lead="A megfelelő felszerelés nem luxus, hanem a hosszú távú sportolás feltétele. A jól megválasztott eszközök védenek, miközben szabadon engedik a mozgást és a technikát."
      />

      <Section>
        <SectionHeading
          eyebrow="Alapfelszerelés"
          title="Amire szükséged lesz"
          lead="A kezdő edzésekhez elegendő néhány alapdarab. A felszerelés a fejlődéseddel együtt bővül."
        />
        <NumberedBlocks items={gear} />
      </Section>

      <Section bordered>
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {[
            {
              h: 'Minőség mindenek felett',
              p: 'Egy jó kesztyű évekig kitart, és minden edzésen véd. A spóroláson elveszített pénzt a sérülések sokszorosan visszakérik.',
            },
            {
              h: 'Higiénia',
              p: 'A felszerelés szellőztetése és tisztítása nemcsak kényelmi kérdés. A rendszeres karbantartás megóv a bőrproblémáktól és meghosszabbítja az eszközök élettartamát.',
            },
            {
              h: 'Illeszkedés',
              p: 'A rossz méret veszélyesebb, mint a hiányzó felszerelés. Mindig próbáld fel és mozogj benne, mielőtt döntesz.',
            },
          ].map((item, i) => (
            <Reveal key={item.h} delay={i * 0.06}>
              <div className="grain h-full bg-card p-7 md:p-9">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                  {item.h}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <NextLinks
        links={[
          {
            href: '/kezdoknek',
            label: 'Kezdőknek',
            desc: 'Mit vegyél meg először, és mi várhat — útmutató az első hónapokhoz.',
          },
          {
            href: '/technikak',
            label: 'Technikák',
            desc: 'A mozdulatok, amelyekhez a felszerelés védelmet ad.',
          },
          {
            href: '/kondicionalas',
            label: 'Kondicionálás',
            desc: 'A test felkészítése a terhelésre — belső páncél a külső mellé.',
          },
        ]}
      />
    </main>
  )
}
