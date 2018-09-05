import React from 'react';

var Column = function Column(_ref) {
  var col = _ref.col,
      mCol = _ref.mCol,
      hide = _ref.hide,
      style = _ref.style,
      children = _ref.children,
      className = _ref.className;

  var colClass = col ? 'col-sm-' + col : '';
  var mColClass = mCol ? ' col-' + mCol : '';
  var parentClassName = className ? ' ' + className : '';
  var hideClass = void 0;
  switch (hide) {
    case 'all':
      hideClass = ' d-none';
      break;
    case 'phone':
      hideClass = ' d-none d-sm-block';
      break;
    case 'desktop':
      hideClass = ' d-sm-none';
      break;
    default:
      hideClass = '';
      break;
  }
  return React.createElement(
    'div',
    {
      className: colClass + mColClass + hideClass + parentClassName,
      style: style
    },
    children
  );
};

export default Column;