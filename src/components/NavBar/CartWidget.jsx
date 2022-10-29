import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import {Link} from 'react-router-dom'

function CartWidget() {
  // const cart = useContext(cartContex).cart;
  const { getTotalItemCount } = useContext(cartContext);

  return (

      <Link to='/cart'>
        <div>🛒</div>
        <span>{
          getTotalItemCount() > 0 && getTotalItemCount()
        }</span>
      </Link>
  
  )
}

export default CartWidget;