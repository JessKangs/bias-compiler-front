import axios from "axios";
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { Form, Content, Button } from "../../components/Enrollments/FirstSteps"

export default function FirstSteps() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [affiliations, setAffiliations] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const navigate = useNavigate();

    let { userData } = useContext(UserContext);
    
    function addBias (event) {
        event.preventDefault();

        const data = {
            name,
            nickname,
            birthdate,
            affiliations,
            imageUrl,
        }

        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/${userData.id}/firststeps`, data);

        request.then(res => {
            navigate(`/${userData.id}/mainpage`)
        })

        request.catch(console.log("erro no cadastro"))

    }

    return(
        <Content>
            <h3>Adicione seu primeiro bias!</h3>
            <Form>
            <input onChange={(e) => setName(e.target.value)} type="text" name="bias name" placeholder="O nome de seu bias..." />

            <input onChange={(e) => setNickname(e.target.value)} type="text" name="nickname" placeholder="O apelido de seu bias..." />

            <input onChange={(e) => setBirthdate(e.target.value)} type="text" name="birthdate" placeholder="O dia que seu bias nasceu..." />

            <input onChange={(e) => setAffiliations(e.target.value)} type="text" name="bias affiliations" placeholder="O grupo de seu bias..." />

            <input onChange={(e) => setImageUrl(e.target.value)} type="url" name="url" placeholder="Url da foto..."/>

            <Button onClick={addBias}>adicionar</Button>
               
            </Form>
        </Content>
    )
}