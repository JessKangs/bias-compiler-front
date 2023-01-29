import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 860px;

    img {
        width: 160px;
        height: 160px;
        object-fit: contain;
        border-radius: 50%;
        box-shadow: 5px 5px 7px rgba(0,0,0,.1);
    }
`;

export const Images = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 450px;
`;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: 'ABeeZee', sans-serif;
    width: 200px;

    h3 {
        width: 130px;
    }
`;

