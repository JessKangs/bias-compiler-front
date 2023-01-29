import { Content, Images, Button } from "../../components/BiasLinks/BiasLinks";

import Header from "../Header/Header";
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function BiasLinks() {
    let { biasData } = useContext(UserContext);

    return (
        <>
            <Header />
            <Content>
            
            <Images>
                <Button>
                    <Link to={`/${biasData.id}/addLink`}>
                        <img src="https://i.pinimg.com/236x/16/23/c1/1623c19d0c66d00952b77fd9341f2cb6.jpg" alt="add bias fact"/>
                    </Link>
                    <h3>Adicionar Link</h3>
                </Button>
    
                <Button>
                    <Link to={`/${biasData.id}/listLinks`}>
                        <img src="https://i.pinimg.com/236x/b3/43/ec/b343ec5955006fdc4ab09c7bb005246a.jpg" alt="list bias facts"/>
                    </Link>
                    <h3>Listar Links</h3>
                </Button>
    
            </Images>
            </Content>
        </>
    );
}