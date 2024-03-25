import React, { useState, useEffect } from 'react';
import '../Main/Main.css';

function Slide({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]); // images가 변경될 때마다 재설정

  return (
    <div className='Slide'>
      <img src={images[currentImageIndex]} alt="Slide" />
    </div>
  );
}

export default Slide;
