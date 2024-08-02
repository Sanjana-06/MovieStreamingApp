import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <div className='p-5'>
      <div className='m-5 text-2xl font-bold text-center'>Trending Movies</div>
      <div className='flex flex-row flex-wrap justify-around'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    </div>
  )
}

export default Movies
