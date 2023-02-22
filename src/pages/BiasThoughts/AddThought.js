import { Content } from "../../components/BiasThoughts/BiasThoughts";
import underConstruction from "../../assets/img/pikachu-under-construction.js.webp"
import { Link } from "react-router-dom";
import useBiasData from "../../hooks/useBiasData";
import Header from "../Header/Header";

export default function AddThought() {
    const biasData = useBiasData();

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