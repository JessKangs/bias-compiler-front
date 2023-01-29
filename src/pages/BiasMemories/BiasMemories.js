import { Content, Images, Button } from "../../components/WelcomePage/WelcomePage";

import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function BiasMemories() {
    let { biasData } = useContext(UserContext);

    return (
        <Content>
            <h1>Bem-vindo(a)!</h1>
            <Images>
                <Button>
                    <Link to={`/${biasData.id}/addMemory`}>
                        <img src="https://i.pinimg.com/564x/6b/75/88/6b758834ce1a16fc255ce15d17a5a585.jpg" alt="add bias thought"/>
                    </Link>
                    <h3>Adicionar Memória</h3>
                </Button>

                <Button>
                    <Link to={`/${biasData.id}/listMemories`}>
                        <img src="https://i.pinimg.com/236x/ce/a0/92/cea092d726dab71646ef920c9025ac52.jpg" alt="add bias thoughts"/>
                    </Link>
                    <h3>Listar Memórias</h3>
                </Button>

            </Images>
        </Content>
    );
}