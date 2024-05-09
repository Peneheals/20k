import styled from "styled-components";
import { container, highlightText } from "../../styling/mixins"
import { XL, LG } from "../../styling/breakpoints"

const YellowHeroInner = styled.div`
  z-index: 2;
  padding-bottom: 20px;
  padding-top: 3vw;
  
  > div {
    display: inline-block;
    max-width: 80vw;
    margin-bottom: 32px;
  }

  h1 {
    font-weight: 700;
    letter-spacing: -2px;
    line-height: 135%;
    font-size: 48px;
    ${highlightText}
  }

  h2 {
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 135%;
    ${highlightText}
    font-size: 22px;
  }  

  ${container}

  @media(max-width: ${XL}){
    padding-top: 16px;    
    div {
      max-width: unset;
    }
  }

  @media(max-width: ${LG}){
    h1 {
      font-size: 26px;
    }
  }  
`
export default YellowHeroInner
