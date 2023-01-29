import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 60px;
`;

export const ProfileBox = styled.div`
    width: 350px;
    font-family: 'ABeeZee', sans-serif;
    /* background-color: #B3DDD1; */
    display: flex;
    align-items: center;
    z-index: 1;
    margin-right: 80px;

    ion-icon {
        margin-left: 30px;
        color: #7d154e;
    }
`;

export const Image = styled.img`
    object-fit: cover;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 30px;

`;

export const Nickname = styled.h2`
  font-size: small;
  margin-left: 25px;
  color: #7d154e;
`;