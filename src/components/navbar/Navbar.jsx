import React from 'react';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('#');

  return (
    <nav className='navbar'>
      <a href='#' onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}> Home </a>
      <a href='#profile' onClick={() => setActive('profile')} className={active === 'profile' ? 'active' : ''}>Profile</a>
      <a href='#games' onClick={() => setActive('games')} className={active === 'games' ? 'active' : ''}>Games</a>
      <a href='#systems' onClick={() => setActive('systems')} className={active === 'systems' ? 'active' : ''}>Systems</a>
      <a href='#marketplace' onClick={() => setActive('marketplace')} className={active === 'marketplace' ? 'active' : ''}>Marketplace</a>
      <a href='#logout' onClick={() => setActive('logout')} className={active === 'logout' ? 'active' : ''}>LogOut</a>

    </nav>
  )
}

export default Navbar