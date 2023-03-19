import './App.css';
import data from './data-products';
import { Routes, Route, Link } from 'react-router-dom';
import Aboutpage from './pages/Aboutpage';
import Notfoundpage from './pages/Notfoundpage';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<Aboutpage />}></Route>
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

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
class Main extends React.Component {
  state = {
    inputValue: '',
  };

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    debugger;
    this.setState({ inputValue: e.target.value });
    localStorage.setItem('inputValue', e.target.value);
  }

  componentDidMount(): void {
    this.setState({ inputValue: localStorage.getItem('inputValue') });
  }

  render() {
    return (
      <section>
        <h1>Main page</h1>
        <div className="App-find">
          <form>
            <input
              onChange={this.onChange.bind(this)}
              value={this.state.inputValue}
              type="text"
              placeholder="Find here..."
            />
            <button type="submit"></button>
          </form>
        </div>
        <div className="content">
          {data.map((el, key) => (
            <div className="product" key={key}>
              <img className="car-image" src={`${el.url}`} alt="audi" />
              <div>
                <h3>{el.title}</h3>
                <p>{el.type}</p>
                <div className="button">
                  <a>Request a price</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
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

export default App;
