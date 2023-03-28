import React from 'react';
import './DateInput.css';

class DateInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="date">
          <span>Birth date</span>
        </label>
        <input type="date" id="date" />
      </div>
    );
  }
}

export default DateInput;
