import Layout from '../../components/Layout'
import Section from "../../components/Section"
import RegButton from '../../components/RegButton'

const VerifyPage = () => {
  return (
    <Layout>
      <Section>
        <h2>Regisztráció folytatása</h2>
        <p>Úgy tűnik egy régi email-visszaigazoló linkre nyomtál rá.</p>
        <p>Sebaj, folytasd regisztrációdat részletes adataid megadásával a lenti linken:</p>

        <RegButton />
      </Section>
    </Layout>
  )
}

export default VerifyPage
