import styled from "styled-components"

export const Content = styled.div`
    height: 500px;
    width: 200px;
    margin-top: 100px;
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 1350px;
    z-index: 1;
`;

export const Image = styled.img`
    object-fit: cover;
    height: 50px;
    margin-left: 200px;
`;

export const Item = styled.div`
    height: 40px;
    width: 250px;
    background-color: #015c63;
    margin-top: 15px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `;

export const Name = styled.p`
    display: flex;
    width: 200px;
    font-size: 20px;
    font-family: 'ABeeZee', sans-serif;
    margin-right: 20px;
    position: absolute;
`;