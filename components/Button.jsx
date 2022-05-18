import styled from "styled-components"
import { renderToStaticMarkup } from 'react-dom/server'
import MaterialInfoIcon from "../components/Icons/MaterialInfoIcon"
import { MD } from "../styling/breakpoints"
import MaterialArrowForwardIcon from "./Icons/MaterialArrowForwardIcon.jsx"

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 18px;
  border: none;

  ${({ small }) => small ? `
    font-size: 14px;
    padding: 6px 12px 6px 12px;
    min-height: 26px;

  ` : `
    font-size: 18px;
    padding: 12px 16px 12px 46px;
    min-height: 46px;
  `}

  ${({ theme, secondary, submit, negative }) => {
    if (submit) return `
      background-color: ${theme.colors.text};
      color: ${theme.colors.negative};
      background-image: url("data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(<MaterialArrowForwardIcon size={24} fill={theme.colors.negative} />))}");  
      &:hover {
        box-shadow: -4px 4px 0px 0px ${theme.colors.secondary};
      }      
    `

    if (secondary) return `
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.text};
      background-image: url("data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(<MaterialInfoIcon size={24} fill={theme.colors.text} />))}");
      &:hover {
        box-shadow: -4px 4px 0px 0px ${theme.colors.primary};
      }      
    `

    if (negative) return `
      background-color: ${theme.colors.negative};
      color: ${theme.colors.primary};
    `

    return `
      background-color: ${theme.colors.primary};
      color: white;
      background-image: url("data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(<MaterialInfoIcon size={24} />))}");
      &:hover {
        box-shadow: -4px 4px 0px 0px ${theme.grays.dark};
      }      
    `
  }};
  background-repeat: no-repeat;
  background-position: left 12px center;
  transition-property: all;
  transition-duration: 0.2s;
  cursor: pointer;

  @media(max-width: ${MD}){
    font-size: 14px;
  }


`

export default Button
