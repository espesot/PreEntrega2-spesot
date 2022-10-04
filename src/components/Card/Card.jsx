import React from 'react'
import Button from '../Button/Button'
import './Card.css'
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
        {/* al botton le asignamos un link para ir especificamente a ver el detalle de ese art */}
        <Link to={`/articulo/${props.id}`}>
          <Button text={`Comprar ${props.title}`} />
        </Link>
      </div>
    </div>
  );
}
