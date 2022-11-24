import React from 'react';
import './index.css';

import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Games from './components/games/Games.jsx';
import Consoles from './components/consoles/Consoles.jsx';
import User from './components/user/User.jsx';
import Marketplace from './components/marketplace/Marketplace.jsx';
import Wishlist from './components/wishlist/Wishlist.jsx';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';



const App = () => {

  const [user, setuser] = useState();
  return (
    <BrowserRouter>
      {user ? <nav><Navbar /></nav> : null}

      <Routes>

        <Route exact path='/' element={<Home></Home>}> </Route>
        <Route path='/signin' element={<Login></Login>}> </Route>
        <Route path='/games' element={<Games></Games>}> </Route>
        <Route exact path='/consoles' element={<Consoles></Consoles>}> </Route>
        <Route path='/marketplace' element={<Marketplace></Marketplace>}> </Route>
        <Route path='/wishlist' element={<Wishlist></Wishlist>}> </Route>


        {/* {/* <Route exact path='/' element={<Hero></Hero> }> </Route> */}



      </Routes>
      {/* <nav> <Footer></Footer> </nav> */}
    </BrowserRouter>
  )
}

export default App