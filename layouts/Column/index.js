'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _react2.default.createElement(
    'div',
    {
      className: colClass + mColClass + hideClass + parentClassName,
      style: style
    },
    children
  );
};

exports.default = Column;