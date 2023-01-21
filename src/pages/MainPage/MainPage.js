import { Div, Content } from "../../components/MainPage/MainPage";

import Profile from "./Profile";
import MyBias from "./MyBias";
import Player from "../Footer/Footer";

export default function MainPage() {
    return (
    <>
        <Div>
            <h1>Bias Compiler</h1> 
        </Div>

        <Profile />
        <Content>    
            <MyBias />
            <Player />
        </Content>
    </>
       
    )
}
