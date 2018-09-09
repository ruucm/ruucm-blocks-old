'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'jessievan\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'jessievan.eot-icons\'; */;\n'], ['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'jessievan\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'jessievan.eot-icons\'; */;\n']);

var _styledComponents = require('styled-components');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _jessievan = require('./fontFiles/jessievan.eot');

var _jessievan2 = _interopRequireDefault(_jessievan);

var _jessievan3 = require('./fontFiles/jessievan.ttf');

var _jessievan4 = _interopRequireDefault(_jessievan3);

var _jessievan5 = require('./fontFiles/jessievan.woff');

var _jessievan6 = _interopRequireDefault(_jessievan5);

var _jessievan7 = require('./fontFiles/jessievan.svg');

var _jessievan8 = _interopRequireDefault(_jessievan7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JessieVanIcon = (0, _styledComponents.css)(_templateObject, _jessievan2.default, _jessievan2.default, _jessievan4.default, _jessievan6.default, _jessievan8.default, _Style2.default);

exports.default = JessieVanIcon;