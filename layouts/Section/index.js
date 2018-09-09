'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      max-width: ', 'px;\n      margin: 0 auto;\n    '], ['\n      max-width: ', 'px;\n      margin: 0 auto;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SectionWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.maxWidth && (0, _styledComponents.css)(_templateObject2, props.maxWidth);
});
var Section = function Section(props) {
  return _react2.default.createElement(
    SectionWrapper,
    props,
    props.children
  );
};

exports.default = Section;