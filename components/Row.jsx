import styled from "styled-components";
import { MD } from "../styling/breakpoints";
import Column from "./Column";


const Row = styled.div`
  display: flex;
  
  ${Column}:nth-child(2){
    margin-left: 32px;
  }

  @media(max-width: ${MD}){
    flex-direction: column;
    ${Column}:nth-child(2){
      margin-left: 0;
    }

    ${Column}{
      width: 100%;
    }
  }

`

export default Row
