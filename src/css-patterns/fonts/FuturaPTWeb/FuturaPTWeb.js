import { css } from 'styled-components'
import fontLightEOT from './fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.eot'
import fontLightTTF from './fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.ttf'
import fontLightWOFF from './fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.woff'
import fontLightWOFF2 from './fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.woff'

import fontMediumEOT from './fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.eot'
import fontMediumTTF from './fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.ttf'
import fontMediumWOFF from './fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.woff'
import fontMediumWOFF2 from './fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.woff'

import fontMediumIEOT from './fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.eot'
import fontMediumITTF from './fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.ttf'
import fontMediumIWOFF from './fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.woff'
import fontMediumIWOFF2 from './fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.woff'

import fontHeavyEOT from './fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.eot'
import fontHeavyTTF from './fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.ttf'
import fontHeavyWOFF from './fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.woff'
import fontHeavyWOFF2 from './fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.woff'

const FuturaPT = css`
  /**
  *  FuturaPT Light
  */
  @font-face {
    font-family: 'FuturaPTWeb';
    font-style: normal;
    font-weight: 100;
    src: local('FuturaPTWeb-Light'), url(${fontLightWOFF2}) format('woff2'),
      url(${fontLightWOFF}) format('woff'),
      url(${fontLightTTF}) format('truetype'),
      url(${fontLightEOT}) format('embedded-opentype');
  }

  /**
  *  FuturaPT Medium
  */
  @font-face {
    font-family: 'FuturaPTWeb';
    font-style: normal;
    font-weight: 400;
    src: local('FuturaPTMedium'), url(${fontMediumWOFF2}) format('woff2'),
      url(${fontMediumWOFF}) format('woff'),
      url(${fontMediumTTF}) format('truetype'),
      url(${fontMediumEOT}) format('embedded-opentype');
  }

  /**
  *  FuturaPT Medium Italic
  */
  @font-face {
    font-family: 'FuturaPTWeb';
    font-style: italic;
    font-weight: 400;
    src: local('FuturaPTMediumI'), url(${fontMediumIWOFF2}) format('woff2'),
      url(${fontMediumIWOFF}) format('woff'),
      url(${fontMediumITTF}) format('truetype'),
      url(${fontMediumIEOT}) format('embedded-opentype');
  }

  /**
  *  FuturaPT Heavy
  */
  @font-face {
    font-family: 'FuturaPTWeb';
    font-style: normal;
    font-weight: 900;
    src: local('FuturaPTHeavy'), url(${fontHeavyWOFF2}) format('woff2'),
      url(${fontHeavyWOFF}) format('woff'),
      url(${fontHeavyTTF}) format('truetype'),
      url(${fontHeavyEOT}) format('embedded-opentype');
  }
`

export default FuturaPT
