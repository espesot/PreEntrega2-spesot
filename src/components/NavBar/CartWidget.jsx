import React from 'react'
import {useContext} from 'react'
import {cartContext} from '../../context/cartContext'

function CartWidget() {
  // const cart = useContext(cartContex).cart;
  const {getTotalItemCount} = useContext(cartContext);
  
  return (
    <>
      <a href='/cart'>
        <div>🛒</div>
        <span>{getTotalItemCount()}</span>
      </a>
    </>
  )
}

export default CartWidget;