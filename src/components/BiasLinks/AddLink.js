import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;

    h3 {
        width: 460px;
        font-family: 'ABeeZee', sans-serif;
        margin: 50px 0 30px 0px;
    }

    h2 {
        font-size: 18px;
    }
`;

export const Form = styled.form`
    width: 520px;
    height: 890px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #AFD7CE;
    border-radius: 20px;
    font-family: 'ABeeZee', sans-serif;
    font-size: 22px;
    padding: 10px 0 10px 0;
    border: 2px;
    border-width: 0 3px 3px 0;
    border-color: rgba(0,0,0,0.3);
    border-style: solid;
    margin-bottom: 80px;

    label {
        text-align: left;
        width: 400px;
        margin-top: 25px;
        margin-bottom: 18px;
    }

    input {
        width: 400px;
        height: 20px;
        padding: 10px;
        font-family: 'ABeeZee', sans-serif;
        font-size: 20px;
        border-radius: 15px;
        border-width: 0 1.8px 1.8px 0;
        border-color: rgba(0,0,0,0.3);
        border-style: solid;
    }

    textarea {
        width: 400px;
        height: 60px;
        padding: 10px;
        font-family: 'ABeeZee', sans-serif;
        font-size: 20px;
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

export const Tag = styled.div`
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input {
        width: 30px;
        height: 20px;
    }

    label {
        margin: 5px;
    }
`;

export const Button = styled.div`
    width: 180px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'ABeeZee', sans-serif;
    cursor: pointer;
    margin-top: 15px;
    background-color: #78c4b3;
    border-radius: 10px;
    border-width: 0 2px 2px 0;
    border-color: rgba(0,0,0,0.3);
    border-style: solid;
`;
