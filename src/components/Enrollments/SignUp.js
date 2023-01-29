import styled from "styled-components";

export const Content = styled.div`
    /* background-color: #ffeee6; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 860px;
`;

export const Form = styled.div`
    width: 350px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #AFD7CE;
    border-radius: 20px;
    font-family: 'ABeeZee', sans-serif;
    position: relative;

    input {
        width: 250px;
        height: 10px;
        border-radius: 15px;
        border: 1px;
        padding: 15px;
        font-family: 'ABeeZee', sans-serif;
    }

    h3 {
        font-size: 13px;
        cursor: pointer;
        color: black;
    }

    a:-webkit-any-link {
        text-decoration: none;
    }
`;

export const Title = styled.h1`
    font-family: 'Arizonia', cursive;
    width: 300px;
    font-size: 35px;
`;

export const Button = styled.div`
    width: 160px;
    height: 35px;
    border: 1px solid ;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'ABeeZee', sans-serif;
    cursor: pointer;
`;

export const Logo = styled.h1`
    font-family: 'Arizonia', cursive;
    font-size: 60px;
    position: absolute;
    margin-bottom: 715px;
`;
