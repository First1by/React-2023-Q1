import React from 'react';

class Form extends React.Component<object, { name: string }> {
  constructor(props: object) {
    super(props);
    this.state = { name: '' };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    this.setState({ name: val });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert('Имя: ' + this.state.name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>Name:</label>
          <br />
          <input type="text" value={this.state.name} onChange={this.onChange} />
        </p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
