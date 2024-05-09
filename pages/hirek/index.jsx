import Button from '../../components/Button'
import Cimke from '../../components/Cimke'
import Layout from '../../components/Layout'
import Section from "../../components/Section"
import { fetchAPI } from '../../lib/graphQlApi'
import Link from 'next/link'
import NewsTopWrap from '../../components/NewsTopWrap'
import YellowHeroInner from "../../components/HeroInner/YellowHeroInner";

const IndexPage = ({ newss }) => {

  return (
    <Layout
      heroContent={
        <YellowHeroInner>
          <div>
            <h1>Hírek</h1>
          </div><br />
          <div>
          </div>
        </YellowHeroInner>
      }>
        {
          newss.map(({ id, cim, url, date, bevezeto, labels }) => (
            <Section key={id}>
              <NewsTopWrap>
                <div style={{ marginTop: 8 }}>
                  {labels.map(({ id, cim }) => (
                    <Cimke key={id}> #{cim}</Cimke>
                  ))}
                </div>
                <div>{date}</div>
              </NewsTopWrap>
              <h2>{cim}</h2>
              <div dangerouslySetInnerHTML={{ __html: bevezeto }} />
              <br />
              <Link href={`/hirek/${url}`}>
                <Button>Bővebben</Button>
              </Link>
            </Section>
          ))
        }
    </Layout>
  )
}

export default IndexPage

export const getStaticProps = async () => {
  const response = await fetchAPI(`
    {
      newss(stage: PUBLISHED, locales: [hu], orderBy: date_DESC) {
        id
        cim
        url
        bevezeto
        date
        labels {
          ... on Label {
            id
            cim
          }
        }
      }
    }  
  `)

  return { props: {
    newss: response.newss
  } }
}
