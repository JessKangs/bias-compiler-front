import { Content, Button, Form, EmojiBox } from "../../components/BiasMemories/AddMemory";
import Header from "../Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";
import useBiasData from "../../hooks/useBiasData";

export default function AddMemory() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [memory, setMemory] = useState('');
    const [feelings, setFeelings] = useState([]);
    const [url1, setUrl1] = useState(null);
    const [url2, setUrl2] = useState(null);
    const [url3, setUrl3] = useState(null);

    const [angry, setAngry] = useState(false);
    const [funny, setFunny] = useState(false);
    const [emo, setEmo] = useState(false);
    const [love, setLove] = useState(false);
    const [cute, setCute] = useState(false);
    const [sad, setSad] = useState(false);

    const navigate = useNavigate();
    const biasData = useBiasData();
    const token = useToken();
    
    const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    async function addMemory (event) {
        event.preventDefault();

        const data = {
            title,
            date,
            feelings,
            memory,
            url1,
            url2,
            url3
        }

        try {
         await axios.post(`${process.env.REACT_APP_API_BASE_URL}/${biasData.id}/memory`, data, config);

        navigate(`/${biasData.id}/memories`)

        } catch (err) {
            console.log(err)
        }

    }

    function emoji(value) {

        if (feelings.length < 3) {
            for (let i = 0; i < 3; i++) {
                if (feelings[i] === value){

                let index = feelings.indexOf(value)
                feelings.splice(index, 1)
                return
                }
                 
            }

        setFeelings(feelings => [...feelings, value])
        } 
    }
   console.log(feelings)

    return (
        <Content>
            <Header />
            <h3>Adicione memórias sobre o seu Bias!</h3>
            <h2>* são campos obrigatórios</h2>

            <Form>

                <label>*Escolha um titulo para a sua lembrança:</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="titulo" placeholder="Meu primeiro dia como stan" />

                <label>*Coloque a data que sua lembrança ocorreu:</label>
                <input onChange={(e) => setDate(e.target.value)} type="date" name="site"/>
               
                <label>*Coloque aqui sua memória:</label>
                <textarea onChange={(e) => setMemory(e.target.value)} type="text" placeholder="Há cinco anos..." name="quote" cols="50" rows="10"/>

                <label>*Adicione seu humor relacionado a memória:</label>

                <EmojiBox feelings={feelings.length}>
                  
                    <h1 title="angry" style={{backgroundColor: angry ? 'green' : ''}} 
                    onClick={() => {
                        angry ? setAngry(false) : setAngry(true)
                        emoji('A1')
                    }}>😾</h1>

                    <h1 title="love" style={{backgroundColor: love ? 'green' : ''}} 
                    onClick={() => {
                        love ? setLove(false) : setLove(true)
                        emoji('L1')
                    }}>😻</h1>

                    <h1 title="sad" style={{backgroundColor: sad ? 'green' : ''}} 
                    onClick={() => {
                        sad ? setSad(false) : setSad(true)
                        emoji('S1')
                    }}>😿</h1>

                    <h1 title="funny" style={{backgroundColor: funny ? 'green' : ''}} 
                    onClick={() => {
                        funny ? setFunny(false) : setFunny(true)
                        emoji('F1')
                    }}>😹</h1>

                    <h1 title="cute" style={{backgroundColor: cute ? 'green' : ''}} 
                    onClick={() => {
                        cute ? setCute(false) : setCute(true)
                        emoji('C1')
                    }}>😽</h1>

                    <h1 title="emo" style={{backgroundColor: emo ? 'green' : ''}} 
                    onClick={() => {
                        emo ? setEmo(false) : setEmo(true)
                        emoji('E1')
                    }}>🤧</h1>

                </EmojiBox>

                <label>Coloque aqui o Links relacionados a sua memória:</label>
                
                <input onChange={(e) => setUrl1(e.target.value)} type="url" name="link" placeholder="Link sobre sua memória..." />
                
                <input onChange={(e) => setUrl2(e.target.value)} type="url" name="link" placeholder="Link sobre sua memória..." />

                <input onChange={(e) => setUrl3(e.target.value)} type="url" name="link" placeholder="Link sobre sua memória..." />

                <Button onClick={addMemory}>adicionar</Button>

            </Form>
        </Content>
    );
}