import styled from "styled-components";

export const Content = styled.div`
    height: 800px;
    width: 100%;
    background-color: #ffeee6;
    display: flex;
    justify-content: space-between;
    z-index: 0;
`;

export const Div = styled.div`
    width:100%;
    height: 60px;
    background-color: #f7afa1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1;

    h1 {
        font-family: 'Arizonia', cursive;
        font-size: 60px;
    }
    
`;
