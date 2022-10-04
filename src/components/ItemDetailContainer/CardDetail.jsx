import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import ItemCount from '../ItemCount/ItemCount'

function CardDetail(props) {
  return (
    <div>
      <div>
        <img src={props.img} alt={props.title}></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4>${props.price}</h4>
      </div>
      <div>
        <ItemCount stock={props.stock} initial={1} text={"agregar al carrito"} />
      </div>
    </div>

  )
}

export default CardDetail
