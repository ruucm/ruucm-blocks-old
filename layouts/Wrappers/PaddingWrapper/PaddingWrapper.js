'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: ', ';\n  ', '\n'], ['\n  padding: ', ';\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    padding: ', '\n  '], ['\n    padding: ', '\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('../../../tools/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaddingWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.padding;
}, _media2.default.phone(_templateObject2, function (props) {
  return props.mPadding;
}));
exports.default = PaddingWrapper;