import { FactsFeed, Div, Content, Text } from "../../components/BiasFacts/ListFacts";

import Header from "../Header/Header"
import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";

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
    let { biasData } = useContext(UserContext);
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
                <FactsFeed>
                    {biasFacts.map((value, index) => <FactBox value={value} key={index} /> )}
                </FactsFeed>
            </Content>
        </>
    );
}