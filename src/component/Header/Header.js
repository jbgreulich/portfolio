import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <div className="header">
    <nav className="nav-container">
      <ul> 
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/work'>work</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/contact'>contact</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
