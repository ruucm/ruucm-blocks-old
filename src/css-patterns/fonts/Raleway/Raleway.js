import { css } from 'styled-components'

import fontBoldEOT from './fontFiles/Raleway-Bold/Raleway-Bold.eot'
import fontBoldTTF from './fontFiles/Raleway-Bold/Raleway-Bold.ttf'
import fontBoldWOFF from './fontFiles/Raleway-Bold/Raleway-Bold.woff'
import fontBoldWOFF2 from './fontFiles/Raleway-Bold/Raleway-Bold.woff2'

const Raleway = css`
  /**
  *  Raleway Bold
  */
  @font-face {
    font-family: 'RalewayWeb';
    font-style: normal;
    font-weight: 700;
    src: local('Raleway-Bold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }
`

export default Raleway
