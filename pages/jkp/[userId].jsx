import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
// import { fetchHasura } from '../../lib/graphQlApi'

const JKProblema = () => {
  const router = useRouter()
  const { userId } = router.query
  const [pType, setPType] = useState(null)
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(null)
  const handleOnChange = (e) => setPType(e.target.value)
  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/jkp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, pType }),
      })
      const json = await response.json()
      if (json.success) setSuccess(true)
      else setErr(true)
    } catch (error) {
      console.error(error)
      setErr(true)
    }
  }

  if (err) return <ErrorState />

  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>JEGYZŐKÖNYV PROBLÉMÁK</h1>
          </div>
          <br />
          <div>
            <h2>Problémás jegyzőkönyv visszajelzések</h2>
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
        {success ? (
          <>
            <h2>Köszönjük a jelzést</h2>
          </>
        ) : (
          <>
            <h2>Mivel volt probléma?</h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                marginBottom: 16,
              }}
            >
              <input
                type="radio"
                name="pType"
                id="egyeni"
                value="egyeni"
                onChange={handleOnChange}
              />
              <label htmlFor="egyeni">Egyéni eredményekkel</label>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                marginBottom: 16,
              }}
            >
              <input
                type="radio"
                name="pType"
                id="lista"
                value="lista"
                onChange={handleOnChange}
              />
              <label htmlFor="lista">Listás eredményekkel</label>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                marginBottom: 16,
              }}
            >
              <input
                type="radio"
                name="pType"
                id="mindketto"
                value="mindketto"
                onChange={handleOnChange}
              />
              <label htmlFor="mindketto">Mindkét eredménnyel</label>
            </div>
            <br />
            {pType && (
              <div onClick={handleSubmit}>
                <Button submit>Mentés</Button>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  )
}

export default JKProblema

function ErrorState() {
  return (
    <Layout
      heroContent={
        <>
          <div>
            <h1>JEGYZŐKÖNYV PROBLÉMÁK</h1>
          </div>
          <br />
          <div>
            <h2>Problémás jegyzőkönyv visszajelzések</h2>
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
        Sajnos valami hiba történt, próbáld meg újratölteni az oldalt.
      </div>
    </Layout>
  )
}
