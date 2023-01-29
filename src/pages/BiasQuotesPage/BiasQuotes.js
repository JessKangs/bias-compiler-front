import { Content, Images, Button } from "../../components/BiasQuotes/BiasQuotes"
import Header from "../../pages/Header/Header"
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import addQuote from "../../assets/img/icon 6_cropped.jpg"
import listQuotes from "../../assets/img/icon 7_cropped.jpg"

export default function BiasQuotes() {
    let { biasData } = useContext(UserContext);

    return (
        <>
        <Header />
        <Content>
            
            <Images>
                <Button>
                    <Link to={`/${biasData.id}/addQuote`}>
                        <img src={addQuote} alt="add bias Quote"/>
                    </Link>
                    <h3>Adicionar Citação</h3>
                </Button>

                <Button>
                    <Link to={`/${biasData.id}/listQuotes`}>
                        <img src={listQuotes} alt="list bias Quotes"/>
                    </Link>
                    <h3>Listar Citações</h3>
                </Button>

            </Images>
        </Content>
        </>
    );
}