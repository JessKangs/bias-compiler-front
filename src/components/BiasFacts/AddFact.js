import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 930px;

    h3 {
        width: 460px;
        font-family: 'ABeeZee', sans-serif;
       // margin: 130px 0 30px 0px;
    }

    h2 {
        font-size: 18px;
    }
`;

export const Form = styled.form`
    width: 500px;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #c7ddb5;
    border-radius: 20px;
    font-family: 'ABeeZee', sans-serif;
    font-size: 22px;
    border: 2px;
    box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
    margin-bottom: 80px;

    label {
        text-align: left;
        width: 400px;
        margin-bottom: 18px;
    }

    input {
        width: 380px;
        height: 40px;
        padding: 20px;
        margin-bottom: 25px;
        box-sizing: border-box;
        font-family: 'ABeeZee', sans-serif;
        font-size: 20px;
        border-radius: 20px;
        border: none;
        box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
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
    width: 180px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'ABeeZee', sans-serif;
    cursor: pointer;
    margin-top: 10px;
    background-color: #a3c585;
    border-radius: 20px;
    box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
`;
