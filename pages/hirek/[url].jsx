import Cimke from '../../components/Cimke'
import Layout from '../../components/Layout'
import Section from "../../components/Section"
import { fetchAPI } from '../../lib/graphQlApi'
import { useRouter } from 'next/router'
import NewsTopWrap from '../../components/NewsTopWrap'
import NewsBody from '../../components/NewsBody'

const IndexPage = ({ news }) => {
  const router = useRouter()

  return (
    <Layout
      ogImage={{
        url: news.ogImage?.url,
        type: news.ogImage?.mimeType,
        width: news.ogImage?.width,
        height: news.ogImage?.height,
        alt: 'hands and ballot papers'
      }}
      metaTitle={news.cim}
      metaDescription={news.metaDescription}
    >
      <br />
      <Section>
        <a onClick={() => router.back()} style={{ cursor: 'pointer' }}>
          &lt; Összes hír
        </a>
        <br />
        <br />
        <br />
        <NewsTopWrap>
          <div>
            {news.labels.map(({ id, cim }) => (
              <Cimke key={id}> #{cim}</Cimke>
            ))}
          </div>
          <div>{news.date}</div>
        </NewsTopWrap>
        <h2>{news.cim}</h2>
        <NewsBody dangerouslySetInnerHTML={{ __html: news.tartalom?.html }} />
        <br />
      
      </Section>
    </Layout>
  )
}

export default IndexPage

export const getStaticProps = async ({ params }) => {
  const response = await fetchAPI(`
    {
      news(stage: PUBLISHED, locales: [hu], where: { url: "${params.url}" }) {
        id
        cim
        date
        tartalom {
          html
        }
        ogImage {
					fileName
          url
          width
          height
          mimeType
        }
        metaDescription
        labels {
          ... on Label {
            id
            cim
          }
        }        
      }
    }
  `)

  return {
    props: response
  }
}

export const getStaticPaths = async () => {
  const response = await fetchAPI(`
    {
      newss(stage: PUBLISHED, locales: [hu]) {
        url
      }
    }  
  `)

  return {
    paths: response.newss.map(({ url }) => ({
      params: { url }
    })),
    fallback: false,    
  }
}

