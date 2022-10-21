import React from 'react'
import Button from '../Button/Button'
import './Card.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
  const colorNew ={
    color:'green'
  }
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt=""></img>
      </div>

      <div className="card-detail">
        <h2>{props.title}</h2>
        {(props.new) && <h3 style={colorNew}>Nuevo!</h3>} 
         {/*con el operasdor and (&&)  si la primer parte es true se ejecuta la segunda y sino nada  */}
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
