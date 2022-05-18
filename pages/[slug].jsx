import Layout from '../components/Layout'
import Section from "../components/Section"
import { fetchAPI } from '../lib/graphQlApi'

const IndexPage = ({ page }) => {
  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>{page.cim}</h1>
          </div><br />
          {page.alcim && (
            <div>
              <h2>{page.alcim}</h2>
            </div>
          )}
        </>     
      }
    >
      <Section dangerouslySetInnerHTML={{ __html: page.tartalom?.html }} />
    </Layout>
  )
}

export default IndexPage

export const getStaticProps = async ({ params }) => {
  
  const response = await fetchAPI(`
    query ($slug: String!) {
      page(where: {url: $slug}){
        id
        cim
        alcim
        tartalom{
          html
        }
      }
    }
  `,
    { variables: { "slug": params.slug }}
  )


  return { props: response }
}

export const getStaticPaths = async () => {
  const response = await fetchAPI(`
    {
      pages(stage: ${process.env.GRAPHCMS_STAGE}){
        url
      }
    }
  `)

  return {
    paths: response.pages.map(({ url }) => ({ params: { slug: url }})),
    fallback: false,
  }
}
