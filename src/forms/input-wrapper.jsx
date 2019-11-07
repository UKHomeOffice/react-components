import React from 'react';
import Input from './input';

class InputWrapper extends Input {

  render() {
    return <div className={this.errorClass('govuk-form-group')}>
      <label className="govuk-label" htmlFor={this.id()}>{this.props.label}</label>
      {
        this.getContentPart('hint')
      }
      {
        this.getContentPart('error', 'govuk-error-message')
      }
      { this.props.children }
    </div>;
  }

}

export default InputWrapper;
