import Layout from '../components/Layout'
import Section from "../components/Section"
import Button from "../components/Button"

const Custom404 = () => {
  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>404</h1>
          </div><br />
          <div>
            <h2>A keresett oldal nem található</h2>
          </div>
        </>
      }
      >
      <Section>
        <p>Lehet, hogy elírtad a linket... de semmi gond. Menj vissza a kályhához.</p>
        <a href="/">
          <Button>Vissza a főoldalra</Button>
        </a>
      </Section>
    </Layout>    
  )
}

export default Custom404
