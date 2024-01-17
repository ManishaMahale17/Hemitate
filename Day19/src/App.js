import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trainer from "./pages/Trainers/container/Trainer";
import { Provider } from "react-redux";
import store from "./store/store";
import TrainerForm from "./pages/Trainers/container/TrainerForm";
import TrainerEdit from './pages/Trainers/container/TrainerEdit';

function App() {
  return(
  <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Trainer/>}/>
          <Route path="/add" element={<TrainerForm/>}/>  
          <Route path="/edit/:id" element={<TrainerEdit/>}/> 
        </Routes>
      </BrowserRouter>
    </div >
    </Provider>
  );
}

export default App;
