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
    width: 660px;
    height: 1020px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #c7ddb5;
    border-radius: 20px;
    font-family: 'ABeeZee', sans-serif;
    font-size: 22px;
    padding: 10px 0 10px 0;
    border: 2px;
    box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
    border: none;
    margin-bottom: 80px;

    label {
        text-align: left;
        width: 500px;
        margin-bottom: 20px;
        margin-top: 15px;
        text-align: center;
    }

    input {
        width: 490px;
        height: 20px;
        box-sizing: border-box;
        padding: 20px;
        font-family: 'ABeeZee', sans-serif;
        font-size: 20px;
        border-radius: 20px;
        box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
        border: none;
        margin-bottom: 25px;
    }

    textarea {
        width: 490px;
        height: 80px;
        padding: 10px;
        font-family: 'ABeeZee', sans-serif;
        font-size: 20px;
        border-radius: 20px;
        box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
        border: none;
        margin-bottom: 10px;
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

export const EmojiBox = styled.div`
    display: flex;

    h1 {
        cursor: pointer;
        margin-left: 10px;
        border-radius: 50%;
        pointer-events: ${(props) => props.feelings < 3 ? '' : 'none'};
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
    background-color: #a3c585;
    border-radius: 20px;
    box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
    border: none;
`;
