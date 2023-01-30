import { Content, Button, Form, EmojiBox } from "../../components/BiasMemories/AddMemory";
import Header from "../Header/Header";
import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";

export default function AddMemory() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [memory, setMemory] = useState('');
    const [url1, setUrl1] = useState(null);
    const [url2, setUrl2] = useState(null);
    const [url3, setUrl3] = useState(null);
    const feelings = [];
    console.log(feelings);

    let { biasData } = useContext(UserContext);
    const navigate = useNavigate();
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
                if (feelings[i] === value)
            
                return
                 
            }
            feelings.push( value);
        } 
        console.log(feelings);
    }

    return (
        <Content>
            <Header />
            <h3>Adicione links sobre o seu Bias!</h3>
            <h2>* são campos obrigatórios</h2>

            <Form>

                <label>*Escolha um titulo para a sua lembrança:</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="titulo"/>

                <label>*Coloque a data que sua lembrança ocorreu:</label>
                <input onChange={(e) => setDate(e.target.value)} type="date" name="site"/>
               
                <label>*Coloque aqui sua memória:</label>
                <textarea onChange={(e) => setMemory(e.target.value)} type="text" placeholder="Há cinco anos..." name="quote" cols="50" rows="10"/>

                <label>*Adicione seu humor relacionado a memória:</label>

                <EmojiBox>
                  
                    <h1 title="angry" onClick={() => emoji('A1')}>😾</h1>
                    <h1 title="love" onClick={() => emoji('L1')}>😻</h1>
                    <h1 title="sad" onClick={() => emoji('S1')}>😿</h1>
                    <h1 title="funny" onClick={() => emoji('F1')}>😹</h1>
                    <h1 title="cute" onClick={() => emoji('C1')}>😽</h1>
                    <h1 title="emo" onClick={() => emoji('E1') }>🤧</h1>

                </EmojiBox>

                <label>Coloque aqui o Links de fotos ou videos relacionados a sua memória:</label>
                <input onChange={(e) => setUrl1(e.target.value)} type="url" name="link"/>
                <input onChange={(e) => setUrl2(e.target.value)} type="url" name="link"/>
                <input onChange={(e) => setUrl3(e.target.value)} type="url" name="link"/>

                <Button onClick={addMemory}>adicionar</Button>

            </Form>
        </Content>
    );
}