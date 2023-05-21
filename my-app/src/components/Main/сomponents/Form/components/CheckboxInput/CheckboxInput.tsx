import ICheckbox from 'interfaces/ICheckbox';
import React from 'react';
import './CheckboxInput.css';

class Checkbox extends React.Component<ICheckbox> {
  render() {
    return (
      <div className="input-wrapper">
        <div className="agreement">
          <span>Agreement</span>
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            ref={this.props.Ref}
            value={this.props.value}
            onChange={this.props.onChange}
            id="checkbox"
            name="checkbox"
          />
          <label htmlFor="checkbox">I consent to my personal data</label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
