import React from 'react'
import { getUnArticulos } from '../mockAPI/mockAPI'
import { useEffect, useState } from 'react'
import {useParams} from 'react'
import {Link} from "react-router-dom"
import Button from '../Button/Button'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetailContairer(props) {
    const[art, setArt] = useState([])
    const {itemId}= useParams()
        
    useEffect(() =>{
        getUnArticulos(itemId).then(data =>{
            setArt(data)
        }); 
    

        },[itemId])
    
    return (
    
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt=""></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4>${props.price}</h4>
      </div>
      <div>
        <Link to= {`/Art/${props.title}`}>
        <Button text={`compra ${props.title}`} />
        
        </Link>

        {/* <ItemCount stock={props.stock} initial={1} text={"agregar al carrito"} /> */}
      </div>
    </div>
  );
}

export default ItemDetailContairer