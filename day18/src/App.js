
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrainerList from './components/TrainerList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrainerForm from './components/TrainerForm';
import TrainerUpdate from './components/TrainerUpdate';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<TrainerList/>}></Route>
      <Route path="/add" element={<TrainerForm/>}></Route>
      <Route path="/edit/:id" element={<TrainerUpdate/>}></Route>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
