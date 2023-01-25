import { Content, Form, Title, Button, Logo } from "../../components/Enrollments/SignUp";
import { Link, useNavigate } from "react-router-dom";
import InfoBox from "./InfoBox";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function SignUp () {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [password, setPassword] = useState('');

    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    async function cadastrar (event) {
        event.preventDefault();

        const data = {
            nickname,
            imageUrl,
            email,
            password
        }
       
    try {
        const request = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`, data);

        setUserData(request.data);
        navigate(`/`)
    } catch (err) {
        console.log(err)
    }

    }

    return (
        <Content>
           <InfoBox />
            <Form>
                <Logo>Bias Compiler</Logo>
                <Title>Crie sua conta:</Title>

                <input onChange={(e) => setNickname(e.target.value)} type="text" name="nickname" placeholder="Escolha um Nickname..." />

                <input onChange={(e) => setImageUrl(e.target.value)} type="url" name="url" placeholder="Url da foto de perfil..."/>

                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Seu email..." />

                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Sua senha..." />

                <Button onClick={cadastrar}>Criar Conta</Button>
                <Link to="/"><h3>Já possui uma conta? Clique aqui</h3></Link>
            </Form>
        </Content>
    );
}