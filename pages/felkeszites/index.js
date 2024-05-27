import React from 'react'
import { modulok } from '../../lib/kepzes-modulok'
import Layout from '../../components/Layout'
import TrainingIntro from '../../components/KepzesPage/TrainingIntro'
import YellowHeroInner from '../../components/HeroInner/YellowHeroInner'
import Section from '../../components/Section'
import ModuleList from '../../components/KepzesPage/ModuleList'

export default function KepzesPage() {
  return (
    <Layout
      heroContent={
        <YellowHeroInner>
          <div>
            <h1>Felkészítés</h1>
          </div>
          <br />
          <div>
            <h2>Hogy ne menj feltartott kézzel</h2>
          </div>
        </YellowHeroInner>
      }
    >
      <Section>
        <TrainingIntro />
      </Section>
      <Section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ModuleList modulok={modulok} />
        </div>
      </Section>
    </Layout>
  )
}
