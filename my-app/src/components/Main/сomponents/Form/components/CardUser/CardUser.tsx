import React from 'react';
import { IFormData } from './IForm';

class Cards extends React.Component<IFormData> {
  render() {
    return (
      <div className="card-container">
        <div className="card-text-container">
          <img src={this.props.file} alt="" className="card-img" />
          <p>Name: {this.props.text}</p>
          <p>Country: {this.props.country}</p>
          <p>Date: {this.props.date}</p>
        </div>
      </div>
    );
  }
}

export default Cards;
