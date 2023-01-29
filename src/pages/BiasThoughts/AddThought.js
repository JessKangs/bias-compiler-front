import { Content } from "../../components/BiasThoughts/BiasThoughts";
import underConstruction from "../../assets/img/pikachu-under-construction.js.webp"
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import Header from "../Header/Header";

export default function AddThought() {
    let { biasData } = useContext(UserContext);

    return (
        <Content>
            <Header />
            <h1> Desculpe, página ainda em construção!</h1>
            <img src={underConstruction} alt="pikachu"/>
            <Link to={`/${biasData.id}/mainPage`}>
             <h2 >Voltar para a página inicial</h2>
           </Link>
        </Content>
    );
}