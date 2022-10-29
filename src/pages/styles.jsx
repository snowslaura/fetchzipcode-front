import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`

export const Title = styled.p`
    font-size: 5em;
    margin: 50px;
    color: #FFD730;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

    @media screen and (max-width: 873px) {
        font-size: 3em;
    }
`