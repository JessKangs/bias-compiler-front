import { Content, Button, Form, Tag } from "../../components/BiasFacts/AddFact";
import Header from "../Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";
import useBiasData from "../../hooks/useBiasData";

export default function AddFact() {
    const [fact, setFact] = useState('');
    const [date, setDate] = useState('');

    const biasData = useBiasData();
    const navigate = useNavigate();
    const token = useToken();
    
    const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    async function addFact (event) {
        event.preventDefault();

        const data = {
            fact,
            date
        }

        try {
         await axios.post(`${process.env.REACT_APP_API_BASE_URL}/${biasData.id}/facts`, data, config);

        navigate(`/${biasData.id}/facts`)

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Content>
            <Header />
            <h3>Adicione algumas informações do seu Bias!</h3>
            <h2>* são campos obrigatórios</h2>

            <Form>

                <label>*Um fato de seu bias:</label>
                <input onChange={(e) => setFact(e.target.value)} type="text" name="fact"/>

                <label>*Data (que você ficou sabendo):</label>
                <input onChange={(e) => setDate(e.target.value)} type="date" name="fact date"/>
               
                <Button onClick={addFact}>adicionar</Button>

            </Form>
        </Content>
    );
}