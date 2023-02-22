import { LinksFeed, Div, Content, Title, Emojis, E, Previous, Next, MemoriesBox, MemoryLinksBox, Date } from "../../components/BiasMemories/ListMemories";

import Header from "../Header/Header"
import EmptyData from "../EmptyData";
import { useEffect, useState } from "react";
import useBiasData from "../../hooks/useBiasData";
import useToken from "../../hooks/useToken";
import axios from "axios";

import { Story } from "../BiasMemories/LinkPreview";

function MemoryBox({setDate, value}) {
    let emojis = value.feelings;
    useEffect(() => { setDate(value.date.split("T")[0].split("-")); }, [])
   
    return (
        <MemoriesBox>
            <Div>
                <h1>{value.title}</h1>
                <h3>{value.memory}</h3>
            </Div>


            <MemoryLinksBox>  

                {value.url1 !== null ? <Story url={value.url1} media="video" /> : ''}

                {value.url2 !== null ? <Story url={value.url2} media="video"  /> : ''}

                {value.url3 !== null ? <Story url={value.url3} media="video" /> : ''}

                <Emojis>
                    {emojis.map((value, index) => value === 'A1' ? <E>😾</E> : value === 'L1' ? <E>😻</E> : value === 'S1' ? <E>😿</E> : value === 'F1' ? <E>😹</E> : value === 'C1' ? <E>😽</E> : value === 'E1' ? <E>🤧</E> : null )}
                </Emojis>
            </MemoryLinksBox>
        </MemoriesBox>
    );
}

export default function ListMemories() {
    const [showMore, setShowMore] = useState(0);
    const [biasMemories, setBiasMemories] = useState([]);
    const [date, setDate] = useState('');
    const biasData = useBiasData();
    const token = useToken();

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
      }
    }

    useEffect(() => {
        const response =  axios.get(`${process.env.REACT_APP_API_BASE_URL}/${biasData.id}/memories`, config)

        response.then((res) => {
            setBiasMemories(res.data);
        })

        response.catch((e) => console.log(e))
    }, [])


    let newDate = '';
    return (
    <>
        <Header />
        <Content>
            {
                biasMemories.length > 0 ?
                <>
                    <LinksFeed>
                        <Title>Memories</Title>
                  
                        <Date>{`${date[2]}.${date[1]}.${date[0]}`}</Date>
                        <MemoryBox setDate={setDate} value={biasMemories[showMore]} />

                    
                    { showMore === 0 ? null :
                        <Previous
                            showMore={showMore}
                            onClick={() => setShowMore(showMore - 1)}
                            >
                            Previous
                        </Previous>
                     }

                    { showMore === biasMemories.length - 1 ? null :
                        <Next
                            showMore={showMore}
                            biasMemories={biasMemories}
                            onClick={() => setShowMore(showMore + 1)}
                            >
                            Next
                        </Next>
                    }
                    
                    </LinksFeed>

                
                </>
                :
                <EmptyData item="Memórias" />
                }
            </Content>
        </>
    );
}