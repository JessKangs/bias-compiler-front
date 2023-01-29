import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 840px;
    margin-top: 80px;

    img {
        width: 160px;
        height: 160px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 5px 5px 7px rgba(0,0,0,.1);
    }
`;

export const Images = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 500px;
`;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: 'ABeeZee', sans-serif;

    h2 {
        width: 200px;
        font-size: 30px;
    }
`;

