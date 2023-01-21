import { Content, Form, Title, Button, Logo } from "../../components/Enrollments/SignUp";
import { Link, useNavigate } from "react-router-dom";
import InfoBox from "./InfoBox";
import { useState } from "react";
import axios from "axios";

export default function SignUp () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function signUp (event) {
        event.preventDefault();

        const data = {
            name,
            email,
            image,
            password
        }

        const request = axios.post('http://localhost:5000/cadastro', data);

        request.then(res => {
            console.log(res.data)
            navigate("/:userId/FirstSteps")
        })

        request.catch(console.log("erro no cadastro"))

    }

    return (
        <Content>
           <InfoBox />
            <Form>
                <Logo>Bias Compiler</Logo>
                <Title>Crie sua conta:</Title>

                <input onChange={(e) => setName(e.target.value)} type="text" name="nickname" placeholder="Escolha um Nickname..." />

                <input onChange={(e) => setEmail(e.target.value)} type="url" name="url" placeholder="Url da foto de perfil..."/>

                <input onChange={(e) => setImage(e.target.value)} type="email" name="email" placeholder="Seu email..." />

                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Sua senha..." />

                <Button onClick={signUp}>Criar Conta</Button>
                <Link to="/"><h3>Já possui uma conta? Clique aqui</h3></Link>
            </Form>
        </Content>
    );
}