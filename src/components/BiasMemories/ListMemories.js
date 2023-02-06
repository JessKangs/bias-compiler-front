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
    position: absolute;
    top: 15px;
    left: 45%;
`;

export const LinksFeed = styled.div`
    margin-top: 140px;
    padding: 5% 20px 5% 20px;
    width: 1400px;
    min-height: 860px;
    height: fit-content;
    background-color: #ECC7CE;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 3px 10px 10px rgba(0,0,0,.2);
    position: relative;

`;

export const MemoriesBox = styled.div`
    width: 1300px;
    min-height: 600px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 8px;
    position: relative;
    margin-top: 40px;
`;

export const Date = styled.h1`
    font-family: 'ABeeZee', sans-serif;
    font-size: 20px;
    position: absolute;
    top: 60px;
    left: 48%;
`;

export const MemoryLinksBox = styled.div`
    display: flex;
    height: 700px;
    width: 500px;
    position: absolute;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 480px;
    max-height: 920px;
    height: fit-content;
    min-width: 640px;
    width: fit-content;
    margin-right: 45%;
    box-sizing: border-box;
    padding: 50px 50px 50px 50px;
    margin-bottom: 60px;
    background-color: #ffd6f1;
    box-sizing: border-box;
    box-shadow: 10px 10px 5px rgba(0,0,0,.1); 
    border-radius: 5px;
    font-family: 'ABeeZee', sans-serif;

    h1 {
        font-size: 26px;
        text-align: center;
    }

    h3 {
        font-size: 23px;
        font-weight: 400;
        text-align: justify;
        min-width: 490px;
        max-width: 620px;
        margin-top: 40px;
        margin-bottom: 40px;
        max-height: 960px;
        overflow-y: auto;
        padding: 20px;

    }

    h3::-webkit-scrollbar {
       //display: none;
       width: 15px;
   
    }

    h3::-webkit-scrollbar-track {
        background-color: #ffd6f1;
        border-radius: 10px;
        box-shadow: inset 0px 0px 6px rgba(0,0,0,0.5);
    }

    h3::-webkit-scrollbar-thumb {
        background-color: rgba(224, 168, 205, 0.8);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {

    }


`;

export const Emojis = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 450px;
    position: absolute;
    bottom: 5%;
    right: 30px;
    //background-color: purple;
`;

export const E = styled.div`
    width: 120px;
    font-size: 50px;

`;

export const Previous = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 40px;
    font-family: 'ABeeZee', sans-serif;
    background-color: ${(props) => props.showMore === 0 ? 'gray' : '#E0A8CD'};
    pointer-events: ${(props) => props.showMore === 0 ? 'none' : ''}; 
    box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
    position: absolute;
    bottom: 3%;
    border-radius: 5px;
    margin-right: 130px;
`;

export const Next = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    font-family: 'ABeeZee', sans-serif;
    background-color: ${(props) => props.showMore === props.biasMemories.length ? 'gray' : '#E0A8CD'};
    box-shadow: 5px 5px 8px rgba(0,0,0, 0.2);
    position: absolute;
    bottom: 3%;
    border-radius: 5px;
    margin-left: 120px;
`;

