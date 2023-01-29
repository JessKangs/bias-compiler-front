import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FactsFeed = styled.div`
    margin-top: 120px;
    padding: 20px 20px 50px 20px;
    width: 700px;
    height: fit-content;
    background-color: #ffbdb5;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 8px;
    box-shadow: 3px 10px 10px rgba(0,0,0,.1);
`;

export const Text = styled.div`

        font-size: 15px;
        margin-left: 20px;
`;
export const Div = styled.div`
    height: fit-content;
    width: 98%;
    padding: 0 10px 0 10px;
    margin-top: 5px;
    //border: 1px solid black;
    box-shadow: 2px 6px 9px rgba(0,0,0,.1);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 22px;
        text-align: left;
        display: flex;
        align-items: center;
    }

`;

