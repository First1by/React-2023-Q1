import React from 'react';
import './main.css';
import Card from './сomponents/Card/Card';
import Input from './сomponents/Input/Input';

class Main extends React.Component {
  render() {
    return (
      <section>
        <h1>Main page</h1>
        <Input />
        <Card />
      </section>
    );
  }
}

export default Main;
