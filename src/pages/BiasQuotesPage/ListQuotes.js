import Header from "../Header/Header"
import { Div, QuotesFeed, FeedContent, LeftQuote, RightQuote, Text, Title, Content } from "../../components/BiasQuotes/ListQuotes";
import UserContext from "../../contexts/UserContext";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import axios from "axios";

import leftQuote from "../../assets/img/left-quote.png"
import rightQuote from "../../assets/img/right-quote.png"
import EmptyData from "../EmptyData";

function QuoteBox({value}) {
    
    let data = value.date.split('T');
    data = data[0].split('-');

    return (
        <Div>
            
            <h1>
                {value.context}
                <Text>
                {` ${data[2]}/${data[1]}/${data[0]}`}
                </Text>
            </h1>
            <h2>{value.quote}</h2>
            <LeftQuote src={leftQuote} alt="left quote"></LeftQuote>
            <RightQuote src={rightQuote} alt="right quote"></RightQuote>
        </Div>
    );
}

export default function ListQuotes() {
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
       <Content>
            <Header />
            {   biasQuotes.length > 0 ?
                <FeedContent>
                    <Title>Quotes</Title>
                    
                    <QuotesFeed>
                        {biasQuotes.map((value, index) => <QuoteBox value={value} key={index} /> )}
                    </QuotesFeed>
                </FeedContent> 
                :
                setTimeout(<EmptyData item="Citação" />, 2000)
            }
       </Content>
    );
}