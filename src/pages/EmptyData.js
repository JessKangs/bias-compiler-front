import styled from "styled-components";
import Empty from "../assets/img/empty-box.png"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";

export default function EmptyData({item}) {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {setLoad(true)}, 1000)
    }, [])
    return (
        load ?
        <Content>
            <h1>Está muito vazio aqui!</h1>
            <img src={Empty} alt="empty box" />
            <h1>{`Adicione um ${item}`}</h1>
        </Content>
        :
        ''
    )
}

const Content = styled.div`
    margin-top: 100px;
`
