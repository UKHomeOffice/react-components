import React from 'react';
import Input from './input';
import PropTypes from 'prop-types';

class TextArea extends Input {

  render() {
    const {label, hint, error, name, rows, cols, disabled, readonly, ...other} = this.props;

    return <div className={this.errorClass('govuk-form-group')}>
      <label className="govuk-label" htmlFor={this.id()}>{label}</label>
      { hint && <span id={this.id() + '-hint'} className="govuk-hint">{hint}</span> }
      { error && <span id={this.id() + '-error'} className="govuk-error-message">{error}</span> }
      <textarea
        className={this.errorClass('govuk-textarea')}
        id={this.id()}
        name={name}
        rows={rows}
        cols={cols}
        disabled={disabled}
        readOnly={readonly}
        {...other}
        {...this.checkedOrUnchecked()}
      />
    </div>;
  }

}

TextArea.defaultProps = {
  disabled: false,
  readonly: false,
  rows: 4
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.string,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cols: PropTypes.number,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool
};

export default TextArea;
