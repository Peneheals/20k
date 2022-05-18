import styled from "styled-components"
import { MD, XL } from "../../styling/breakpoints"
import { container, highlightText } from "../../styling/mixins"

const Wrap = styled.div`
  border-bottom: 1px solid rgba(16, 27, 66, 0.1);
  transform: skew(0deg, -3deg);
  margin-bottom: 4vw;
  padding: 0 0 4vw;
  background: white;


  ul {
    ${container}
    display: flex;
    flex-wrap: wrap;    
  }

  li {
    padding: 10px;
    ${highlightText}
    margin: 5px;
    font-weight: 900;
    font-size: 24px;
    text-transform: uppercase;
  }

  @media(max-width: ${XL}){
    li {
      padding: 9px;
      font-size: 18px;
    }
  }  

  @media(max-width: ${MD}){
    li {
      padding: 6px;
      font-size: 13px;
    }
  }  
`

const SeparatorBanner = ({ children }) => {
  return (
    <Wrap>
      <ul>
        {children}
      </ul>
    </Wrap>
  )
}

export default SeparatorBanner
