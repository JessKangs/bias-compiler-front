import { LinksFeed, Div, Content, Text, Title } from "../../components/BiasLinks/ListLinks";

import Header from "../Header/Header"
import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";
import EmptyData from "../EmptyData";
import { Story } from "../BiasLinks/LinkPreview"

function LinkBox({value}) {
    const navigate = useNavigate();
    console.log(value);

    return (
        <Div>
            <h1>{value.title}</h1>
            {value.url !== null ? <Story url={value.url} media="video"  /> : ''}
            <h1 style={{marginTop:"18px", fontSize:"18px"}}>{`#${value.site}`}</h1>
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
                {   biasLinks.length > 0 ?
                    <LinksFeed>
                        <Title>Links</Title>
                        {biasLinks.map((value, index) => <LinkBox value={value} key={index} /> )}
                    </LinksFeed>
                    :
                    <EmptyData item="Link" />
                }
            </Content>
        </>
    );
}