'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  NanumMyeongjo\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'NanumMyeongjoRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n  /**\n  *  NanumMyeongjo Bold\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'NanumMyeongjoBold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n\n  /**\n  *  NanumMyeongjo ExtraBold\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'NanumMyeongjoExtraExtraBold\'),\n      url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n'], ['\n  /**\n  *  NanumMyeongjo\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'NanumMyeongjoRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n  /**\n  *  NanumMyeongjo Bold\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'NanumMyeongjoBold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n\n  /**\n  *  NanumMyeongjo ExtraBold\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'NanumMyeongjoExtraExtraBold\'),\n      url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n']);

var _styledComponents = require('styled-components');

var _NanumMyeongjo = require('./fontFiles/NanumMyeongjo.ttf');

var _NanumMyeongjo2 = _interopRequireDefault(_NanumMyeongjo);

var _NanumMyeongjo3 = require('./fontFiles/NanumMyeongjo.woff');

var _NanumMyeongjo4 = _interopRequireDefault(_NanumMyeongjo3);

var _NanumMyeongjoBold = require('./fontFiles/NanumMyeongjoBold.ttf');

var _NanumMyeongjoBold2 = _interopRequireDefault(_NanumMyeongjoBold);

var _NanumMyeongjoBold3 = require('./fontFiles/NanumMyeongjoBold.woff');

var _NanumMyeongjoBold4 = _interopRequireDefault(_NanumMyeongjoBold3);

var _NanumMyeongjoExtraBold = require('./fontFiles/NanumMyeongjoExtraBold.ttf');

var _NanumMyeongjoExtraBold2 = _interopRequireDefault(_NanumMyeongjoExtraBold);

var _NanumMyeongjoExtraBold3 = require('./fontFiles/NanumMyeongjoExtraBold.woff');

var _NanumMyeongjoExtraBold4 = _interopRequireDefault(_NanumMyeongjoExtraBold3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NanumMyeongjo = (0, _styledComponents.css)(_templateObject, _NanumMyeongjo4.default, _NanumMyeongjo4.default, _NanumMyeongjo2.default, _NanumMyeongjoBold4.default, _NanumMyeongjoBold4.default, _NanumMyeongjoExtraBold2.default, _NanumMyeongjoExtraBold4.default, _NanumMyeongjoExtraBold4.default, _NanumMyeongjoExtraBold2.default);

exports.default = NanumMyeongjo;