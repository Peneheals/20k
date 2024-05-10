import Link from 'next/link'
import styled from 'styled-components'

export const Wrap = styled.li`
  a {
    font-family: 'Poppins';
    text-decoration: none;
    font-size: 18px;
    ${({ $highlighted, theme }) => $highlighted ? `
      color: ${theme.colors.text} !important;
      background: ${theme.colors.secondary};
    ` : `
      color: ${theme.colors.negative};
    `}
    
    transition: .2s;
    padding: 8px 12px;
    border: 2px solid transparent;
    white-space: nowrap;
  }

  &:not(.active) a:hover {
    color: ${({ theme, $highlighted }) => $highlighted ? `
      theme.colors.text;
      background: ${theme.colors.negative};
    `:`
      ${theme.colors.secondary};
    `}
  }

  &.active a {
    background-color: transparent;
    color: white;
    pointer-events: none;
  }

  ${({ $hideOnLg }) => $hideOnLg ? `
    @media(max-width: 1200px){
      display: none;
    }
  ` : ``}
`

const MenuItem = ({ isActive, children, href, highlighted, hideOnLg, ...rest }) => {
  return (
    <Wrap
      className={isActive ? 'active' : ''}
      $highlighted={highlighted}
      $hideOnLg={hideOnLg}
      >
        {href?.startsWith('http') && (
          <a
            href={href}
            {...rest}
            >
            {children}
          </a>
        )}
        {!href?.startsWith('http') && (
          <Link
            href={href}
            {...rest}
            >
            {children}
          </Link>
        )}
    </Wrap>
  )
}

export default MenuItem
