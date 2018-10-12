import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Types from '../types';

import Input from './input';
import MultipleChoice from '../mixins/multiple-choice';

class CheckboxGroup extends MultipleChoice(Input) {

  optProps(opt) {
    if (this.props.onChange) {
      return {
        onChange: this.props.onChange,
        checked: this.hasValue(opt.value)
      };
    }
    return {
      defaultChecked: this.hasValue(opt.value)
    };
  }

  render() {
    const options = this.normaliseOptions();
    return <div className={this.errorClass('govuk-form-group')}>
      <fieldset id={this.props.id || this.props.name} className={'govuk-fieldset ' + this.props.inline ? 'inline' : ''}>
        <legend className="govuk-fieldset__legend">
          <h2 className="govuk-fieldset__heading govuk-heading-l">{this.props.label}</h2>
        </legend>
        { this.props.hint && <span id={this.id() + '-hint'} className="govuk-hint">{this.props.hint}</span> }
        { this.props.error && <span id={this.id() + '-error'} className="govuk-error-message">{this.props.error}</span> }
        <div className="govuk-checkboxes">
          {
            options.map(opt => (
              <div className="govuk-checkboxes__item" key={this.optionId(opt)}>
                <input
                  className="govuk-checkboxes__input"
                  id={this.optionId(opt)}
                  type="checkbox"
                  name={this.props.name}
                  value={opt.value}
                  {...this.optProps(opt)}
                />
                <label htmlFor={this.optionId(opt)} className="govuk-label govuk-checkboxes__label">{opt.label}</label>
                { opt.hint && <span className="govuk-hint">{opt.hint}</span> }
                {
                  opt.reveal && (
                    <div className={ classnames({ hidden: !this.hasValue(opt.value) }) }>
                      { opt.reveal }
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </fieldset>
    </div>;
  }

}

CheckboxGroup.defaultProps = {
  options: [],
  inline: false
};

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: Types.options.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  inline: PropTypes.bool,
  value: PropTypes.oneOfType([Types.value, PropTypes.arrayOf(Types.value)]),
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default CheckboxGroup;
