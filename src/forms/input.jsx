import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

class Input extends React.Component {

    id() {
        return this.props.id || this.props.name;
    }

    errorClass(cls) {
        return this.props.error ? `${cls} ${cls}--error` : cls;
    }

    checkedOrUnchecked() {
        if (this.props.onChange) {
            return {
                value: this.props.value,
                onChange: this.props.onChange
            };
        }
        return {
            defaultValue: this.props.value
        };
    }

    getContentPart(type, className) {
        if (!this.props[type]) {
            return null;
        }
        return (
            <span id={`${this.id()}-${type}`} className={className || `govuk-${type}`}>
                {
                    React.isValidElement(this.props[type])
                        ? this.props[type]
                        : <ReactMarkdown>{this.props[type]}</ReactMarkdown>
                }
            </span>
        );
    }

}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Input;
