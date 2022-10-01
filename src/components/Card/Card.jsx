import React from 'react'
import Button from '../Button/Button'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount';

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
        <Button text={`compra ${props.title}`} />

        <ItemCount stock={props.stock} initial={1} text={"agregar al carrito"} />
      </div>
    </div>
  );
}
