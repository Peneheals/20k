import { useEffect } from 'react'
import Layout from "../Layout"
import Section from "../Section"
import RegButton from "../RegButton"
import RegButtonHeader from "../RegButtonHeader"

const KoordinatorPage = ({ refId }) => {
  useEffect(() => {
    if (refId) {
      sessionStorage.setItem('refId', refId)
    }
  }, [])

  return (
    <Layout
      heroContent={
        <>
          <div>
            <RegButtonHeader refId={refId}>
              <h1>Jelentkezz koordinátornak</h1>
            </RegButtonHeader>            
          </div><br />
          <div>
            <h2>Megérdemeljük, hogy egy olyan országban éljünk, ahol megbízhatunk a választások eredményében!</h2>
          </div>
          </>
      }>
      <Section>
        <h2>
          Jelentkezz helyi koordinátornak, hogy sikerüljön!
        </h2>
        <p>Az április 3-i választásokon szükségünk helyi koordinátorokra. Légy te is egy közülük, segítsd a szavazatszámlálók munkáját és ezzel a tiszta választásokat. Regisztrálj az alábbi űrlapon helyi koordinátornak! Munkatársaink hamarosan felveszik veled a kapcsolatot, és ismertetik a további lépéseket.</p>
        <br />
        <RegButton refId={refId} role="r106" />
      </Section>
      <Section>
        <p>Kövesd a <a href="https://www.facebook.com/20k22" target="_blank" rel="noopener">Facebook-oldalunkat</a> is.</p>
        <br />
        <br />
        <br />
      </Section>
    </Layout>
  )
}

export default KoordinatorPage
