import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading } from '@/components/content-blocks'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Rólunk és kapcsolat',
  description:
    'Ismerd meg a küldetésünket, és lépj kapcsolatba velünk. A KICKBOX magazin a sport iránti szenvedélyről szól.',
}

const values = [
  {
    title: 'Hitelesség',
    text: 'Minden tartalmunk a sport valódi ismeretén alapul. Nem ígérünk csodát — a fejlődés munkából és kitartásból áll.',
  },
  {
    title: 'Hozzáférhetőség',
    text: 'A küzdősport mindenkié. Az írásainkat úgy fogalmazzuk meg, hogy a teljes kezdő és a haladó is értéket találjon bennük.',
  },
  {
    title: 'Tisztelet',
    text: 'A kickbox a tisztelet sportja — az ellenfél, az edző és önmagunk iránt. Ezt a szemléletet közvetítjük minden cikkben.',
  },
]

const contactInfo = [
  { icon: Mail, label: 'E-mail', value: 'info@hungarykikszbox.com' },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        index="09"
        eyebrow="Rólunk"
        title="A szenvedély"
        highlight="mögött"
        lead="A KICKBOX egy független magazin, amely a küzdősport iránti tiszteletből született. Célunk, hogy a sportot mélyebben, hitelesebben mutassuk be."
      />

      <Section>
        <SectionHeading
          eyebrow="Küldetés"
          title="Miért csináljuk"
          lead="Hiszünk abban, hogy a kickbox többet ad a fizikai erőnél: fegyelmet, önbizalmat és közösséget."
        />
        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <div className="grain h-full bg-card p-7 md:p-9">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bordered>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Kapcsolat"
              title="Írj nekünk"
              lead="Kérdésed van, javaslatod vagy együttműködési ötleted? Töltsd ki az űrlapot, és felvesszük veled a kapcsolatot."
            />
            <div className="mt-10 flex flex-col gap-px border border-border bg-border">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 bg-card p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-primary">
                    <info.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="mt-1 text-sm text-foreground">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </main>
  )
}
