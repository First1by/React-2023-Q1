import React from 'react';
import './NameInput.css';

interface TextInput {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class NameInput extends React.Component<TextInput> {
  constructor(props: TextInput) {
    super(props);
  }
  render() {
    return (
      <div className="input-wrapper">
        <div className="name-input">
          <label htmlFor="nameInput">
            <span>Name:</span>
          </label>
          <input type="text" id="nameInput" value={this.props.value} onChange={this.props.onChange} />
        </div>
      </div>
    );
  }
}

export default NameInput;
