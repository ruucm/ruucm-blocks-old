import React from 'react';

var Column = function Column(_ref) {
  var col = _ref.col,
      mCol = _ref.mCol,
      style = _ref.style,
      children = _ref.children,
      className = _ref.className;

  var colClass = col ? 'col-sm-' + col : '';
  var mColClass = mCol ? ' col-' + mCol : '';
  var parentClassName = className ? ' ' + className : '';
  return React.createElement(
    'div',
    { className: colClass + mColClass + parentClassName, style: style },
    children
  );
};

export default Column;