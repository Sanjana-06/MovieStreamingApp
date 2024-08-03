import React from 'react'
import Logo from '../MovieLogo.jpeg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3 bg-white'>
      <img className='w-[40px]' src={Logo} alt='MovieLogo'/>
      <Link to='Login' className='text-black font-bold text-lg'>Login</Link>
      <Link to='/' className='text-black font-bold text-lg'>Movies</Link>
      <Link to='/watchlist' className='text-black font-bold text-lg'>WatchList</Link>
    </div>
  )
}

export default NavBar
