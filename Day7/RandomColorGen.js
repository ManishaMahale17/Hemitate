import React, { useState } from 'react';
import { ChromePicker } from 'react-color'; 

const ColorScreen = () => {
 
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setSelectedColor(randomColor);
  };
  return (
    <div className="color-picker-app">
      <h1>Color Picker App</h1>
      <ChromePicker color={selectedColor} onChange={handleColorChange} />
      <div className="selected-color" style={{ backgroundColor: selectedColor }}></div>
      <p>Selected Color: {selectedColor}</p>
      <button onClick={generateRandomColor}>Generate Random Color</button>
    </div>
  );
};

export default ColorScreen;
