import Layout from '../components/Layout'
import Section from "../components/Section"
import { fetchAPI } from '../lib/graphQlApi'
import YellowHeroInner from "../components/HeroInner/YellowHeroInner";

const IndexPage = ({ videomessages }) => {
  return (
    <Layout
      heroContent={
        <YellowHeroInner>
          <div>
            <h1>Videóüzenetek</h1>
          </div><br />
          <div>
            <h2>Szavazatszámlálókat kérdeztünk</h2>
          </div>
        </YellowHeroInner>
      }
    >
      <Section>
        <p>Rengetegen csatlakoztak a 20k22 kezdeményezéshez, hogy az április 3-i választáson 2-2 felkészült civil szavazatszámláló járuljon hozzá a választások törvényes lebonyolításához az ország 10 000 szavazókörében. Most ők mondják el, miért vállalták ezt a feladatot. Elmondod Te is?</p>
      </Section>
      {
        videomessages.map(({ vialogId }) => (
          <Section key={vialogId}>
            <a name={`vialog-${vialogId}`}></a><script async src="https://ui.vialog.io/vialog-loader.js" data-vialog={vialogId} data-lang="hu" />
          </Section >
        ))
      }
    </Layout>
  )
}

export default IndexPage

export const getStaticProps = async ({ params }) => {
  
  const response = await fetchAPI(`
    {
      videomessages{
        cim
        vialogId
      }
    }
  `
  )


  return { props: response }
}
