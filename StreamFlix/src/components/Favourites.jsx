import React, { useEffect, useState } from 'react'

import genreIds from '../utility/genre'



function Favourites({watchlist, setWatchList,handleremovewatchlist}) {
  const[search,setSearch]=useState("")
  const[genreList,setgenreList]=useState(['All Genres'])
  const[currgenre,setcurrgenre]=useState('All Genres')

  let handlesearch=(e)=>{
    setSearch(e.target.value)
  }

  let handleFilter=(genre)=>{
    setcurrgenre(genre)
  }

  let sortIncreasing=()=>{
    let sortedI=watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })
    setWatchList([...sortedI])
  }
  let sortDecreasing=()=>{
    let sortedD=watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average-movieA.vote_average
    })
    setWatchList([...sortedD])
  }

  let sortIncreasingP=()=>{
    let sortedI=watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })
    setWatchList([...sortedI])
  }

  let sortDecreasingP=()=>{
    let sortedD=watchlist.sort((movieA,movieB)=>{
      return movieB.popularity-movieA.popularity
    })
    setWatchList([...sortedD])
  }

  useEffect(()=>{
    let temp=watchlist.map((movieObj)=>{
      return genreIds[movieObj.genre_ids[0]]
    })
    temp=new Set(temp)
    setgenreList(['All Genres',...temp])
  },[watchlist])

  return (
    <>
      <div className='flex justify-center flex-wrap'>
      {genreList.map((genre)=>{
          return <div onClick={()=>handleFilter(genre)}  className={currgenre==genre? 'cursor-pointer items-center bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4':'cursor-pointer flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4 '}>{genre}</div>
      })}
      </div>

      <div className='flex justify-center my-4'>
        <input 
          onChange={handlesearch} 
          value={search} 
          type='text' 
          placeholder='Search Movies' 
          className='h-12 w-64 border border-gray-400 bg-gray-300 rounded-lg shadow-md outline-none px-4'
        />
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 m=8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
                <th>Name</th>
                <th>
                <div className='flex items-center justify-center'>
                  <div className='p-2 cursor-pointer' onClick={() => sortIncreasing('vote_average')}>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className='p-2'>Ratings</div>
                  <div className='p-2 cursor-pointer' onClick={() => sortDecreasing('vote_average')}>
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>
                <div className='flex items-center justify-center'>
                  <div className='p-2 cursor-pointer' onClick={() => sortIncreasingP('popularity')}>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className='p-2'>Popularity</div>
                  <div className='p-2 cursor-pointer' onClick={() => sortDecreasingP('popularity')}>
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
                <th>Genre</th>
              </tr>
          </thead>
          <tbody>
              {watchlist.filter((movieObj)=>{
                if(currgenre=='All Genres'){
                  return true;
                }else{
                  return genreIds[movieObj.genre_ids[0]]==currgenre;
                }
              }).filter((movieObj)=>{
                return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
              }).map((movieObj)=>{
                return<tr key={movieObj.id} className='border-b-2'>
                        <td className='flex items-center px-6 py-4'>
                          <div className='flex items-center'>
                            <img className= 'h-[6rem] w-[10rem] object-cover' src={`https://image.tmdb.org/t//p/original/${movieObj.backdrop_path}`}/>
                            <div className='ml-7'>{movieObj.title}</div>
                          </div>
                        </td>
                        <td>{movieObj.vote_average}</td>
                        <td>{movieObj.popularity}</td>
                        <td>{genreIds[movieObj.genre_ids[0]]}</td>
                        <td onClick={()=>handleremovewatchlist(movieObj)} className='cursor-pointer text-red-800'>Delete</td>
                      </tr>
              })}
              
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Favourites
