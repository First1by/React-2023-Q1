import data from '../../../../data-products';
import React from 'react';
import './card.css';

class Card extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Card;
