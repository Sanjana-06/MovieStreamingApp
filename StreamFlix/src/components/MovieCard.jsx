import React from 'react'

function MovieCard({poster_path, name}) {
  return (
    <div className='relative h-[50vh] w-[190px] overflow-hidden bg-black bg-center  bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer ' style={{backgroundImage: `url(https://image.tmdb.org/t//p/original/${poster_path})`}}>
      <div className='absolute bottom-0 text-white text-xl w-full p-2 text-center bg-gray-900/60 '>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
