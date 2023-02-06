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
    width: 460px;
    height: 660px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #c7ddb5;
    border-radius: 20px;
    font-family: 'ABeeZee', sans-serif;
    position: relative;
    padding: 20px;
    box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);

    label {
        text-align: left;
        width: 335px;
    }

    input {
        width: 350px;
        height: 20px;
        padding: 20px;
        box-sizing: border-box;
        font-family: 'ABeeZee', sans-serif;
        border-radius: 20px;
        box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
        border: none;
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
    background-color: #a3c585;
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(0,0,0, 0.2);
    
`;
