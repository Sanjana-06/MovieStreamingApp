import React from 'react'

function Favourites({watchlist}) {
  return (
    <>
      <div className='flex justify-center flex-wrap'>
          <div className=' items-center bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4'>Action</div>
      </div>
      <div className='flex justify-center my-4'>
          <input type='text' placeholder=' Serach Movies' className='h-[3-rem] w-[20-rem] border border-gray-600 bg-gray-200 outline-none'/>

      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 m=8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
                <th>Name</th>
                <th>Ratings</th>
                <th>Popularity</th>
                <th>Genre</th>
              </tr>
          </thead>
          <tbody>
              {watchlist.map((movieObj)=>{
                return<tr key={movieObj.id} className='border-b-2'>
                        <td className='flex items-center px-6 py-4'>
                          <div className='flex items-center'>
                            <img className= 'h-[6rem] w-[10rem] object-cover' src={`https://image.tmdb.org/t//p/original/${movieObj.backdrop_path}`}/>
                            <div className='ml-7'>{movieObj.title}</div>
                          </div>
                        </td>
                        <td>{movieObj.vote_average}</td>
                        <td>{movieObj.popularity}</td>
                        <td>Action</td>
                        <td className='text-red-800'>Delete</td>
                      </tr>
              })}
              
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Favourites
