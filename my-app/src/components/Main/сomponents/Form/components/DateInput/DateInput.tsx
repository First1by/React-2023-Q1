import TextInput from 'interfaces/TextInput';
import React from 'react';
import './DateInput.css';

class DateInput extends React.Component<TextInput> {
  constructor(props: TextInput) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor="date">
          <span>Birth date</span>
        </label>
        <input ref={this.props.Ref} value={this.props.value} onChange={this.props.onChange} type="date" id="date" />
      </div>
    );
  }
}

export default DateInput;
