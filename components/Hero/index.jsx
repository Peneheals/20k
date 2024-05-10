import styled from "styled-components"
import { renderToStaticMarkup } from 'react-dom/server'
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
      {children}
      <svg viewBox="0 0 1920 100">
        <polygon fill="#FFFFFF" points="1920,100 1920,0 0,100 " />
      </svg>
    </Wrap>
  )
}

export default Hero
