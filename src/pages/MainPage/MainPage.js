import { Content } from "../../components/MainPage/MainPage";

import MyBias from "./MyBias";
import Header from "../Header/Header";

export default function MainPage() {
    
    return (
    <>
        <Header />

        <Content> 
            <MyBias/>
        </Content> 
    </>
       
    )
}
