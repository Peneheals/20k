import styled from "styled-components"
import Link from 'next/link'
import Layout from '../components/Layout'
import Section from "../components/Section"
import Button from "../components/Button"
import Row from "../components/Row"
import Column from "../components/Column"
import Box from "../components/Box"
import YellowHeroInner from "../components/HeroInner/YellowHeroInner";

const InfoBox = styled(Box)`
  width: 100%;
  margin-bottom: 32px;

  button {
    margin: 12px 0;
    width: 100%;
    background-image: none;
    padding: 12px 16px 12px 16px;
  }
`

const IndexPage = () => {
  return (
    <Layout
      heroContent={
        <YellowHeroInner>
          <div>
            <h1>Támogasd te is a demokrácia őreit!</h1>
          </div>
          <div>
            <h2>Támogasd a 20k22 erőfeszítéseit, hogy még több emberhez eljussunk!</h2>
          </div>
        </YellowHeroInner>
      }>
      <Section>
        <Row>
          <Column width={12}>
            <h2>Támogasd te is a 20k22 erőfeszítéseit!</h2>
            <h3>Hogyan tudsz segíteni?</h3>

            <p>Kétféle módon tudod támogatni a munkánkat:</p>
            <ul>
              <li>bankkártyás fizetéssel Stripe-on keresztül, amely az alábbi kártyatípusokat képes kezelni: Visa, Mastercard, Maestro, American Express, ApplePay és GooglePay, vagy </li>
              <li>banki átutalással, amihez az átutalási adatokat és instrukciókat a keretes blokkban találod.</li>
            </ul>

            <p><strong>Köszönjük a támogatást és azt is, ha megosztod a lehetőséget az ismerőseiddel!</strong></p>
          </Column>
        </Row>
        <Row>
          <Column width={7}>
            <h3>Támogatási célok</h3>
            <p>Az alábbiakban megmutatjuk, mire lehet elegendő az adományod:</p>
            <ul>
              <li>5 000 forintból több mint 50 főt érünk el online hirdetésekkel, amiből legalább 5 új szavazatszámlálóval leszünk közelebb a célhoz.</li>
              <li>10 000 forintból legalább 10 új szavazatszámlálót,  </li>
              <li>25 000 forintból pedig legalább 25 új szavazatszámlálót toborozhatunk.</li>
            </ul>
            <p>Ahhoz, hogy elérjük a célunkat, minden segítségre szükség van!</p>

            <br /><br />
            <h3>Üvegzseb</h3>

            <p>A támogatások felhasználásáról rendszeresen frissülő riportot készítettünk, ugyanis hiszünk a transzparencia intézményében. </p>

            <p>Az eddig beérkezett és felhasznált támogatásokról szóló beszámolót az alábbi linkre kattintva érheted el: <Link href="/uvegzseb">20k.hu/uvegzseb</Link></p>
          </Column>
          <Column width={5}>
            <InfoBox>
              <h3>Támogatás online fizetéssel (bankkártya, hitelkártya)</h3>
              <a href="https://buy.stripe.com/bIY7tRenc97WagU4gh" target="_blank" rel="noopener">
                <Button>Egyszeri 5000 forint támogatás</Button>
              </a>
              <a href="https://buy.stripe.com/cN25lJgvk83S60E7su" target="_blank" rel="noopener">
                <Button>Egyszeri 10000 forint támogatás</Button>
              </a>
              <a href="https://buy.stripe.com/fZe9BZ7YO6ZOgFi6or" target="_blank" rel="noopener">
                <Button>Egyszeri 25000 forint támogatás</Button>
              </a>
            </InfoBox>
            <InfoBox>
              <h3>Támogatás banki utalással</h3>
              <strong>Kedvezményezett neve:</strong> Tiszta Választásokért Alapítvány<br />
              <strong>Számlaszám:</strong> 12100011-17530279<br />
              <strong>IBAN:</strong> HU10&nbsp;1210&nbsp;0011&nbsp;1753&nbsp;0279&nbsp;0000&nbsp;0000<br />
              <strong>BIC:</strong> GNBAHUHB<br />
              <strong>BANK:</strong> Gránit Bank Zrt.<br />
              A közlemény rovatba tüntesd fel a következőket: "adomány - 20k22"
            </InfoBox>
          </Column>
        </Row>
        <div>
          <h2>Támogatási feltételek</h2>
          <p>
            A Tiszta Választásokért Alapítvány a céljaival egyetértő, magyar állampolgársággal rendelkező természetes személyektől és a Magyarországon bejegyzett, illetve közvetlenül vagy közvetetten kizárólag magyar állampolgársággal rendelkező természetes személyek tagságával működő jogi személyektől pénzbeli adományt fogad el.<br />
            Az átláthatóság érdekében az egymillió forint feletti adományok összegét az adományozók nevével együtt a honlapon közzétesszük.<br />
            Az adományozó az Alapítvány működésére sem közvetlenül, sem közvetetten nem gyakorolhat befolyást, alapítói vagy csatlakozói jogokat nem érvényesíthet.<br />
            Az adomány az adományozónak, az adományozó tagjának vagy részvényesének, vezető tisztségviselőjének, felügyelő bizottsága vagy igazgatósága tagjának, könyvvizsgálójának, illetve ezen személyek vagy a természetes személy tag vagy részvényes közeli hozzátartozójának vagyoni előnyt nem jelent.<br />
            Az adományozással a fenti feltételeket az adományozó magára nézve kötelezőnek fogadja el.
          </p>
          </div>
        </Section>
        <Section>
          <br />
          <Box>
            <h2>Jelentkezz</h2>
            <p>Jelentkezz szavazatszámlálónak, és támogasd munkáddal a demokráciát! Célunk, hogy 2022-ben minden szavazókörben legalább kettő, az ellenzéki összefogást támogató szavazatszámláló őrködjön a szavazás tisztasága felett.</p>
            <Link href="/jelentkezz">
              <Button>Jelentkezz!</Button>
            </Link>
          </Box>
      </Section>
    </Layout>
  )
}

export default IndexPage
