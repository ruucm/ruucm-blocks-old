import React from 'react';
import PropTypes from 'prop-types';
import './PageLoadingSpinner.scss';
import JellyLoadingSpinner from 'components/JellyLoadingSpinner';

export var PageLoadingSpinner = function PageLoadingSpinner(_ref) {
  var size = _ref.size,
      child = _ref.child;
  return React.createElement(
    'div',
    { className: 'loader-wrapper' },
    React.createElement(JellyLoadingSpinner, null)
  );
};

PageLoadingSpinner.propTypes = {
  size: PropTypes.number
};

export default PageLoadingSpinner;