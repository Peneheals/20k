import Button from '../Button'
import { useRouter } from 'next/router'

export default function ModuleListItem({ index, title }) {
  const router = useRouter()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}
    >
      <p>
        {index}. modul - {title}
      </p>
      <Button
        style={{ marginLeft: 20 }}
        onClick={() => router.push(`/kepzes/modul/${index}`)}
      >
        Kezdés
      </Button>
    </div>
  )
}
