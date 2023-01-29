import styled from "styled-components"

export const Content = styled.div`
    height: 500px;
    width: 200px;
    margin-top: 600px;
    margin-right: 45px;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 1;

    h3 {
        font-size: 15px;
        text-decoration: underline;
        font-family: 'ABeeZee', sans-serif;
        cursor: pointer;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    height: 50px;
    margin-left: 200px;
`;

export const Item = styled.div`
    height: 40px;
    width: 250px;
    background-color: #7cbfbf;
    margin-top: 15px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    `;

export const Name = styled.p`
    display: flex;
    width: 200px;
    font-size: 20px;
    font-family: 'ABeeZee', sans-serif;
    margin-right: 20px;
    position: absolute;
`;