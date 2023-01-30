import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 930px;

    h3 {
        font-family: 'ABeeZee', sans-serif;
        margin-bottom: 70px;
    }
`;

export const Form = styled.form`
    width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #AFD7CE;
    border-radius: 20px;
    font-family: 'ABeeZee', sans-serif;
    position: relative;
    padding: 20px;
    border: 2px;
    border-width: 0 3px 3px 0;
    border-color: rgba(0,0,0,0.3);
    border-style: solid;

    label {
        text-align: left;
        width: 335px;
    }

    input {
        width: 300px;
        height: 10px;
        padding: 15px;
        font-family: 'ABeeZee', sans-serif;
        border-radius: 15px;
        border-width: 0 1.8px 1.8px 0;
        border-color: rgba(0,0,0,0.3);
        border-style: solid;
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

export const Button = styled.div`
    width: 160px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'ABeeZee', sans-serif;
    cursor: pointer;
    margin-top: 8px;
    background-color: #78c4b3;
    border-radius: 15px;
    border-width: 0 2px 2px 0;
    border-color: rgba(0,0,0,0.3);
    border-style: solid;
`;
