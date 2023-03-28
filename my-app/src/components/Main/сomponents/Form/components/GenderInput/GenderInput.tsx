import React from 'react';
import './GenderInput.css';

class GenderInput extends React.Component {
  render() {
    return (
      <div className="input-wrapper">
        <div className="checkbox-input">
          <label htmlFor="select">
            <span>Select country</span>
          </label>
          <select id="select">
            <option value="Male">Belarus</option>
            <option value="Female">Russia</option>
            <option value="Female">Ukraine</option>
            <option value="Female">Poland</option>
          </select>
        </div>
      </div>
    );
  }
}

export default GenderInput;
