'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'harbor\';\n    src:  url(', ');\n    src:  url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', '\n  /* @import \'harbor-icons\'; */\n'], ['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'harbor\';\n    src:  url(', ');\n    src:  url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', '\n  /* @import \'harbor-icons\'; */\n']);

var _styledComponents = require('styled-components');

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

var _harbor = require('./fontFiles/harbor.eot');

var _harbor2 = _interopRequireDefault(_harbor);

var _harbor3 = require('./fontFiles/harbor.ttf');

var _harbor4 = _interopRequireDefault(_harbor3);

var _harbor5 = require('./fontFiles/harbor.woff');

var _harbor6 = _interopRequireDefault(_harbor5);

var _harbor7 = require('./fontFiles/harbor.svg');

var _harbor8 = _interopRequireDefault(_harbor7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HarborIcon = (0, _styledComponents.css)(_templateObject, _harbor2.default, _harbor2.default, _harbor4.default, _harbor6.default, _harbor8.default, _Style2.default);

exports.default = HarborIcon;