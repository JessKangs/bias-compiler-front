import { Content, Images, Button } from "../../components/BiasFacts/BiasFacts"
import { Link } from "react-router-dom";
import Header from "../Header/Header"
import useBiasData from "../../hooks/useBiasData";

export default function BiasFacts() {
    const biasData = useBiasData();

    return (
        <>
        <Header />
        <Content>
            
            <Images>
                <Button>
                    <Link to={`/${biasData.id}/addFact`}>
                        <img src="https://i.pinimg.com/564x/a9/da/ad/a9daadd836e44f455eda1b327bbc21fc.jpg" alt="add bias fact"/>
                    </Link>
                    <h3>Adicionar Fato</h3>
                </Button>

                <Button>
                    <Link to={`/${biasData.id}/listFacts`}>
                        <img src="https://i.pinimg.com/564x/fe/d4/02/fed40229fa1e3292fe060eb5309a3414.jpg" alt="list bias facts"/>
                    </Link>
                    <h3>Listar Fatos</h3>
                </Button>

            </Images>
        </Content>
        </>
    );
}