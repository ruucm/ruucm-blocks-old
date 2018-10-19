'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  SFNSDisplay \n  */\n  @font-face {\n    font-family: \'SFNSDisplayWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'SFNSDisplay\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  SFNSDisplay Bold\n  */\n  @font-face {\n    font-family: \'SFNSDisplayWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'SFNSDisplay-Bold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  SFNSDisplay \n  */\n  @font-face {\n    font-family: \'SFNSDisplayWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'SFNSDisplay\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  SFNSDisplay Bold\n  */\n  @font-face {\n    font-family: \'SFNSDisplayWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'SFNSDisplay-Bold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

var _styledComponents = require('styled-components');

var _SFNSDisplay = require('./fontFiles/SFNSDisplay/SFNSDisplay.eot');

var _SFNSDisplay2 = _interopRequireDefault(_SFNSDisplay);

var _SFNSDisplay3 = require('./fontFiles/SFNSDisplay/SFNSDisplay.ttf');

var _SFNSDisplay4 = _interopRequireDefault(_SFNSDisplay3);

var _SFNSDisplay5 = require('./fontFiles/SFNSDisplay/SFNSDisplay.woff');

var _SFNSDisplay6 = _interopRequireDefault(_SFNSDisplay5);

var _SFNSDisplayBold = require('./fontFiles/SFNSDisplay-Bold/SFNSDisplay-Bold.eot');

var _SFNSDisplayBold2 = _interopRequireDefault(_SFNSDisplayBold);

var _SFNSDisplayBold3 = require('./fontFiles/SFNSDisplay-Bold/SFNSDisplay-Bold.ttf');

var _SFNSDisplayBold4 = _interopRequireDefault(_SFNSDisplayBold3);

var _SFNSDisplayBold5 = require('./fontFiles/SFNSDisplay-Bold/SFNSDisplay-Bold.woff');

var _SFNSDisplayBold6 = _interopRequireDefault(_SFNSDisplayBold5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SFNSDisplay = (0, _styledComponents.css)(_templateObject, _SFNSDisplay6.default, _SFNSDisplay6.default, _SFNSDisplay4.default, _SFNSDisplay2.default, _SFNSDisplayBold6.default, _SFNSDisplayBold6.default, _SFNSDisplayBold4.default, _SFNSDisplayBold2.default);

exports.default = SFNSDisplay;