import { css } from 'styled-components'

import fontLightEOT from './fontFiles/Hind-Light/Hind-Light.eot'
import fontLightTTF from './fontFiles/Hind-Light/Hind-Light.ttf'
import fontLightWOFF from './fontFiles/Hind-Light/Hind-Light.woff'
import fontLightWOFF2 from './fontFiles/Hind-Light/Hind-Light.woff2'

import fontRegularEOT from './fontFiles/Hind-Regular/Hind-Regular.eot'
import fontRegularTTF from './fontFiles/Hind-Regular/Hind-Regular.ttf'
import fontRegularWOFF from './fontFiles/Hind-Regular/Hind-Regular.woff'
import fontRegularWOFF2 from './fontFiles/Hind-Regular/Hind-Regular.woff2'

import fontSemiBoldEOT from './fontFiles/Hind-Semibold/Hind-Semibold.eot'
import fontSemiBoldTTF from './fontFiles/Hind-Semibold/Hind-Semibold.ttf'
import fontSemiBoldWOFF from './fontFiles/Hind-Semibold/Hind-Semibold.woff'
import fontSemiBoldWOFF2 from './fontFiles/Hind-Semibold/Hind-Semibold.woff2'

import fontBoldEOT from './fontFiles/Hind-Bold/Hind-Bold.eot'
import fontBoldTTF from './fontFiles/Hind-Bold/Hind-Bold.ttf'
import fontBoldWOFF from './fontFiles/Hind-Bold/Hind-Bold.woff'
import fontBoldWOFF2 from './fontFiles/Hind-Bold/Hind-Bold.woff2'

const Hind = css`
  /**
  *  Hind Light
  */
  @font-face {
    font-family: 'HindWeb';
    font-style: normal;
    font-weight: 300;
    src: local('HindWebLight'), url(${fontLightWOFF2}) format('woff2'),
      url(${fontLightWOFF}) format('woff'),
      url(${fontLightTTF}) format('truetype'),
      url(${fontLightEOT}) format('embedded-opentype');
  }

  /**
  *  Hind Regular
  */
  @font-face {
    font-family: 'HindWeb';
    font-style: normal;
    font-weight: 400;
    src: local('HindWeb'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  Hind Semi Bold
  */
  @font-face {
    font-family: 'HindWeb';
    font-style: normal;
    font-weight: 500;
    src: local('HindWebSemiBold'), url(${fontSemiBoldWOFF2}) format('woff2'),
      url(${fontSemiBoldWOFF}) format('woff'),
      url(${fontSemiBoldTTF}) format('truetype'),
      url(${fontSemiBoldEOT}) format('embedded-opentype');
  }

  /**
  *  Hind Bold
  */
  @font-face {
    font-family: 'HindWeb';
    font-style: normal;
    font-weight: 700;
    src: local('HindWebBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }
`

export default Hind
