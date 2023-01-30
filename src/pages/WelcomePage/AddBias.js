import axios from "axios";
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import useToken from "../../hooks/useToken";
import { Form, Content, Button } from "../../components/Enrollments/FirstSteps"

export default function AddBias() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [affiliations, setAffiliations] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const navigate = useNavigate();

    let { userData } = useContext(UserContext);
    const token = useToken();
    
    const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    async function addBias (event) {
        event.preventDefault();

        const data = {
            name,
            nickname,
            birthdate,
            affiliations,
            imageUrl,
        }

        try {
         await axios.post(`${process.env.REACT_APP_API_BASE_URL}/addBias/${userData.userid}`, data, config);

        navigate(`/${userData.id}/welcome`)

        } catch (err) {
            console.log(err)
        }

    }

    return(
        <Content>
            <h3>Adicione seu primeiro bias!</h3>
            <Form>
            <label>Nome de seu bias:</label>
            <input onChange={(e) => setName(e.target.value)} type="text" name="bias name" placeholder="Nome..." />

            <label>Um apelido de seu bias:</label>
            <input onChange={(e) => setNickname(e.target.value)} type="text" name="nickname" placeholder="Apelido..." />

            <label>Data que sue bias nasceu:</label>
            <input onChange={(e) => setBirthdate(e.target.value)} type="date" name="birthdate" placeholder="Dia do nascimento..." />

            <label>Grupo de seu bias:</label>
            <input onChange={(e) => setAffiliations(e.target.value)} type="text" name="bias affiliations" placeholder="Grupo ou solo..." />

            <label>Link de uma foto de seu bias:</label>
            <input onChange={(e) => setImageUrl(e.target.value)} type="url" name="url" placeholder="Url da foto..."/>

            <Button onClick={addBias}>adicionar</Button>

            </Form>
        </Content>
    )
}