import React from 'react'

function Favourites() {
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
              <tr className='border-b-2'>
                  <td className='flex items-center px-6 py-4'>
                    <div>

                    </div>
                  </td>
                  <td>

                  </td>
                  <td>
                    
                  </td>
                  <td>
                    
                  </td>
                  <td className='text-red-800'>Delete</td>
              </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Favourites
