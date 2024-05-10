import Layout from '../components/Layout'
import Section from "../components/Section"
import { fetchAPI } from '../lib/graphQlApi'
import markdownToHtml from '../lib/markdownToHtml'
import YellowHeroInner from "../components/HeroInner/YellowHeroInner";

const IndexPage = ({ faqs }) => {

  return (
    <Layout
      heroContent={
        <YellowHeroInner>
          <div>
            <h1>GYIK</h1>
          </div><br />
          <div>
            <h2>Gyakran Ismételt Kérdések</h2>
          </div>
        </YellowHeroInner>
      }>
        {
          faqs.map(({ question, answer, valaszHtml, id }) => (
            <Section key={id}>
              <h2>{question}</h2>
              <div dangerouslySetInnerHTML={{ __html: valaszHtml?.html || answer }} />
            </Section>
          ))
        }
    </Layout>
  )
}

export default IndexPage

export const getServerSideProps = async () => {
  const response = await fetchAPI(`
    query {
      faqs(stage: ${process.env.GRAPHCMS_STAGE}, locales: [hu], where: {campaigns: ${process.env.NEXT_PUBLIC_CAMPAIGN}}) {
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

  console.log(faqs)

  return { props: {
    faqs
  } }
}
