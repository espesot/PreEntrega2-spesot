import{useEffect, useState} from "react"
import { getUnArticulo } from "../mockAPI/mockAPI";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";
import {useParams} from 'react-router-dom'


function ItemDetailContainer(props) {
    //el llamado a la carga de art se lo llama dentro del useEffect 
    //para que solo lo ejectute una sola vez cunado carga el componente
    
    const [art, setArt]= useState([])  
    const{artId} = useParams()
    
    useEffect(
    () => {
        getUnArticulo(artId).then((data)=> {
            setArt(data);
        });
    },[artId]
   ) 

    return (
        <FlexWrapper>
            <CardDetail
                    key = {art.id} 
                    id ={art.id}
                    title = {art.title}
                    img = {art.img}
                    price = {art.price}
                    detail = {art.detail}
                    stock ={art.stock}
                    category = {art.category}
            />
        </FlexWrapper>
        );
}

export default ItemDetailContainer;