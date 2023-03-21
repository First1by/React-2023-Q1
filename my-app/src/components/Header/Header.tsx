import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <NavLink className="App-link" to="">
          Main page
        </NavLink>
        <NavLink className="App-link" to="/about">
          About us
        </NavLink>
      </header>
    );
  }
}

export default Header;
