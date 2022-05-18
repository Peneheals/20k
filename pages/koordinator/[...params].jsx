import KoordinatorPage from "../../components/KoordinatorPage"
import { useRouter } from 'next/router'

const IndexPage = () => {
  const { query } = useRouter()

  return (
    <KoordinatorPage refId={query.params?.[0]} />
  )
}

export default IndexPage
