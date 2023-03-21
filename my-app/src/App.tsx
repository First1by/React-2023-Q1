import './App.css';
import { Routes, Route } from 'react-router-dom';
import Aboutpage from './pages/Aboutpage';
import Notfoundpage from './pages/Notfoundpage';
import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';

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

export default App;
