'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 25px;\n  height: 25px;\n  background: #283E4E;\n  border-radius: 50px;\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);\n'], ['\n  width: 25px;\n  height: 25px;\n  background: #283E4E;\n  border-radius: 50px;\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _styledComponents2.default.button(_templateObject);

exports.default = Button;