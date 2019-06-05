import React from 'react';
import classnames from 'classnames';
import Input from './input';
import PropTypes from 'prop-types';

class TextArea extends Input {

  render() {
    const {label, hint, error, name, rows, cols, disabled, readonly, className, ...other} = this.props;

    return <div className={classnames(this.errorClass('govuk-form-group'), className)}>
      <label className="govuk-label" htmlFor={this.id()}>{label}</label>
      {
        this.getContentPart('hint')
      }
      {
        this.getContentPart('error', 'govuk-error-message')
      }
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
