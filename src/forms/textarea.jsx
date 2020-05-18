import React from 'react';
import classnames from 'classnames';
import pickBy from 'lodash/pickBy';
import Input from './input';
import PropTypes from 'prop-types';
import { globalAttributes, eventAttributes } from '../html-attributes';

const textareaAttributes = [
  'autofocus',
  'cols',
  'dirname',
  'disabled',
  'form',
  'maxlength',
  'name',
  'placeholder',
  'readonly',
  'required',
  'rows',
  'wrap'
];

const cleanProps = props => {
  const validAttributes = [].concat(globalAttributes, eventAttributes, textareaAttributes);
  return pickBy(props, (value, key) => validAttributes.includes(key) || /^data-/.test(key));
};

class TextArea extends Input {

  onInput(e) {
    const textarea = e.target;
    textarea.style.height = '';
    textarea.style.height = `${Math.min(textarea.scrollHeight, this.props.maxHeight)}px`;
  }

  render() {
    const {label, hint, error, name, rows, cols, disabled, readonly, className, autoExpand, ...other} = this.props;

    return <div className={classnames(this.errorClass('govuk-form-group'), className)}>
      <label className="govuk-label" htmlFor={this.id()}>{label}</label>
      {
        this.getContentPart('hint')
      }
      {
        this.getContentPart('error', 'govuk-error-message')
      }
      <textarea
        ref={this.textarea}
        className={this.errorClass('govuk-textarea')}
        id={this.id()}
        name={name}
        rows={rows}
        cols={cols}
        disabled={disabled}
        readOnly={readonly}
        {...cleanProps(other)}
        {...this.checkedOrUnchecked()}
        onInput={autoExpand ? this.onInput.bind(this) : null}
      />
    </div>;
  }

}

TextArea.defaultProps = {
  disabled: false,
  readonly: false,
  autoExpand: false,
  maxHeight: Infinity,
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
  readonly: PropTypes.bool,
  autoExpand: PropTypes.bool
};

export default TextArea;
