import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffeee6;
    height: 840px;

    img {
        width: 120px;
        height: 120px;
        object-fit: contain;
        border-radius: 50%;
    }
`;

export const Images = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 350px;
`;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: 'ABeeZee', sans-serif;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;