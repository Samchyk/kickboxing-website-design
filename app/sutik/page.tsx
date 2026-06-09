import type { Metadata } from "next";
import { LegalLayout, LegalBlock } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Süti tájékoztató",
  description:
    "Hogyan használunk sütiket (cookie-kat) a KICKBOX magazin oldalán.",
};

export default function CookiesPage() {
  return (
    <LegalLayout index="03" title="Süti tájékoztató">
      <LegalBlock
        heading="Mik azok a sütik"
        paragraphs={[
          "A sütik (cookie-k) kisméretű szöveges fájlok, amelyeket a böngésződ tárol a látogatás során. Segítenek az oldal megfelelő működésében és a felhasználói élmény javításában.",
        ]}
      />
      <LegalBlock
        heading="Milyen sütiket használunk"
        paragraphs={[
          "Működéshez szükséges sütik: ezek nélkül az oldal alapfunkciói nem működnének. Ilyen például a süti-beállításaid megjegyzése.",
          "Statisztikai sütik: anonim módon segítenek megérteni, hogyan használják a látogatók az oldalt, hogy fejleszthessük a tartalmat.",
        ]}
      />
      <LegalBlock
        heading="A sütik kezelése"
        paragraphs={[
          "A böngésződ beállításaiban bármikor letilthatod vagy törölheted a sütiket. Felhívjuk a figyelmet, hogy egyes funkciók ennek hatására korlátozottan működhetnek.",
          "Az oldal első látogatásakor megjelenő sávban elfogadhatod vagy elutasíthatod a nem szükséges sütik használatát.",
        ]}
      />
    </LegalLayout>
  );
}
