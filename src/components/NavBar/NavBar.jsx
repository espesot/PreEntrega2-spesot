import React from 'react'
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <Link>
            <li>aletas</li>
          </Link>
          <Link>
            <li>vispres</li>
          </Link>
          <Link>
            <li>acompu </li>
          </Link>
        </ul>
        <CartWidget />
      </nav>
    </div>
  )
}

export default NavBar;