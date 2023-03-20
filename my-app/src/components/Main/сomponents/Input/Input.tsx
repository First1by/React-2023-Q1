import React from 'react';
import './input.css';

class Input extends React.Component {
  state = {
    inputValue: '',
  };

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.target.value });
    localStorage.setItem('inputValue', e.target.value);
  }

  componentDidMount(): void {
    this.setState({ inputValue: localStorage.getItem('inputValue') });
  }
  render() {
    return (
      <div className="App-find">
        <form className="form-search">
          <input
            onChange={this.onChange.bind(this)}
            value={this.state.inputValue}
            type="text"
            placeholder="Find here..."
          />
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default Input;
