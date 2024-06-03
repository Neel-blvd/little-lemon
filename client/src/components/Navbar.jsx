import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/booking'><li>Reserve a Table</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar