var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  NanumMyeongjo ExtraBold\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'NanumMyeongjoExtraBold\'),\n      url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n'], ['\n  /**\n  *  NanumMyeongjo ExtraBold\n  */\n  @font-face {\n    font-family: \'NanumMyeongjoWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'NanumMyeongjoExtraBold\'),\n      url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\');\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
// import fontLightTTF from './fontFiles/NanumMyeongjoLight.ttf'
// import fontLightWOFF from './fontFiles/NanumMyeongjoLight.woff'
// import fontLightWOFF2 from './fontFiles/NanumMyeongjoLight.woff'

// import fontRegularTTF from './fontFiles/NanumMyeongjoRegular.ttf'
// import fontRegularWOFF from './fontFiles/NanumMyeongjoRegular.woff'
// import fontRegularWOFF2 from './fontFiles/NanumMyeongjoRegular.woff'

// import fontBoldTTF from './fontFiles/NanumMyeongjoBold.ttf'
// import fontBoldWOFF from './fontFiles/NanumMyeongjoBold.woff'
// import fontBoldWOFF2 from './fontFiles/NanumMyeongjoBold.woff'

import fontExtraBoldTTF from './fontFiles/NanumMyeongjoExtraBold.ttf';
import fontExtraBoldWOFF from './fontFiles/NanumMyeongjoExtraBold.woff';
import fontExtraBoldWOFF2 from './fontFiles/NanumMyeongjoExtraBold.woff';

var NanumMyeongjo = css(_templateObject, fontExtraBoldWOFF2, fontExtraBoldWOFF, fontExtraBoldTTF);

export default NanumMyeongjo;

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