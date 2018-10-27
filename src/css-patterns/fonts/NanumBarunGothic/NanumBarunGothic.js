import { css } from 'styled-components'

import fontUltraLightEOT from './fontFiles/NanumBarunGothicUltraLight/NanumBarunGothicUltraLight.eot'
import fontUltraLightTTF from './fontFiles/NanumBarunGothicUltraLight/NanumBarunGothicUltraLight.ttf'
import fontUltraLightWOFF from './fontFiles/NanumBarunGothicUltraLight/NanumBarunGothicUltraLight.woff'
import fontUltraLightWOFF2 from './fontFiles/NanumBarunGothicUltraLight/NanumBarunGothicUltraLight.woff2'

import fontLightEOT from './fontFiles/NanumBarunGothicLight/NanumBarunGothicLight.eot'
import fontLightTTF from './fontFiles/NanumBarunGothicLight/NanumBarunGothicLight.ttf'
import fontLightWOFF from './fontFiles/NanumBarunGothicLight/NanumBarunGothicLight.woff'
import fontLightWOFF2 from './fontFiles/NanumBarunGothicLight/NanumBarunGothicLight.woff2'

import fontRegularEOT from './fontFiles/NanumBarunGothic/NanumBarunGothic.eot'
import fontRegularTTF from './fontFiles/NanumBarunGothic/NanumBarunGothic.ttf'
import fontRegularWOFF from './fontFiles/NanumBarunGothic/NanumBarunGothic.woff'
import fontRegularWOFF2 from './fontFiles/NanumBarunGothic/NanumBarunGothic.woff2'

import fontBoldEOT from './fontFiles/NanumBarunGothicBold/NanumBarunGothicBold.eot'
import fontBoldTTF from './fontFiles/NanumBarunGothicBold/NanumBarunGothicBold.ttf'
import fontBoldWOFF from './fontFiles/NanumBarunGothicBold/NanumBarunGothicBold.woff'
import fontBoldWOFF2 from './fontFiles/NanumBarunGothicBold/NanumBarunGothicBold.woff2'

const NanumBarunGothic = css`
  /**
  *  NanumBarunGothic Ultra Light
  */
  @font-face {
    font-family: 'NanumBarunGothicWeb';
    font-style: normal;
    font-weight: 100;
    src: local('NanumBarunGothicWebUltraLight'),
      url(${fontUltraLightWOFF2}) format('woff2'),
      url(${fontUltraLightWOFF}) format('woff'),
      url(${fontUltraLightTTF}) format('truetype'),
      url(${fontUltraLightEOT}) format('embedded-opentype');
  }

  /**
  *  NanumBarunGothic Light
  */
  @font-face {
    font-family: 'NanumBarunGothicWeb';
    font-style: normal;
    font-weight: 300;
    src: local('NanumBarunGothicWebLight'),
      url(${fontLightWOFF2}) format('woff2'),
      url(${fontLightWOFF}) format('woff'),
      url(${fontLightTTF}) format('truetype'),
      url(${fontLightEOT}) format('embedded-opentype');
  }

  /**
  *  NanumBarunGothic Regular
  */
  @font-face {
    font-family: 'NanumBarunGothicWeb';
    font-style: normal;
    font-weight: 400;
    src: local('NanumBarunGothicWeb'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  NanumBarunGothic Bold
  */
  @font-face {
    font-family: 'NanumBarunGothicWeb';
    font-style: normal;
    font-weight: 700;
    src: local('NanumBarunGothicWebBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }
`

export default NanumBarunGothic
