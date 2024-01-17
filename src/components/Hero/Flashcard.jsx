import React, { useEffect, useState } from 'react';
import './flash.css'
const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(()=> {

  }, [isFlipped])

  return (
    <div className={`relative  card w-[712px] h-[393.14px] perspective-1000
     cursor-pointer transform transition-transform ${isFlipped ? 'cardFlip' : ''}`} onClick={handleCardClick}>
        {/* front */}
      <div className='w-full h-full absolute flex justify-center items-center
       rounded-[42.507px] bg-gradient-to-tr from-blue-900 via-blue-600
        to-blue-300 front'>
        <p className='text-2xl font-bold text-white'>Front Content</p>
      </div>
      {/* back */}

      <div className='w-full h-full absolute top-0 flex justify-center items-center
       rounded-[42.507px] bg-gradient-to-tr from-green-900 via-green-600
        to-green-300 back '>
        <p className='text-2xl font-bold text-white'>Back Content</p>
      </div>

     
    </div>
  );
};

export default FlipCard;
