import styled from 'styled-components'
import ModuleListItem from './ModuleListItem'

const Wrap = styled.div`
  max-width: 700px;
  margin-top: 15px;
  margin-bottom: 15px;
`

export default function ModuleList({ modulok }) {
  return (
    <Wrap>
      <h3 style={{ textAlign: 'center' }}>Modulok</h3>
      {modulok.map((m) => (
        <ModuleListItem key={m.index} {...m} />
      ))}
    </Wrap>
  )
}
