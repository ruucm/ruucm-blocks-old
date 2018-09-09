'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'beerspick\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'beerspick.eot-icons\'; */;\n'], ['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'beerspick\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'beerspick.eot-icons\'; */;\n']);

var _styledComponents = require('styled-components');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _beerspick = require('./fontFiles/beerspick.eot');

var _beerspick2 = _interopRequireDefault(_beerspick);

var _beerspick3 = require('./fontFiles/beerspick.ttf');

var _beerspick4 = _interopRequireDefault(_beerspick3);

var _beerspick5 = require('./fontFiles/beerspick.woff');

var _beerspick6 = _interopRequireDefault(_beerspick5);

var _beerspick7 = require('./fontFiles/beerspick.svg');

var _beerspick8 = _interopRequireDefault(_beerspick7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BeerspickIcon = (0, _styledComponents.css)(_templateObject, _beerspick2.default, _beerspick2.default, _beerspick4.default, _beerspick6.default, _beerspick8.default, _Style2.default);

exports.default = BeerspickIcon;