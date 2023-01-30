import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;
    height: 930px;
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
    width: 230px;
    height: 275px;
    background-color: #B3DDD1;
    display: flex;
    flex-direction: column;
    font-family: 'ABeeZee', sans-serif;
    align-items: center;
    padding-top: 40px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .1);
`;

export const Image = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
    margin-bottom: 10px;
`;

export const Text = styled.div`

     h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 20px;
    }
`;
