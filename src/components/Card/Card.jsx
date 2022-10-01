import React from 'react'
import Button from '../Button/Button'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export default function Card(props) {
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
        <Link to= {`/art/${props.id}`}>
        <Button text={`compra ${props.title}`} />
        
        </Link>

        <ItemCount stock={props.stock} initial={1} text={"agregar al carrito"} />
      </div>
    </div>
  );
}
