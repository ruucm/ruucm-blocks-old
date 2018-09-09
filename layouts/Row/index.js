'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _bootstrapGrid = require('../../libs/bootstrap-grid');

var _bootstrapGrid2 = _interopRequireDefault(_bootstrapGrid);

var _bootstrapDisplay = require('../../libs/bootstrap-display');

var _bootstrapDisplay2 = _interopRequireDefault(_bootstrapDisplay);

var _ruucmUtil = require('ruucm-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowWrapper = _styledComponents2.default.div(_templateObject, _bootstrapGrid2.default, _bootstrapDisplay2.default);

var Row = function Row(_ref) {
  var style = _ref.style,
      children = _ref.children,
      className = _ref.className;

  var parentClassName = className ? ' ' + className : '';
  return _react2.default.createElement(
    RowWrapper,
    null,
    _react2.default.createElement(
      'div',
      { className: 'row no-gutters' + parentClassName, style: style },
      children
    )
  );
};

exports.default = Row;