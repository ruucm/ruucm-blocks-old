'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /**\n  *  NanumMyeongjo ExtraBold\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'NanumMyeongjoExtraBold\'),\n      url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n'], ['\n  /**\n  *  NanumMyeongjo ExtraBold\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'NanumMyeongjoExtraBold\'),\n      url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n']);
// import fontLightTTF from './fontFiles/NanumMyeongjoLight.ttf'
// import fontLightWOFF from './fontFiles/NanumMyeongjoLight.woff'
// import fontLightWOFF2 from './fontFiles/NanumMyeongjoLight.woff'

// import fontRegularTTF from './fontFiles/NanumMyeongjoRegular.ttf'
// import fontRegularWOFF from './fontFiles/NanumMyeongjoRegular.woff'
// import fontRegularWOFF2 from './fontFiles/NanumMyeongjoRegular.woff'

// import fontBoldTTF from './fontFiles/NanumMyeongjoBold.ttf'
// import fontBoldWOFF from './fontFiles/NanumMyeongjoBold.woff'
// import fontBoldWOFF2 from './fontFiles/NanumMyeongjoBold.woff'

var _styledComponents = require('styled-components');

var _NanumMyeongjoExtraBold = require('./fontFiles/NanumMyeongjoExtraBold.ttf');

var _NanumMyeongjoExtraBold2 = _interopRequireDefault(_NanumMyeongjoExtraBold);

var _NanumMyeongjoExtraBold3 = require('./fontFiles/NanumMyeongjoExtraBold.woff');

var _NanumMyeongjoExtraBold4 = _interopRequireDefault(_NanumMyeongjoExtraBold3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NanumMyeongjo = (0, _styledComponents.css)(_templateObject, _NanumMyeongjoExtraBold4.default, _NanumMyeongjoExtraBold4.default, _NanumMyeongjoExtraBold2.default);

exports.default = NanumMyeongjo;

/**
 *  NanumMyeongjo Light
 */
/* @font-face {
    font-family: 'NanumMyeongjoWeb';
    font-style: normal;
    font-weight: 100;
    src: local('NanumMyeongjoLight'), url(${fontLightWOFF2}) format('woff2'),
      url(${fontLightWOFF}) format('woff'),
      url(${fontLightTTF}) format('truetype'),
      url(${fontLightEOT}) format('embedded-opentype');
  } */

/**
 *  NanumMyeongjo Regular
 */
/* @font-face {
    font-family: 'NanumMyeongjoWeb';
    font-style: normal;
    font-weight: 400;
    src: local('NanumMyeongjoRegular'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  } */

/**
 *  NanumMyeongjo Bold
 */
/* @font-face {
    font-family: 'NanumMyeongjoWeb';
    font-style: normal;
    font-weight: 400;
    src: local('NanumMyeongjoBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  } */