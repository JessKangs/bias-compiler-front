import { Content } from "../../components/MainPage/MainPage";

import MyBias from "./MyBias";
import Player from "../Footer/Footer";
import Header from "../Header/Header";

export default function MainPage() {
    return (
    <>
        <Header />

        <Content>    
            <MyBias />
            <Player />
        </Content>
    </>
       
    )
}
