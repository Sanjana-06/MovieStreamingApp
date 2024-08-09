import React from 'react';

function Banner({ imageUrl, title }) {
  return (
    <div
      className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end'
      style={{ 
        backgroundImage: `url(${imageUrl})`, 
        backgroundSize: 'cover', // Ensure the image covers the container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat' // Prevent repeating the image
      }}
    >
      <div className='text-white text-xl text-center w-full bg-blue-900/60 p-1'>
        {title}
      </div>
    </div>
  );
}

export default Banner;


