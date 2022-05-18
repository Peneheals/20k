import styled from "styled-components";

const Column = styled.div`
  width: ${({ width }) => `${100 / 12 * width}%`};
`

export default Column
