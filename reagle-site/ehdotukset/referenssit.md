# Referenssien esittäminen uudella reagle.fi-sivustolla – ehdotus

*Luonnos osakkaille · 31.10.2026 · Lähteet: uuden luonnossivuston REFS-data (`/tmp/build/build.py`), nykyinen https://reagle.fi/referenssit/*

> **Periaate:** tähän dokumenttiin ei ole keksitty yhtään lukua, vuotta, hintaa tai lainausta. Kaikki luvut ovat nykyisistä referenssiteksteistä. Puuttuvat tiedot on merkitty muodossa **[TÄYDENNÄ: …]**.

---

## 0. Tiivistelmä

1. **Nykytila:** 9 referenssiä proosana "Lue esittely" -haitarien takana. Tärkein tieto (rooli, kohde, koko, vuosi, lopputulos) on piilossa tekstin keskellä. Lukijan on luettava kappaleita ennen kuin hän näkee, mitä Reagle on tehnyt. Etusivun 6 kuvakorttia kertovat vain otsikon.
2. **Ehdotus:** referenssisivu jaetaan kolmeen kerrokseen, kuten johtavilla neuvonantajilla:
   - **A. Track record -lukurivi** (4 lukua koko yrityksestä)
   - **B. Toimeksiantokortit eli "tombstonet"**: kaikki toimeksiannot tiiviinä kortteina, joissa on aina samat kentät (palvelu, rooli, asiakas, kohde, koko, sijainti, vuosi). Kortteja voi suodattaa.
   - **C. 4–5 syvempää case-esittelyä** muodossa **Haaste → Ratkaisu → Tulos**, ja jokaisessa 1–3 avainlukua. Muut toimeksiannot jäävät korteiksi, joista avautuu lyhyt kuvaus.
3. **Lisäksi:** asiakaslogoseinä (nykysivulla on noin 30 logoa) ja lainaukset nostetaan näkyviin, luottamukselliset kaupat esitetään anonymisoituina, palvelusivuille lisätään referenssinostot, ja jokaiselle casella tehdään oma URL ja rakenteistettu data.
4. **Suurin aukko:** yrityksen kokonaisluvut (transaktioiden määrä ja volyymi €) sekä useimpien kauppojen **vuosi**. Ilman näitä sivu ei vielä näytä track recordilta. Osakkaiden tärkein tehtävä on koota luvut (pohja luvussa 7).

---

## 1. Näin alan johtavat toimijat esittävät track recordinsa

| Keino | Kuka käyttää (esimerkkejä) | Mikä toimii | Sopiiko Reaglelle |
|---|---|---|---|
| **Tombstone / deal card**: tiivis kortti (rooli, asiakas, kohde, koko, vuosi, joskus ostajan ja myyjän logot) | Investointipankit, JLL, CBRE, Cushman & Wakefield, Newsec, Catella, Colliers | Näyttää volyymin ja toistuvuuden nopeasti. Kauppoja voi lisätä, vaikka tekstiä ei ehtisi kirjoittaa. | **Kyllä, perusrakenteeksi** |
| **"Selected transactions" -taulukko** (vuosi, kohde, kaupunki, sektori, rooli, koko) | Pankkien ja M&A-boutiikkien track record -sivut, pitch-materiaalit | Erittäin uskottava, kun rivejä on 20 tai enemmän. Helppo suodattaa. | Kyllä, kun dataa on kertynyt. Alussa kortit riittävät. |
| **Key figure strip** (esim. "X mrd € transaktioita", "Y kauppaa", "Z m²") | Lähes kaikki CRE-neuvonantajat etusivulla | Yhdellä silmäyksellä mittakaava | **Kyllä**, mutta vain todennettavilla luvuilla |
| **Case study** (haaste, ratkaisu, tulos ja luvut) | McKinsey, BCG, Accenture, CRE-konsultit, PropTech-yhtiöt | Näyttää *miten* ajatellaan. Erottaa "kaupanvälittäjästä". | **Kyllä, 4–5 kpl.** Reaglen vahvuus on juuri prosessi ja data. |
| **Asiakaslogot** | Lähes kaikki B2B-palveluyritykset | Sosiaalinen todiste, nopea luottamus | Kyllä. Logot ovat jo olemassa, mutta käyttölupa on tarkistettava. |
| **Asiakaslainaukset**, nimen ja tittelin kanssa | Konsultit, boutique-neuvonantajat | Kolmannen osapuolen ääni painaa enemmän kuin oma kehu | Kyllä. Nyt lainauksia on 1, ja tavoite on 3–5. |
| **Suodattimet** (palvelu, sektori, maa, vuosi, rooli) | Isot toimijat, joilla on satoja kauppoja | Hyödyllinen, kun kortteja on 15 tai enemmän | Palvelusuodatin heti. Muut suodattimet, kun kortteja on yli 15–20. |
| **Ajankohtainen kauppauutinen + tombstone LinkedInissä** | Kaikki | Sama sisältö kiertää sivulla, uutiskirjeessä ja somessa | Kyllä. Jokainen kortti on valmis LinkedIn-julkaisu. |

**Johtopäätökset:**
- Tiivis rakenne voittaa proosan. Lukija skannaa ensin roolin, kohteen, koon ja vuoden, ja lukee tarinan vasta sitten, jos se kiinnostaa.
- Johdonmukaisuus on tärkeämpää kuin määrä. Jokaisessa kortissa on samat kentät samassa järjestyksessä. Puuttuva kenttä näytetään muodossa "luottamuksellinen", eikä sitä jätetä pois.
- Tulos mitataan luvuilla: aikataulu, tarjousten määrä, hankittujen kohteiden määrä, m², vuokrasopimuksen pituus. Myös muut kuin hintaluvut kelpaavat.
- Tuoreus näkyy. Track record ilman vuosilukuja näyttää vanhalta. Tällä hetkellä vuosi on kerrottu vain 3 referenssissä 9:stä.

---

## 2. Suositeltu rakenne Reaglelle

### 2.1 Referenssisivu (`/referenssit/`)

```
[Page hero]  "Tuloksia, ei lupauksia."  + 1 lauseen ingressi
[A. Track record -lukurivi]  4 lukua
[B. Valitut case-esittelyt]  4–5 isoa korttia (kuva + otsikko + 2 avainlukua) → oma alasivu
[C. Kaikki toimeksiannot]    suodattimet: Palvelu · (myöh.) Sektori · Maa · Vuosi · Rooli
                             tombstone-ruudukko 3 saraketta, vuosi laskevassa järjestyksessä
[D. Asiakaslogot]            "Asiakkaitamme" – harmaasävylogot, 6×5 ruudukko
[E. Lainaus-karuselli]       1–3 asiakaslainausta
[F. CTA]                     "Onko sinulla vastaava tilanne? Jutellaan." → partneri-yhteystiedot
```

### 2.2 A – Track record -lukurivi

Uudella etusivulla on jo yrityslukurivi (2017 / 3 maata / 4 palvelua / asiantuntijat). Referenssisivun lukurivin pitää kertoa **tekemisestä**, ei yrityksestä.

**Suositus (kun luvut on koottu):**

| Luku | Selite | Tila |
|---|---|---|
| **[TÄYDENNÄ: lkm]** | toteutettua kiinteistökauppaa vuodesta 2017 | puuttuu |
| **[TÄYDENNÄ: M€]** | neuvottu transaktiovolyymi | puuttuu |
| **[TÄYDENNÄ: m²]** | vuokrattu / hankittu / myyty pinta-ala | puuttuu |
| **[TÄYDENNÄ: lkm]** | toimeksiantoa / asiakasta | puuttuu (logoseinällä noin 30 asiakasta, ks. 2.5) |

**Väliaikainen vaihtoehto, jossa käytetään vain lähteistä todennettavia lukuja** (kaikki ovat yksittäisistä caseista, joten ne on esitettävä kontekstin kanssa):

| Luku | Selite | Lähde |
|---|---|---|
| **13** | ruokakauppakiinteistöä hankittu yhdelle rahastolle | Elite / ruokakaupat |
| **6 000+** | kiinteistökauppaa analysoitu Tilastokeskuksen indeksiä varten | Tilastokeskus |
| **~50** | kohteen salkku analysoitu ja exit-strategia laadittu | Brunswick |
| **2017** | lähtien · Suomi, Ruotsi, Tanska | yritystieto |

> Suositus: julkaise väliaikainen rivi vain, jos kokonaislukuja ei saada ennen julkaisua. Kokonaisluvut ("X kauppaa, Y M€") ovat selvästi vakuuttavampia. Jos volyymia ei haluta kertoa tarkasti, käytä kynnysarvoa ("yli X M€") tai haarukkaa.

### 2.3 B – Tombstone-kortti (kaikille toimeksiannoille)

Kiinteä kenttäjärjestys:

```
┌───────────────────────────────────────┐
│ TRANSAKTIOT · Myyjän neuvonantaja     │  ← palvelu · rooli
│                                       │
│ Monitoimikiinteistö, Helsinki Konala  │  ← kohde, sijainti
│ ~15 000 m² · ~50 vuokralaista         │  ← koko (1–2 lukua)
│                                       │
│ Asiakas   Elite Alfred Berg           │
│ Ostaja    Julius Tallberg-Kiinteistöt │  ← vastapuoli (jos julkinen)
│ Vuosi     [TÄYDENNÄ]                  │
│                         Lue case  →   │
└───────────────────────────────────────┘
```

- Kuvaa ei tarvita, jolloin ruudukko pysyy rauhallisena. Kuvat käytetään case-esittelyissä.
- Kortin otsikko on aina **kohde + paikka**, ei abstrakti otsikko ("Tehokas strukturoitu myyntiprosessi"). Abstraktit otsikot eivät erotu toisistaan, eikä niillä löydy hakukoneesta.
- Rooli käyttää vakiotermejä: *Myyjän neuvonantaja · Ostajan neuvonantaja · Strateginen neuvonantaja · Vuokranantajan edustaja · Vuokralaisen edustaja · Arvioija · Analyysi / data*.

### 2.4 C – Case-esittely (4–5 valittua)

Pohja:

```
Eyebrow:   PALVELU · ROOLI · VUOSI
Otsikko:   tulos-otsikko (esim. "13 ruokakauppaa vakaan kassavirran salkkuun")
Faktarivi: Asiakas | Kohde | Sijainti | Koko | Vuosi
Avainluvut: 1–3 isoa lukua
Haaste:    2–3 lausetta – mikä oli asiakkaan tilanne ja tavoite
Ratkaisu:  3–5 bulletia – mitä Reagle konkreettisesti teki
Tulos:     2–3 lausetta – mitä saavutettiin (mitattavasti, jos mahdollista)
Lainaus:   (valinnainen) nimi, titteli, organisaatio
Tiimi:     (valinnainen) vastuuhenkilöt kuvineen → yhteydenotto
Lisää:     2 muuta saman palvelun referenssiä + linkki palvelusivulle
```

**Ehdotetut nostot (B-osio):**
1. **Ruokakauppojen ostoneuvonanto (Elite)**: eniten lukuja ja ainoa lainaus. Näyttää sourcing- ja dataosaamisen.
2. **Hoivatilat Oyj:n portfolion divestointi**: portfoliokauppa, kansainvälinen sijoittajajoukko ja tunnetut osapuolet.
3. **Tilastokeskus / EKP-kiinteistöindeksi**: erottaa Reaglen muista ja on vahva Intelligence-referenssi.
4. **Boreo Oyj:n toimitilajärjestely**: CRE-palvelu alusta loppuun ja listattu asiakas.
5. **Konalan monitoimikiinteistön myynti** tai **Metroauto**: valitaan sen mukaan, kummasta saadaan enemmän lukuja.

Kaikki 9 on kuitenkin kirjoitettu luvussa 3 samaan muotoon, joten mikä tahansa niistä voidaan nostaa.

### 2.5 D – Asiakaslogot

Nykyisellä referenssisivulla on "Asiakkaitamme"-osio, jossa on noin 30 logoa: YIT, Varma, Tallberg-Kiinteistöt, T2H, Sponda, Sentica, Round Hill Capital, Pontos Group, Patrizia, NREP, Niam, NCAP, Mediset/Hoivarakentajat, Locigor, LähiTapiola, Lehto, Ilmarinen, Hoivatilat, Frode, Hereditas, Fira, eQ, Elo, Elite, Cromwell Property Group, Darag, Brunswick, Boreo, Avant Capital sekä yksi tunnistamaton logo (tiedosto `download-300x156.png`).

- Logot tuodaan uudelle sivustolle yhtenäisinä harmaasävy-SVG:inä, ja hover näyttää värin. Tarvittaessa logosta linkki asiakkaan caseen.
- **Tarkistettava:** kirjallinen lupa jokaiselta logolta. Lisäksi on tarkistettava, onko jokainen logo oikeasti *asiakas* eikä vain kaupan vastapuoli. Esim. Tallberg ja eQ esiintyvät caseissa ostajina.
- Logoseinä näytetään myös etusivulla tiiviinä rivinä (6–8 logoa).

### 2.6 Etusivu

Nykyinen luonnos näyttää 6 kuvakorttia, joissa on vain otsikko. Ehdotus:
- **3 valittua case-korttia**, joissa on avainluku näkyvissä (esim. "13 ruokakauppaa · keskimäärin noin 2 kk / kohde") ja linkki casen omalle sivulle.
- **Logorivi** (6–8 logoa) ja **1 lainaus** (Antti Hänninen, Elite Alfred Berg).
- Etusivun lukuriviin voidaan lisätä yksi tekemisen luku, esim. "[TÄYDENNÄ] kauppaa", yhden yritystiedon tilalle.

---

## 3. Kaikki 9 referenssiä uudessa muodossa

Muoto: **tombstone-kentät → avainluvut → Haaste / Ratkaisu / Tulos.** Teksti perustuu vain nykyisiin referensseihin. Hakasulkeissa on puuttuva tieto.

---

### 3.1 Konalan monitoimikiinteistön myynti
*Nykyinen otsikko: "Tehokas strukturoitu myyntiprosessi" · id `konala`*

| Kenttä | Arvo |
|---|---|
| Palvelu | Transaktiot |
| Rooli | Myyjän neuvonantaja |
| Asiakas | Elite Alfred Berg (myyjä: Elite Kiinteistökehitysrahasto I KY) |
| Ostaja | Julius Tallberg-Kiinteistöt Oyj |
| Kohde | Monitoimikiinteistö: toimisto-, varasto- ja liiketiloja |
| Sijainti | Helsinki, Konala |
| Koko | lähes 15 000 m² · lähes 50 vuokralaista |
| Kauppahinta | [TÄYDENNÄ: kauppahinta tai haarukka / "luottamuksellinen"] |
| Vuosi | [TÄYDENNÄ: vuosi] |

**Avainluvut:** ~15 000 m² · ~50 vuokralaista · [TÄYDENNÄ: tarjousten lukumäärä]

**Haaste.** Elite Kiinteistökehitysrahasto I halusi myydä Konalassa sijaitsevan monitoimikiinteistön ennalta sovitussa, tiiviissä aikataulussa. Kohteessa oli lähes 50 vuokralaista, joten sijoittajien oli nopeasti ymmärrettävä vuokralaisrakenne ja alueen kehitysnäkymät.

**Ratkaisu.**
- Kohteeseen tutustuttiin perusteellisesti, ja siitä laadittiin ammattimainen myyntimateriaali. Materiaalissa oli kattava vuokralaisanalyysi ja kuvaus lähiympäristön kehityshankkeista.
- Materiaalia ei julkaistu verkossa. Sen sijaan kontaktoitiin tarkasti rajattu sijoittajajoukko, jolle kohde esiteltiin.
- Kiinnostuneille toimitettiin laaja materiaali ja kuvaus prosessin etenemisestä.
- Tarjoukset kilpailutettiin tiukasti, ja valitun ostajan kanssa kauppa vietiin loppuun.

**Tulos.** Prosessi tuotti useita hyviä tarjouksia. Kiinteistö myytiin Julius Tallberg-Kiinteistöt Oyj:lle ennalta määrätyssä aikataulussa, ja yhdessä asiakkaan kanssa asetetut tavoitteet saavutettiin. [TÄYDENNÄ: prosessin kesto viikkoina/kuukausina; tarjousten määrä; toteutunut hinta suhteessa tavoitteeseen, jos voidaan kertoa]

---

### 3.2 Boreo Oyj:n toimitilojen uudelleenjärjestely ja pääkonttorin myynti
*Nykyinen otsikko: "Strateginen kumppanuus toimitilojen uudelleenjärjestelyissä" · id `boreo`*

| Kenttä | Arvo |
|---|---|
| Palvelu | Corporate Real Estate (+ Transaktiot) |
| Rooli | Strateginen neuvonantaja · myyjän neuvonantaja |
| Asiakas | Boreo Oyj (ent. Yleiselektroniikka Oyj), pörssilistattu |
| Kohde | Konsernin toimitilat; pääkonttorikiinteistö |
| Sijainti | Espoo, Olarinluoma (myyty kiinteistö) · Vantaa, Ansatie (konsolidoitu toimipiste) |
| Koko | [TÄYDENNÄ: m² pääkonttori / uusi toimipiste] |
| Ostaja | [TÄYDENNÄ: ostaja tai anonymisoitu kuvaus] |
| Vuosi | 2020–2021 |

**Avainluvut:** noin 6 kk kokonaiskesto · 1 pääkonttorikiinteistö myyty · toiminnot konsolidoitu Vantaan Ansatielle

**Haaste.** Boreon toimitilat olivat useassa toimipisteessä. Konserni halusi selvittää, voisiko toiminnot konsolidoida, ja soveltuisiko oma pääkonttorikiinteistö Espoon Olarinluomassa yhteiseksi toimipisteeksi.

**Ratkaisu.**
- Konsernin toimitilojen nykytila ja liiketoiminnan tilatarpeet kartoitettiin.
- Arvioitiin pääkonttorikiinteistön soveltuvuus ja jatkojalostusmahdollisuudet. Johtopäätös oli, ettei kiinteistö sovellu konsolidoiduksi toimipisteeksi.
- Uusista toimitiloista tehtiin laaja markkinakartoitus pääkaupunkiseudulla.
- Analyysin perusteella päätettiin konsolidoida toiminnot jo käytössä olleeseen Vantaan Ansatien toimipisteeseen.
- Reagle neuvoi uuden vuokrasopimuksen ja muutostöiden neuvotteluissa.
- Olarinluoman pääkonttorikiinteistö myytiin strukturoidulla myyntiprosessilla.

**Tulos.** Toimitilaratkaisu toteutettiin tiiviissä yhteistyössä asiakkaan kanssa noin kuudessa kuukaudessa, ja lopputulos oli odotusten mukainen. [TÄYDENNÄ: mitattava hyöty, esim. tilakustannusten muutos %, vapautunut pääoma, vuokrasopimuksen pituus]

> Huom: lähteessä yhteistyö kesti "vuosien 2020–2021 aikana" mutta projekti "noin 6 kuukautta". Täsmennettävä (esim. "6 kk, 2020–2021").

---

### 3.3 Lahden huoltamokiinteistön kehitys liikekäyttöön
*Nykyinen otsikko: "Kohteen kehitys monikäyttäjäkohteeksi" · id `weststar`*

| Kenttä | Arvo |
|---|---|
| Palvelu | Arvonluonti |
| Rooli | Vuokranantajan neuvonantaja / kehityskumppani |
| Asiakas | WestStar Oy |
| Vuokralainen | Rinta-Joupin Autoliike |
| Kohde | Entinen raskaan kaluston huoltamokiinteistö, teollisuus/varasto → osin liikekäyttö |
| Sijainti | Lahti |
| Koko | [TÄYDENNÄ: m² / vuokrattu ala] |
| Vuokrasopimus | [TÄYDENNÄ: kesto vuosina] |
| Vuosi | [TÄYDENNÄ: vuosi] |

**Avainluvut:** [TÄYDENNÄ: vuokrattu m²] · [TÄYDENNÄ: vuokrasopimuksen kesto] · myymälä avattiin aikataulussa

**Haaste.** WestStar oli hankkinut entisen raskaan kaluston huoltamon kehityskohteeksi. Teollisuus- ja varastokäytön lisäksi laaja piha-alue ja keskeinen sijainti tarjosivat liikekäyttöpotentiaalia, mutta se edellytti vuokralaista ja poikkeamista kaavasta.

**Ratkaisu.**
- Reagle hoiti vuokrasopimusneuvottelut avaimet käteen -periaatteella.
- Reagle hoiti myös kaavan poikkeamismenettelyyn liittyvät naapurikuulemiset viranomaisvaatimusten mukaisesti.

**Tulos.** Projekti oli monivaiheinen, mutta vuokrausprosessi Rinta-Joupin Autoliikkeen kanssa eteni tehokkaasti, ja käyttäjä avasi myymälän suunnitelmien mukaisesti. [TÄYDENNÄ: vaikutus vuokratuottoon / käyttöasteeseen / arvoon, jos voidaan kertoa]

---

### 3.4 Hoivatilat Oyj:n hoivaportfolion divestointi
*id `hoivatilat`*

| Kenttä | Arvo |
|---|---|
| Palvelu | Transaktiot |
| Rooli | Myyjän neuvonantaja |
| Asiakas | Hoivatilat Oyj (yhtiön ensimmäinen portfoliodivestointi) |
| Ostaja | Erikoissijoitusrahasto eQ Hoivakiinteistöt |
| Kohde | 6 päiväkoti- ja terveyspalvelukiinteistöä, valmistuneet 2014–2017 |
| Sijainti | Pääosin Etelä-Suomi |
| Vuokralaiset | Suuret yksityiset päiväkotioperaattorit ja terveyspalveluiden tuottajat |
| Koko | [TÄYDENNÄ: m² yhteensä] · [TÄYDENNÄ: kauppahinta / haarukka] |
| Vuosi | [TÄYDENNÄ: vuosi] |

**Avainluvut:** 6 kohdetta · WAULT hieman yli 12 vuotta · [TÄYDENNÄ: tarjousten määrä]

**Haaste.** Hoivatilat halusi tehdä ensimmäisen hoivaportfolionsa divestoinnin. Portfolio piti markkinoida sekä kotimaisille että kansainvälisille sijoittajille tiiviissä aikataulussa.

**Ratkaisu.**
- Kaikilla kohteilla käytiin, ja portfoliosta laadittiin myyntimateriaali. Siinä oli yksityiskohtainen taloudellinen analyysi sekä analyysi vuokralaisista ja heidän taloudellisesta tilanteestaan.
- Potentiaaliset sijoittajat kartoitettiin, ja asiakas hyväksyi kontaktoitavat. Joukossa oli sekä paikallisia että kansainvälisiä toimijoita.
- Portfolio esiteltiin yksityiskohtaisesti, ja kohdekatselmukset koordinoitiin.
- Tarjoukset kilpailutettiin, ja Reagle johti due diligence -prosessin ja myyntineuvottelut loppuun asti.

**Tulos.** Portfolio myytiin Erikoissijoitusrahasto eQ Hoivakiinteistöille ennalta määrätyssä aikataulussa, ja yhdessä asetetut tavoitteet saavutettiin. [TÄYDENNÄ: prosessin kesto; tarjousten määrä; mahdollinen asiakaslainaus Hoivatilat Oyj:ltä]

---

### 3.5 Ruokakauppojen ostoneuvonanto: 13 kohdetta vakaan kassavirran salkkuun
*Nykyinen otsikko: "Ruokakauppojen ostoneuvonanto" · id `ruokakaupat`*

| Kenttä | Arvo |
|---|---|
| Palvelu | Transaktiot (ostoneuvonanto, sourcing) + Intelligence |
| Rooli | Ostajan neuvonantaja |
| Asiakas | Elite Alfred Berg / Elite Kiinteistökehitysrahasto II |
| Kohde | Pienet ja keskisuuret päivittäistavarakauppakiinteistöt |
| Sijainti | Eri puolilla Suomea [TÄYDENNÄ: paikkakunnat, jos voidaan kertoa] |
| Koko | 13 kohdetta · [TÄYDENNÄ: m² yhteensä / transaktiovolyymi] |
| Vuosi | [TÄYDENNÄ: aloitusvuosi – jatkuu?] |

**Avainluvut:** **13** hankittua ruokakauppaa · **400–500** kohdetta seulottu · keskimäärin **noin 2 kk** läpivientiaika kohdetta kohden

**Haaste.** Elite Alfred Berg halusi kasvattaa vakaan kassavirran kohteiden osuutta Elite Kiinteistökehitysrahasto II:ssa. Tarvekartoituksessa päivittäistavarakauppa osoittautui kiinnostavaksi segmentiksi, koska Suomessa on merkittävä määrä ruokakauppakiinteistöjä, jotka eivät ole Keskon, S-ryhmän tai institutionaalisten sijoittajien omistuksessa. Kohteet piti kuitenkin ensin löytää.

**Ratkaisu.**
- Taustatutkimuksessa kartoitettiin kaikki Suomen pienet ja keskisuuret ruokakaupat, ja suuromistajien kohteet poistettiin.
- Jäljelle jääneet 400–500 potentiaalista kohdetta asetettiin järjestykseen sijainnin, väestönkasvun ja muiden yhdessä valittujen tekijöiden perusteella.
- Reagle kontaktoi omistajat, johti ostoneuvottelut ja vei due diligence -prosessit loppuun avaimet käteen -periaatteella.

**Tulos.** Elitelle on hankittu 13 eri kokoluokan ruokakauppaa eri puolilta Suomea. Kohdekohtainen läpivientiaika on ollut keskimäärin vain parin kuukauden mittainen.

> "Reagle on ollut meille kaikin puolin sopiva kumppani ja luotettava toimija neuvonantajana. Arvostamme Reaglen innovatiivista lähestymiskulmaa ja positiivista puurtamista käytännön askareiden toteuttamisessa. Reaglen henkilöstö on kautta linjan oma-aloitteista, ratkaisulähtöistä sekä yleisiltä toimintamalleiltaan luottamusta rakentavaa, mikä on perusedellytys tämän kaltaisessa strategisessa ja kaiken aikaa jalostuvassa toimeksiannossa. Yhteistyömme tulee jatkumaan myös tulevaisuudessa."
> — Antti Hänninen, Elite Alfred Berg [TÄYDENNÄ: titteli; tarkista, saako lainausta yhä käyttää ja onko "13" yhä ajantasainen luku]

---

### 3.6 Arvorakennuksen diskreetti myynti Helsingin keskustassa
*Nykyinen otsikko: "Arvorakennuksen strukturoitu myyntiprosessi" · id `hereditas`*

| Kenttä | Arvo |
|---|---|
| Palvelu | Transaktiot |
| Rooli | Myyjän neuvonantaja |
| Asiakas | Hereditas |
| Ostaja | Pitkäjänteinen kotimainen pörssilistattu kiinteistösijoitusyhtiö (anonymisoitu) |
| Kohde | Arvorakennus |
| Sijainti | Helsinki, keskusta (Annankadun ja Iso-Robertinkadun kulma) |
| Koko | [TÄYDENNÄ: m²] · [TÄYDENNÄ: kauppahinta / "luottamuksellinen"] |
| Vuosi | Myynnin valmistelu alkoi keväällä 2019 · [TÄYDENNÄ: kaupan toteutusvuosi] |

**Avainluvut:** [TÄYDENNÄ: prosessin kesto] · [TÄYDENNÄ: tarjousten määrä] · diskreetti prosessi

**Haaste.** Suora kiinteistöomistus vaatii paljon hallinnointia. Siksi Hereditas alkoi keväällä 2019 selvittää, voisiko keskustan arvorakennuksen myydä. Myynti haluttiin toteuttaa hallitusti ja hienovaraisesti.

**Ratkaisu.**
- Reaglen myyntitiimi organisoi strukturoidun ja diskreetin myyntiprosessin avaimet käteen -periaatteella.
- Prosessi aikataulutettiin, ja myyntimateriaalit tehtiin ammattimaisesti.
- Reagle, myyjä ja myyjän juridinen neuvonantaja tekivät tiivistä yhteistyötä.

**Tulos.** Myyjä sai parhaan mahdollisen lopputuloksen, ja ostajaksi valikoitui pitkäjänteinen kotimainen pörssilistattu kiinteistösijoitusyhtiö. [TÄYDENNÄ: saako ostajan nimetä?]

> Huom: nykyisellä sivulla on irrallinen lause ("Laitoksen yhtiömuoto on muutettu osakeyhtiöksi vuodenvaihteessa 2015–2016…"). Se jätetään pois.
> Tämä case on hyvä esimerkki siitä, miten vastapuoli anonymisoidaan (ks. luku 4).

---

### 3.7 Brunswick Real Estate: noin 50 kohteen salkun liiketoimintasuunnitelma
*Nykyinen otsikko: "Portfolion liiketoimintasuunnitelma" · id `brunswick`*

| Kenttä | Arvo |
|---|---|
| Palvelu | Intelligence |
| Rooli | Strateginen neuvonantaja |
| Asiakas | Brunswick Real Estate (noin 3 mrd € hallinnoitava portfolio, noin 60 henkeä, lähteen mukaan) |
| Kohde | Yhden sijoitusmandaatin salkku, noin 50 kohdetta |
| Sijainti | [TÄYDENNÄ: maa / kaupungit] |
| Koko | [TÄYDENNÄ: salkun m² tai arvo, jos voidaan kertoa] |
| Vuosi | Syksy 2020 |

**Avainluvut:** **~50** kohdetta analysoitu · **kaikille** kohteille kohdekäynti ja markkina-arvo · exit-aikataulu koko salkulle

**Haaste.** Brunswick tarvitsi yhden sijoitusmandaattinsa salkulle selkeän näkemyksen kohteiden arvosta, kehitystarpeista ja myyntijärjestyksestä, jotta salkun arvo voitaisiin maksimoida.

**Ratkaisu.**
- Kaikki kohteet käytiin paikan päällä läpi.
- Noin 50 kohteesta tehtiin taloudellinen analyysi.
- Jokaiselle kohteelle määritettiin markkina-arvo, jossa huomioitiin aikataulutarpeet ja muut tarvittavat kehitystoimenpiteet.
- Koko portfoliolle laadittiin myyntistrategia: salkutus ja exit-aikataulut.

**Tulos.** Brunswick toteuttaa salkun arvon maksimoimiseen tähtäävää prosessia osin Reaglen analyysin ja suunnitelman pohjalta. [TÄYDENNÄ: toteutuneet myynnit tai muu tulos vuoden 2020 jälkeen; voiko AUM-luvun (noin 3 mrd €) julkaista ja onko se ajantasainen]

---

### 3.8 Tilastokeskus: aineisto EKP:n kaupallisten kiinteistöjen hintaindeksiin
*Nykyinen otsikko: "Euroopan kiinteistöindeksin uudistus" · id `tilastokeskus`*

| Kenttä | Arvo |
|---|---|
| Palvelu | Intelligence |
| Rooli | Data- ja analyysikumppani |
| Asiakas | Tilastokeskus |
| Kohde | Toimisto- ja liikekiinteistöjen sekä vuokra-asuntojen hintakehitysindeksi, osa EKP:n kaupallisten kiinteistömarkkinoiden seurantaa |
| Sijainti | Suomi |
| Aineisto | yli 6 000 kiinteistösijoittajien transaktiota vuosilta 2015–2024 |
| Vuosi | [TÄYDENNÄ: toimeksiannon vuosi – todennäköisesti 2024/2025] |

**Avainluvut:** **6 000+** transaktiota · **10 vuoden** aineisto (2015–2024) · jokainen havainto geokoodattu

**Haaste.** Euroopan keskuspankki seuraa jäsenmaiden kaupallisten kiinteistömarkkinoiden kehitystä. Tilastokeskuksen piti tätä varten kehittää indeksi toimisto- ja liikekiinteistöjen sekä vuokra-asuntojen hintakehityksestä. Suurin haaste oli saada riittävä pohja-aineisto.

**Ratkaisu.**
- Reagle arvioi yli 6 000 kiinteistösijoittajien transaktiota vuosilta 2015–2024 ja hyödynsi siinä asiantuntemustaan, verkostojaan ja datamallejaan.
- Portfoliokaupat purettiin yksittäisiksi kohteiksi, jotta aineisto olisi kattavampi.
- Aineistoa rikastettiin ominaisuustiedoilla, kuten rakennusvuodella ja rakennustunnuksella.
- Jokainen havainto geokoodattiin, jotta sijaintitekijöitä voidaan hyödyntää.

**Tulos.** Tilastokeskus sai indeksityön pohjaksi kohdetasolle puretun, rikastetun ja paikkatietoon sidotun transaktioaineiston. [TÄYDENNÄ: onko indeksi julkaistu / käytössä; saako Tilastokeskuksen nimen ja EKP-yhteyden mainita; mahdollinen lausunto]

---

### 3.9 Metroauto: uuden autokaupan tontin haku ja hankinta Itä-Helsingissä
*Nykyinen otsikko: "Autokaupalle soveltuvan liikepaikan kartoitus" · id `metroauto`*

| Kenttä | Arvo |
|---|---|
| Palvelu | Corporate Real Estate (+ Intelligence, Transaktiot) |
| Rooli | Käyttäjän / ostajan neuvonantaja |
| Asiakas | Metroauto |
| Kohde | Autokaupan liikepaikka: olemassa oleva kiinteistö tai tontti. Nykyinen rakennus puretaan, ja tilalle rakennetaan uusi. |
| Sijainti | Itä-Helsinki [TÄYDENNÄ: kaupunginosa, jos voidaan kertoa] |
| Koko | [TÄYDENNÄ: tontin m² / uuden rakennuksen k-m²] |
| Vuosi | [TÄYDENNÄ: vuosi] |

**Avainluvut:** **112** kohdetta kartoitettu → **~20** pisteytetty → **3** neuvotteluun → **1** hankittu

**Haaste.** Metroauto tarvitsi uuden autokaupan liikepaikan Itä-Helsingin autokauppakeskittymistä. Vaihtoehtona oli joko olemassa oleva kiinteistö tai tontti.

**Ratkaisu.**
- *Vaihe 1, haku:* kaikki tarpeisiin sopivat kiinteistöt haettiin avoimista tietokannoista ja pisteytettiin paikkatiedon ja avoimien lähteiden, kuten liikennemäärien, avulla. Löydetyistä 112 kohteesta noin 20 arvioitiin soveltuviksi, ja asiakkaan kanssa käytyjen keskustelujen jälkeen jatkoon valittiin 3.
- *Vaihe 2, hankinta:* Reagle neuvotteli omistajien kanssa, tuotti ostoon tarvittavat materiaalit, johti ostoprosessin, varmisti kohteen soveltuvuuden ja keskusteli kaupungin kanssa kaavan mukaisuudesta.

**Tulos.** Soveltuvin kohde hankittiin Metroautolle. Kiinteistön nykyinen rakennus puretaan, ja tontille rakennetaan Metroauton tarpeita vastaava moderni autokauppa. [TÄYDENNÄ: hankinnan kesto; uuden liikkeen avausajankohta]

> Tämä case sopii erinomaisesti visualisoitavaksi "suppilona" (112 → 20 → 3 → 1). Se näyttää datalähtöisen menetelmän yhdellä kuvalla.

---

### 3.10 Yhteenveto: puuttuvat kentät caseittain

| Case | Vuosi | Koko | Hinta/volyymi | Vastapuoli | Muuta |
|---|---|---|---|---|---|
| Konala | **puuttuu** | ok | puuttuu | ok | tarjousten määrä, kesto |
| Boreo | ok | puuttuu | puuttuu | ostaja puuttuu | kesto 6 kk vs. 2020–2021 |
| Lahti / WestStar | **puuttuu** | puuttuu | – | ok (vuokralainen) | vuokrasopimuksen kesto |
| Hoivatilat | **puuttuu** | puuttuu | puuttuu | ok | kesto, lainaus |
| Ruokakaupat | **puuttuu** | puuttuu | puuttuu | – | ajantasainen kpl-määrä, titteli |
| Hereditas | osittain (2019) | puuttuu | puuttuu | anonymisoitu | ostajan nimi? |
| Brunswick | ok | puuttuu | – | – | jatko 2020 jälkeen |
| Tilastokeskus | **puuttuu** | ok (6 000+) | – | – | julkaisulupa |
| Metroauto | **puuttuu** | puuttuu | puuttuu | – | kaupunginosa |

---

## 4. Luottamuksellisuus ja NDA:t

Monia kauppoja ei voi julkaista nimillä tai hinnoilla. Kaupat kannattaa silti näyttää, koska **kauppojen määrä ja monipuolisuus ovat itsessään viesti.**

**Tasot (merkitään jokaiseen kauppaan datassa kenttään `julkisuus`):**

| Taso | Mitä näytetään | Esimerkki |
|---|---|---|
| **1 – Julkinen** | Nimet, kohde, koko, hinta tai haarukka, vuosi | "Konala, ~15 000 m², Elite Alfred Berg → Tallberg" |
| **2 – Nimetty, ei hintaa** | Nimet ja kohde, hinta "luottamuksellinen" | Useimmat nykyiset caset |
| **3 – Anonymisoitu** | Kuvaileva asiakas tai vastapuoli, sijainti kaupunkitasolla, koko haarukkana | "Kotimainen pörssilistattu kiinteistösijoitusyhtiö" (Hereditas-case) |
| **4 – Vain tilastoon** | Ei korttia. Kauppa lasketaan mukaan kokonaislukuihin (kpl, M€, m²). | Tiukan NDA:n kaupat |

**Anonymisoinnin sanasto (vakiokuvaukset):**
- Asiakas: *Pohjoismainen kiinteistörahasto · Kotimainen eläkeyhtiö · Kansainvälinen pääomasijoittaja · Pörssilistattu kiinteistösijoitusyhtiö · Perhesijoitusyhtiö · Säätiö · Pörssiyhtiö (teollisuus) · Julkisyhteisö*
- Koko haarukoina: *< 10 M€ · 10–25 M€ · 25–50 M€ · 50–100 M€ · > 100 M€*, ja m²: *< 5 000 · 5 000–15 000 · 15 000–30 000 · > 30 000 m²*
- Sijainti: kaupunki tai seutu ("pääkaupunkiseutu", "Etelä-Suomi"). Katuosoite vain tason 1 kaupoissa.

**Käytännöt:**
- Kortin tilalle ei jätetä tyhjää kohtaa. Näytetään "Luottamuksellinen" pienellä harmaalla tekstillä. Se kertoo lukijalle, että Reagle pitää NDA:t.
- **Tarkista aina:** asiakkaan kirjallinen hyväksyntä julkaisulle (sähköposti riittää) ja vastapuolen nimi julkisista lähteistä (tiedote, kaupparekisteri, lehdistö).
- Kauppaa ei julkaista ennen kuin se on julkistettu tai saatettu loppuun.
- Kokonaisluvut (kpl ja M€) voivat sisältää tason 4 kauppoja. Tämä mainitaan alaviitteessä: "Sisältää myös luottamuksellisia toimeksiantoja."

---

## 5. Ristiinlinkitys, SEO ja rakenteistettu data

### 5.1 Ristiinlinkitys

| Mistä | Mitä | Mihin |
|---|---|---|
| **Etusivu** | 3 nostoa avainluvulla, logorivi, 1 lainaus | casen oma sivu / `referenssit.html` |
| **Palvelusivu (jokainen palvelu)** | Lohko "Referenssejä: Transaktiot", jossa 2–3 korttia saman palvelun caseista | casen sivu + `referenssit.html?palvelu=transaktiot` |
| **Case-sivu** | "Palvelu: Transaktiot →" ja "Lisää vastaavia" (2 korttia) | palvelusivun ankkuri + muut caset |
| **Case-sivu** | Vastuuhenkilöt (osakas tai asiantuntija) kuvineen ja yhteystietoineen | yritys.html#tiimi / mailto |
| **Yritys-sivu (tiimi)** | (myöhemmin) henkilön profiilissa "Toimeksiantoja" | case-sivut |
| **Uutiset / blogi** | Kauppauutinen linkittää caseen ja päinvastoin | molempiin suuntiin |
| **Relocate** | CRE-caset (Boreo, Metroauto) | relocate.reagle.fi ↔ referenssit |

Suodattimen tila kannattaa tallentaa URL-parametriin (`?palvelu=arvonluonti`), jotta palvelusivulta voi linkittää valmiiksi suodatettuun näkymään. Nykyinen JS-suodatin tarvitsee tähän pienen lisäyksen.

Ehdotettu palvelukohdistus:

| Palvelu | Caset |
|---|---|
| Transaktiot | Konala, Hoivatilat, Ruokakaupat, Hereditas (+ Boreo pääkonttorin myynti, Metroauto hankinta) |
| Arvonluonti | Lahti / WestStar ← **vain yksi case: lisää referenssejä tarvitaan** |
| Intelligence | Tilastokeskus, Brunswick (+ Ruokakaupat-seulonta, Metroauto-pisteytys) |
| Corporate Real Estate | Boreo, Metroauto |

Yhdellä casella voi olla yksi pääpalvelu ja lisäksi sekundaarisia tageja. Silloin esim. Ruokakaupat näkyy sekä Transaktiot- että Intelligence-suodattimessa.

### 5.2 SEO

- **Oma URL jokaiselle case-esittelylle:** esim. `/referenssit/ruokakauppojen-ostoneuvonanto/`, `/referenssit/hoivatilat-hoivaportfolion-divestointi/`. Ankkurit (`#konala`) eivät indeksoidu omina sivuinaan. Tombstone-kortit ilman caseja voivat pysyä listalla.
- **Otsikko ja title:** *kohde + paikka + palvelu*, esim. "Konalan monitoimikiinteistön myynti – Transaktiot | Reagle". Tällä tavalla haetaan ("kiinteistön myynti Helsinki", "hoivakiinteistöportfolio myynti").
- **Meta description** casekohtaisesti, ja siinä 1 avainluku.
- **Kuvat:** kuvaava `alt`-teksti (nyt `alt=""`), tiedostonimi kohteen mukaan ja WebP.
- **Englanninkielinen versio** (`/en/references/…`) ja `hreflang`, koska toimintaa on Ruotsissa ja Tanskassa ja kansainväliset sijoittajat lukevat englanniksi.
- **Sisäiset linkit** (luku 5.1) ja ankkuriteksteissä palvelun nimi.
- **Tuoreus:** näytä vuosi ja päivitä sivua säännöllisesti. Uusi kauppa kortiksi heti julkistuksen jälkeen.

### 5.3 Rakenteistettu data (JSON-LD)

Schema.orgissa ei ole "Deal"-tyyppiä. Suositus:
- **Referenssisivu:** `CollectionPage` + `ItemList`, jonka `itemListElement` osoittaa case-sivuihin. `BreadcrumbList`.
- **Case-sivu:** `Article` (tai `CreativeWork`), jossa `about` (kohde `Place`/`Accommodation` + `address`), `mentions` (asiakas `Organization`), `author`/`publisher` = Reagle Oy (`Organization`), `datePublished`, `image`.
- **Koko sivusto:** `Organization` / `ProfessionalService`, jossa `foundingDate: 2017`, `address` (Kalevankatu 6), `areaServed` (FI, SE, DK), `knowsAbout` (palvelut), `sameAs` (LinkedIn, Instagram).
- **Älä** merkitse asiakaslainauksia `Review`/`AggregateRating`-merkinnällä. Googlen ohjeiden mukaan yrityksen omalla sivulla olevat itseään koskevat arviot eivät oikeuta tähtiin, ja merkintä voi aiheuttaa manuaalisen toimenpiteen.

Esimerkki (case-sivu):

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ruokakauppojen ostoneuvonanto: 13 kohdetta vakaan kassavirran salkkuun",
  "about": {"@type": "Thing", "name": "Päivittäistavarakauppakiinteistöjen hankinta, Suomi"},
  "mentions": {"@type": "Organization", "name": "Elite Alfred Berg"},
  "publisher": {"@type": "Organization", "name": "Reagle Oy", "url": "https://reagle.fi/"},
  "inLanguage": "fi",
  "datePublished": "[TÄYDENNÄ]"
}
```

---

## 6. Toteutusvaiheet

1. **Data ensin.** REFS-lista laajennetaan kenttärakenteeseen (luku 7). Kaikki 9 casea täydennetään [TÄYDENNÄ]-kohtien osalta.
2. **Referenssisivu:** lukurivi, case-nostot, tombstone-ruudukko ja suodatin, logoseinä ja lainaukset. Ks. mockup `ehdotukset/referenssit-mockup.html`.
3. **Case-alasivut** 4–5 nostolle (build.py generoi jokaiselle oman sivun).
4. **Palvelusivuille** referenssilohkot. **Etusivulle** 3 nostoa ja logorivi.
5. **JSON-LD**, `alt`-tekstit ja title/description caseittain.
6. **Lisää kortteja:** tavoite 15–25 tombstonea, myös anonymisoituja. Nyt näkyy vain 9 toimeksiantoa, vaikka toimintaa on ollut vuodesta 2017.
7. **EN-versio.**
8. **Prosessi:** jokaisen toimeksiannon päättyessä vastuuosakas täyttää alla olevan lomakkeen, ja kortti julkaistaan, kun lupa on saatu.

---

## 7. Tietopohja jokaisesta toimeksiannosta (täytetään jatkossa)

Kopioi tämä jokaiseen kauppaan (esim. jaettuun Exceliin tai CRM:ään). Pakolliset kentät on merkitty tähdellä (*).

```yaml
id:                    # lyhyt tunniste, esim. konala-2021
otsikko:               # kohde + paikka, esim. "Konalan monitoimikiinteistön myynti"
palvelu_paa: *         # Transaktiot | Arvonluonti | Intelligence | Corporate Real Estate
palvelu_muut:          # lista
rooli: *               # Myyjän / Ostajan / Strateginen neuvonantaja / Vuokranantajan / Vuokralaisen edustaja / Arvioija / Analyysi
asiakas: *             # nimi
asiakas_anonyymi:      # vakiokuvaus, jos nimeä ei saa käyttää
vastapuoli:            # ostaja / myyjä / vuokralainen
vastapuoli_anonyymi:
kohdetyyppi: *         # toimisto | liike | logistiikka/teollisuus | hoiva/sosiaali | asunto | hotelli | monitoimi | tontti | portfolio | muu
kohteiden_lkm:
pinta_ala_m2:          # tai k-m2 / tontti-m2, kerro mikä
kauppahinta_eur:       # tarkka luku (sisäinen)
kauppahinta_haarukka:  # julkaistava, esim. "25–50 M€"
vuokralaiset_lkm:
wault_v:               # keskimääräinen vuokramaturiteetti
kaupunki: *
maa: *                 # FI | SE | DK
vuosi_aloitus:
vuosi_paatos: *        # kaupan / toimeksiannon valmistumisvuosi
kesto_kk:
tarjousten_lkm:        # myyntiprosesseissa
kontaktoidut_sijoittajat_lkm:
haaste: *              # 2–3 lausetta
ratkaisu: *            # 3–5 bulletia
tulos: *               # 2–3 lausetta, mitattava tulos
avainluvut: *          # 1–3 lukua + selite
lainaus:               # teksti
lainaus_henkilo:       # nimi, titteli, organisaatio
lainaus_lupa:          # pvm + kuka hyväksyi
reagle_tiimi:          # vastuuhenkilöt
kuvat:                 # tiedostot + kuvaaja + käyttöoikeus
logo_lupa:             # kyllä/ei + pvm
julkisuus: *           # 1 julkinen | 2 nimetty ei hintaa | 3 anonymisoitu | 4 vain tilastoon
julkaisulupa: *        # pvm + kuka hyväksyi (asiakas)
julkinen_lahde:        # tiedote / lehtiartikkeli (URL)
case_kandidaatti:      # kyllä/ei – kirjoitetaanko laaja case
```

Lisäksi osakkaiden pitää koota kerran ja päivittää vuosittain **kokonaisluvut** lukuriville: kauppojen lukumäärä, transaktiovolyymi M€ ja vuokrattu/hankittu m², vuodesta 2017. Luvut eritellään palvelun ja maan mukaan.

---

## 8. Avoimet kysymykset osakkaille

1. Voidaanko julkaista kokonaisluvut (kpl ja M€ vuodesta 2017)? Tarkkana lukuna vai kynnysarvona ("yli X M€")?
2. Mitkä 4–5 casea nostetaan laajoiksi? Ehdotus: Ruokakaupat, Hoivatilat, Tilastokeskus, Boreo ja Konala tai Metroauto.
3. Ovatko kaikki noin 30 logoa asiakkaita, ja onko käyttölupa voimassa? Esim. Tallberg ja eQ ovat caseissa ostajina. Mikä on tunnistamaton logo `download-300x156.png`?
4. Onko Elite-lainaus yhä käyttöluvan piirissä, mikä on Antti Hännisen titteli, ja onko 13 kauppaa yhä ajantasainen luku?
5. Saako Tilastokeskuksen nimen ja EKP-yhteyden mainita, ja onko indeksi jo julkaistu?
6. Saako Hereditas-casen ostajan nimetä?
7. Onko Ruotsista tai Tanskasta jo referenssejä? Nyt kaikki 9 ovat Suomesta, ja sivu lupaa kolme maata.
8. Arvonluonnista on vain yksi case. Löytyykö lisää (vuokraus, käyttötarkoituksen muutos, kaavoitus)?
9. Löytyykö AKA-arvioista tai Relocate-toimeksiannoista referenssejä, mahdollisesti anonymisoituna?
10. Tehdäänkö case-alasivut heti, vai aloitetaanko yhdellä sivulla (kortit + haitari) ja lisätään alasivut myöhemmin?
