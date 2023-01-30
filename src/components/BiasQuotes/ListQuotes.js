import styled from "styled-components";

export const FeedContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Content = styled.div`
    min-height: 930px;
`;

export const Title = styled.h1`
    font-family: 'Arizonia', cursive;
    position: absolute;
    top: 96px;
    left: 70%;
    text-decoration: underline dotted;
`;

export const Div = styled.div`
    width: 260px;
    height: fit-content;
    padding: 45px 40px 15px 40px;
    font-family: 'ABeeZee', sans-serif;
    background-color: #b1e3d6;
    margin: 0 20px 20px 20px;
    border-radius: 10px;
    text-align: justify;
    box-shadow: 0 10px 13px rgba(0,0,0,.1);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    h1 {
        font-size: 20px;
        text-align: center;
    }

    h2 {
        font-size: 18px;
        margin-top: 16px;
        margin-bottom: 30px;
        width: 200px;
        word-wrap: break-word;
    }
`;

export const Text = styled.div`
    font-size: 15px;
`;

export const LeftQuote = styled.img`
    position: absolute;
    left: 3px;
    top: 5px;
`;

export const RightQuote = styled.img`
    position: absolute;
    right: 3px;
    bottom: 5px;
`;

export const QuotesFeed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 170px;
    padding: 40px 30px 30px 30px;
    width: 70%;
    height: fit-content;
    background-color: #8acfbe;
    border-radius: 7px;
    box-shadow: 8px 8px 15px rgba(0,0,0, 0.3);
`;