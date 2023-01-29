import styled from "styled-components";

export const FeedContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Div = styled.div`
    max-width: 260px;
    padding: 20px;
    background-color: #c5e0d9;
    margin: 0 20px 20px 20px;
    border-radius: 10px;
    text-align: justify;
    box-shadow: 0 10px 13px rgba(0,0,0,.1);

    h1 {
        font-size: 22px;
        text-align: center;
    }

    h2 {
        font-size: 17px;
    }
`;


export const QuotesFeed = styled.div`
    padding-top: 100px;
    padding-left: 30px;
    width: fit-content;
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;