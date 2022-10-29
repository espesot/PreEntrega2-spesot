import { useEffect, useState } from "react"
// import {getArticulos, getArtByCategory } from "../mockAPI/mockAPI";
import { getArtByCategory } from "../service/firebase"
import ItemList from "./itemList";
import { useParams } from 'react-router-dom'
import { getArticulos as getArticulosFB } from '../service/firebase'
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
    //el llamado a la carga de art se lo llama dentro del useEffect 
    //para que solo lo ejectute una sola vez cunado carga el componente
    const [artList, setartList] = useState([])
    const [isLoadin, setIsLoading] = useState(true)
    const { categoryID } = useParams()

    useEffect(() => {
        setartList([]) //seteamos como un array vacio, para cuando hacemos el cambio primero borre y despues cargue la lista
        if (categoryID === undefined) {
            getArticulosFB().then((data) => {
                setartList(data);
                setIsLoading(false);
            });
        }
        else {
            getArtByCategory(categoryID).then((data) => {
                setartList(data);
                setIsLoading(false);
            })
        }
    }, [categoryID]);

    return (
        <div>
            <h1>{props.greetting}</h1>
            {isLoadin ?
                <Loader />
                :
                <ItemList artList={artList} />
            }
            <hr />
        </div>
    );
}

export default ItemListContainer;