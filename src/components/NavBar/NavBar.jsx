import React from 'react'
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div>
    <nav>
        <ul>
            <li><a href='a'>Aletas</a></li>
            <li><a href='a'>Visores</a></li>
            <li><a href='a'>Chaleco</a></li>
        </ul>
        <CartWidget/>
    </nav>
    </div>
  )
}

export default NavBar;