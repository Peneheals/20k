import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  input {
    border: 2px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    padding: 8px 16px;
    border-radius: 0;
    outline: none;
    transition-property: all;
    transition-duration: 0.2s;
    font-size: 18px;
    font-family: "Poppins";
    letter-spacing: -1px;
    margin-bottom: 18px;

    &:hover {
      box-shadow: -4px 4px 0px 0px ${({ theme }) => theme.colors.secondary};
    }
    &:focus {
      box-shadow: -4px 4px 0px 0px ${({ theme }) => theme.colors.primary};
    }

    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
  }

  label {
    font-size: 18px;
    padding-bottom: 8px;
    color: ${({ theme }) => theme.colors.text};
  }

`

export default Form
