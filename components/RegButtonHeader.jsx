import styled from "styled-components"
import RegButton from '../components/RegButton'

const RegButtonHeader = styled(RegButton).attrs({ submit: false })`
  button {
    background-color: transparent;
    background-image: none;
    padding: 0;
    &:hover {
      ${({ theme }) => `box-shadow: -4px 4px 0px 0px ${theme.colors.text}`};
    }      
  }
`

export default RegButtonHeader
