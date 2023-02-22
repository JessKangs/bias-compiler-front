import { FactsFeed, Div, Content, Text, Title } from "../../components/BiasFacts/ListFacts";

import Header from "../Header/Header"
import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import axios from "axios";
import EmptyData from "../EmptyData";
import useBiasData from "../../hooks/useBiasData";

function FactBox({value}) {

    let data = value.date.split('T');
    data = data[0].split('-');

    return (
        <Div>
            
            <h1>➵ {value.fact} <Text>{`${data[2]}/${data[1]}/${data[0]}`}</Text> </h1>

        </Div>
    );
}

export default function ListFacts() {
    const [biasFacts, setBiasFacts] = useState([]);
    const biasData = useBiasData();
    const token = useToken();

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    useEffect(() => {
        const response =  axios.get(`${process.env.REACT_APP_API_BASE_URL}/${biasData.id}/facts`, config)

        response.then((res) => {
            setBiasFacts(res.data);
        })
        
        response.catch((e) => console.log(e))
    }, [])


    return (
        <>
            <Header />
            <Content>
                {   biasFacts.length > 0 ?
                    <FactsFeed>
                    <Title>Facts</Title>
                        {biasFacts.map((value, index) => <FactBox value={value} key={index} /> )}
                    </FactsFeed>
                    :
                    <EmptyData item="Fato" />
                }
            </Content>
        </>
    );
}