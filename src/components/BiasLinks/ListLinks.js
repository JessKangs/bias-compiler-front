import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: 'Arizonia', cursive;
    margin: 0px 0px 10px 0px;
    text-decoration: underline dotted;

`;

export const LinksFeed = styled.div`
    margin-top: 160px;
    padding: 20px 20px 90px 20px;
    width: 1200px;
    height: fit-content;
    background-color: #b8d4e3;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 8px;
    box-shadow: 3px 10px 10px rgba(0,0,0,.1);
`;


export const Div = styled.div`
    height: 290px;
    width: 520px;
    background-color: #cadde8;
    box-sizing: border-box;
    padding: 45px 30px 0 20px;
    margin-top: 15px;
    box-shadow: 6px 6px 5px rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    h1 {
        font-size: 20px;
        text-align: center;
        margin: 0px 0 30px 0;
    }

    h3 {
        font-size: 17px;
    }

`;

