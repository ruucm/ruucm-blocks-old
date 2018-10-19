import { css } from 'styled-components'

import fontEOT from './fontFiles/SFNSDisplay/SFNSDisplay.eot'
import fontTTF from './fontFiles/SFNSDisplay/SFNSDisplay.ttf'
import fontWOFF from './fontFiles/SFNSDisplay/SFNSDisplay.woff'
import fontWOFF2 from './fontFiles/SFNSDisplay/SFNSDisplay.woff'

import fontBoldEOT from './fontFiles/SFNSDisplay-Bold/SFNSDisplay-Bold.eot'
import fontBoldTTF from './fontFiles/SFNSDisplay-Bold/SFNSDisplay-Bold.ttf'
import fontBoldWOFF from './fontFiles/SFNSDisplay-Bold/SFNSDisplay-Bold.woff'
import fontBoldWOFF2 from './fontFiles/SFNSDisplay-Bold/SFNSDisplay-Bold.woff'

const SFNSDisplay = css`
  /**
  *  SFNSDisplay 
  */
  @font-face {
    font-family: 'SFNSDisplayWeb';
    font-style: normal;
    font-weight: 400;
    src: local('SFNSDisplay'), url(${fontWOFF2}) format('woff2'),
      url(${fontWOFF}) format('woff'), url(${fontTTF}) format('truetype'),
      url(${fontEOT}) format('embedded-opentype');
  }

  /**
  *  SFNSDisplay Bold
  */
  @font-face {
    font-family: 'SFNSDisplayWeb';
    font-style: normal;
    font-weight: 700;
    src: local('SFNSDisplay-Bold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }
`

export default SFNSDisplay
