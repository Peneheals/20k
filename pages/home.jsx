import SeparatorBanner from "../components/SeparatorBanner"
import Layout from '../components/Layout'
import Section from "../components/Section"
import Image from "next/image";
import WhiteHeroInner from "../components/HeroInner/WhiteHeroInner";


const IndexPage = () => {
  return (
    <Layout
      heroContent={
        <WhiteHeroInner>
          <WhiteHeroInner.H1Outer>
            <h1>2022-ben és 2024-ben is számoltunk&thinsp;!</h1>
          </WhiteHeroInner.H1Outer>
          <WhiteHeroInner.H2Outer>
            <h2>Hamarosan jelentkezünk <br/>a további teendőkkel</h2>
          </WhiteHeroInner.H2Outer>
        </WhiteHeroInner>
      }>
      <SeparatorBanner>
        <li>Megszervezzük</li>
        <li>Biztosítjuk</li>
        <li>Felügyeljük</li>
        <li>Megszámoljuk</li>
        <li>Közzétesszük</li>
      </SeparatorBanner>

      <Section>
        <h2>Mi a 20k?</h2>
        <p>A 20k egy önkéntes szerveződés. Vállalt missziónk, hogy a választások során őrködjön a szavazás tisztasága felett. Legyen szó országgyűlési, európai parlamenti, vagy önkormányzati választásokról.</p>
        <p>Egy ország demokratikus működésének alapja, mondhatni minimuma a választások tisztasága, aminek egyik fontos garanciája a szavazás törvényességének minél szélesebb körű felügyelete a szavazatszámlálás által. </p>
        <p>Vállalt feladatunk a szavazatszámlálási folyamatának teljes támogatása. Ezek:</p>
        <ul>
          <li>szavazatszámlálók toborzása, képzése,</li>
          <li>a szavazóköri beosztás és delegálási folyamatának bonyolítása,</li>
          <li>a választás napjának informatikai és egyéb önkéntes infrastruktúrájának biztosítása,</li>
          <li>szükség esetén az esetleges rendellenességek regisztrálásának támogatása és a jogorvoslati folyamat koordinálása.</li>
        </ul>

        <p>2022-ben több, mint 20 ezer szavazatszámlálót toboroztunk, képeztünk és delegáltunk az ország 10 ezer pontjára!</p>
        <p>A szavazatszámlálás mellett a 20k közösség is egyben. 2022-ben a 20k közösségének 20 ezer számlálója az ország különböző szegletei és különböző politikai szimpátiájú emberek között igyekeztek hidat képezni. Az élmények nyomán egyéni és közös felismerések születtek, amelyeket felemelő volt veletek együtt átélni. Számunkra fontos, hogy megőrizzük ezt a közösséget!</p>
      </Section>

      <Section>
        <h2>
          Kik vagyunk?
        </h2>
        <p>
          A legkülönfélébb iparágakban dolgozó, az ország és a világ különböző pontjain élő tapasztalt magyar szakemberek vagyunk. Csapatunk tagjai a Tiszta Választásokért Alapítvány önkéntesei.
        </p>

        <Image alt="tiszta valasztasokert alapitvany logo" width={300} height={102.42} src="/tisztavalasztaslogo.png" />
        <p>
          A Tiszta Választásokért Alapítvány (TVA) célja, hogy elősegítse a magyar választások tisztaságát. A demokrácia alapja az, hogy az emberek dönthetnek a falu, a város, az ország és Európa sorsáról. A TVA abban segít, hogy ezeknek a választásoknak a tisztaságát mindenki meg tudja védeni. A TVA pártok alapítványaitól és magánemberektől érkező támogatásokból működik, de a pártok és az adományozók nem szólhatnak bele abba, amit csinálunk. A TVA munkatársai azon dolgoznak, hogy mindenki tisztában legyen a választási szabályokkal, valamint határozottan és bátran fel tudjon lépni a választási szabálytalanságok ellen.
        </p>
        <br />
      </Section>


    </Layout>
  )
}

export async function getServerSideProps(){
  return { props: {
      foo: 'bar'
    } }
}

export default IndexPage
