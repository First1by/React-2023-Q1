import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h3>AUDI 2023</h3>
        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          <img src="./img/rs.png" alt="Rs School" />
        </a>
      </footer>
    );
  }
}

export default Footer;
