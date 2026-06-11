import type { Metadata } from "next";
import { LegalLayout, LegalBlock } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description:
    "Hogyan kezeljük és védjük a személyes adataidat a KICKBOX magazin oldalán.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout index="01" title="Adatvédelmi tájékoztató">
      <LegalBlock
        heading="Bevezetés"
        paragraphs={[
          "Hungarykikszbox magazin elkötelezett a látogatók személyes adatainak védelme mellett. Jelen tájékoztató bemutatja, milyen adatokat gyűjtünk, és azokat hogyan használjuk fel.",
          "Az oldal használatával elfogadod a jelen tájékoztatóban foglaltakat. Az adatkezelés a hatályos európai és magyar adatvédelmi jogszabályoknak megfelelően történik.",
        ]}
      />
      <LegalBlock
        heading="Milyen adatokat gyűjtünk"
        paragraphs={[
          "A kapcsolatfelvételi űrlap kitöltésekor megadott nevet, e-mail címet és üzenetet kizárólag a megkeresésed megválaszolására használjuk fel.",
          "Az oldal anonim, összesített látogatottsági statisztikákat gyűjthet, amelyek nem alkalmasak egyéni azonosításra.",
        ]}
      />
      <LegalBlock
        heading="Az adatok felhasználása"
        paragraphs={[
          "A megadott adatokat nem adjuk el, és nem adjuk át harmadik félnek marketing célból. Az adatokat csak a szolgáltatás működtetéséhez szükséges mértékben kezeljük.",
        ]}
      />
      <LegalBlock
        heading="Jogaid"
        paragraphs={[
          "Bármikor kérheted a rólad tárolt adatok megtekintését, helyesbítését vagy törlését. Kérésedet az info@hungarykikszbox.com címen jelezheted.",
        ]}
      />
    </LegalLayout>
  );
}
