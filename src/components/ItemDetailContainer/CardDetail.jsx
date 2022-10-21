import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import ItemCount from '../ItemCount/ItemCount'
import Loader from '../Loader/Loader';


function CardDetail(props) {
  const [count, setCount] = useState(0);
  const { addToCart, removeItem } = useContext(cartContext)

  function handleAddToCard(count) {
    addToCart(props, count)
    setCount(count)
  }
  if (props.title)

    return (
      <div>
        <div>
          <img src={props.img} alt={props.title}></img>
        </div>
        <div className="card-detail">
          <h2>{props.title}</h2>
          {(props.new) && <h3>Nuevo!</h3>}
          <h6>Stock Disponible: {props.stock}</h6>
          <h4>Valor por unidad ${props.price}</h4>
          <p>{props.detail}</p>
        </div>
        <div>
          {count === 0 ? (
            <ItemCount
              onAddToCard={handleAddToCard}
              stock={props.stock}
              initial={1}
              text={"Agregar al Carrito"}
            />
          ) : (
            <Link to='/cart'>Ver Carrito</Link>
          )}
          <button onClick={() => removeItem(props.id)}>Eliminar</button>
        </div>
      </div>

    );
  return <Loader/>
}

export default CardDetail
