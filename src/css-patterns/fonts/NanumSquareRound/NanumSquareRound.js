import { css } from 'styled-components'

import fontLEOT from './fontFiles/NanumSquareRoundOTFL/NanumSquareRoundOTFL.eot'
import fontLTTF from './fontFiles/NanumSquareRoundOTFL/NanumSquareRoundOTFL.ttf'
import fontLWOFF from './fontFiles/NanumSquareRoundOTFL/NanumSquareRoundOTFL.woff'
import fontLWOFF2 from './fontFiles/NanumSquareRoundOTFL/NanumSquareRoundOTFL.woff2'

import fontREOT from './fontFiles/NanumSquareRoundOTFR/NanumSquareRoundOTFR.eot'
import fontRTTF from './fontFiles/NanumSquareRoundOTFR/NanumSquareRoundOTFR.ttf'
import fontRWOFF from './fontFiles/NanumSquareRoundOTFR/NanumSquareRoundOTFR.woff'
import fontRWOFF2 from './fontFiles/NanumSquareRoundOTFR/NanumSquareRoundOTFR.woff2'

import fontBEOT from './fontFiles/NanumSquareRoundOTFB/NanumSquareRoundOTFB.eot'
import fontBTTF from './fontFiles/NanumSquareRoundOTFB/NanumSquareRoundOTFB.ttf'
import fontBWOFF from './fontFiles/NanumSquareRoundOTFB/NanumSquareRoundOTFB.woff'
import fontBWOFF2 from './fontFiles/NanumSquareRoundOTFB/NanumSquareRoundOTFB.woff2'

import fontEBEOT from './fontFiles/NanumSquareRoundOTFEB/NanumSquareRoundOTFEB.eot'
import fontEBTTF from './fontFiles/NanumSquareRoundOTFEB/NanumSquareRoundOTFEB.ttf'
import fontEBWOFF from './fontFiles/NanumSquareRoundOTFEB/NanumSquareRoundOTFEB.woff'
import fontEBWOFF2 from './fontFiles/NanumSquareRoundOTFEB/NanumSquareRoundOTFEB.woff2'

const NanumSquareRound = css`
  /**
  *  NanumSquareRound L
  */
  @font-face {
    font-family: 'NanumSquareRoundWeb';
    font-style: normal;
    font-weight: 300;
    src: local('NanumSquareRoundWebL'), url(${fontLWOFF2}) format('woff2'),
      url(${fontLWOFF}) format('woff'), url(${fontLTTF}) format('truetype'),
      url(${fontLEOT}) format('embedded-opentype');
  }

  /**
  *  NanumSquareRound R
  */
  @font-face {
    font-family: 'NanumSquareRoundWeb';
    font-style: normal;
    font-weight: 400;
    src: local('NanumSquareRoundWeb'), url(${fontRWOFF2}) format('woff2'),
      url(${fontRWOFF}) format('woff'), url(${fontRTTF}) format('truetype'),
      url(${fontREOT}) format('embedded-opentype');
  }

  /**
  *  NanumSquareRound B
  */
  @font-face {
    font-family: 'NanumSquareRoundWeb';
    font-style: normal;
    font-weight: 700;
    src: local('NanumSquareRoundWebB'), url(${fontBWOFF2}) format('woff2'),
      url(${fontBWOFF}) format('woff'), url(${fontBTTF}) format('truetype'),
      url(${fontBEOT}) format('embedded-opentype');
  }

  /**
  *  NanumEBarunGothic EB
  */
  @font-face {
    font-family: 'NanumEBarunGothicWeb';
    font-style: normal;
    font-weight: 900;
    src: local('NanumEBarunGothicWebEB'), url(${fontEBWOFF2}) format('woff2'),
      url(${fontEBWOFF}) format('woff'), url(${fontEBTTF}) format('truetype'),
      url(${fontEBEOT}) format('embedded-opentype');
  }
`

export default NanumSquareRound
