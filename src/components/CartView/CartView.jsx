import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import FlexWrapper from '../FlexWrapper/FlexWrapper'

function CartView() {
  const { cart, removeItem } = useContext(cartContext)

  return
  <>
  {/* <FlexWrapper> */}

    {cart.map(articulo => (
      <div>
        <h2>{articulo.title}</h2>
        <h4>${articulo.price}</h4>
        <h4>{articulo.count}</h4>
        <h4>precio total: ${articulo.price * articulo.count}</h4>
        <button onClick={() => removeItem(articulo.id)}>Delete Item</button>
      </div>
    ))}

  {/* </FlexWrapper> */}
      </>
}

export default CartView