'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .magharbor {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'magharbor\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .magharbor-main-logo:before {\n    content: \'\\e900\';\n    color: #fff;\n  }\n'], ['\n  .magharbor {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'magharbor\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .magharbor-main-logo:before {\n    content: \'\\\\e900\';\n    color: #fff;\n  }\n']);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Should add one more \, cause it's javascript !
 */
var Style = (0, _styledComponents.css)(_templateObject);

exports.default = Style;