import React, { Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Types from '../types';
import Warning from '../warning';
import Input from './input';
import MultipleChoice from '../mixins/multiple-choice';

class CheckboxGroup extends MultipleChoice(Input) {

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

        const showReveal = opt => {
            if (!this.props.initialHideReveals) {
                return true;
            }

            return this.hasValue(opt.value);
        };

        return <div className={this.errorClass('govuk-form-group')}>
            <fieldset id={this.props.id || this.props.name} className={classnames('govuk-fieldset', { inline: this.props.inline }, this.props.className)}>
                {
                    this.props.label && (
                        <legend className="govuk-fieldset__legend">
                            <h2 className="govuk-fieldset__heading govuk-heading-l">{this.props.label}</h2>
                        </legend>
                    )
                }
                {
                    this.getContentPart('hint')
                }
                {
                    this.getContentPart('error', 'govuk-error-message')
                }
                <div className="govuk-checkboxes">
                    {
                        options.map(opt => (
                            <Fragment key={this.optionId(opt)}>
                                <div className="govuk-checkboxes__item">
                                    {
                                        opt.disabled && this.hasValue(opt.value) && <input type="hidden" name={this.props.name} value={opt.value} />
                                    }
                                    <input
                                        className="govuk-checkboxes__input"
                                        id={this.optionId(opt)}
                                        type="checkbox"
                                        name={this.props.name}
                                        value={opt.value}
                                        disabled={opt.disabled}
                                        {...this.optProps(opt)}
                                    />
                                    <label htmlFor={this.optionId(opt)} className="govuk-label govuk-checkboxes__label">{opt.label}</label>
                                    { opt.hint && <span className="govuk-hint">{opt.hint}</span> }
                                    {
                                        opt.warning &&
                      <div className="govuk-reveal">
                          <Warning>{opt.warning}</Warning>
                      </div>
                                    }
                                    {
                                        opt.reveal && showReveal(opt) && (
                                            <div className={ classnames('govuk-reveal', { hidden: !this.props.initialHideReveals && this.state && !this.hasValue(opt.value) }) }>
                                                { opt.reveal }
                                            </div>
                                        )
                                    }
                                </div>
                                { opt.additionalContent }
                            </Fragment>
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
    initialHideReveals: PropTypes.bool,
    label: PropTypes.node.isRequired,
    onChange: PropTypes.func,
    id: PropTypes.string,
    inline: PropTypes.bool,
    value: PropTypes.oneOfType([Types.value, PropTypes.arrayOf(Types.value)]),
    hint: PropTypes.node,
    error: PropTypes.node
};

export default CheckboxGroup;
