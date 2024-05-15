import styled from 'styled-components'
import { useState } from 'react'
import Footer from '../Footer'
import Menu from '../Menu'
import Section from '../Section'
import CookieBannerContainer from '../../ containers/CookieBannerContainer'
import Hero from '../Hero'
import CountDown from '../Countdown'
import { MD } from '../../styling/breakpoints'
import Head from 'next/head'

const Main = styled.main`
  min-height: 60vh;
  font-family: 'Poppins', sans-serif;
  ${Section} {
    &:last-child {
      border-bottom: none;
    }
  }
`

const CounterWrap = styled.div`
  height: 80px;
  @media (max-width: ${MD}) {
    height: 45px;
  }
  position: relative;
  width: 100%;
`

const CountDownStyled = styled(CountDown)`
  position: absolute;
  left: 0;
  @media (max-width: ${MD}) {
    transform: scale(0.7);
    transform-origin: top left;
  }
`

const Layout = ({
  children,
  heroContent,
  ogImage = {
    url: 'https://20k.hu/20k-social-share-image.png',
    type: 'image/png',
    width: 1024,
    height: 536,
    alt: '20K - 20 ezren a tiszta választásért. Csatlakozz!',
  },
  metaTitle = '20K',
  metaDescription = 'Húszezren a tiszta szavazásért',
}) => {
  const [isMenuBig, setMenuBig] = useState(true)

  return (
    <>
      <Head>
        <meta property="og:image" content={ogImage.url} />
        <meta property="og:image:type" content={ogImage.type} />
        <meta property="og:image:width" content={ogImage.width} />
        <meta property="og:image:height" content={ogImage.height} />
        <meta property="og:image:alt" content={ogImage.alt} />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Menu isBig={isMenuBig} />
      <Main>
        {heroContent && (
          <Hero onVisibilityChange={setMenuBig}>{heroContent}</Hero>
        )}
        {children}
      </Main>
      <Footer />
      <CookieBannerContainer />
    </>
  )
}

export default Layout
