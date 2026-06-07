import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading, PrincipleList } from '@/components/content-blocks'
import { NextLinks } from '@/components/next-links'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Stílusok és formák',
  description:
    'A kickbox versenyformái: point fighting, light contact, full contact és low kick — alapelvek és különbségek.',
}

const formats = [
  {
    title: 'Point Fighting',
    text: 'A leggyorsabb és legtechnikásabb forma, ahol a megállított pontszerzés a cél. A bíró minden értékelhető találatnál megszakítja a küzdelmet. A robbanékony belépés, a sebesség és a pontosság itt mindennél fontosabb.',
  },
  {
    title: 'Light Contact',
    text: 'Folyamatos küzdelem könnyű érintéssel, ahol a technika és a folyékony mozgás dominál a nyers erő helyett. A hangsúly a kombinációkon, a ritmuson és a kontrollált végrehajtáson van.',
  },
  {
    title: 'Full Contact',
    text: 'Teljes erővel végrehajtott ütések és rúgások az öv felett. Ez a forma a kondíciót, a kitartást és a küzdőszellemet teszi próbára a teljes menetidőn keresztül.',
  },
  {
    title: 'Low Kick',
    text: 'A full contact kibővítése a comb vonalára mért rúgásokkal. A küzdelem így háromdimenzióssá válik: a magas és középmagas technikák mellett a lábmunka és a comb elleni támadás is meghatározó.',
  },
]

const principles = [
  {
    title: 'Távolság',
    text: 'Minden stílus a megfelelő távolság megtalálásán áll vagy bukik. A versenyző feladata, hogy a saját technikáihoz igazítsa a teret.',
  },
  {
    title: 'Ritmus',
    text: 'A küzdelem zenei jellegű: a tempóváltások, a megtévesztések és a szünetek ugyanúgy fegyverek, mint maguk az ütések.',
  },
  {
    title: 'Kontroll',
    text: 'A forma határozza meg az erőkifejtés mértékét. A kontroll nem gyengeség, hanem a technikai fölény jele.',
  },
  {
    title: 'Adaptáció',
    text: 'A jó versenyző folyamatosan olvassa az ellenfelet, és menet közben alakítja a taktikáját a látottak alapján.',
  },
]

export default function StilusokPage() {
  return (
    <main>
      <PageHero
        index="01"
        eyebrow="Stílusok és formák"
        title="Egy sport,"
        highlight="több arc"
        lead="A kickbox nem egyetlen merev rendszer, hanem versenyformák családja. Mindegyik más ritmust, más taktikát és más fizikai felkészülést kíván — közös bennük a precizitás és a fegyelem."
      />

      <Section>
        <SectionHeading
          eyebrow="Versenyformák"
          title="A négy fő forma"
          lead="Az érintés mértékétől és a megengedett technikáktól függően a kickbox több formára oszlik. Ismerd meg a különbségeket."
        />
        <PrincipleList items={formats} />
      </Section>

      <Section bordered>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Alapelvek"
              title="Ami minden formában közös"
            />
          </div>
          <div className="lg:col-span-7">
            <PrincipleList items={principles} />
          </div>
        </div>
      </Section>

      <Section bordered>
        <Reveal>
          <div className="grain border border-border bg-card p-8 md:p-14">
            <p className="max-w-3xl text-pretty font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-4xl">
              A stílus nem korlát, hanem nyelv. Minél többet beszélsz belőle,
              annál szabadabban fejezed ki magad a küzdelemben.
            </p>
          </div>
        </Reveal>
      </Section>

      <NextLinks
        links={[
          {
            href: '/technikak',
            label: 'Technikák',
            desc: 'Ütések, rúgások és lábmunka, amelyek minden formát megtöltenek élettel.',
          },
          {
            href: '/szabalyok',
            label: 'Szabályok',
            desc: 'Pontozás és menetszerkezet — hogyan dől el a küzdelem kimenetele.',
          },
          {
            href: '/kezdoknek',
            label: 'Kezdőknek',
            desc: 'Az első lépések a tatamin, ha most ismerkedsz a sportággal.',
          },
        ]}
      />
    </main>
  )
}
