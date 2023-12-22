import React, { useState } from 'react';

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      title: 'Pizza',
      img: require("./DataImages/pizza.jpg"), 
    },
    {
      title: 'Panipuri',
      img: require("./DataImages/panipuri.jpg"), 
    },
    {
      title: 'Pasta',
      img: require("./DataImages/pasta.jpg"), 
    },
    {
      title: 'Fries',
      img: require("./DataImages/frize.jpg"), 
    },
    {
      title: 'Sandwich',
      img: require("./DataImages/sandwich.jpg"), 
    },
  ];

  const handleButtonClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <img src={images[currentImageIndex].img} alt={images[currentImageIndex].title} />
      <h3>{images[currentImageIndex].title}</h3>
      <div>
        {images.map((image, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            {image.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
