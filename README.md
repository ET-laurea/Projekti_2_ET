# PC Game deal finder
Erno Tyrylahti ja Max Mäntymäki

## Projektisuunnitelma
### Projektin idea
- Sovelluksen idea on löytää tietokonepelien pelaajan haluamalle pelille alennuksia ja nähdä hintavertailuja eri sivustojen välillä.

### Sovelluksen toiminnot
1. AJAX:in avulla sovellus hakee valitsemamme API key:n kautta olemassa olevan sivuston tiedoista haluamasi pelin.
2. Sovellus näyttää eri nettisivuilta mahdollisia tarjouksia pelille ja hintavertauksia. Sovelluksen kautta pääset myös katsomaan millä sivulla tarjoukset ovat linkin kautta.
3. Sovellus hakee antamallasi nimellä sen mukaisia pelejä, mutta pystyt myös checkmarkia painamalla hakea vain tiettyä peliä jonka nimen olet kirjoittanut.

## Kuvankaappaukset
- Esimerkki sovelluksesta, kun exact match ei päällä
<img width="1534" height="730" alt="gamedealfinder_screenshot1" src="https://github.com/user-attachments/assets/3677bdc3-1f6e-4e8f-8b27-ba38c8352994" />
- Sovellus kun exact match päällä
<img width="1528" height="722" alt="gamedealfinder_screenshot2" src="https://github.com/user-attachments/assets/86025313-444f-4c98-a613-b68a0a054b87" />

## Tietoa sovelluksesta
PC Game Deal Finder on verkkosovellus, joka auttaa käyttäjää löytämään haluamalleen tietokonepelilleen tarjouksia verkosta. Käyttäjä kirjoittaa hakukenttään haluamansa pelin nimen, jonka jälkeen sovellus etsii tiedoistaan eri nettikauppapaikkoja jossa peli on myynnissä ja jossa sillä on mahdollisesti alennus. Sovellus näyttää mahdollisen alennus %, jonka jälkeen käyttäjä voi vertailla eri sivujen välillä mistä saisi parhaan tarjouksen. Tehdessään päätöksen, käyttäjä painaa vihreää "View deal" nappia, joka vie hänet sivulle josta pelin voi ostaa. Halutessaan käyttäjä voi käyttää "Exact match only" hakua, rajaten valittuja pelejä jota sivu ehdottaa.

## Sovelluksen käyttö
1. Avaa sovellus linkki osiosta.
2. Kirjoita haluamasi pelin nimi hakukenttään.
3. (Vapaaehtoisesti) Paina "Exact match only" painiketta, jos haluat hakea täsmälleen sillä nimellä, jonka kirjoitit.
4. Paina "Search" nappia ja etsi haluamasi peli, vertaile hintoja ja valitse haluamasi tarjous jos sellainen löytyy.

## Teknologiat
- HTML: Sivun rakenne
- CSS: ulkoasu ja asettelu
- Javascript: toiminnallisuus, DOM ja lomakkeiden validointi
- API: käytetään datan haun lähteenä eri sivulta

## Linkit
- Julkaistu sovellus: [Sovellus](https://et-laurea.github.io/Projekti_2_ET/)
- Github-repositorio: [main](https://github.com/ET-laurea/Projekti_2_ET/tree/main)
- Projektin videoesittely: [Video](https://video.laurea.fi/media/PC+Game+Deal+Finder/0_lg7g3p3c)

## Arviointi
Projektin työstäminen lähti aluksi meillä pienellä epäonnella, kun alkuperäinen ideamme kaatui siihen ettemme saaneet sivuston API:ta toimimaan ja sen toimimaan saaminen olisi vaatinut meiltä kurssin ulkopuolisten asioiden, esim. back end kehitykseen liittyviä tekniikoita joten hylkäsimme sen. Alkuperäinen idea olisi ollut kolmannen osapuolen pelialusta FACEIT API:n käyttö ja sitä kautta pelaajien tilastojen seuraaja sovellus. Keksimme kuitenkin nopeasti uuden idean ja löysimme CheapSharkin vapaiden API:den github listasta ja teimme sen pohjalta sovelluksen. Onnistuimme mielestäni ideoinnissa hyvin ja saimme käytännössä sovellukseen kaiken mitä ideointivaiheessa mietimme. Sovellus ajaa sen tarkoituksensa ja on visuaalisesti selkeä ja myös responsiivinen. Minä ja Erno molemmat osallistuimme taas yhdessä hyvin tasavertaisesti. Aloimme työstämään sovellusta yhdessä, jonka jälkeen minä viimeistelin Javascriptin sovellukseen ja Erno teki CSS:än ja muutamat viimeistelyt jonka jälkeen katsoimme yhdessä että kaikki toimii. Pieniä muutoksia sovellukseen olisi voinut olla javascriptin puolella, kuten parempi haun filteröinti metodi mutta muuten sovellus on mielestäni hyvä. Javascriptin käyttö ja DOM-skriptaus alkoi myösvähän sujua paremmin ja API:n käytöstä opin paljon. Oma arvio projektista on mielestäni 8.5/10.


## Lähteet
- **API:n lähde:** [CheapShark API](https://apidocs.cheapshark.com/)

- Bootstrap: käytetty sovelluksen tyylin muokkauksessa css:ään.

- Tekoälyä käytetty, Google Gemini
Tekoälyä käytettiin apuna API:n kanssa ilmenneessä ongelmassa, kun hakutulosten saamisessa tuli ongelma. Tekoäly ehdotti encodeURIComponent liittämistä API linkkiin, jotta sovellus tunnistaisi käyttäjän syöttämät erikoismerkit ja välilyönnit ja muuttaisi ne URL-osoitteeseen sopivaan muotoon.
Tekoälyä käytettiin myös tarkistuksessa, ettei lopullisessa työssä ilmennyt koodivirheitä.
  




