import React from 'react'
import Logo from '../MovieLogo.jpeg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3 bg-black'>
      <img className='w-[30px]' src={Logo} alt='MovieLogo'/>
      <Link to='Login' className='text-red-700 font-bold text-lg'>Login</Link>
      <Link to='/' className='text-red-700 font-bold text-lg'>Movies</Link>
      <Link to='/watchlist' className='text-red-700 font-bold text-lg'>WatchList</Link>
    </div>
  )
}

export default NavBar
