import { css } from 'styled-components'

import fontRegularTTF from './fontFiles/NanumMyeongjo.ttf'
import fontRegularWOFF from './fontFiles/NanumMyeongjo.woff'
import fontRegularWOFF2 from './fontFiles/NanumMyeongjo.woff'

import fontBoldTTF from './fontFiles/NanumMyeongjoBold.ttf'
import fontBoldWOFF from './fontFiles/NanumMyeongjoBold.woff'
import fontBoldWOFF2 from './fontFiles/NanumMyeongjoBold.woff'

import fontExtraBoldTTF from './fontFiles/NanumMyeongjoExtraBold.ttf'
import fontExtraBoldWOFF from './fontFiles/NanumMyeongjoExtraBold.woff'
import fontExtraBoldWOFF2 from './fontFiles/NanumMyeongjoExtraBold.woff'

const NanumMyeongjo = css`
  /**
  *  NanumMyeongjo
  */
  @font-face {
    font-family: 'NanumMyeongjoWeb';
    font-style: normal;
    font-weight: 400;
    src: local('NanumMyeongjoRegular'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype');
  }
  /**
  *  NanumMyeongjo Bold
  */
  @font-face {
    font-family: 'NanumMyeongjoWeb';
    font-style: normal;
    font-weight: 700;
    src: local('NanumMyeongjoBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontExtraBoldTTF}) format('truetype');
  }

  /**
  *  NanumMyeongjo ExtraBold
  */
  @font-face {
    font-family: 'NanumMyeongjoWeb';
    font-style: normal;
    font-weight: 900;
    src: local('NanumMyeongjoExtraExtraBold'),
      url(${fontExtraBoldWOFF2}) format('woff2'),
      url(${fontExtraBoldWOFF}) format('woff'),
      url(${fontExtraBoldTTF}) format('truetype');
  }
`

export default NanumMyeongjo
