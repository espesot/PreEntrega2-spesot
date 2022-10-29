import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import UserForm from '../UserForm/UserForm'

function CartView() {
  const { cart, removeItem, getTotalPrice, clearCart } = useContext(cartContext)

  return (

    <FlexWrapper>

      {cart.map((props) => (
        <div key={props.id}>
          <h2>{props.title}</h2>
          <h4>${props.price}</h4>
          <h4>{props.count}</h4>
          <h4>Precio Total: ${props.price * props.count}</h4>
          <button onClick={() => removeItem(props.id)}>Delete Item</button>
        </div>
      ))}
      <UserForm cart={cart} getTotalPrice={getTotalPrice} clearCart={clearCart} />
    </FlexWrapper>
  );
}

export default CartView;