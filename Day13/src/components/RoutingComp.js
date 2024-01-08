import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home';
import AllUser from './AllUser';
import AddUser from './AddUser';
import EditUser from './EditUser';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Navbar from './Navbar';


const RoutingComp = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/all" element={<AllUser />}/>
    <Route path="/add" element={<AddUser/>}/>
    <Route path="/edit/:id" element={<EditUser/>}/>
    <Route path="/signup" element={<SignUp />}/>
    

    </Routes>
  </BrowserRouter>
  )
}

export default RoutingComp
