import styled from "styled-components"
import { LG, MD } from "../../styling/breakpoints"
import { container } from "../../styling/mixins"
import Logo from '../Logo'
import PartyLogos from "../PartyLogos"

const Triangle = styled.svg.attrs({ viewBox: "0 0 1920 100" })`
`

const Wrap = styled.footer`
  background-color: ${({ theme }) => theme.colors.text};
  min-height: 100px;
  position: relative;
  padding-top: 8vw;
  padding-bottom: 4vw;

  ${Triangle} {
    position: absolute;
    top: 0;
  }
`

const Inner = styled.div`
  ${container}
`

const FooterBottom = styled.div`
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  color: white;
  margin-top: 32px;

  p {
    margin-top: 0;   
  }

  div {
    grid-column: 1 / 4;
    opacity: .7;
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 32px;

    @media(max-width: ${LG}){
      grid-column: 1 / 3;
    }     

    a {
      color: inherit;
    }
  }

  @media(max-width: ${LG}){
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: ${MD}){
    grid-template-columns: repeat(2, 1fr);
  }
`

const FooterLogos = styled(PartyLogos)`
  margin-top: 32px;
  margin-bottom: 32px;
  grid-column: 1 / 4;

  @media(max-width: ${LG}){
    grid-column: 1 / 3;
  }

  @media(max-width: ${MD}){
    grid-column: 1 / 3;
  }
`

const Nav = styled.nav`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  li {
    box-sizing: border-box;
    border-width: 0 10px;
    border-style: solid;
    border-color: transparent;

    &:first-child {
      margin-top: -8px;
    }

    &:hover {
      ${({ theme }) => `
        background: ${theme.colors.secondary};
        color: ${theme.colors.text};
        border-color: ${theme.colors.secondary};
      `}
    }

    a {
      color: inherit;
      font-size: 18px;
      padding: 8px 0;
      display: block;
    }
  }  

  &.cookies {
    grid-column: 5 / 6;
  }

  &.pages {
    grid-column: 6 / 7;
  }

  @media(max-width: ${LG}){
    &.cookies {
      grid-column: 3 / 4;
    }

    &.pages {
      grid-column: 4 / 5;
    }    
  }

  @media(max-width: ${MD}){
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;

    li {
      margin-left: -10px;
    }

    &.cookies {
      grid-column: 1 / 2;
    }

    &.pages {
      grid-column: 2 / 3;
    }
  }
`

const Footer = () => {
  return (
    <Wrap>
      <Triangle>
        <polygon fill="#FFFFFF" points="0,0 1920,0 0,100" />
      </Triangle>
      <Inner>
        <Logo width={100} negative />
        <FooterBottom>
          <FooterLogos className="logos" />
          <div>
            <p>
              A 20k22 azzal a céllal alakult, hogy a 2022-es országgyűlési választásokon
              legalább 20 000 szavazatszámlálót biztosítson.
            </p>
            <p>Minden jog fenntartva - <a href="https://tisztavoks.hu">Tiszta Választásokért Alapítvány</a> © - 2021</p>
          </div>
          <Nav className="cookies">
            <ul>
              <li><a href="/suti-szabalyzat">Süti szabályzat</a></li>
              <li><a href="/adatvedelem">Adatvédelem</a></li>
            </ul>
          </Nav>
          <Nav className="pages">
            <ul>
              <li><a href="/">Főoldal</a></li>
              <li><a href="/kik-vagyunk">Kik vagyunk?</a></li>
              <li><a href="/about-us">About us</a></li>
              <li><a href="/tamogatas">Támogatás</a></li>
              <li><a href="/jelentkezz">Jelentkezés</a></li>
              <li><a href={`${process.env.NEXT_PUBLIC_BASE}/videouzenetek`}>Videóüzenetek</a></li>
              <li><a href="https://reg.20k.hu/belepes">Belépés</a></li>
            </ul>
          </Nav>
        </FooterBottom>
      </Inner>
    </Wrap>
  )
}

export default Footer
