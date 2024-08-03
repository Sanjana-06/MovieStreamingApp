import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies() {
  const [movies, setMovies]=useState([])
  const [pageNo, setPageNo]=useState(1)
  const handlePrev=()=>{
    if(pageNo===1){
      setPageNo(pageNo)
    }else{
      setPageNo(pageNo-1)
    }
    
  }
  const handleNext=()=>{
    setPageNo(pageNo+1)
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cc92a66663969e890327e39c0b35cfb7&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
    },[pageNo])
  })
  return (
    <div className='p-5'>
      <div className='m-5 text-2xl font-bold text-center'>Trending Movies</div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
        {movies.map((movieObj)=>{
          return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
        })}
       
      </div>

      <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  )
}

export default Movies
