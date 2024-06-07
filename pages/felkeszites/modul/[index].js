import React from 'react'
import { useRouter } from 'next/router'
import { modulok } from '../../../lib/kepzes-modulok'
import Layout from '../../../components/Layout'
import YellowHeroInner from '../../../components/HeroInner/YellowHeroInner'
import Section from '../../../components/Section'
import Button from '../../../components/Button'
import KepzesFrame from '../../../components/KepzesPage/KepzesFrame'
import Questions from '../../../components/KepzesPage/Questions'
import Link from 'next/link'

export default function ModulePage() {
  const router = useRouter()
  const { index } = router.query
  const indexNum = parseInt(index)
  const { title, url, questions } = modulok?.find((m) => m.index == index) || {}
  const [showQuestions, setShowQuestions] = React.useState(false)
  if (!title) return null

  return (
    <Layout
      heroContent={
        <YellowHeroInner>
          <div>
            <h1>{title}</h1>
          </div>
          <br />
          <div>
            <h2>{index}. modul</h2>
          </div>
        </YellowHeroInner>
      }
    >
      <Section>
        <div style={{ marginBottom: 20 }}>
          <Link href="/felkeszites">vissza a modullistára</Link>
        </div>
        {showQuestions ? (
          <Questions questions={questions} />
        ) : (
          <KepzesFrame url={url} />
        )}

        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ marginRight: 20 }}>
            <Button secondary onClick={() => setShowQuestions(!showQuestions)}>
              {showQuestions ? 'Képzési anyag' : 'Kérdések és válaszok'}
            </Button>
          </div>
          {modulok.length > indexNum && (
            <Button
              secondary
              onClick={() => {
                setShowQuestions(false)
                router.push(`/felkeszites/modul/${1 + indexNum}`)
              }}
            >
              Következő modul
            </Button>
          )}
          <div style={{ marginLeft: 20 }}>
            <Link passHref href="/letoltesek/szszb-osszefoglalo.pdf" target="_new">
              <Button negative>
                Nyomtatható verzió
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
