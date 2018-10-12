'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  HelloGorilla Icons\n  */\n  @font-face {\n    font-family: \'hellogorilla\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'hellogorilla.eot-icons\'; */;\n'], ['\n  /**\n  *  HelloGorilla Icons\n  */\n  @font-face {\n    font-family: \'hellogorilla\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'hellogorilla.eot-icons\'; */;\n']);

var _styledComponents = require('styled-components');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _hellogorilla = require('./fontFiles/hellogorilla.eot');

var _hellogorilla2 = _interopRequireDefault(_hellogorilla);

var _hellogorilla3 = require('./fontFiles/hellogorilla.ttf');

var _hellogorilla4 = _interopRequireDefault(_hellogorilla3);

var _hellogorilla5 = require('./fontFiles/hellogorilla.woff');

var _hellogorilla6 = _interopRequireDefault(_hellogorilla5);

var _hellogorilla7 = require('./fontFiles/hellogorilla.svg');

var _hellogorilla8 = _interopRequireDefault(_hellogorilla7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelloGorillaIcon = (0, _styledComponents.css)(_templateObject, _hellogorilla2.default, _hellogorilla2.default, _hellogorilla4.default, _hellogorilla6.default, _hellogorilla8.default, _Style2.default);

exports.default = HelloGorillaIcon;