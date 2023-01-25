import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;
    height: 860px;
    background-color: #ffeee6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
`
export const BiasesBox = styled.div`
    width: 1050px;
    height: 85%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

export const BiasBox = styled.div`
    width: 220px;
    height: 275px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    font-family: 'ABeeZee', sans-serif;
    align-items: center;
    padding-top: 40px;

`;

export const Image = styled.img`
    width: 130px;
    height: 140px;
    object-fit: cover;
`;

export const Text = styled.div`

     h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 20px;
    }
`;
