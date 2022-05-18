import styled from "styled-components"

const Box = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 12px 32px 24px;
  box-shadow: -4px 4px 0 0 ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;

  h2 {
    margin-top: 10px;
  }
`

export default Box
