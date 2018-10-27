import { css } from 'styled-components'

import fontRegularEOT from './fontFiles/NanumGothic/NanumGothic.eot'
import fontRegularTTF from './fontFiles/NanumGothic/NanumGothic.ttf'
import fontRegularWOFF from './fontFiles/NanumGothic/NanumGothic.woff'
import fontRegularWOFF2 from './fontFiles/NanumGothic/NanumGothic.woff2'

import fontBoldEOT from './fontFiles/NanumGothicBold/NanumGothicBold.eot'
import fontBoldTTF from './fontFiles/NanumGothicBold/NanumGothicBold.ttf'
import fontBoldWOFF from './fontFiles/NanumGothicBold/NanumGothicBold.woff'
import fontBoldWOFF2 from './fontFiles/NanumGothicBold/NanumGothicBold.woff2'

import fontExtraBoldEOT from './fontFiles/NanumGothicExtraBold/NanumGothicExtraBold.eot'
import fontExtraBoldTTF from './fontFiles/NanumGothicExtraBold/NanumGothicExtraBold.ttf'
import fontExtraBoldWOFF from './fontFiles/NanumGothicExtraBold/NanumGothicExtraBold.woff'
import fontExtraBoldWOFF2 from './fontFiles/NanumGothicExtraBold/NanumGothicExtraBold.woff2'

const NanumGothic = css`
  /**
  *  NanumGothic Regular
  */
  @font-face {
    font-family: 'NanumGothicWeb';
    font-style: normal;
    font-weight: 400;
    src: local('NanumGothicWeb'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  NanumGothic Bold
  */
  @font-face {
    font-family: 'NanumGothicWeb';
    font-style: normal;
    font-weight: 700;
    src: local('NanumGothicWebBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }

  /**
  *  NanumGothic ExtraBold
  */
  @font-face {
    font-family: 'NanumGothicWeb';
    font-style: normal;
    font-weight: 900;
    src: local('NanumGothicWebExtraBold'),
      url(${fontExtraBoldWOFF2}) format('woff2'),
      url(${fontExtraBoldWOFF}) format('woff'),
      url(${fontExtraBoldTTF}) format('truetype'),
      url(${fontExtraBoldEOT}) format('embedded-opentype');
  }
`

export default NanumGothic
