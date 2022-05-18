import Image from 'next/image'
import Layout from '../components/Layout'
import Section from "../components/Section"

const IndexPage = () => {
  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>Üvegzseb</h1>
          </div><br />
          <div>
            <h2>Támogatások felhasználása.</h2>
          </div>
        </>
      }>
        <Section>
          <iframe style={{ border: 'none' }} width="100%" height="700" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR8fvDji0gIBkNHjQw7YkvVz0lLw1knIyBW-KV3FMLHSdfeKnO_FcfjcRCYhGM-XKU8q3V-Zj9kNt22/pubhtml?gid=1626082487&amp;single=true&amp;widget=true&amp;headers=false"></iframe>                  
        </Section>
        <Section>
      </Section>
    </Layout>
  )
}

export default IndexPage
