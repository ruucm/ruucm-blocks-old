'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .jessievan {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'jessievan\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .jessievan-dribbble:before {\n    content: \'\\e901\';\n  }\n  .jessievan-linkedin:before {\n    content: \'\\e902\';\n  }\n  .jessievan-twitter:before {\n    content: \'\\e903\';\n  }\n  .jessievan-eye-icon:before {\n    content: \'\\e900\';\n    color: #1106ff;\n  }\n'], ['\n  .jessievan {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: \'jessievan\' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .jessievan-dribbble:before {\n    content: \'\\\\e901\';\n  }\n  .jessievan-linkedin:before {\n    content: \'\\\\e902\';\n  }\n  .jessievan-twitter:before {\n    content: \'\\\\e903\';\n  }\n  .jessievan-eye-icon:before {\n    content: \'\\\\e900\';\n    color: #1106ff;\n  }\n']);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Should add one more \, cause it's javascript !
 */
var Style = (0, _styledComponents.css)(_templateObject);

exports.default = Style;