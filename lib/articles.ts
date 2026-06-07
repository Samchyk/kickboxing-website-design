export type Article = {
  slug: string
  category: string
  title: string
  excerpt: string
  readTime: string
  body: string[]
}

export const articles: Article[] = [
  {
    slug: 'a-tokeletes-egyenes-utes',
    category: 'Technika',
    title: 'A tökéletes egyenes ütés anatómiája',
    excerpt:
      'Az egyenes ütés a kickbox alapja. A láb, a csípő és a váll összehangolt mozgása dönti el az ütés erejét.',
    readTime: '6 perc',
    body: [
      'Az egyenes ütés látszólag egyszerű mozdulat, valójában azonban a test teljes kinetikus láncának tökéletes összjátéka. Az erő nem a karból, hanem a talajról indul, és a lábon, csípőn, törzsön keresztül jut el az öklbe.',
      'A helyes végrehajtás a hátsó láb enyhe elfordulásával kezdődik. Ez a látszólag apró mozdulat indítja el azt az energiaátadást, amely a csípő rotációján keresztül a felsőtestbe áramlik.',
      'A váll kinyúlása adja a távolságot és az utolsó gyorsulást. Fontos, hogy az állkapocs védve maradjon: az ellenkező kéz végig az arc közelében marad, hogy azonnal védekező pozícióba lehessen visszatérni.',
      'A kezdők leggyakoribb hibája, hogy csak a karjukkal ütnek, és elhanyagolják a lábmunkát. A fejlődés kulcsa a lassú, tudatos ismétlés: csak ha a mozdulat beépült, akkor érdemes a sebességet növelni.',
    ],
  },
  {
    slug: 'low-kick-mestersege',
    category: 'Technika',
    title: 'A low kick mestersége',
    excerpt:
      'A combra mért körív alakú rúgás a küzdelem egyik leghatékonyabb fegyvere — ha pontosan időzítve érkezik.',
    readTime: '5 perc',
    body: [
      'A low kick a sípcsont kemény felületével a comb külső vagy belső oldalát célozza. Ereje a csípő teljes átfordításából és a támaszláb stabilitásából származik.',
      'A mozdulat lényege, hogy a rúgó láb ne hajlított térddel csapódjon be, hanem egy lendülő, ostorszerű mozgással. A támaszláb sarka a célpont felé fordul, így a csípő szabadon átfordulhat.',
      'A jól időzített low kick fokozatosan lassítja az ellenfél mozgását és bontja meg az egyensúlyát. A védekezés ellene a sípcsont felemelésével, vagy a távolság megtörésével történik.',
      'A technika edzése fokozatos: először a mozgásmintát rögzítjük lassan, majd pajzson gyakoroljuk az erőátadást, végül a mozgásban lévő partneren az időzítést.',
    ],
  },
  {
    slug: 'labmunka-a-rejtett-fegyver',
    category: 'Technika',
    title: 'Lábmunka — a rejtett fegyver',
    excerpt:
      'A legjobb ütés az, amelyet sosem kapsz meg. A lábmunka a támadás és a védekezés láthatatlan alapja.',
    readTime: '7 perc',
    body: [
      'A lábmunka határozza meg, hogy a versenyző a megfelelő pillanatban a megfelelő helyen legyen. Nélküle a leggyorsabb kéz is hatástalan marad.',
      'Az alapállás a kiindulópont: a súly egyenletesen oszlik el, a térdek enyhén hajlítottak, a test rugózásra kész. Innen indul minden lépés, kitérés és szögelvétel.',
      'A haladó lábmunka lényege a szögek megnyitása: nem hátrálni, hanem oldalra lépve új pozícióból támadni. Ez teszi kiszámíthatatlanná a versenyzőt.',
      'A lábmunkát ugrókötéllel, árnyékbokszolással és lépésdrillekkel fejlesztjük. A ritmusérzék ugyanolyan fontos, mint a robbanékonyság.',
    ],
  },
  {
    slug: 'reakcioido-fejlesztese',
    category: 'Edzés',
    title: 'Hogyan gyorsítsd fel a reakcióidőt',
    excerpt:
      'A reakcióidő nem velünk született adottság — célzott edzéssel mérhetően fejleszthető.',
    readTime: '6 perc',
    body: [
      'A küzdősportban a másodperc töredéke dönt. A reakcióidő az inger észlelése és a mozgásválasz között eltelt idő, amely tudatos gyakorlással csökkenthető.',
      'A vizuális ingerekre adott válasz fejlesztésére kiváló a partnerrel végzett reakciódrill, ahol előre megbeszélt jelre kell mozdulni.',
      'A perifériás látás bővítése szintén kulcsfontosságú: a tapasztalt versenyző nem az ütést nézi, hanem a vállat és a csípőt, amelyek korábban elárulják a szándékot.',
      'A fáradtság rontja a reakcióidőt, ezért a kondicionális edzés és a reakcióedzés együtt fejti ki igazi hatását.',
    ],
  },
  {
    slug: 'mentalis-felkeszules',
    category: 'Szemlélet',
    title: 'A mentális felkészülés ereje',
    excerpt:
      'A küzdelem a fejben kezdődik. A fókusz, a nyugalom és a fegyelem ugyanúgy edzhető, mint az izom.',
    readTime: '5 perc',
    body: [
      'A technikai tudás csak akkor érvényesül, ha a versenyző képes nyomás alatt is tisztán gondolkodni. A mentális felkészülés a teljesítmény láthatatlan rétege.',
      'A légzésszabályozás az egyik legegyszerűbb és leghatékonyabb eszköz. A lassú, kontrollált kilégzés csökkenti a stresszt és stabilizálja a pulzust.',
      'A vizualizáció — a mozdulatok és helyzetek fejben történő átélése — bizonyítottan javítja a tényleges végrehajtást.',
      'A fegyelem a hétköznapokban épül: a rendszeres edzés, a pihenés és a táplálkozás tudatossága mind a mentális erő alapját képezi.',
    ],
  },
  {
    slug: 'kezelni-a-tavolsagot',
    category: 'Taktika',
    title: 'A távolság kezelésének művészete',
    excerpt:
      'Aki uralja a távolságot, az uralja a küzdelmet. A megfelelő távolság megválasztása taktikai döntés.',
    readTime: '6 perc',
    body: [
      'Minden technikának megvan a maga ideális távolsága. A rúgások hosszú, az ütések közepes, a térdek és könyökök rövid távon a leghatékonyabbak.',
      'A versenyző feladata, hogy a saját erősségeihez igazítsa a távolságot, miközben az ellenfelet kizökkenti a komfortzónájából.',
      'A távolság érzékelése a tapasztalattal finomodik. A lábmunka és a fej mozgása teszi lehetővé a gyors váltást a zónák között.',
      'A távolságjáték célja nem a folyamatos támadás, hanem a megfelelő pillanat megteremtése.',
    ],
  },
  {
    slug: 'a-vedekzes-rendszere',
    category: 'Technika',
    title: 'A védekezés rétegei',
    excerpt:
      'A blokk, a kitérés és a távolságtartás együtt alkotják a stabil védelem rendszerét.',
    readTime: '5 perc',
    body: [
      'A védekezés nem passzív állapot, hanem aktív, folyamatos döntéssorozat. Három fő rétege a blokkolás, az elhajlás és a távolság megtörése.',
      'A blokk a leggyorsabb, de energetikailag a legköltségesebb. A jól időzített kitérés ezzel szemben azonnali ellentámadási lehetőséget nyit.',
      'A fej mozgatása — a bujkálás és az elhajlás — a tapasztalt versenyzők eszköze, amely megőrzi a kezeket a támadáshoz.',
      'A védelem és a támadás nem különálló fázis: a legjobb védekezés gyakran maga az ellentámadás kezdete.',
    ],
  },
  {
    slug: 'robbanekony-ero',
    category: 'Kondíció',
    title: 'Robbanékony erő építése',
    excerpt:
      'Az erő önmagában kevés — a kickboxban a gyorsan kifejtett erő, a robbanékonyság számít.',
    readTime: '7 perc',
    body: [
      'A robbanékony erő az a képesség, hogy az izmok a lehető legrövidebb idő alatt fejtsék ki maximális erejüket. Ez a tulajdonság minden ütés és rúgás mögött ott áll.',
      'A pliometrikus gyakorlatok — ugrások, dobások — kifejezetten ezt a képességet fejlesztik a gyors izom-összehúzódás révén.',
      'A súlyzós edzés is hozzájárul, ha a hangsúly a mozdulat sebességén van, nem pusztán a megemelt terhelésen.',
      'A regeneráció itt különösen fontos: a robbanékony edzés terheli az idegrendszert, ezért elegendő pihenést igényel.',
    ],
  },
  {
    slug: 'allokepesseg-a-ringben',
    category: 'Kondíció',
    title: 'Állóképesség a teljes menetidőre',
    excerpt:
      'A technika az utolsó menetben kopik meg először. A kitartó állóképesség tartja életben a stílust.',
    readTime: '6 perc',
    body: [
      'A kickbox egyszerre igényli az aerob és az anaerob állóképességet. Az előbbi a hosszú távú teljesítményt, az utóbbi a rövid, intenzív kitöréseket táplálja.',
      'Az intervallumedzés a sportág ritmusát modellezi: rövid, maximális terhelést rövid pihenő követ, így a test megtanulja a gyors regenerációt.',
      'A folyamatos, közepes intenzitású munka — futás, kötélugrás — megalapozza azt az aerob bázist, amelyre a robbanékony munka épül.',
      'A légzéstechnika és a tempóérzék fejlesztése segít az energia okos beosztásában a teljes küzdelem során.',
    ],
  },
  {
    slug: 'mozgekonysag-es-nyujthatosag',
    category: 'Kondíció',
    title: 'Mozgékonyság és a magas rúgások',
    excerpt:
      'A csípő mozgékonysága nélkül a fejmagas rúgások elérhetetlenek maradnak. A nyújthatóság edzhető.',
    readTime: '5 perc',
    body: [
      'A mozgékonyság az ízületek teljes mozgástartományát jelenti, amely a magas és pontos rúgások előfeltétele.',
      'A dinamikus bemelegítés a mozgástartomány aktív bővítésére szolgál, és csökkenti a sérülések kockázatát.',
      'A statikus nyújtás az edzés végén, lehűlt izmokon a leghatékonyabb a hosszú távú rugalmasság fejlesztésére.',
      'A rendszeresség itt a kulcs: a mozgékonyság lassan épül, de gyorsan elveszik, ha elhanyagoljuk.',
    ],
  },
  {
    slug: 'elso-edzes-mire-szamits',
    category: 'Kezdőknek',
    title: 'Az első edzés: mire számíts',
    excerpt:
      'A kezdés mindig a legnehezebb. Az első edzés nem a teljesítményről, hanem a megérkezésről szól.',
    readTime: '5 perc',
    body: [
      'Az első kickbox edzés célja nem a bizonyítás, hanem a környezet és az alapmozgások megismerése. A bemelegítés után jellemzően az alapállás és az első ütések következnek.',
      'A kezdőtől senki nem vár tökéletes technikát. A figyelem és a tanulási hajlandóság sokkal többet ér, mint az erő.',
      'Érdemes kényelmes ruhában érkezni, vizet hozni, és nyitott hozzáállással figyelni az oktató útmutatásait.',
      'Az izomláz a következő napokban természetes — a test alkalmazkodik az új mozgásformához.',
    ],
  },
  {
    slug: 'onbizalom-epitese',
    category: 'Kezdőknek',
    title: 'Az önbizalom építése a tatamin',
    excerpt:
      'A küzdősport nemcsak a testet, hanem a magabiztosságot is formálja — apró lépésről apró lépésre.',
    readTime: '4 perc',
    body: [
      'Az önbizalom nem hirtelen jön, hanem a kis sikerek sorozatából épül fel. Minden elsajátított mozdulat egy újabb tégla.',
      'A kickbox biztonságos környezetet ad ahhoz, hogy megtapasztaljuk a saját határainkat és azok kitágítását.',
      'A fejlődés mérése segít: ha visszatekintünk az első hetekre, láthatóvá válik az út, amit megtettünk.',
      'A közösség támogató ereje szintén meghatározó — együtt könnyebb átlépni a komfortzóna határát.',
    ],
  },
  {
    slug: 'felszereles-alapjai',
    category: 'Felszerelés',
    title: 'A felszerelés alapjai kezdőknek',
    excerpt:
      'A megfelelő védőfelszerelés nem luxus, hanem a biztonságos edzés alapfeltétele.',
    readTime: '5 perc',
    body: [
      'A kezdő számára a legfontosabb felszerelés a kézbandázs és a kesztyű, amelyek a csukló és az ökölcsontok védelmét szolgálják.',
      'A fogvédő minden kontaktos gyakorlatnál nélkülözhetetlen, és a megfelelő illeszkedés a kulcsa a hatékonyságának.',
      'A sípcsontvédő a rúgások gyakorlásánál véd mind a saját, mind a partner testét.',
      'A felszerelés célja mindig a biztonság és a hosszú távú, sérülésmentes fejlődés támogatása.',
    ],
  },
  {
    slug: 'a-bemelegites-fontossaga',
    category: 'Edzés',
    title: 'Miért nem hagyhatod ki a bemelegítést',
    excerpt:
      'A bemelegítés a teljesítmény és a sérülésmegelőzés első vonala — sosem felesleges idő.',
    readTime: '4 perc',
    body: [
      'A bemelegítés fokozatosan emeli a pulzust és a testhőmérsékletet, felkészítve a szervezetet a megterhelésre.',
      'A dinamikus mozdulatok aktiválják azokat az izmokat és ízületeket, amelyeket az edzés terhelni fog.',
      'A jól felépített bemelegítés javítja a koordinációt és a reakcióidőt is, így közvetlenül hat a teljesítményre.',
      'A kihagyott bemelegítés a leggyakoribb oka az elkerülhető sérüléseknek a küzdősportokban.',
    ],
  },
  {
    slug: 'regeneracio-a-fejlodes-resze',
    category: 'Kondíció',
    title: 'A regeneráció a fejlődés része',
    excerpt:
      'Az izom nem az edzésen, hanem a pihenés alatt erősödik. A regeneráció nem ellentéte a fejlődésnek.',
    readTime: '5 perc',
    body: [
      'A kemény edzés mikroszakadásokat okoz az izomrostokban; az erősödés a pihenés alatti helyreállítás során történik.',
      'Az alvás a legfontosabb regenerációs eszköz, amely alatt a hormonális helyreállítás a leghatékonyabb.',
      'Az aktív pihenés — könnyű mozgás, nyújtás — segíti a keringést és gyorsítja a regenerációt a teljes pihenőnaphoz képest.',
      'A táplálkozás és a folyadékpótlás zárja a kört: a test ezekből építi újra a terhelt szöveteket.',
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}
