import styled from "styled-components";
import { MD } from "../styling/breakpoints";
import { container } from "../styling/mixins";

const Section = styled.section`
  ${container}
  font-size: 18px;
  line-height: 1.7em;
  padding: 10px 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.grays.light};

  h2 {
    font-size: 26px;
    margin: 2em 0 16px;

    &:first-child{
      margin-top: 0;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 16px;
  }

  p:first-child {
    margin-top: 0;
  }

  a {
    box-sizing: border-box;
    color: inherit;
    width: 100%;
    text-decoration: none;
    transition-property: all;
    transition-duration: 0.2s;

    ${({ theme }) => `
      border-bottom: 2px solid ${theme.colors.primary};
      box-shadow: inset 0 -2px 0 ${theme.colors.primary};

      &:hover {
        border-bottom-color: ${theme.colors.secondary};
        box-shadow: inset 0 -2px 0 ${theme.colors.secondary};
      }
    `}

  }

  ${({ nospace }) => nospace ? `` : `
    padding-top: 32px;
  `}

  table {
    border-left: 1px solid #E7E8EC;
    border-top: 1px solid #E7E8EC;
    th {
      background: #E7E8EC;
    }
    td {
      padding: 8px;
      border-bottom: 1px solid #E7E8EC;
      border-right: 1px solid #E7E8EC;      
    }
  }

  ul {
    padding-left: 1em;
    li {
      list-style-type: disc;
    }
  }

  @media(max-width: ${MD}){
    font-size: 14px;

    h2 {
      font-size: 22px;
    }


    h4 {
      font-size: 14px;
    }
  }
`

export default Section
