import { LinksFeed, Div, Content, Text } from "../../components/BiasLinks/ListLinks";

import Header from "../Header/Header"
import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";

function LinkBox({value}) {
    const navigate = useNavigate();
    console.log(value);

    return (
        <Div>
            <h1>{value.title}</h1>
            <h2 onClick={() => window.open(`${value.url}`)}>{value.url}</h2>
            <h3>{value.description}</h3>
        </Div>
    );
}

export default function ListLinks() {
    const [biasLinks, setBiasLinks] = useState([]);
    let { biasData } = useContext(UserContext);
    const token = useToken();

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    useEffect(() => {
        const response =  axios.get(`${process.env.REACT_APP_API_BASE_URL}/${biasData.id}/links`, config)

        response.then((res) => {
            setBiasLinks(res.data);
        })
        
        response.catch((e) => console.log(e))
    }, [])


    return (
        <>
            <Header />
            <Content>
                <LinksFeed>
                    {biasLinks.map((value, index) => <LinkBox value={value} key={index} /> )}
                </LinksFeed>
            </Content>
        </>
    );
}