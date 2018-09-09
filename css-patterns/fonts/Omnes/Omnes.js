'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  Omnes Regular\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'OmnesRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Regular Italic\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'OmnesRegularI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Bold\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'OmnesBold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Bold Italic\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: italic;\n    font-weight: 900;\n    src: local(\'OmnesBoldI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  Omnes Regular\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'OmnesRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Regular Italic\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'OmnesRegularI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Bold\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'OmnesBold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Bold Italic\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: italic;\n    font-weight: 900;\n    src: local(\'OmnesBoldI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

var _styledComponents = require('styled-components');

var _OmnesRegular = require('./fontFiles/Omnes-Regular/Omnes-Regular.eot');

var _OmnesRegular2 = _interopRequireDefault(_OmnesRegular);

var _OmnesRegular3 = require('./fontFiles/Omnes-Regular/Omnes-Regular.ttf');

var _OmnesRegular4 = _interopRequireDefault(_OmnesRegular3);

var _OmnesRegular5 = require('./fontFiles/Omnes-Regular/Omnes-Regular.woff');

var _OmnesRegular6 = _interopRequireDefault(_OmnesRegular5);

var _OmnesItalic = require('./fontFiles/Omnes-Italic/Omnes-Italic.eot');

var _OmnesItalic2 = _interopRequireDefault(_OmnesItalic);

var _OmnesItalic3 = require('./fontFiles/Omnes-Italic/Omnes-Italic.ttf');

var _OmnesItalic4 = _interopRequireDefault(_OmnesItalic3);

var _OmnesItalic5 = require('./fontFiles/Omnes-Italic/Omnes-Italic.woff');

var _OmnesItalic6 = _interopRequireDefault(_OmnesItalic5);

var _OmnesBold = require('./fontFiles/Omnes-Bold/Omnes-Bold.eot');

var _OmnesBold2 = _interopRequireDefault(_OmnesBold);

var _OmnesBold3 = require('./fontFiles/Omnes-Bold/Omnes-Bold.ttf');

var _OmnesBold4 = _interopRequireDefault(_OmnesBold3);

var _OmnesBold5 = require('./fontFiles/Omnes-Bold/Omnes-Bold.woff');

var _OmnesBold6 = _interopRequireDefault(_OmnesBold5);

var _OmnesBoldItalic = require('./fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.eot');

var _OmnesBoldItalic2 = _interopRequireDefault(_OmnesBoldItalic);

var _OmnesBoldItalic3 = require('./fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.ttf');

var _OmnesBoldItalic4 = _interopRequireDefault(_OmnesBoldItalic3);

var _OmnesBoldItalic5 = require('./fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.woff');

var _OmnesBoldItalic6 = _interopRequireDefault(_OmnesBoldItalic5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Omnes = (0, _styledComponents.css)(_templateObject, _OmnesRegular6.default, _OmnesRegular6.default, _OmnesRegular4.default, _OmnesRegular2.default, _OmnesItalic6.default, _OmnesItalic6.default, _OmnesItalic4.default, _OmnesItalic2.default, _OmnesBold6.default, _OmnesBold6.default, _OmnesBold4.default, _OmnesBold2.default, _OmnesBoldItalic6.default, _OmnesBoldItalic6.default, _OmnesBoldItalic4.default, _OmnesBoldItalic2.default);

exports.default = Omnes;