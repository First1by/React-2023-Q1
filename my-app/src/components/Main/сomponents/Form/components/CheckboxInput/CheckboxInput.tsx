import React from 'react';
import './CheckboxInput.css';

class Checkbox extends React.Component {
  render() {
    return (
      <div className="input-wrapper">
        <div className="agreement">
          <span>Agreement</span>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">I consent to my personal data</label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
