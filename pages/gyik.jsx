import Layout from '../components/Layout'
import Section from "../components/Section"
import { fetchAPI } from '../lib/graphQlApi'
import markdownToHtml from '../lib/markdownToHtml'

const IndexPage = ({ faqs }) => {

  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>GYIK</h1>
          </div><br />
          <div>
            <h2>Gyakran Ismételt Kérdések</h2>
          </div>
        </>
      }>
        {
          faqs.map(({ question, answer, valaszHtml }) => (
            <Section>
              <h2>{question}</h2>
              <div dangerouslySetInnerHTML={{ __html: valaszHtml?.html || answer }} />
            </Section>
          ))
        }
    </Layout>
  )
}

export default IndexPage

export const getStaticProps = async () => {
  const response = await fetchAPI(`
    query {
      faqs(stage: PUBLISHED, locales: [hu]) {
        id
        question
        answer
        valaszHtml{
          html
        }
      }
    }
  `)


  const faqs = await Promise.all(response.faqs.map(async faq => ({ 
    ...faq,
    answer: await markdownToHtml(faq.answer),
  })))

  return { props: {
    faqs
  } }
}
