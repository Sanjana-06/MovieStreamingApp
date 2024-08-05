import React from 'react'
import Favourites from './Favourites'

function MovieCard({movieObj,poster_path, name, handlewatchlist,handleremovewatchlist,watchlist}) {
  function doesContain(movieObj){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id==movieObj.id){
        return true;
      }
    }
    return false;
  }
  return (
    <div className='relative h-[50vh] w-[190px] overflow-hidden bg-black bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer ' style={{backgroundImage: `url(https://image.tmdb.org/t//p/original/${poster_path})`}}>
      {doesContain(movieObj)?
      <div onClick={()=>(handleremovewatchlist(movieObj))} className='absolute top-2 right-2 flex justify-center items-center h-7 w-7 bg-gray-800 rounded-full  text-red-500 text-l'>&#10060;</div>:
      <div className='absolute top-2 right-2 flex justify-center items-center h-7 w-7 bg-gray-800 rounded-full'>
        <span onClick={()=>(handlewatchlist(movieObj))} className=' text-red-500 text-xl'>&#10084;</span>
      </div>}
      <div className='absolute bottom-0 text-white text-xl w-full p-2 text-center bg-gray-900/60 '>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
