import { Content, Form, Title, Button, Logo } from "../../components/Enrollments/SignIn";
import { Link } from "react-router-dom";
import InfoBox from "./InfoBox";

export default function SignIn() {
        return (
            <Content>
               <InfoBox />
                <Form>
                    <Logo>Bias Compiler</Logo>
                    <Title>Entre em sua conta:</Title>
    
                    <input type="email" name="email" placeholder="Seu email..." />
    
                    <input type="password" name="password" placeholder="Sua senha..." />
    
                    <Button>Entrar</Button>
                    <Link to="/signup"><h3>Ainda não possui conta? Crie aqui</h3></Link>
                </Form>
            </Content>
    );
}