import PropTypes from 'prop-types';
import value from './value';

export default PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.shape({
      value,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      disabled: PropTypes.bool
    }),
    value
  ])
);
