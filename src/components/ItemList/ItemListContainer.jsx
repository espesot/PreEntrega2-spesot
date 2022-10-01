import Card from "../Card/Card";
import{useEffect, useState} from "react"
import { getArticulos } from "../mockAPI/mockAPI";
import ItemList from "./itemList";
import ItemCount from "../ItemCount/ItemCount";


function ItemListContainer(props) {
    //el llamado a la carga de art se lo llama dentro del useEffect 
    //para que solo lo ejectute una sola vez cunado carga el componente
    const [artList, setartList]= useState([])  
   useEffect(
    () => {
        getArticulos().then((data)=> {
            setartList(data);
        });
    },[]
   ) 

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList artList={artList}/>
            <hr/>
        </div>
    );
}

export default ItemListContainer;