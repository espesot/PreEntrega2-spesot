import { useEffect, useState } from "react"
// import { getUnArticulo } from "../mockAPI/mockAPI";
import { getUnArticulo } from "../service/firebase";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";
import { useParams } from 'react-router-dom'


function ItemDetailContainer(props) {
    //el llamado a la carga de art se lo llama dentro del useEffect 
    //para que solo lo ejectute una sola vez cunado carga el componente
    const [feedbackMsg, setFeedbackMsg] = useState(null)
    const [art, setArt] = useState({})
    const { itemId } = useParams()

    useEffect(
        () => {
            getUnArticulo(itemId)
                .then((data) => {
                    setArt(data);
                })
                .catch((error) => {
                    setFeedbackMsg(error.messege);
                })
        }, [itemId]
    )
    // render condicional con ternario
    return (
        <FlexWrapper>
            {feedbackMsg !== null ?
                <h4>error:{feedbackMsg}</h4>
                :
                <CardDetail
                    key={art.id}
                    id={art.id}
                    title={art.title}
                    img={art.img}
                    price={art.price}
                    detail={art.detail}
                    stock={art.stock}
                    category={art.category}
                    new={art.new}
                />}
        </FlexWrapper>
    );
}

export default ItemDetailContainer;