import { Content, Button, Form, Tag } from "../../components/BiasLinks/AddLink";
import Header from "../Header/Header";
import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";

export default function AddLink() {
    const [title, setTitle] = useState('');
    const [site, setSite] = useState('');
    const [url, setUrl] = useState('');
    const [tag, setTag] = useState('');

    let { biasData } = useContext(UserContext);
    const navigate = useNavigate();
    const token = useToken();
    
    const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    async function addLink (event) {
        event.preventDefault();

        const data = {
            title,
            site,
            url,
            tag
        }

        try {
         await axios.post(`${process.env.REACT_APP_API_BASE_URL}/${biasData.id}/links`, data, config);

        navigate(`/${biasData.id}/links`)

        } catch (err) {
            console.log(err)
        }

    }
    console.log(tag);

    return (
        <Content>
            <Header />
            <h3>Adicione links sobre o seu Bias!</h3>
            <h2>* são campos obrigatórios</h2>

            <Form>

                <label>*Escolha um titulo para o seu Link:</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="titulo" placeholder="Titulo..."/>

                <label>*Coloque de qual site é o Link:</label>
                <input onChange={(e) => setSite(e.target.value)} type="text" name="site" placeholder="You Tube, Twitter, etc..."/>

                <label>*Coloque aqui o Link:</label>
                <input onChange={(e) => setUrl(e.target.value)} type="url" name="link" placeholder="Url..."/>

                <label>*Escolha uma tag:</label>

                {/* <select name="tags" >

                    <option value="PHOTO" onChange={(e) => setTag(e.target.value)}>Foto</option>
                    <option value="VIDEO" onChange={(e) => setTag(e.target.value)}>Video</option>
                    <option value="TEXT" onChange={(e) => setTag(e.target.value)} >Texto</option>
                    <option value="OTHER" onChange={(e) => setTag(e.target.value)} >Outro</option>
                </select> */}
                
                <Tag>
                    <label>Video</label>
                    <input onChange={(e) => setTag('VIDEO')} type="radio" name="quote tag"/>
                </Tag>

                <Tag>
                    <label>Foto</label>
                    <input onChange={(e) => setTag('PHOTO')} type="radio" name="quote tag"/> 
                </Tag>

                <Tag>
                    <label>Texto</label>
                    <input onChange={(e) => setTag('TEXT')} type="radio" name="quote tag"/> 
                </Tag>

                <Tag>
                <label>Outro</label>
                <input onChange={(e) => setTag('OTHER')} type="radio" name="quote tag"/>
                </Tag> 
               
                <Button onClick={addLink}>adicionar</Button>

            </Form>
        </Content>
    );
}