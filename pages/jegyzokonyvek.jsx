import { useState } from 'react'
import Select from 'react-select'
import Image from 'next/image'
import Layout from '../components/Layout'
import { fetchHasura } from '../lib/graphQlApi'

const extenstionRe = /[^\.]+$/gm

const JegyzokonyvPage = ({ oevk }) => {
  const oevkOptions = oevk.map((o) => ({
    value: o.voting_district_short_name,
    label: o.voting_district_name,
  }))
  const [selectedOevk, setSelectedOevk] = useState(null)

  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>JEGYZŐKÖNYVEK</h1>
          </div>
          <br />
          <div>
            <h2>Feltöltött jegyzőkönyvek listája</h2>
          </div>
        </>
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 32,
        }}
      >
        <Select
          options={oevkOptions}
          onChange={(e) => setSelectedOevk(e.value)}
          placeholder="Válassz OEVK-t"
        />
        {oevk
          .find((o) => o.voting_district_short_name === selectedOevk)
          ?.voting_locations.map((vl) => (
            <VotingLocation key={vl.id} voting_location={vl} />
          ))}
      </div>
    </Layout>
  )
}

const VotingLocation = ({ voting_location }) => {
  const urls = voting_location.user_2_voting_locations
    .flatMap((u2vl) =>
      u2vl.user.pwa_journey_answers.flatMap((pja) => pja.text?.split(','))
    )
    .filter((v) => v)
  return (
    <div
      style={{ marginLeft: 8, marginRight: 8, marginTop: 16, marginBottom: 16 }}
    >
      {voting_location.town.town_name}, szavazókör:{' '}
      {voting_location.location_number}
      <br />
      {urls.length === 0 ? (
        <div style={{ color: 'grey', marginLeft: 8 }}>
          Még nincsenek jegyzőkönyvek
        </div>
      ) : (
        urls.map((url, i) => {
          const extension = url.match(extenstionRe)?.[0]
          const name = `${voting_location.id}_${i}`
          const download = `${name}.${extension}`
          return (
            <a
              key={i}
              href={url}
              style={{ margin: 8 }}
              target="_blank"
              rel="noreferrer"
              download={download}
            >
              Feltöltés #{i + 1}
            </a>
          )
        })
      )}
    </div>
  )
}

export default JegyzokonyvPage

export const getStaticProps = async () => {
  const response = await fetchHasura(
    `
  query getMedia($jqid: uuid!) {
    oevk(where:{voting_district_short_name:{_neq:"TST01"}}) {
      voting_district_name
      voting_district_short_name
      voting_locations {
        id
        town {
          town_name
        }
        location_number
        user_2_voting_locations(where: {type: {_eq: accepted}, user:{pwa_journey_answers:{pwa_journey_question_id:{_eq:$jqid}}}}) {
          user {
            pwa_journey_answers(where: {pwa_journey_question_id: {_eq: $jqid}}) {
              text
            }
          }
        }
      }
    }
  }
  `,
    { variables: { jqid: '6e74621b-b8ed-4468-bf04-3ef057494ea0' } }
  )

  return { props: { oevk: response.oevk }, revalidate: 30 }
}
