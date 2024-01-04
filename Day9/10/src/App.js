
import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TrainerModule from './components/TrainerModule';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/all" element={<AllUser />}/>
      <Route path="/add" element={<AddUser />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/edit/:id" element={<EditUser />}/>
      <Route path="/trainer" element={<TrainerModule />}/>
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
