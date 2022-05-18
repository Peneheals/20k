import styled from "styled-components"
import { renderToStaticMarkup } from 'react-dom/server'
import { XL, LG } from "../../styling/breakpoints"
import { container, highlightText } from "../../styling/mixins"
import LogoSmall from "../Logo/LogoSmall"
import { useEffect, useRef } from "react"

const Wrap = styled.div`
  min-height: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  background-repeat: no-repeat;
  background-position: center top 60px;
  background-size: 80%;
  padding: 15px 0;
  min-height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(<LogoSmall />))}");
  margin-bottom: 20px;

  svg {
    position: absolute;
    bottom: -0.5px;
  }
  
`

const Inner = styled.div`
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

const Hero = ({ children, onVisibilityChange = () => null }) => {
  const wrapRef = useRef(null)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([{ isIntersecting }]) => {
      onVisibilityChange(isIntersecting)
    }, { rootMargin: '-60px 0px 0px 0px' })

    intersectionObserver.observe(wrapRef.current)
  }, [])

  return (
    <Wrap ref={wrapRef}>
      <Inner>
        {children}
      </Inner>
      <svg viewBox="0 0 1920 100">
        <polygon fill="#FFFFFF" points="1920,100 1920,0 0,100 " />
      </svg>
    </Wrap>
  )
}

export default Hero
