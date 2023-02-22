import { Content, Button, Form, Tag } from "../../components/BiasQuotes/AddBiasQuotes";

import Header from "../Header/Header"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import useBiasData from "../../hooks/useBiasData";
import axios from "axios";

export default function AddBiasQuotes() {
    const [context, setContext] = useState('');
    const [quote, setQuote] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [url, setUrl] = useState(null);
    const [date, setDate] = useState('');
    const [tag, setTag] = useState('');


    const navigate = useNavigate();
    const biasData = useBiasData();
    const token = useToken();

    const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    async function addQuote (event) {
        event.preventDefault();

        const data = {
            quote,
            context,
            imageUrl,
            url,
            date,
            tag
        }

        try {
          await axios.post(`${process.env.REACT_APP_API_BASE_URL}/${biasData.id}/quote`, data, config);

        navigate(`/${biasData.id}/quotes`)

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <Header />
            <Content>
            
                <h3>Adicione aqui coisas que seu bias disse e que te tocaram!</h3>
                <h2>* são campos obrigatórios</h2>

                <Form>

                    <label>*Onde seu bias disse a frase:</label>
                    <input onChange={(e) => setContext(e.target.value)} type="text" name="contexto da citação" placeholder="Evento em que foi dito..." />

                    <label>*Citação do seu bias:</label>
                    <textarea onChange={(e) => setQuote(e.target.value)} type="text" placeholder="Citação..." name="quote" cols="50" rows="10"/>

                    <label>Link de uma foto do momento: </label>
                    <input onChange={(e) => setImageUrl(e.target.value)} type="url" name="image url" placeholder="Url da foto..."/>

                    <label>Link de um video do momento:</label>
                    <input onChange={(e) => setUrl(e.target.value)} type="url" name="url" placeholder="Url..."/>

                    <label>*Data da citação:</label>
                    <input onChange={(e) => setDate(e.target.value)} type="date" name="quote date"/>

                    <label>*Escolha uma tag:</label>
                
                    <Tag>
                        <label>Letra de música</label>
                        <input onChange={(e) => setTag('SONG')} type="radio" name="quote tag"/>
                    </Tag>

                    <Tag>
                        <label>Ment de Show</label>
                        <input onChange={(e) => setTag('MENT')} type="radio" name="quote tag"/> 
                    </Tag>

                    <Tag>
                        <label>Bubble, Weverse, Lysn etc</label>
                        <input onChange={(e) => setTag('BUBBLE')} type="radio" name="quote tag"/> 
                    </Tag>

                    <Tag>
                    <label>Outro</label>
                    <input onChange={(e) => setTag('OTHER')} type="radio" name="quote tag"/>
                    </Tag>
                
                    <Button onClick={addQuote}>adicionar</Button>

                </Form>
        </Content>
        </>
    );
}