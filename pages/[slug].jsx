import Layout from '../components/Layout'
import Section from "../components/Section"
import { fetchAPI } from '../lib/graphQlApi'
import YellowHeroInner from "../components/HeroInner/YellowHeroInner";

const IndexPage = ({ page }) => {
  return (
    <Layout
      heroContent={
        <YellowHeroInner>
          <div>
            <h1>{page.cim}</h1>
          </div><br />
          {page.alcim && (
            <div>
              <h2>{page.alcim}</h2>
            </div>
          )}
        </YellowHeroInner>
      }
    >
      <Section dangerouslySetInnerHTML={{ __html: page.tartalom?.html }} />
    </Layout>
  )
}

export default IndexPage

export const getStaticProps = async ({ params }) => {
  const response = await fetchAPI(`
    query SinglePage($campaign: [Campaigns!], $stage: Stage!, $url: String!) {
      pages(where: {campaigns: $campaign, url: $url}, stage: $stage) {
       id
        cim
        alcim
        tartalom{
          html
        }
      }
    }
  `,
    {
      variables: {
        "stage": process.env.GRAPHCMS_STAGE,
        "campaign": [process.env.NEXT_PUBLIC_CAMPAIGN],
        "url": params.slug
      }
    }
  )

  return { props: { page: response.pages[0] } }
}

export const getStaticPaths = async () => {
  const response = await fetchAPI(`
    query AllPages($campaign: [Campaigns!], $stage: Stage!) {
      pages(where: {campaigns: $campaign}, stage: $stage) {
        id
        url
      }
    }
  `,
    {
      variables: {
        "stage": process.env.GRAPHCMS_STAGE,
        "campaign": [process.env.NEXT_PUBLIC_CAMPAIGN],
      }
    })

  return {
    paths: response.pages.map(({ url }) => ({ params: { slug: url }})),
    fallback: false,
  }
}
