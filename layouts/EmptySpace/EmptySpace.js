'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n\n  ', ';\n'], ['\n  ', ';\n\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n        height: ', ';\n      '], ['\n        height: ', ';\n      ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    ', ';\n  '], ['\n    ', ';\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n          height: ', ';\n        '], ['\n          height: ', ';\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('ruucm-blocks/tools/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptySpaceWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  var height = props.height + '';
  return props.height && (0, _styledComponents.css)(_templateObject2, height.includes('px') || height.includes('vw') ? height : height + 'px');
}, _media2.default.phone(_templateObject3, function (props) {
  var mHeight = props.mHeight + '';
  return (props.mHeight || props.mHeight == 0) && (0, _styledComponents.css)(_templateObject4, mHeight.includes('px') || mHeight.includes('vw') ? mHeight : mHeight + 'px');
}));

var EmptySpace = function EmptySpace(props) {
  return _react2.default.createElement(
    EmptySpaceWrapper,
    props,
    props.children
  );
};

exports.default = EmptySpace;