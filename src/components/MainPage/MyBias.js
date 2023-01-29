import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 860px;
    z-index: 0;
    margin-top: 80px;
`;

export const Div = styled.div``;

export const Image = styled.img`
    object-fit: cover;
    width: 500px;
    height: 700px;
    z-index: 0;
    border-radius: 10px;
    box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);

`;

export const BiasFactsBox = styled.div`
    display: flex;
    position: absolute;
    margin: 0 800px 480px 0;
    z-index: 0;
`;

export const Arrow1 = styled.img`
    height: 120px;
    left: 150px;
    transform: rotateZ(120deg) rotate(130deg);
    margin-top: 30px;
`;

export const Button1 = styled.div`
    img {
        height: 60px;
        font-size: 60px;
        cursor: pointer;
        padding: 20px;
     
    }
        border: 2px dotted #174cb0;
        border-radius: 50%;
        height: 100px;

`;


export const BiasLinksBox = styled.div`
    display: flex;
    position: absolute;
    margin: 930px 780px 480px 0;
    z-index: 0;
`;

export const Arrow2 = styled.img`
    height: 120px;
    top: 600px;
    left: 400px;
    transform: rotateZ(200deg) rotate(0deg);
    margin-bottom: 50px;
`;

export const Button2 = styled.div`
    img {
        height: 60px;
        cursor: pointer;
        padding: 20px;
    }


    border: 2px dotted #f7b083;
    border-radius: 50%;
    height: 100px;
    margin-top: 45px;
`;

export const BiasQuotesBox = styled.div`
    display: flex;
    position: absolute;
    margin: 0 0 620px 760px;
    z-index: 0;
`;

export const Arrow3 = styled.img`
    height: 120px;
    top: 600px;
    left: 400px;
    transform: rotateZ(20deg) rotate(0deg);
    margin-top: 40px;
    z-index: 0;
`;

export const Button3 = styled.div`
    img {
        height: 60px;
        cursor: pointer;
        padding: 20px;
    }


    border: 2px dotted #5fb2d9;
    border-radius: 50%;
    height: 100px;
    margin-left: 12px;
`;

export const BiasMemoriesBox = styled.div`
    display: flex;
    position: absolute;
    margin: 510px 0 480px 790px;
    z-index: 0;
`;

export const Arrow4 = styled.img`
    height: 120px;
    transform: rotateZ(40deg) rotate(350deg);
`;

export const Button4 = styled.div`
    img {
        height: 60px;
        cursor: pointer;
        padding: 20px;
    }


    border: 2px dotted #facb2f;
    border-radius: 50%;
    height: 100px;
    margin-left: 20px;
`;

export const MyNotesBox = styled.div`
    display: flex;
    position: absolute;
    margin: 800px 550px 0 1200px;
    z-index: 0;
`;

export const Arrow5 = styled.img`
    height: 120px;
    top: 600px;
    left: 400px;
    transform: rotateZ(85deg) rotate(00deg);
`;

export const Button5 = styled.div`

    img {
        height: 60px;
        cursor: pointer;
        padding: 20px;
    }


    border: 2px dotted #5a4375;
    border-radius: 50%;
    height: 100px;
    margin-top: 100px;
`;
