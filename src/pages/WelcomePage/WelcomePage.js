import { Content, Images, Button } from "../../components/WelcomePage/WelcomePage";
import NewBias from "../../assets/img/addnewbias.jpg"
import ListBias from "../../assets/img/listyourbias.jpg"

import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function WelcomePage() {
let { userData } = useContext(UserContext);

    return (
        <Content>
            <h1>Bem-vindo(a)!</h1>
            <Images>
                <Button>
                    <Link to={`/${userData.userid}/addBias`}>
                        <img src={NewBias} alt="add bias Felix"/>
                    </Link>
                    <h3>Adicionar Bias</h3>
                </Button>

                <Button>
                    <Link to={`/${userData.userid}/listBias`}>
                        <img src={ListBias} alt="add bias Felix"/>
                    </Link>
                    <h3>Listar Biases</h3>
                </Button>

            </Images>
        </Content>
    );
}