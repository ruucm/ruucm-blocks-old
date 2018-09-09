'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  FuturaPT Light\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 100;\n    src: local(\'FuturaPTWeb-Light\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Medium\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'FuturaPTMedium\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Medium Italic\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'FuturaPTMediumI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Heavy\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'FuturaPTHeavy\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  FuturaPT Light\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 100;\n    src: local(\'FuturaPTWeb-Light\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Medium\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'FuturaPTMedium\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Medium Italic\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'FuturaPTMediumI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Heavy\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'FuturaPTHeavy\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

var _styledComponents = require('styled-components');

var _FuturaPTWebLight = require('./fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.eot');

var _FuturaPTWebLight2 = _interopRequireDefault(_FuturaPTWebLight);

var _FuturaPTWebLight3 = require('./fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.ttf');

var _FuturaPTWebLight4 = _interopRequireDefault(_FuturaPTWebLight3);

var _FuturaPTWebLight5 = require('./fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.woff');

var _FuturaPTWebLight6 = _interopRequireDefault(_FuturaPTWebLight5);

var _FuturaPTWebMedium = require('./fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.eot');

var _FuturaPTWebMedium2 = _interopRequireDefault(_FuturaPTWebMedium);

var _FuturaPTWebMedium3 = require('./fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.ttf');

var _FuturaPTWebMedium4 = _interopRequireDefault(_FuturaPTWebMedium3);

var _FuturaPTWebMedium5 = require('./fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.woff');

var _FuturaPTWebMedium6 = _interopRequireDefault(_FuturaPTWebMedium5);

var _FuturaPTWebMediumObl = require('./fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.eot');

var _FuturaPTWebMediumObl2 = _interopRequireDefault(_FuturaPTWebMediumObl);

var _FuturaPTWebMediumObl3 = require('./fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.ttf');

var _FuturaPTWebMediumObl4 = _interopRequireDefault(_FuturaPTWebMediumObl3);

var _FuturaPTWebMediumObl5 = require('./fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.woff');

var _FuturaPTWebMediumObl6 = _interopRequireDefault(_FuturaPTWebMediumObl5);

var _FuturaPTWebHeavy = require('./fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.eot');

var _FuturaPTWebHeavy2 = _interopRequireDefault(_FuturaPTWebHeavy);

var _FuturaPTWebHeavy3 = require('./fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.ttf');

var _FuturaPTWebHeavy4 = _interopRequireDefault(_FuturaPTWebHeavy3);

var _FuturaPTWebHeavy5 = require('./fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.woff');

var _FuturaPTWebHeavy6 = _interopRequireDefault(_FuturaPTWebHeavy5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FuturaPT = (0, _styledComponents.css)(_templateObject, _FuturaPTWebLight6.default, _FuturaPTWebLight6.default, _FuturaPTWebLight4.default, _FuturaPTWebLight2.default, _FuturaPTWebMedium6.default, _FuturaPTWebMedium6.default, _FuturaPTWebMedium4.default, _FuturaPTWebMedium2.default, _FuturaPTWebMediumObl6.default, _FuturaPTWebMediumObl6.default, _FuturaPTWebMediumObl4.default, _FuturaPTWebMediumObl2.default, _FuturaPTWebHeavy6.default, _FuturaPTWebHeavy6.default, _FuturaPTWebHeavy4.default, _FuturaPTWebHeavy2.default);

exports.default = FuturaPT;