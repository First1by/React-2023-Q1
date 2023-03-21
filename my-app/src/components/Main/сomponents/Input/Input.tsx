import React from 'react';
import './input.css';

class Input extends React.Component<object, { inputValue: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('inputValue') ?? '',
    };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.target.value });
  }

  componentWillUnmount(): void {
    localStorage.setItem('inputValue', this.state.inputValue);
  }
  render() {
    return (
      <div className="App-find">
        <form className="form-search">
          <input
            onChange={this.onChange.bind(this)}
            value={this.state.inputValue || ''}
            type="text"
            placeholder="Find here..."
          />
          <button type="button"></button>
        </form>
      </div>
    );
  }
}

export default Input;
