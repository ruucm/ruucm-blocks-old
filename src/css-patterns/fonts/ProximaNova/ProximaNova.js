import { css } from 'styled-components'

import fontLightEOT from './fontFiles/ProximaNova-LightIt/ProximaNova-LightIt.eot'
import fontLightTTF from './fontFiles/ProximaNova-LightIt/ProximaNova-LightIt.ttf'
import fontLightWOFF from './fontFiles/ProximaNova-LightIt/ProximaNova-LightIt.woff'
import fontLightWOFF2 from './fontFiles/ProximaNova-LightIt/ProximaNova-LightIt.woff2'

import fontRegularEOT from './fontFiles/ProximaNova-Regular/ProximaNova-Regular.eot'
import fontRegularTTF from './fontFiles/ProximaNova-Regular/ProximaNova-Regular.ttf'
import fontRegularWOFF from './fontFiles/ProximaNova-Regular/ProximaNova-Regular.woff'
import fontRegularWOFF2 from './fontFiles/ProximaNova-Regular/ProximaNova-Regular.woff2'

import fontMediumEOT from './fontFiles/ProximaNova-Medium/ProximaNova-Medium.eot'
import fontMediumTTF from './fontFiles/ProximaNova-Medium/ProximaNova-Medium.ttf'
import fontMediumWOFF from './fontFiles/ProximaNova-Medium/ProximaNova-Medium.woff'
import fontMediumWOFF2 from './fontFiles/ProximaNova-Medium/ProximaNova-Medium.woff2'

import fontBoldEOT from './fontFiles/ProximaNova-Bold/ProximaNova-Bold.eot'
import fontBoldTTF from './fontFiles/ProximaNova-Bold/ProximaNova-Bold.ttf'
import fontBoldWOFF from './fontFiles/ProximaNova-Bold/ProximaNova-Bold.woff'
import fontBoldWOFF2 from './fontFiles/ProximaNova-Bold/ProximaNova-Bold.woff2'

const ProximaNova = css`
  /**
  *  ProximaNova Light Italic
  */
  @font-face {
    font-family: 'ProximaNovaWeb';
    font-style: italic;
    font-weight: 300;
    src: local('ProximaNova-LightIt'), url(${fontLightWOFF2}) format('woff2'),
      url(${fontLightWOFF}) format('woff'),
      url(${fontLightTTF}) format('truetype'),
      url(${fontLightEOT}) format('embedded-opentype');
  }

  /**
  *  ProximaNova Regular
  */
  @font-face {
    font-family: 'ProximaNovaWeb';
    font-style: normal;
    font-weight: 400;
    src: local('ProximaNova-Regular'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  ProximaNova Medium
  */
  @font-face {
    font-family: 'ProximaNovaWeb';
    font-style: normal;
    font-weight: 500;
    src: local('ProximaNova-Medium'), url(${fontMediumWOFF2}) format('woff2'),
      url(${fontMediumWOFF}) format('woff'),
      url(${fontMediumTTF}) format('truetype'),
      url(${fontMediumEOT}) format('embedded-opentype');
  }

  /**
  *  ProximaNova Bold
  */
  @font-face {
    font-family: 'ProximaNovaWeb';
    font-style: normal;
    font-weight: 700;
    src: local('ProximaNova-Bold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }
`

export default ProximaNova
