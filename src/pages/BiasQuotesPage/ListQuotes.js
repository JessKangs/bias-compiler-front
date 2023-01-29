import Header from "../Header/Header"
import { Div, QuotesFeed, FeedContent } from "../../components/BiasQuotes/ListQuotes";
import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";

function QuoteBox({value}) {
    let data = value.date.split('T');
    data = data[0].split('-');

    return (
        <Div>
            <h1>{value.context}</h1>
            <h2>{value.quote}</h2>
            <h2>{`${data[2]}/${data[1]}/${data[0]}`}</h2>
        </Div>
    );
}

export default function ListQuotes({value}) {
    const [biasQuotes, setBiasQuotes] = useState([]);
    let { biasData } = useContext(UserContext);
    const token = useToken();

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    useEffect(() => {
        const response =  axios.get(`${process.env.REACT_APP_API_BASE_URL}/${biasData.id}/quotes`, config)

        response.then((res) => {
          setBiasQuotes(res.data);
        })
        
        response.catch((e) => console.log(e))
    }, [])

    return (
       <FeedContent>
            <Header />
            <QuotesFeed>
                {biasQuotes.map((value, index) => <QuoteBox value={value} key={index} /> )}
            </QuotesFeed>
       </FeedContent>
    );
}