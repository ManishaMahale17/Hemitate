import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedDiv, setSelectedDiv] = useState('box1');
  const [selectedColor, setSelectedColor] = useState('#000000');

  const fillColor = () => {
    const selectedBlock = document.getElementById(selectedDiv);
    if (selectedBlock) {
      selectedBlock.style.backgroundColor = selectedColor;
    }
  };

  const handleDivChange = (event) => {
    setSelectedDiv(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="block" id="box1">1</div>
          <div className="block" id="box2">2</div>
          <div className="block" id="box3">3</div>
        </div>
        <div className="row">
          <div className="block" id="box4">4</div>
          <div className="block" id="box5">5</div>
          <div className="block" id="box6">6</div>
        </div>
        <div className="row">
          <div className="block" id="box7">7</div>
          <div className="block" id="box8">8</div>
          <div className="block" id="box9">9</div>
        </div>
      </div>
      <div>
        <label htmlFor="chooseDiv">Choose Div:</label>
        <select id="chooseDiv" onChange={handleDivChange} value={selectedDiv}>
          <option value="box1">Box 1</option>
          <option value="box2">Box 2</option>
          <option value="box3">Box 3</option>
          <option value="box4">Box 4</option>
          <option value="box5">Box 5</option>
          <option value="box6">Box 6</option>
          <option value="box7">Box 7</option>
          <option value="box8">Box 8</option>
          <option value="box9">Box 9</option>
        </select>

        <label htmlFor="chooseColor">Choose Color:</label>
        <input
          type="color"
          id="chooseColor"
          onChange={handleColorChange}
          value={selectedColor}
        />

        <button onClick={fillColor}>Fill Color</button>
      </div>
    </div>
  );
};

export default ColorPicker;
