import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <div className="header">
    <nav className="nav-container">
      <ul> 
        <li className="ani">
          <Link to='/'>home</Link>
        </li>
        <li className="ani">
          <Link to='/work'>work</Link>
        </li>
        <li className="ani">
          <Link to='/about'>about</Link>
        </li>
        <li className="ani">
          <Link to='/contact'>contact</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
