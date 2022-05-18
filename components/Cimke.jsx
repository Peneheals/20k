import styled from "styled-components";

const Cimke = styled.span`
  ${({ theme }) => `
    background-color: ${theme.colors.secondary};
  `}
  padding: 4px 8px;
  margin-right: 8px;
`

export default Cimke
