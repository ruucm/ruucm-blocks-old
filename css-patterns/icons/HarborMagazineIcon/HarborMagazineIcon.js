'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'magharbor\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'harbor-icons\'; */;\n'], ['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'magharbor\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'harbor-icons\'; */;\n']);

var _styledComponents = require('styled-components');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _magharbor = require('./fontFiles/magharbor.eot');

var _magharbor2 = _interopRequireDefault(_magharbor);

var _magharbor3 = require('./fontFiles/magharbor.ttf');

var _magharbor4 = _interopRequireDefault(_magharbor3);

var _magharbor5 = require('./fontFiles/magharbor.woff');

var _magharbor6 = _interopRequireDefault(_magharbor5);

var _magharbor7 = require('./fontFiles/magharbor.svg');

var _magharbor8 = _interopRequireDefault(_magharbor7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HarborMagazineIcon = (0, _styledComponents.css)(_templateObject, _magharbor2.default, _magharbor2.default, _magharbor4.default, _magharbor6.default, _magharbor8.default, _Style2.default);

exports.default = HarborMagazineIcon;