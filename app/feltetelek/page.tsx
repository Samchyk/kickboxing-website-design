import type { Metadata } from 'next'
import { LegalLayout, LegalBlock } from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Felhasználási feltételek',
  description:
    'A KICKBOX magazin használatára vonatkozó feltételek és jogi nyilatkozat.',
}

export default function TermsPage() {
  return (
    <LegalLayout index="02" title="Felhasználási feltételek" updated="2026. január 1.">
      <LegalBlock
        heading="A szolgáltatás célja"
        paragraphs={[
          'A KICKBOX magazin tájékoztató és ismeretterjesztő céllal jött létre. A tartalmak nem helyettesítik a szakképzett edző vagy orvos személyes tanácsát.',
          'Az oldalon közölt edzés- és technikai leírások általános információk; végrehajtásuk minden esetben szakember felügyeletét igényli.',
        ]}
      />
      <LegalBlock
        heading="Felelősség"
        paragraphs={[
          'A magazin üzemeltetője nem vállal felelősséget a tartalmak helytelen vagy felügyelet nélküli alkalmazásából eredő sérülésekért vagy károkért.',
          'A sport gyakorlása előtt javasoljuk az orvosi alkalmasság felmérését és megfelelő szakmai irányítás igénybevételét.',
        ]}
      />
      <LegalBlock
        heading="Szerzői jogok"
        paragraphs={[
          'Az oldalon megjelenő szövegek, képek és egyéb tartalmak szerzői jogi védelem alatt állnak. Felhasználásuk kizárólag az üzemeltető előzetes engedélyével lehetséges.',
        ]}
      />
      <LegalBlock
        heading="A feltételek módosítása"
        paragraphs={[
          'Fenntartjuk a jogot a jelen feltételek bármikori módosítására. A változások az oldalon való közzététellel lépnek hatályba.',
        ]}
      />
    </LegalLayout>
  )
}
