import { css } from "styled-components";
import { XL } from "./breakpoints";

export const highlightText = css`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.secondary};
  display: inline;
  box-decoration-break: clone;
  border-left: 10px solid ${({ theme }) => theme.colors.secondary};
  border-right: 10px solid ${({ theme }) => theme.colors.secondary};
`

export const highlightTextWhite = css`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.grays.white};
  display: inline;
  box-decoration-break: clone;
  border-left: 10px solid ${({ theme }) => theme.grays.white};
  border-right: 10px solid ${({ theme }) => theme.grays.white};
`

export const container = css`
  position: relative;
  max-width: 1200px;
  width: calc(100% - 4vw);
  margin-left: auto;
  margin-right: auto;
  @media(max-width: ${XL}){
    width: calc(100% - 32px);
  } 
`
