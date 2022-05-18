import { useEffect } from "react"
import Layout from "../Layout"
import Section from "../Section"
import RegButton from "../RegButton"
import RegButtonHeader from "../RegButtonHeader"

const JelentkezzPage = ({ refId }) => {
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
              <h1>Jelentkezz</h1>
            </RegButtonHeader>
          </div><br />
          <div>
            <h2>Megérdemeljük, hogy egy olyan országban éljünk, ahol megbízhatunk a választások eredményében!</h2>
          </div>
        </>
      }>
      <Section>
        <h2>
          Jelentkezz szavazatszámlálónak, hogy sikerüljön!
        </h2>
        <p>Az április 3-i választásokon szükségünk van húszezer lelkes és tettrekész szavazatszámlálóra. Légy te is egy a 20k-ból, segítsd munkáddal a szavazókörök tevékenységét és a tiszta választásokat. Regisztrálj hatpárti közös szavazatszámlálónak! Munkatársaink hamarosan felveszik veled a kapcsolatot, és ismertetik a további lépéseket.</p>
        <br />
        <RegButton refId={refId} />
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

export default JelentkezzPage
