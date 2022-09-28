import Card from "../Card/Card";
import{useEffect, useState} from "react"
import { getArticulos } from "../mockAPI/mockAPI";
import ItemList from "./itemList";
import ItemCount from "../ItemCount/ItemCount";


function ItemListContainer(props) {
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
            {/* <ItemCount initil ={2} stock ={10}/>             */}
        </div>
    );
}

export default ItemListContainer;