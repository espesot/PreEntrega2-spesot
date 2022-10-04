import React from 'react'
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to={'/'}>
            <li>Inicio</li>
          </Link>
          <Link to={'/category/aleta'}>
            <li>Aletas</li>
          </Link>
          <Link to={'/category/visor'}>
            <li>Visores</li>
          </Link>
          <Link to={'/category/ordenador'}>
            <li>Ordenadores</li>
          </Link>
        </ul>
        <CartWidget />
      </nav>
    </div>
  )
}

export default NavBar;