import React from 'react';
import './Form.css';
import Checkbox from './components/CheckboxInput/CheckboxInput';
import DateInput from './components/DateInput/DateInput';
import NameInput from './components/NameInput/NameInput';
import SelectCountry from './components/SelectCountry/SelectCountry';
import RadioInput from './components/RadioInput/RadioInput';
import FileInput from './components/FileInput/FileInput';
import Cards from './components/CardUser/CardUser';
import { IForm, IFormData } from './components/CardUser/IForm';

class Form extends React.Component<object, IForm> {
  textRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  countryRef: React.RefObject<HTMLSelectElement>;
  checkboxRef: React.RefObject<HTMLInputElement>;
  fileRef: React.RefObject<HTMLInputElement>;
  radioRef: React.RefObject<HTMLFormElement>;

  constructor(props: object) {
    super(props);
    this.state = {
      name: '',
      date: '',
      country: '',
      radioInput: '',
      checkboxInput: '',
      image: '',
      cardArray: [],
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    // this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textRef = React.createRef();
    this.dateRef = React.createRef();
    this.countryRef = React.createRef();
    this.radioRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.fileRef = React.createRef();
  }

  onTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    this.setState({ name: val });
  }

  onDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    this.setState({ date: val });
  }

  onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value;
    this.setState({ country: val });
  }

  onRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    this.setState({ radioInput: val });
  }

  onCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    this.setState({ checkboxInput: val });
  }

  //   validateCheckbox(checkbox: boolean) {
  //     if (!checkbox) {
  //       this.setState({ checkboxInput: 'Agree consent to my personal data' });
  //       return false;
  //     }
  //     this.setState({ checkboxInput: '' });
  //     return true;
  //   }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    debugger;
    const text = this.textRef.current?.value as string;
    const date = this.dateRef.current?.value as string;
    const country = this.countryRef.current!.value;
    const radioContact = this.radioRef.current?.contact.value as string;
    // const agreement = this.agreementRef.current?.value as unknown as boolean;
    const checkbox = this.checkboxRef.current?.checked;
    const file = this.fileRef.current?.value as string;

    // const checkboxValid = this.validateCheckbox(checkbox);

    if (checkbox) {
      const obj: IFormData = {
        text: text,
        date: date,
        country: country,
        radioContact: radioContact,
        agreement: checkbox,
        file: file,
      };
      this.setState({ cardArray: [...this.state.cardArray, obj] });
    }
  }

  render() {
    return (
      <>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <NameInput Ref={this.textRef} value={this.state.name} onChange={this.onTextChange} />
          <DateInput Ref={this.dateRef} value={this.state.date} onChange={this.onDateChange} />
          <SelectCountry Ref={this.countryRef} value={this.state.country} onChange={this.onSelectChange} />
          <RadioInput Ref={this.radioRef} onChange={this.onRadioChange} />
          <Checkbox Ref={this.checkboxRef} onChange={this.onCheckboxChange.bind(this)} />
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
