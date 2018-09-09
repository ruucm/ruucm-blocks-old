'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: Josefin Sans;\n  font-weight: bold;\n  line-height: 57px;\n  font-size: 50px;\n  letter-spacing: -0.04em;\n  color: #283E4E;\n  text-align: center;\n  margin: 0;\n  margin-top: ', ';\n'], ['\n  font-family: Josefin Sans;\n  font-weight: bold;\n  line-height: 57px;\n  font-size: 50px;\n  letter-spacing: -0.04em;\n  color: #283E4E;\n  text-align: center;\n  margin: 0;\n  margin-top: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _styledComponents2.default.h1(_templateObject, function (props) {
  return props.marginTop;
});

exports.default = Title;