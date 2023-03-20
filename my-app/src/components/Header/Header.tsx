import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Link className="App-link" to="">
          Main page
        </Link>
        <Link className="App-link" to="/about">
          About us
        </Link>
      </header>
    );
  }
}

export default Header;
