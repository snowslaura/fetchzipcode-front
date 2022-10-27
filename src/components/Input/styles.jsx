import styled from "styled-components"

export const InputContainer = styled.div`
    border: none;
    min-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const InputCatch = styled.input`
    border: none;
    border-radius: 4px 0px 0px 4px;
    height: 30px;
    padding: 10px;
    ::placeholder{
        font-family: 'Poppins';
    }
`
export const Button = styled.button`
    background: #FFD730;
    border: none;
    border-radius: 0px 4px 4px 0px;
    height:30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg{
        font-size: 25px;
    }
`