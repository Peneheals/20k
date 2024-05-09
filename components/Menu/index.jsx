import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { container } from '../../styling/mixins'
import Logo from '../Logo'
import { useRouter } from "next/router"
import MenuItem from './MenuItem'
import { LG } from '../../styling/breakpoints'
import MaterialMenuIcon from '../Icons/MaterialMenuIcon'
import { Wrap as MenuItemWrap } from './MenuItem'
import useCampaign from "../../hooks/useCampaign";

const Inner = styled.div`
  ${container};
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

const TopLogo = styled(Logo).attrs({ width: 90 })`
  display: block;
`

const MenuWrap = styled.ul``

const MenuIcon = styled(MaterialMenuIcon)`
  display: none;
`

const Wrap = styled.nav`
  transition: .3s;
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme, $isBig }) => theme.colors[$isBig ? 'primary' : 'negative'] };
  border-bottom: 1px solid ${({ theme, $isBig }) => $isBig ? theme.colors.negative : theme.grays.light}88;
  position: sticky;
  height: ${({ $isBig }) => $isBig ? '80px' : '60px' };
  top: 0;
  z-index: 4;

  ul {
    display: flex;
    justify-content: space-around;
    gap: 14px;
  }

  ${MenuItemWrap}{
      a {
        color: ${({ theme, $isBig }) => theme.colors[$isBig ? 'negative' : 'text'] };
      }

      &.active a {
        border-color: ${({ theme, $isBig }) => $isBig ? theme.colors.negative :  theme.colors.text };
      }      
    }  

  @media(max-width: ${LG}){
    background: white;
    height: 48px;
    border-bottom: 1px solid ${({ theme }) => theme.grays.light };

    ${TopLogo}{
      height: 24px;
    }

    ${MenuIcon}{
      display: block;
    }

    ${MenuWrap} {
      background: white;
      flex-direction: column;
      z-index: 5;
      position: absolute;
      top: 49px;
      left: 0;
      width: 100%;
      overflow: hidden;
      transition: .3s;
      justify-content: flex-start;
      
      
      ${({ $isOpenOnMobile }) => $isOpenOnMobile ? `
        max-height: 100vh;
        height: calc(100vh - 88px);
        padding: 20px 0 40px;        
      ` : `
        max-height: 0;
        padding: 0;
      `}
    }

    ${MenuItemWrap}{
      padding: 5px 8px;
      
      a {
        border: none;
        color: ${({ theme }) => theme.colors.text};
        display: inline-block;

        &:hover {
          color: inherit;
        }     
      }    
    }
  }
`

const Menu24 = () => {
  const { pathname } = useRouter();

  return (
    <MenuWrap>
      <MenuItem
        href="/kik-vagyunk"
        isActive={pathname === '/kik-vagyunk'}
      >
        Kik vagyunk?
      </MenuItem>
      <MenuItem
        href="https://megcsinaltuk.20k.hu"
        target="_new"
      >
        Megcsináltuk! – 2022
      </MenuItem>
      <MenuItem
        href={process.env.NEXT_PUBLIC_REG_FORM_URL}
        highlighted
      >
        Regisztráció
      </MenuItem>
    </MenuWrap>
  )
}

const Menu22 = () => {
  const { pathname } = useRouter();

  return (
    <MenuWrap>
      <MenuItem
        href="/hirek"
        isActive={pathname === '/hirek'}
      >
        Hírek
      </MenuItem>
      <MenuItem
        href="/kik-vagyunk"
        isActive={pathname.includes('/kik-vagyunk')}
      >
        Kik vagyunk?
      </MenuItem>
      <MenuItem
        href="/gyik"
        isActive={pathname.includes('/gyik')}
      >
        GYIK
      </MenuItem>
      <MenuItem
        href="/tamogatas"
        isActive={pathname.includes('/tamogatas')}
      >
        Támogatás
      </MenuItem>
      <MenuItem
        href="/videouzenetek"
        isActive={pathname.includes('/videouzenetek')}
      >
        Videóüzenetek
      </MenuItem>
      <MenuItem
        href="https://visszaeles.20k.hu"
        highlighted
      >
        Választási visszaélés
      </MenuItem>
      <MenuItem
        href="https://reg.20k.hu/belepes"
      >
        Belépés
      </MenuItem>
    </MenuWrap>
  )
}

const Menu = ({ isBig = true }) => {
  const { campaign } = useCampaign()

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Wrap
      $isOpenOnMobile={isMobileNavOpen}
      $isBig={isBig}
      >
      <Inner>
        <Link href="/">
          <TopLogo />
        </Link>
        <MenuIcon onClick={() => setMobileNavOpen(!isMobileNavOpen)} />
        {campaign.k22 && (
          <Menu22 />
        )}
        {campaign.k24 && (
          <Menu24 />
        )}
      </Inner>
    </Wrap>
  )
}

export default Menu
