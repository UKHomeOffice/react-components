import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Types from '../types';

import Input from './input';
import MultipleChoice from '../mixins/multiple-choice';

class RadioGroup extends MultipleChoice(Input) {

  componentDidMount() {
    this.setState({});
  }

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

    const getReveal = (option, index) => (
      <div key={index} className={ classnames('govuk-reveal', { hidden: this.state && !this.hasValue(option.value) }) }>
        { option.reveal }
      </div>
    );

    return <div className={this.errorClass('govuk-form-group')}>
      <fieldset
        id={this.props.id || this.props.name}
        className={classnames('govuk-fieldset', { inline: this.props.inline }, this.props.className)}
      >
        <legend className="govuk-fieldset__legend">
          <h2 className="govuk-fieldset__heading govuk-heading-l">{this.props.label}</h2>
        </legend>
        {
          this.getContentPart('hint')
        }
        {
          this.getContentPart('error', 'govuk-error-message')
        }
        <div className="govuk-radios">
          {
            options.map(opt => (
              <div className="govuk-radios__item" key={this.optionId(opt)}>
                <input
                  className="govuk-radios__input"
                  id={this.optionId(opt)}
                  type="radio"
                  name={this.props.name}
                  value={opt.value}
                  {...this.optProps(opt)}
                />
                <label htmlFor={this.optionId(opt)} className="govuk-label govuk-radios__label">{opt.label}</label>
                { opt.hint && <span className="govuk-hint">{opt.hint}</span> }
                {
                  opt.reveal && !this.props.inline && getReveal(opt)
                }
              </div>
            ))
          }
        </div>
        <Fragment>
          {
            this.props.inline && options.map((option, index) => option.reveal && getReveal(option, index))
          }
        </Fragment>
      </fieldset>
    </div>;
  }

}

RadioGroup.defaultProps = {
  options: [],
  inline: false
};

RadioGroup.propTypes = {
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

export default RadioGroup;
