import { Div, Logo } from "../../components/Header/Header"
import Profile from "./Profile"

export default function Header() {
    return (
        <Div>
            <Logo>
                <h1>Bias Compiler</h1> 
            </Logo>
            
            <Profile />
        </Div>
    )
}