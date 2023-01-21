import { Image, Content, Div, 
        BiasFactsBox, Arrow1, Button1,
        BiasLinksBox, Arrow2, Button2,
        BiasQuotesBox, Arrow3, Button3,
        BiasMemoriesBox, Arrow4, Button4,
        MyNotesBox, Arrow5, Button5,
    } from "../../components/MainPage/MyBias"
import arrow from "../../assets/img/arrow.png"
import button from "../../assets/img/bbokari1.jpg"

export default function MyBias() {
    return (
        <Content>
            
            <BiasFactsBox>
                <Button1 title="Your Bias Facts"><ion-icon name="receipt"></ion-icon></Button1>
                <Arrow1 src={arrow} alt="setinha"></Arrow1>
            </BiasFactsBox>

            <BiasLinksBox>
                <Button2 title="Your Bias Links"><ion-icon name="link"></ion-icon></Button2>
                <Arrow2 src={arrow} alt="setinha"></Arrow2>
            </BiasLinksBox>
            
            <Div>
                <Image src="https://i.pinimg.com/564x/d0/c9/97/d0c99776ef9c12bfd6c4f245af98cb1b.jpg" alt="Felix with flowers"></Image>
            </Div>

            <BiasQuotesBox>
                <Arrow3 src={arrow} alt="setinha"></Arrow3>
                <Button3 title="Your Bias Quotes"><ion-icon name="chatbubble-outline"></ion-icon></Button3>
            </BiasQuotesBox>

            <BiasMemoriesBox>
                <Arrow4 src={arrow} alt="setinha"></Arrow4>
                <Button4 title="Memories With Your Bias"><ion-icon name="film"></ion-icon></Button4>
            </BiasMemoriesBox>

            <MyNotesBox>
                <Arrow5 src={arrow} alt="setinha"></Arrow5>
                <Button5 title="Notes 'bout Your Bias"><ion-icon name="document"></ion-icon></Button5>
            </MyNotesBox>
        </Content>
    )
}

