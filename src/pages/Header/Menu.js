import { Item, Name, Image, Content } from "../../components/Header/Menu";
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
    let { userData, biasData } = useContext(UserContext);
    const navigate = useNavigate();
    const token = useToken();

    const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    useEffect(() => {
        const response =  axios.get(`${process.env.REACT_APP_API_BASE_URL}/listBias/${userData.userid}`, config)

        response.then((res) => {
          setBiasesData(res.data)
        })
        
        response.catch((e) => console.log(e))
    }, [])

    return (
        <Content>
            {biasesData.map((value, index) => <ListBias value={value} />) }
            <h3 onClick={() => navigate(`/${biasData.id}/mainPage`)}>Go to main page ➟</h3>
        </Content>
    )
}
