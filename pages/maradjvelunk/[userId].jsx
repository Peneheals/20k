import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'

const SaveConsent = () => {
  const router = useRouter()
  const { userId } = router.query
  const [result, setResult] = useState(null)
  useEffect(() => {
    if (!userId) return
    fetch(`/api/consent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    })
      .then((r) => r.json())
      .then((result) => setResult(result))
      .catch((err) => setResult({ success: false, err }))
  }, [userId])

  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>MARADJUNK KAPCSOLATBAN</h1>
          </div>
          <br />
          <div>
            <h2>Hozzájárulás a kapcsolat megőrzéséhez</h2>
          </div>
        </>
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 32,
          alignItems: 'center',
        }}
      >
        {result?.success && <h2>Köszönjük, hogy velünk maradsz!</h2>}
        {result?.success === false && <h2>Valami hiba történt :(</h2>}
        {!result && 'Mentés...'}
      </div>
    </Layout>
  )
}

export default SaveConsent
