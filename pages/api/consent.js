import { GraphQLClient, gql } from 'graphql-request'

const HASURA_URL = process.env.HASURA_URL
const HASURA_SECRET = process.env.HASURA_SECRET

const hasura = new GraphQLClient(HASURA_URL, {
  headers: { 'x-hasura-admin-secret': HASURA_SECRET },
})

const SAVE = gql`
  mutation setConsent($userId: uuid!, $consentAt: timestamptz!) {
    update_users_by_pk(
      pk_columns: { id: $userId }
      _set: { consent_at_ts: $consentAt }
    ) {
      id
      consent_at_ts
    }
  }
`

export default async function handler(req, res) {
  try {
    const { userId } = req.body
    await hasura.request(SAVE, { userId, consentAt: new Date() })
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(200).json({ success: false })
  }
}
