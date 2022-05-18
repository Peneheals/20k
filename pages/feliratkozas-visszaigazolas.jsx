import { useEffect } from 'react'
import Layout from '../components/Layout'
import Section from "../components/Section"
import * as fbq from '../lib/fpixel'

const IndexPage = () => {
  useEffect(() => fbq.event('CompleteRegistration'), [])

  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>Regisztráció visszaigazolás</h1>
          </div><br />
          <div>
            <h2>Köszönjünk!</h2>
          </div>
        </>     
      }>
      <Section>
        <h3>Köszönjünk, hogy az email címedet megerősítetted.</h3>
        <p>Kövess, lájkold <a href="https://facebook.com/20k22" target="_blank" rel="noopener">Facebook oldalunkat</a>, oszd meg ismerőseiddel, hogy minél több emberhez eljusson a hírünk.</p>
        </Section>

    </Layout>
  )
}

export default IndexPage
