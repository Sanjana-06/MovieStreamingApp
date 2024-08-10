import React from 'react';

function Banner({ imageUrl, title }) {
  return (
    <div
      className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end overflow-hidden'
      style={{ 
        backgroundImage: `url(${imageUrl})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <div className='text-white font-bold text-xl text-center w-full bg-black bg-opacity-50 p-2'>
        {title}
      </div>
    </div>
  );
}

export default Banner;


