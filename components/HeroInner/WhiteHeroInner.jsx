import styled from "styled-components";
import { container, highlightTextWhite } from "../../styling/mixins"
import { XL, LG, MD } from "../../styling/breakpoints"

const WhiteHeroInner = styled.div`
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
    font-size: 40px;
    ${highlightTextWhite}
  }

  h2 {
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 135%;
    color: ${({ theme }) => theme.grays.white};
    font-size: 22px;
    letter-spacing: .01em;
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
      font-size: 24px;
    }
    
    h2 {
      font-size: 18px;
    }
  }
  
  @media(max-width: ${MD}){
    display: flex;
    flex-direction: column;
  }
`

WhiteHeroInner.H1Outer = styled.div`
  transform: rotate(-4deg);
  box-shadow: 4px 4px 4px #00000066;
  padding: 12px;
  background: white;
  @media(max-width: ${MD}) {
    margin-top: 40px;
  }
  }
`

WhiteHeroInner.H2Outer = styled.div`
  transform: rotate(-4deg) translateY(-18px);
  margin-left: 40px;
  @media(max-width: ${LG}) {
    transform: rotate(-4deg) translateY(-10px);
  }
  @media(max-width: ${MD}) {
    margin-left: 20px;
  }
  }
`
export default WhiteHeroInner
