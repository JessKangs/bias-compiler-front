import { BiasesBox, BiasBox, Container, Image, Text } from "../../components/WelcomePage/ListBias";

import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";
import EmptyData from "../EmptyData";

function ListBias({value}) {
    let { setBiasData } = useContext(UserContext);
    const navigate = useNavigate();

    async function goToBiasPage() {
        setBiasData(value);
        navigate(`/${value.id}/mainPage`);
    }
    
    return (
        <BiasBox onClick={goToBiasPage}>
            <Image onClick={goToBiasPage} 
            src={value.imageurl} alt="bias image"></Image>
            <Text>
                <h1>{value.name}</h1>
                <h2>{value.nickname}</h2>
            </Text>
        </BiasBox>
        
    )
}

export default function ListMyBias() {
    const [biasesList, setBiasesList] = useState([]);
    let { userData } = useContext(UserContext);
    const token = useToken();

    const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    useEffect(() => {
        const response =  axios.get(`${process.env.REACT_APP_API_BASE_URL}/listBias/${userData.userid}`, config)

        response.then((res) => {
          setBiasesList(res.data)
        })
        
        response.catch((e) => console.log(e))
    }, [])

    return (
        <Container>
           {
            biasesList.length > 0 ? 
            <BiasesBox>
                {biasesList.map((value, index) => <ListBias key={index} value={value} />)}
            </BiasesBox> 
            : 
            setTimeout(<EmptyData item="Bias"/>, 2000)
           }
            
        </Container>
    );
}