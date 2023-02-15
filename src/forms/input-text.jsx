import React from 'react';
import Input from './input';
import PropTypes from 'prop-types';
import InputWrapper from './input-wrapper';

class TextInput extends Input {

    render() {
        return (
            <InputWrapper {...this.props}>
                <input
                    className={this.errorClass('govuk-input')}
                    id={this.id()}
                    name={this.props.name}
                    type={this.props.type}
                    disabled={this.props.disabled}
                    {...this.checkedOrUnchecked()}
                />
            </InputWrapper>
        );
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
