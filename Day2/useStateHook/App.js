import React, { useState } from "react";
import "./styles.css";

function App() {
  const [myImage, setMyImage] = useState("Mahale");
  const changeName = () => {
    let val = myImage;
    val === "Mahale" ? setMyImage("Tambe") : setMyImage("Mahale");
  };
  return (
    <div className="App">
      <h1>{myImage}</h1>
      <button className="btn" onClick={changeName}>
        Click me
      </button>
    </div>
  );
}

export default App;
