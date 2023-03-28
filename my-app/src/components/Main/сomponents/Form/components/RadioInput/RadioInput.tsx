import React from 'react';
import './RadioInput.css';

class RadioInput extends React.Component {
  render() {
    return (
      <div>
        <label className="label-radio">
          <span>Choose how we can contact</span>
          <div>
            <label>
              <input type="radio" name="contact" />
              Messenger
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="contact" />
              Call
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="contact" />
              Email
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="contact" />
              Video chat
            </label>
          </div>
        </label>
      </div>
    );
  }
}

export default RadioInput;
