import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import Logo from "../components/Logo"
import Section from "../components/Section"

const IndexPage = () => {
  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>Kik vagyunk?</h1>
          </div><br />
          <div>
            <h2>Húszezer ember az ország tízezer pontján egy teljes napon át.</h2>
          </div>
        </>
      }>
      <Section>
        <Logo width={192} />
      </Section>
      <Section>
        <h3>Kikből áll a 20k22 projekt?</h3>
        <p>A legkülönfélébb iparágakban dolgozó tapasztalt magyar szakemberek vagyunk. Közel száz fős csapatunk egy éve foglalkozik e kezdeményezéssel, ma már a Tiszta Választásokért Alapítvány önkénteseiként. Magyarország számos szegletében élő közreműködő tagjaink a kormányváltó pártokkal és számos civil szervezettel együttműködve a teljes folyamatot támogatják:</p>
        <ul>
          <li>a szükséges 20 ezer szavazatszámláló toborzását, képzését,</li>
          <li>szavazóköri beosztását és delegálási folyamatát,</li>
          <li>a választás napjának informatikai és egyéb önkéntes infrastruktúráját,</li>
          <li>valamint szükség esetén az esetleges rendellenességek regisztrálásának támogatását és a jogorvoslati folyamat koordinálását.</li>
        </ul>
        </Section>
        <Section>
        <h3>Miért fontos ez az ügy számunkra?</h3>
        <p>Bár a szavazatszámlálók felkészítését az eskütétel során hivatalos úton is és - magas színvonalon - civil szervezetek közreműködésével is segítik, a magyar választások lebonyolításának hiányosságaira, problémáira több független jelentés is rámutat. A 2018-as országgyűlési választásokat követően rendellenességek sorát tárták fel, ezek egyik oka az volt, hogy a szavazatszámláló bizottságok 40%-ában egyáltalán nem volt, vagy nem volt elegendő ellenzéki szavazatszámláló. Ezért nem valósult meg országszerte a választások lebonyolításának kiegyensúlyozott törvényességi felügyelete, hiszen nem minden szavazókörben képviselt minden oldalt 2-2 szavazatszámláló. A Tiszta Választásokért Alapítvány önkénteseiként azon dolgozunk, hogy 2-2 felkészült szavazatszámláló járuljon hozzá a választás törvényes lebonyolításához az ország 10 000 szavazókörében.</p>
        <p>Sajtómegkeresések: <a id="sajto-mailto" href="mailto:sajto@20k.hu">sajto@20k.hu</a></p>
        <p>További részletekről honlapunk <Link href="/gyik">“GYIK” (Gyakran Ismételt Kérdések)</Link> oldalán tájékozódhatsz.</p>
        <p>Ha itt nem kapnál választ a kérdésedre, írj nekünk: <a id="irj-nekunk-mailto" href="mailto:info@20k.hu">info@20k.hu</a></p>
        <p>Együttműködünk civil szervezetekkel. Az ezzel kapcsolatos megkereséseket ide várjuk: <a id="egyuttmukodes-mailto" href="mailto:egyuttmukodes@20k.hu">egyuttmukodes@20k.hu</a></p>
      </Section>
      <Section>
        <Image width={300} height={102.42} src="/tisztavalasztaslogo.png" />
        <p>A Tiszta Választásokért Alapítvány (TVA) célja, hogy elősegítse a magyar választások tisztaságát. A demokrácia alapja az, hogy az emberek dönthetnek a falu, a város, az ország és Európa sorsáról. A TVA abban segít, hogy ezeknek a választásoknak a tisztaságát mindenki meg tudja védeni. A TVA pártok alapítványaitól és magánemberektől érkező támogatásokból működik, de a pártok és az adományozók nem szólhatnak bele abba, amit csinálunk. A TVA munkatársai azon dolgoznak, hogy mindenki tisztában legyen a választási szabályokkal, valamint határozottan és bátran fel tudjon lépni a választási szabálytalanságok ellen.</p>
      </Section>
    </Layout>
  )
}

export default IndexPage
