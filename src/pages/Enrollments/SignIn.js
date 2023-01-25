import { Content, Form, Title, Button, Logo } from "../../components/Enrollments/SignIn";
import { Link, useNavigate } from "react-router-dom";
import InfoBox from "./InfoBox";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setUserData} = useContext(UserContext);
    const navigate = useNavigate();

    async function logar (event) {
        event.preventDefault();

        const data = {
            email,
            password
        }

        try {
            const request = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/signin`, data);
            setUserData(request.data);
            navigate(`/${request.data.id}/welcome`);
          } catch (err) {
            console.log(err);
          }
    }

        return (
            <Content>
               <InfoBox />
                <Form>
                    <Logo>Bias Compiler</Logo>
                    <Title>Entre em sua conta:</Title>
    
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Seu email..." />
    
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Sua senha..." />
    
                    <Button onClick={logar}>Entrar</Button>
                    <Link to="/signup"><h3>Ainda não possui conta? Crie aqui</h3></Link>
                </Form>
            </Content>
    );
}