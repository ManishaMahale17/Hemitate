import { useState } from "react";
import "./App.css";
import pizza from "./DataImages/pizza.jpg";
import panipuri from "./DataImages/panipuri.jpg";

export default function App() {
  const [name, setName] = useState(pizza);
  const changeName = () => {
    let value = name;

    if (value === pizza) {
      setName(panipuri);
    } else {
      setName(pizza);
    }
  };
  
  return (
    <div className="App">
      <img src={name} /> <br />
      <button onClick={changeName}>Cilck here</button>
    </div>
  );
}