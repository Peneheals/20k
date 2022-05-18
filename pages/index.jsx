import SeparatorBanner from "../components/SeparatorBanner"
import Layout from '../components/Layout'
import Section from "../components/Section"
import Link from 'next/link'
import Button from "../components/Button"

const IndexPage = () => {
  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>Köszönjük</h1>
          </div>
          <br /><br />
          <div>
            <h2>hogy húszezren ott voltatok és felügyeltétek a tiszta választásokat!</h2>
          </div>
        </>
      }>
      <SeparatorBanner>
        <li>Megszervezzük</li>
        <li>Biztosítjuk</li>
        <li>Felügyeljük</li>
        <li>Megszámoljuk</li>
        <li>Közzétesszük</li>
      </SeparatorBanner>

      <Section>
      <h2>KÖSZÖNJÜK!</h2>
      <p>Rengetegen részt vettetek a közös cél elérésében, rengeteg időt és energiát szántatok rá, hogy őrködjetek a választások tisztasága felett.</p>
      <p><strong>NAGYON, NAGYON KÖSZÖNJÜK NEKTEK, mindenkinek külön-külön és együtt is!</strong></p>
      <ul>
        <li>Köszönjük a közel 300 koordinátornak, hogy az utolsó időszakban éjt nappallá téve kommunikáltak mindenkivel minden irányban.</li>
        <li>Köszönjük a szavazatszámlálóknak, hogy hittek a kezdeményezésben, jelentkeztek, végigcsinálták a folyamatot, és akár  akik 2x500 km-t is utaztak az eskütétellel együtt, hogy jelen lehessenek egy-egy tőlük távoli helységben.</li>
        <li>Nagyon köszönjük azoknak is, akik jelentkeztek szavazatszámlálónak, szintén végigcsinálták a folyamatot, de a túljelentkezés miatt végül nem volt lehetőségük aktívan részt venni a számolásban.</li>
        <li>Köszönjük a 20k22 több mint 130 civil önkéntesének, akik összesen több mint 60.000 órát dolgoztak az elmúlt másfél évben a cél megvalósításán. Köszönjük a jogászoknak, IT-soknak, service designereknek, fejlesztőknek, kommunikációs szakembereknek, ügyfélszolgálatosoknak, hogy a saját munkájuk mellett végezték ezeket a feladatokat is.</li>
        <li>Köszönjük azoknak, akiknek lehetőségük volt és anyagilag támogatták a kezdeményezést, hogy az elkerülhetetlen kiadásokat fedezni tudjuk.</li>
      </ul>
      <p><strong>Sokat tettetek a demokráciáért!<br />
      a 20k22 csapata</strong></p>
      </Section>

      <Section>
        <h2>
          Jelentsd, ha választási visszaélést tapasztalsz!
        </h2>
        <h4>
          Ezzel is sokat tehetsz a választási kampány és a szavazás tisztaságáért.
        </h4>
        <p>
          Az országgyűlési választás a demokrácia ünnepe - feltéve, hogy tisztességesen zajlik. Ez viszont mindannyiunkon múlik. A szavazatszámlálók a szavazókörökben dolgoznak ennek érdekében, viszont addig is bárki belefuthat a választási kampány szabályait sértő történésekbe, vagy akár április 3-án a szavazókörök közelében adódó gyanús helyzetekbe.
        </p>
        <p>
          Járj te is nyitott szemmel és jelezd nekünk, ha rendellenességet tapasztalsz!
        </p>

        <a href="https://visszaeles.20k.hu/" target="_blank" rel="noreferrer">
          <Button secondary>Bejelentést teszek!</Button>
        </a>
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
