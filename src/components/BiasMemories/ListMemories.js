import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    height: fit-content;
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
    background-color: #bd9eff; //#ffdf75
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 8px;
    box-shadow: 3px 10px 10px rgba(0,0,0,.1);
`;


export const Div = styled.div`
    height: fit-content;
    height: 420px;
    width: 400px;
    background-color: #c7adff; //#ffe385
    box-sizing: border-box;
    padding: 0 30px 0 20px;
    margin-top: 15px;
    box-shadow: 10px 10px 5px rgba(0,0,0,.1);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    h1 {
        font-size: 22px;
        text-align: center;
    }

    h2 {
        font-size: 17px;
        cursor: pointer;
        color: darkblue;
        text-decoration: underline;
    }

    h3 {
        font-size: 17px;
    }

`;

export const Button = styled.div`
`;

