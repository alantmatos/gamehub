import React from 'react';
import './home.css';
import User from './User.jsx';

import Navbar from '../navbar/Navbar.jsx';
import Footer from '../footer/Footer.jsx';

const Home = () => {

  return (
    <div className='container home_container'>

      <div className='top-nav'>
        <form>
          <input type="text" name="search" placeholder="search"></input>
          <button type='submit'> Go </button>
        </form>

      </div>

      <div className='side-nav'>
        <img className='profile_image' src="https://647545.smushcdn.com/1936545/wp-content/uploads/2021/10/watch-anywhere.jpg?lossy=1&strip=1&webp=1"></img>
        <h1> UserName </h1>
        <ul>
          <li> <a href='/'> Home</a></li>
          <li> <a href='/games'> Games</a></li>
          <li> <a href='/consoles'>Consoles</a></li>
          <li> <a href='/marketplace'>Marketplace</a></li>
          <li> <a href='/wishlist'> Wishlist </a></li>
          <li> <a href='/signin'> Sign In </a></li>
          
        </ul>
      </div>

      <div className='hero'>
        user feed
      </div>
      {/* <User/> */}
    </div>
  )
}

export default Home


{/* <Route exact path='/' element={<Home></Home>}> </Route>
<Route path='/signin' element={<Login></Login>}> </Route>
<Route path='/games' element={<Games></Games>}> </Route>
<Route exact path='/consoles' element={<Consoles></Consoles>}> </Route>
<Route path='/marketplace' element={<Marketplace></Marketplace>}> </Route> */}
