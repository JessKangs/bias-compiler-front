import { Item, Name, Image, Content } from "../../components/MainPage/Menu";
import ShootingStar from "../../assets/img/shooting-star.png"
import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";

function ListBias({value}) {
    const navigate = useNavigate();
    async function goToBiasPage() {
        navigate(`/${value.id}/mainPage`)
    }

    return (
        <Item onClick={goToBiasPage}>
            <Name>{value.name}</Name>                 
            <Image src={ShootingStar} alt="shooting star"></Image>
        </Item>
        
    )
}

export default function Menu() {
    const [biasesData, setBiasesData] = useState([]);
    let { userData } = useContext(UserContext);
    const token = useToken();

    const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    useEffect(() => {
        const response =  axios.get(`${process.env.REACT_APP_API_BASE_URL}/listBias/${userData.userid_}`, config)

        response.then((res) => {
          setBiasesData(res.data)
        })
        
        response.catch((e) => console.log(e))
    }, [])

    console.log(biasesData, 'a');
    return (
        <Content>
            {biasesData.map((value, index) => <ListBias value={value} />) }
        </Content>
    )
}
