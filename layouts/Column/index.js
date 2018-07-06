import React from 'react';

var Column = function Column(_ref) {
  var col = _ref.col,
      mCol = _ref.mCol,
      style = _ref.style,
      children = _ref.children;

  var colClass = col ? 'col-sm-' + col : '';
  var mColClass = mCol ? ' col-' + mCol : '';
  return React.createElement(
    'div',
    { className: colClass + mColClass, style: style },
    children
  );
};

export default Column;