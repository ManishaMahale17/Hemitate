import React, { useState } from 'react';

function App() {
  const [selectedBox, setSelectedBox] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');

  const fillColor = () => {
    const boxElement = document.getElementById(selectedBox);
    if (boxElement) {
      boxElement.style.backgroundColor = selectedColor;
    }
  };

  return (
    <div>
      <table id="container">
        <tbody>
          <tr>
            <td id="box1">box1</td>
            <td id="box2">box2</td>
            <td id="box3">box3</td>
          </tr>
          <tr>
            <td id="box4">box4</td>
            <td id="box5">box5</td>
            <td id="box6">box6</td>
          </tr>
          <tr>
            <td id="box7">box7</td>
            <td id="box8">box8</td>
            <td id="box9">box9</td>
          </tr>
        </tbody>
      </table>

      <br />

      <label htmlFor="box">Choose Box</label>
      <select
        id="boxSelector"
        value={selectedBox}
        onChange={(e) => setSelectedBox(e.target.value)}
      >
        <option value="">Select a box</option>
        <option value="box1">Box1</option>
        <option value="box2">Box2</option>
        <option value="box3">Box3</option>
        <option value="box4">Box4</option>
        <option value="box5">Box5</option>
        <option value="box6">Box6</option>
        <option value="box7">Box7</option>
        <option value="box8">Box8</option>
        <option value="box9">Box9</option>
      </select>

      &nbsp;

      <label htmlFor="color">Choose Color</label>
      <input
        type="color"
        id="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />

      &nbsp;

      <button onClick={fillColor}>Fill Color</button>
    </div>
  );
}

export default App;
