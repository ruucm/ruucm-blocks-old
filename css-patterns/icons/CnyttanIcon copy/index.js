'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  Cnyttan Icons\n  */\n  @font-face {\n    font-family: \'cnyttan\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'cnyttan.eot-icons\'; */;\n'], ['\n  /**\n  *  Cnyttan Icons\n  */\n  @font-face {\n    font-family: \'cnyttan\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'cnyttan.eot-icons\'; */;\n']);

var _styledComponents = require('styled-components');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _cnyttan = require('./fontFiles/cnyttan.eot');

var _cnyttan2 = _interopRequireDefault(_cnyttan);

var _cnyttan3 = require('./fontFiles/cnyttan.ttf');

var _cnyttan4 = _interopRequireDefault(_cnyttan3);

var _cnyttan5 = require('./fontFiles/cnyttan.woff');

var _cnyttan6 = _interopRequireDefault(_cnyttan5);

var _cnyttan7 = require('./fontFiles/cnyttan.svg');

var _cnyttan8 = _interopRequireDefault(_cnyttan7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CnyttanIcon = (0, _styledComponents.css)(_templateObject, _cnyttan2.default, _cnyttan2.default, _cnyttan4.default, _cnyttan6.default, _cnyttan8.default, _Style2.default);

exports.default = CnyttanIcon;