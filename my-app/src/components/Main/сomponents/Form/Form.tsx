import React from 'react';
import './Form.css';
import Checkbox from './components/CheckboxInput/CheckboxInput';
import DateInput from './components/DateInput/DateInput';
import NameInput from './components/NameInput/NameInput';
import GenderInput from './components/GenderInput/GenderInput';
import RadioInput from './components/RadioInput/RadioInput';
import FileInput from './components/FileInput/FileInput';
import Cards from './components/CardUser/CardUser';
import { IForm, IFormData } from './components/CardUser/IForm';

class Form extends React.Component<object, IForm> {
  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: object) {
    super(props);
    this.state = {
      name: '',
      image: '',
      cardArray: [],
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = React.createRef();
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    this.setState({ name: val });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    debugger;
    alert('Имя: ' + this.state.name);

    const text = this.formRef.current?.value;
    const date = this.formRef.current?.value;
    const country = this.formRef.current?.country.value;
    const agreement = this.formRef.current?.agreement.checked;
    const file = this.formRef.current?.file.value;

    const obj: IFormData = {
      text: text,
      date: date,
      country: country,
      agreement: agreement,
      file: file,
    };
    this.setState({ cardArray: [...this.state.cardArray, obj] });
  }

  render() {
    return (
      <>
        <form ref={this.formRef} className="contact-form" onSubmit={this.handleSubmit}>
          <NameInput value={this.state.name} onChange={this.onChange} />
          <DateInput />
          <GenderInput />
          <RadioInput />
          <Checkbox />
          <FileInput value={this.state.image} />
          <input type="submit" value="Submit" />
        </form>
        <div className="form-cards__container">
          {this.state.cardArray.map((elem, index) => (
            <Cards key={index} {...elem} />
          ))}
        </div>
      </>
    );
  }
}

export default Form;
