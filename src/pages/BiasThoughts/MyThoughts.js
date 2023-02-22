import { Content, Images, Button } from "../../components/WelcomePage/WelcomePage";
import NewBias from "../../assets/img/addnewbias.jpg"
import ListBias from "../../assets/img/listyourbias.jpg"

import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import useBiasData from "../../hooks/useBiasData";

export default function MyThoughts() {
    const biasData = useBiasData();

    return (
        <Content>
            <h1>Bem-vindo(a)!</h1>
            <Images>
                <Button>
                    <Link to={`/${biasData.id}/addThought`}>
                        <img src="https://i.pinimg.com/564x/76/e3/a0/76e3a0a8538c610c02006e8ecbe63258.jpg" alt="add bias thought"/>
                    </Link>
                    <h3>Adicionar Nota</h3>
                </Button>

                <Button>
                    <Link to={`/${biasData.id}/listThoughts`}>
                        <img src="https://i.pinimg.com/236x/4b/14/48/4b1448b138fc08282beb761fcdc31eba.jpg" alt="add bias thoughts"/>
                    </Link>
                    <h3>Listar Notas</h3>
                </Button>

            </Images>
        </Content>
    );
}