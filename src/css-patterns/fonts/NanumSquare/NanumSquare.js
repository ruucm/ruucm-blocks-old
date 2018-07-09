import { css } from 'styled-components'
import fontLightEOT from './fontFiles/NanumSquareLight.eot'
import fontLightTTF from './fontFiles/NanumSquareLight.ttf'
import fontLightWOFF from './fontFiles/NanumSquareLight.woff'
import fontLightWOFF2 from './fontFiles/NanumSquareLight.woff'

import fontRegularEOT from './fontFiles/NanumSquareRegular.eot'
import fontRegularTTF from './fontFiles/NanumSquareRegular.ttf'
import fontRegularWOFF from './fontFiles/NanumSquareRegular.woff'
import fontRegularWOFF2 from './fontFiles/NanumSquareRegular.woff'

import fontBoldEOT from './fontFiles/NanumSquareBold.eot'
import fontBoldTTF from './fontFiles/NanumSquareBold.ttf'
import fontBoldWOFF from './fontFiles/NanumSquareBold.woff'
import fontBoldWOFF2 from './fontFiles/NanumSquareBold.woff'

import fontExtraBoldEOT from './fontFiles/NanumSquareExtraBold.eot'
import fontExtraBoldTTF from './fontFiles/NanumSquareExtraBold.ttf'
import fontExtraBoldWOFF from './fontFiles/NanumSquareExtraBold.woff'
import fontExtraBoldWOFF2 from './fontFiles/NanumSquareExtraBold.woff'

const NanumSquare = css`
  /**
  *  NanumSquare Light
  */
  @font-face {
    font-family: 'NanumSquareWeb';
    font-style: normal;
    font-weight: 100;
    src: local('NanumSquareLight'), url(${fontLightWOFF2}) format('woff2'),
      url(${fontLightWOFF}) format('woff'),
      url(${fontLightTTF}) format('truetype'),
      url(${fontLightEOT}) format('embedded-opentype');
  }

  /**
  *  NanumSquare Regular
  */
  @font-face {
    font-family: 'NanumSquareWeb';
    font-style: normal;
    font-weight: 400;
    src: local('NanumSquareRegular'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  NanumSquare Bold
  */
  @font-face {
    font-family: 'NanumSquareWeb';
    font-style: normal;
    font-weight: 700;
    src: local('NanumSquareBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }

  /**
  *  NanumSquare ExtraBold
  */
  @font-face {
    font-family: 'NanumSquareWeb';
    font-style: normal;
    font-weight: 900;
    src: local('NanumSquareExtraBold'),
      url(${fontExtraBoldWOFF2}) format('woff2'),
      url(${fontExtraBoldWOFF}) format('woff'),
      url(${fontExtraBoldTTF}) format('truetype'),
      url(${fontExtraBoldEOT}) format('embedded-opentype');
  }
`

export default NanumSquare
