import { GraphQLClient, gql } from 'graphql-request'

const HASURA_URL = process.env.HASURA_URL
const HASURA_SECRET = process.env.HASURA_SECRET

const hasura = new GraphQLClient(HASURA_URL, {
  headers: { 'x-hasura-admin-secret': HASURA_SECRET },
})

const SAVE = gql`
  mutation savePJK($userId: uuid!, $pType: String!) {
    insert_jk_problems_one(
      object: { user_id: $userId, problema_type: $pType }
      on_conflict: {
        constraint: jk_problems_pkey
        update_columns: [problema_type]
      }
    ) {
      user_id
      problema_type
    }
  }
`

export default async function handler(req, res) {
  try {
    const { userId, pType } = req.body
    const result = await hasura.request(SAVE, { userId, pType })
    console.log('result', result)
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(200).json({ success: false })
  }
}
