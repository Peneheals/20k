import JelentkezzPage from "../../components/JelentkezzPage"
import { useRouter } from 'next/router'

const IndexPage = () => {
  const { query } = useRouter()

  return (
    <JelentkezzPage refId={query.params?.[0]} />
  )
}

export default IndexPage
