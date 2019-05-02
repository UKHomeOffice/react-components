import React from 'react';
import Input from './input';
import PropTypes from 'prop-types';

class TextInput extends Input {

  render() {
    return <div className={this.errorClass('govuk-form-group')}>
      <label className="govuk-label" htmlFor={this.id()}>{this.props.label}</label>
      {
        this.getContentPart('hint')
      }
      {
        this.getContentPart('error', 'error-message')
      }
      <input
        className={this.errorClass('govuk-input')}
        id={this.id()}
        name={this.props.name}
        type={this.props.type}
        {...this.checkedOrUnchecked()}
      />
    </div>;
  }

}

TextInput.defaultProps = {
  type: 'text'
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default TextInput;
