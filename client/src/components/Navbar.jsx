import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../public/logo.png'

function Navbar() {
  return (
    <nav className='bg-black text-white border-b'>
        <ul className='flex pl-5 p-2'>
            <Link to='/'>
                <li>
                    <img src={logo} width='300' className=' brightness-200'></img>
                </li>
            </Link>
            <Link to='/'><li className='ml-16 pt-8 hover:scale-105'>Home</li></Link>
            <Link to='/booking'><li className=' ml-16 pt-8 hover:scale-105'>Reserve a table</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar