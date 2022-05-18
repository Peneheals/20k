import styled from "styled-components"

const Wrap = styled.div`
  z-index: 6;
  position: fixed;
  bottom: 0;
  width: 100vw;
  min-height: 50px;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5em;
  font-family: 'Poppins';
  box-sizing: border-box;
  transition: .4s;
  ${({ $visible }) => $visible ? `
    transform: translateY(0);
  ` : `
    transform: translateY(100%);
  `}

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }

  p:first-child {
    margin-top: 6px;
  }

  ${({ theme }) => `
    background: ${theme.colors.primary};
    color: ${theme.colors.negative};
  `}

`

const Banner = ({ children, visible }) => {
  return (
    <Wrap $visible={visible}>
      {children}
    </Wrap>
  )
}

export default Banner
