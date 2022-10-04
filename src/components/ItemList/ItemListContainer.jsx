import { useEffect, useState } from "react"
import { getArticulos, getArtByCategory } from "../mockAPI/mockAPI";
import ItemList from "./itemList";
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {
    //el llamado a la carga de art se lo llama dentro del useEffect 
    //para que solo lo ejectute una sola vez cunado carga el componente
    const [artList, setartList] = useState([])
    const { categoryID } = useParams()

    useEffect(() => {
        if (categoryID === undefined) {
            getArticulos().then((data) => {
                setartList(data);
            });
        }
        else {
            getArtByCategory(categoryID).then((data) => {
                setartList(data);
            })
        }
    }, [categoryID]);

    return (
        <div>
            <h1>{props.greetting}</h1>
            <ItemList artList={artList} />
            <hr />
        </div>
    );
}

export default ItemListContainer;