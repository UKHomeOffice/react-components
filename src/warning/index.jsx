import React from 'react';

const Warning = ({ children }) => (
  <div className="govuk-warning-text">
    <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
    <strong className="govuk-warning-text__text">
      { children }
    </strong>
  </div>
);

export default Warning;
