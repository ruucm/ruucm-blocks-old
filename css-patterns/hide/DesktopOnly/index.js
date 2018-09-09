'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    display: none;\n  '], ['\n    display: none;\n  ']); /**
                                                                                                                          *
                                                                                                                          * DesktopOnly
                                                                                                                          *
                                                                                                                          */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('ruucm-blocks/tools/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div(_templateObject, _media2.default.phone(_templateObject2));

var DesktopOnly = function DesktopOnly(props) {
  return _react2.default.createElement(
    Wrapper,
    props,
    props.children
  );
};

exports.default = DesktopOnly;