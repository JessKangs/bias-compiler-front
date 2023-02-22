import { LinksFeed, Div, Content, Text, Title } from "../../components/BiasLinks/ListLinks";

import Header from "../Header/Header"
import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import axios from "axios";
import EmptyData from "../EmptyData";
import { Story } from "../BiasLinks/LinkPreview"
import useBiasData from "../../hooks/useBiasData";

function LinkBox({value}) {

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
    const biasData = useBiasData();
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