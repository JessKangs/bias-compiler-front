import { LinksFeed, Div, Content, Title, Button } from "../../components/BiasMemories/ListMemories";

import Header from "../Header/Header"
import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";
import EmptyData from "../EmptyData";

function MemoryBox({value}) {
    const navigate = useNavigate();

    let emojis = value.feelings;

    return (
        <Div>
            <h1>{value.title}</h1>
            <h2 onClick={() => window.open(`${value.url}`)}>{value.url}</h2>
            <h3>{value.memory}</h3>
            <h4>{emojis.map((value, index) => value === 'A1' ? '😾' : value === 'L1' ? '😻' : value === 'S1' ? '😿' : value === 'F1' ? '😹' : value === 'C1' ? '😽' : value === 'E1' ? '🤧' : null )}</h4>
        </Div>
    );
}

export default function ListMemories() {
    const [showMore, setShowMore] = useState(false);
    const [biasMemories, setBiasMemories] = useState([]);
    let { biasData } = useContext(UserContext);
    const token = useToken();

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    useEffect(() => {
        const response =  axios.get(`${process.env.REACT_APP_API_BASE_URL}/${biasData.id}/memories`, config)

        response.then((res) => {
            setBiasMemories(res.data);
        })

        response.catch((e) => console.log(e))
    }, [])


    return (
        <>
            <Header />
            <Content>
                {
                    biasMemories.length > 0 ?
                    <LinksFeed>
                        <Title>Memories</Title>
                        {biasMemories.map((value, index) => <MemoryBox value={value} key={index} /> )}
                    </LinksFeed>
                    :
                    setTimeout(<EmptyData item="Memórias" />, 2000)
                }
            </Content>
        </>
    );
}