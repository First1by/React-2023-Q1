import ICountrySelect from 'interfaces/ICountrySelect';
import React from 'react';
import './GenderInput.css';

class SelectCountry extends React.Component<ICountrySelect> {
  constructor(props: ICountrySelect) {
    super(props);
  }
  render() {
    return (
      <div className="input-wrapper">
        <div className="checkbox-input">
          <label htmlFor="select">
            <span>Select country</span>
          </label>
          <select ref={this.props.Ref} value={this.props.value} onChange={this.props.onChange} id="select">
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Poland">Poland</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectCountry;
