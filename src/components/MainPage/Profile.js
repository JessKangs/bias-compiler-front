import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 60px;
    z-index: 1;
`;

export const ProfileBox = styled.div`
    width: 350px;
    height: 80px;
    border-radius: 50px 0 0 50px;
    background-color: #AFD7CE;
    margin-top: 20px;
    position: fixed;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 1;

    ion-icon {
        margin-left: 10px;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    width: 70px;
    height: 70px;
    position: absolute;
    left: 10px;
    border-radius: 50%;
`;

export const Nickname = styled.h2`
  font-size: small;
  margin-left: 95px;
`;