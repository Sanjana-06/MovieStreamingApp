import React from 'react'
import Logo from '../MovieLogo.jpeg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
      <div className='flex border space-x-8 items-center pl-3 py-3 bg-black'>
          <img className='w-[40px]' src={Logo} alt='MovieLogo'/>
          <Link to='Login' className='text-red-700 font-bold text-xl'>Login</Link>
          <Link to='/' className='text-red-700 font-bold text-xl'>Movies</Link>
          <Link to='/watchlist' className='text-red-700 font-bold text-xl'>WatchList</Link>
      </div>
      <div className='pt-8 bg-black'>
        {/* Your content here */}
      </div>
    </>
    
    
  )
}

export default NavBar
