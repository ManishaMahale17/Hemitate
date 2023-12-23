import React, { useState } from 'react';

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [buttonText, setButtonText] = useState('Pizza');

  const images = [
    {
      title: 'Pizza',
      img: require("./DataImages/pizza.jpg"), 
    },
    {
      title: 'Panipuri',
      img: require("./DataImages/panipuri.jpg"), 
    },
  ];

  const handleButtonClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setButtonText(images[currentImageIndex === 0 ? 1 : 0].title);
  };

  return (
    <div>
      <img src={images[currentImageIndex].img} alt={images[currentImageIndex].title} />
      <h3>{images[currentImageIndex].title}</h3>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  );
};

export default ImageGallery;
