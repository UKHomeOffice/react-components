import React from 'react';
import Input from './input';
import PropTypes from 'prop-types';
import Types from '../types';

class DateInput extends Input {

  dateFragment(field) {
    return `${this.id()}-${field}`;
  }

  parseValue() {
    const date = this.props.value.split('T')[0];
    const bits = date.split('-');
    return {
      day: bits[2],
      month: bits[1],
      year: bits[0]
    };
  }

  render() {
    const value = this.parseValue();
    return <div className={this.errorClass('govuk-form-group')}>
      <fieldset className="govuk-fieldset" aria-describedby={this.dateFragment('hint')} role="group">
        <legend className="govuk-fieldset__legend">
          <h2 className="govuk-fieldset__heading govuk-heading-l">{this.props.label}</h2>
        </legend>
        {
          this.getContentPart('hint')
        }
        {
          this.getContentPart('error', 'error-message')
        }
        <div className="govuk-date-input">
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor={this.dateFragment('day')}>
                Day
              </label>
              <input className="govuk-input govuk-date-input__input govuk-input--width-2" id={this.dateFragment('day')} name={this.dateFragment('day')} type="number" pattern="[0-9]*" defaultValue={value.day} />
            </div>
          </div>
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor={this.dateFragment('month')}>
                Month
              </label>
              <input className="govuk-input govuk-date-input__input govuk-input--width-2" id={this.dateFragment('month')} name={this.dateFragment('month')} type="number" pattern="[0-9]*" defaultValue={value.month} />
            </div>
          </div>
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor={this.dateFragment('year')}>
                Year
              </label>
              <input className="govuk-input govuk-date-input__input govuk-input--width-4" id={this.dateFragment('year')} name={this.dateFragment('year')} type="number" pattern="[0-9]*" defaultValue={value.year} />
            </div>
          </div>
        </div>
      </fieldset>
    </div>;
  }

}

DateInput.defaultProps = {
  value: ''
};

DateInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: Types.date,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default DateInput;
