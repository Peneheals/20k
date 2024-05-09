import Layout from '../components/Layout'
import Section from "../components/Section"
import YellowHeroInner from "../components/HeroInner/YellowHeroInner";

const IndexPage = () => {
  return (
    <Layout
      heroContent={
        <YellowHeroInner>
          <div>
            <h1>Süti szabályzat</h1>
          </div><br />
          <div>
            <h2>2021. 09. 18.</h2>
          </div>
        </YellowHeroInner>
      }>
      <Section>
        <div>
          <p>
            A Tiszta Választásokért Alapítvány (székhelye: 1085 Budapest, Baross utca 36. 3/5., adószám: 19063438-1-42, a továbbiakban: TVA, vagy adatkezelő) által üzemeltetetett www.20k.hu oldalon (továbbiakban: &quot;Honlap&quot;) ún. cookie-kat (magyarul: sütiket), illetve hasonló technológiai megoldásokat használ. Ezekre az alábbiakban összefoglalóan, mint cookie-kra, vagy sütikre hivatkozunk.
            A Honlap látogatása során Ön hozzájárulhat az oldalon alkalmazott sütik használatához a böngészési élmény javítása, illetve az érdeklődésének megfelelő, személyre szabott ajánlatok megjelenítése érdekében, bizonyos, az oldal működéséhez szükséges sütik azonban az Ön hozzájárulása nélkül is települnek. Ez az oldal tartalmazza az összes, sütik használatával kapcsolatos információt, amelyeket a Honlapon alkalmazunk.
          </p>
          <div>
            <h3>
              1. Süti (cookie) jelentése
            </h3>
            <p>
              A „süti” a webszerver által küldött, változó tartalmú, betűkből és számokból álló fájl, amely a felhasználó számítógépén rögzül és előre meghatározott ideig tárolódik. A süti lehetővé teszi, hogy webszerverünk felismerje a böngészésre használt eszközét, a weboldalon folytatott böngészési előzményeit. A sütik segítségével képet kaphatunk az adott felhasználó honlaplátogatási és internethasználati szokásairól, történetéről. A sütik nem tartalmaznak olyan adatot, amely által a weboldal látogatói azonosíthatóak, azok kizárólag a felhasználó számítógépének felismerésére alkalmasak.
              Amennyiben további információkra lenne szüksége a sütikről és működésükről, részletes leírásokat talál a www.allaboutcookies.org vagy a www.aboutcookies.org oldalon.
            </p>
          </div>
          <div>
            <h3>
              2. Az adatkezelés jogalapja
            </h3>
            <p>
              Honlapunk felkeresésekor az oldal adatokat gyűjt a fent írt sütik segítségével.
              A Honlap alapvető működést segítő sütik (“nélkülözhetetlen cookie-k”) kezelésének jogalapja az Európai Parlament és a Tanács (EU) 2016/679 Rendelet (továbbiakban: általános adatvédelmi rendelet, vagy GDPR) 6. cikk (1) bekezdés f) pontja. Az ebbe a körbe nem tartozó sütik esetében az adatkezelés jogalapja az általános adatvédelmi rendelet 6. cikk (1) bekezdés a) pontja szerint az érintett hozzájárulása, amely akként adható meg, hogy a Honlap felkeresésekor a felhasználó egy kattintással hozzájárul ezen, személyek azonosítására alkalmatlan sütik alkalmazásához.
              Amennyiben a felhasználó saját böngészőjében letiltja a sütik telepítését a számítógépére, vagy törli azokat, ezzel a weboldal (vagy bizonyos részei) használhatóságát korlátozhatja, az adott weboldalon korábban megadott beállításai elveszhetnek. Az 1. pontban említett honlapokon további információk találhatóak ebben a kérdéskörben is.
            </p>
          </div>

          <div>
            <h3>
              3. A honlapunkon használt sütik
            </h3>
            <h4>
              3.1. Nélkülözhetetlen sütik (cookie-k)
            </h4>
            <p>
              Ezen sütik ahhoz szükségesek, hogy a felhasználó navigálni tudjon az oldalak/aloldalak között, és adott esetben védett (pl. csak regisztrált felhasználók számára hozzáférhető) tartalmakat is elérjen.
            </p>
            <h4>
              3.2. Funkcionális sütik (cookie-k)
            </h4>
            <p>
              Ezek a sütik ahhoz szükségesek, hogy a felhasználó honlap-használati szokásairól információkat gyűjtsünk (pl. használt nyelv, űrlap kitöltés).
            </p>
            <h4>
              3.3 Google Analytics sütik (cookie-k)
            </h4>
            <p>
              Az így kapott információkat főként arra használjuk, hogy javítsuk, optimalizáljuk honlapunk működését, minél inkább felhasználóbaráttá téve azt.
            </p>
          </div>

          <div>
            <h3>
              4. Közösségi médiumok
            </h3>
            <p>
              Honlapunk többek között lehetőséget nyújt arra is, hogy a látogató megtekintse cégünket vagy felvegye velünk a kapcsolatot a Facebookon. A tőlünk független közösségi médiumok internetes adatgyűjtési gyakorlatára nincs és nem is lehet semmilyen befolyásunk.
              Amennyiben információhoz szeretne jutni ezen médiumok adatfelhasználásával kapcsolatban, javasoljuk, hogy olvassa el az érintett oldalak felhasználási- és adatvédelmi feltételeit.
            </p>
          </div>

          <div>
            <h3>
              5. Kezelt adatok köre
            </h3>
            <p>
              A sütik működése során az Ön alábbi személyes adatait kezeljük:
            </p>
            <ul>
              <li>süti (cookie) azonosító</li>
              <li>IP-cím – azonosításra alkalmatlan formában (IP-maszkolással)</li>
              <li>eszközspecifikus adatok (hardver, operációs rendszer, etc.)</li>
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
