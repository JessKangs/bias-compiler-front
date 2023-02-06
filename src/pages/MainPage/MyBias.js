import { Image, Content, Div, 
        BiasFactsBox, Arrow1, Button1,
        BiasLinksBox, Arrow2, Button2,
        BiasQuotesBox, Arrow3, Button3,
        BiasMemoriesBox, Arrow4, Button4,
        MyNotesBox, Arrow5, Button5,
    } from "../../components/MainPage/MyBias"
    
import blue from "../../assets/img/arrows/dark-blue-arrow.png"
import lightBlue from "../../assets/img/arrows/light-blue-arrow.png"
import yellow from "../../assets/img/arrows/yellow-arrow.png"
import purple from "../../assets/img/arrows/purple-arrow.png"
import salmon from "../../assets/img/arrows/salmon-arrow.png"

import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function MyBias() {
const navigate = useNavigate();
let { biasData } = useContext(UserContext);

    return (
        <Content >
            
            <BiasFactsBox onClick={() => navigate(`/${biasData.id}/facts`)}>
                <Button1 title="Your Bias Facts">
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-request-for-proposal-event-management-flaticons-lineal-color-flat-icons-2.png" alt="facts icon" />
                </Button1>
                <Arrow1 src={blue} alt="setinha"></Arrow1>
            </BiasFactsBox>

            <BiasLinksBox onClick={() => navigate(`/${biasData.id}/links`)}>
                <Button2 title="Your Bias Links">
                    <img src="https://img.icons8.com/dusk/512/link--v2.png" alt="link icon"/>
                </Button2>
                <Arrow2 src={salmon} alt="setinha"></Arrow2>
            </BiasLinksBox>
            
            <Div>
                <Image src={`${biasData.imageurl}`} alt="bias picture"></Image>
            </Div>

            <BiasQuotesBox onClick={() => navigate(`/${biasData.id}/quotes`)}>
                <Arrow3 src={lightBlue} alt="setinha"></Arrow3>
                <Button3 title="Your Bias Quotes">
                    <img src="https://img.icons8.com/dusk/512/quote.png" alt="quotes icon"/>
                </Button3>
            </BiasQuotesBox>

            <BiasMemoriesBox onClick={() => navigate(`/${biasData.id}/memories`)}>
                <Arrow4 src={yellow} alt="setinha"></Arrow4>
                <Button4 title="Memories With Your Bias">
                    <img src="https://img.icons8.com/external-dreamcreateicons-flat-dreamcreateicons/512/external-jar-love-dreamcreateicons-flat-dreamcreateicons.png" alt="memories icon" />
                </Button4>
            </BiasMemoriesBox>

            <MyNotesBox onClick={() => navigate(`/${biasData.id}/thoughts`)}>
                <Arrow5 src={purple} alt="setinha"></Arrow5>
                <Button5 title="Notes 'bout Your Bias">
                    <img src="https://img.icons8.com/dusk/512/note.png" alt="quotes icon"/>
                </Button5>
            </MyNotesBox>
            
        </Content>
    )
}

