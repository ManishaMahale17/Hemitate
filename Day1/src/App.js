import "./App.css";
import data from "./data";


const Home = ({ data }) => {
  return (
    <div className="coffe">
      {data.map(({ id, title, img,discription}) => (
        <li key={id}>
          <span>{title}</span>
          <div className="img-container">
            <img src={img} alt={title}></img>
          </div>
          <span>{discription}</span>
        </li>
        
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>My gallary</h1>
      <Home data={data} />
    </div>
  );
}
