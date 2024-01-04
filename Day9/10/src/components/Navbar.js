import React from 'react'
import { AppBar,Toolbar,Typography,styled } from '@mui/material'

import { NavLink } from 'react-router-dom'

const Header=styled(AppBar)`
background:#111111;`

const Tabs=styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none`


const Navbar = () => {
  return (
    <div>
      <Header position='static'>
        <Toolbar >
           <Tabs to="/">Home</Tabs> 
           <Tabs to="/signin">SignIn</Tabs>
           <Tabs to="/all">All User</Tabs>
           <Tabs to="/add">Add User</Tabs>
           <Tabs to="/signup">SignUp</Tabs>
           <Tabs to="/trainer">Trainer</Tabs>

           
        </Toolbar>
      </Header>
    </div>
  )
}

export default Navbar
