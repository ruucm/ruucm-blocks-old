'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  NanumSquareRound L\n  */\n  @font-face {\n    font-family: \'NanumSquareRoundWeb\';\n    font-style: normal;\n    font-weight: 300;\n    src: local(\'NanumSquareRoundWebL\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NanumSquareRound R\n  */\n  @font-face {\n    font-family: \'NanumSquareRoundWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'NanumSquareRoundWeb\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NanumSquareRound B\n  */\n  @font-face {\n    font-family: \'NanumSquareRoundWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'NanumSquareRoundWebB\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NanumEBarunGothic EB\n  */\n  @font-face {\n    font-family: \'NanumEBarunGothicWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'NanumEBarunGothicWebEB\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  NanumSquareRound L\n  */\n  @font-face {\n    font-family: \'NanumSquareRoundWeb\';\n    font-style: normal;\n    font-weight: 300;\n    src: local(\'NanumSquareRoundWebL\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NanumSquareRound R\n  */\n  @font-face {\n    font-family: \'NanumSquareRoundWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'NanumSquareRoundWeb\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NanumSquareRound B\n  */\n  @font-face {\n    font-family: \'NanumSquareRoundWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'NanumSquareRoundWebB\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NanumEBarunGothic EB\n  */\n  @font-face {\n    font-family: \'NanumEBarunGothicWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'NanumEBarunGothicWebEB\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'), url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

var _styledComponents = require('styled-components');

var _NanumSquareRoundOTFL = require('./fontFiles/NanumSquareRoundOTFL/NanumSquareRoundOTFL.eot');

var _NanumSquareRoundOTFL2 = _interopRequireDefault(_NanumSquareRoundOTFL);

var _NanumSquareRoundOTFL3 = require('./fontFiles/NanumSquareRoundOTFL/NanumSquareRoundOTFL.ttf');

var _NanumSquareRoundOTFL4 = _interopRequireDefault(_NanumSquareRoundOTFL3);

var _NanumSquareRoundOTFL5 = require('./fontFiles/NanumSquareRoundOTFL/NanumSquareRoundOTFL.woff');

var _NanumSquareRoundOTFL6 = _interopRequireDefault(_NanumSquareRoundOTFL5);

var _NanumSquareRoundOTFL7 = require('./fontFiles/NanumSquareRoundOTFL/NanumSquareRoundOTFL.woff2');

var _NanumSquareRoundOTFL8 = _interopRequireDefault(_NanumSquareRoundOTFL7);

var _NanumSquareRoundOTFR = require('./fontFiles/NanumSquareRoundOTFR/NanumSquareRoundOTFR.eot');

var _NanumSquareRoundOTFR2 = _interopRequireDefault(_NanumSquareRoundOTFR);

var _NanumSquareRoundOTFR3 = require('./fontFiles/NanumSquareRoundOTFR/NanumSquareRoundOTFR.ttf');

var _NanumSquareRoundOTFR4 = _interopRequireDefault(_NanumSquareRoundOTFR3);

var _NanumSquareRoundOTFR5 = require('./fontFiles/NanumSquareRoundOTFR/NanumSquareRoundOTFR.woff');

var _NanumSquareRoundOTFR6 = _interopRequireDefault(_NanumSquareRoundOTFR5);

var _NanumSquareRoundOTFR7 = require('./fontFiles/NanumSquareRoundOTFR/NanumSquareRoundOTFR.woff2');

var _NanumSquareRoundOTFR8 = _interopRequireDefault(_NanumSquareRoundOTFR7);

var _NanumSquareRoundOTFB = require('./fontFiles/NanumSquareRoundOTFB/NanumSquareRoundOTFB.eot');

var _NanumSquareRoundOTFB2 = _interopRequireDefault(_NanumSquareRoundOTFB);

var _NanumSquareRoundOTFB3 = require('./fontFiles/NanumSquareRoundOTFB/NanumSquareRoundOTFB.ttf');

var _NanumSquareRoundOTFB4 = _interopRequireDefault(_NanumSquareRoundOTFB3);

var _NanumSquareRoundOTFB5 = require('./fontFiles/NanumSquareRoundOTFB/NanumSquareRoundOTFB.woff');

var _NanumSquareRoundOTFB6 = _interopRequireDefault(_NanumSquareRoundOTFB5);

var _NanumSquareRoundOTFB7 = require('./fontFiles/NanumSquareRoundOTFB/NanumSquareRoundOTFB.woff2');

var _NanumSquareRoundOTFB8 = _interopRequireDefault(_NanumSquareRoundOTFB7);

var _NanumSquareRoundOTFEB = require('./fontFiles/NanumSquareRoundOTFEB/NanumSquareRoundOTFEB.eot');

var _NanumSquareRoundOTFEB2 = _interopRequireDefault(_NanumSquareRoundOTFEB);

var _NanumSquareRoundOTFEB3 = require('./fontFiles/NanumSquareRoundOTFEB/NanumSquareRoundOTFEB.ttf');

var _NanumSquareRoundOTFEB4 = _interopRequireDefault(_NanumSquareRoundOTFEB3);

var _NanumSquareRoundOTFEB5 = require('./fontFiles/NanumSquareRoundOTFEB/NanumSquareRoundOTFEB.woff');

var _NanumSquareRoundOTFEB6 = _interopRequireDefault(_NanumSquareRoundOTFEB5);

var _NanumSquareRoundOTFEB7 = require('./fontFiles/NanumSquareRoundOTFEB/NanumSquareRoundOTFEB.woff2');

var _NanumSquareRoundOTFEB8 = _interopRequireDefault(_NanumSquareRoundOTFEB7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NanumSquareRound = (0, _styledComponents.css)(_templateObject, _NanumSquareRoundOTFL8.default, _NanumSquareRoundOTFL6.default, _NanumSquareRoundOTFL4.default, _NanumSquareRoundOTFL2.default, _NanumSquareRoundOTFR8.default, _NanumSquareRoundOTFR6.default, _NanumSquareRoundOTFR4.default, _NanumSquareRoundOTFR2.default, _NanumSquareRoundOTFB8.default, _NanumSquareRoundOTFB6.default, _NanumSquareRoundOTFB4.default, _NanumSquareRoundOTFB2.default, _NanumSquareRoundOTFEB8.default, _NanumSquareRoundOTFEB6.default, _NanumSquareRoundOTFEB4.default, _NanumSquareRoundOTFEB2.default);

exports.default = NanumSquareRound;