import React from 'react'

function CardDetail(props) {
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
        <Link to= {`/curso/${props.title}`}>
        <Button text={`compra ${props.title}`} />
        
        </Link>

        <ItemCount stock={props.stock} initial={1} text={"agregar al carrito"} />
      </div>
    </div>

  )
}

export default CardDetail
