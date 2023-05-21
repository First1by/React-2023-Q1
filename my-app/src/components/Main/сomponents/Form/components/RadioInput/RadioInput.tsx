import React from 'react';
import './RadioInput.css';
import IRadio from 'interfaces/IRadio';

class RadioInput extends React.Component<IRadio> {
  constructor(props: IRadio) {
    super(props);
  }
  render() {
    return (
      <form ref={this.props.Ref}>
        <label className="label-radio">
          <span>Choose how we can contact</span>
          <div>
            <label>
              <input type="radio" name="contact" value="Messenger" />
              Messenger
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="contact" value="Call" />
              Call
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="contact" value="Email" />
              Email
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="contact" value="Video chat" />
              Video chat
            </label>
          </div>
        </label>
      </form>
    );
  }
}

export default RadioInput;
