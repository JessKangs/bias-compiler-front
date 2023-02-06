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
    height: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #c7ddb5;//#AFD7CE
    border-radius: 20px;
    font-family: 'ABeeZee', sans-serif;
    font-size: 22px;
    padding: 10px 0 10px 0;
    box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
    margin-bottom: 80px;

    label {
        text-align: left;
        width: 400px;
        margin-top: 25px;
        margin-bottom: 18px;
    }

    input {
        width: 410px;
        height: 20px;
        box-sizing: border-box;
        padding: 20px;
        font-family: 'ABeeZee', sans-serif;
        font-size: 20px;
        border-radius: 20px;
        box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
        border: none;
        margin-bottom: 15px;
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
        box-shadow: none;
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
    margin-top: 20px;
    background-color: #a3c585;//#78c4b3
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(0,0,0, 0.2);
`;
