'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  Raleway Bold\n  */\n  @font-face {\n    font-family: \'RalewayWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Raleway-Bold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  Raleway Bold\n  */\n  @font-face {\n    font-family: \'RalewayWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Raleway-Bold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

var _styledComponents = require('styled-components');

var _RalewayBold = require('./fontFiles/Raleway-Bold/Raleway-Bold.eot');

var _RalewayBold2 = _interopRequireDefault(_RalewayBold);

var _RalewayBold3 = require('./fontFiles/Raleway-Bold/Raleway-Bold.ttf');

var _RalewayBold4 = _interopRequireDefault(_RalewayBold3);

var _RalewayBold5 = require('./fontFiles/Raleway-Bold/Raleway-Bold.woff');

var _RalewayBold6 = _interopRequireDefault(_RalewayBold5);

var _RalewayBold7 = require('./fontFiles/Raleway-Bold/Raleway-Bold.woff2');

var _RalewayBold8 = _interopRequireDefault(_RalewayBold7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Raleway = (0, _styledComponents.css)(_templateObject, _RalewayBold8.default, _RalewayBold6.default, _RalewayBold4.default, _RalewayBold2.default);

exports.default = Raleway;