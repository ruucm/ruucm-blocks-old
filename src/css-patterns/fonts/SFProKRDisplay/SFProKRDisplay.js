import { css } from 'styled-components'

import fontRegularEOT from './fontFiles/SFProKRDisplay-Regular/SFProKRDisplay-Regular.eot'
import fontRegularTTF from './fontFiles/SFProKRDisplay-Regular/SFProKRDisplay-Regular.ttf'
import fontRegularWOFF from './fontFiles/SFProKRDisplay-Regular/SFProKRDisplay-Regular.woff'
import fontRegularWOFF2 from './fontFiles/SFProKRDisplay-Regular/SFProKRDisplay-Regular.woff2'

import fontSemiBoldEOT from './fontFiles/SFProKRDisplay-SemiBold/SFProKRDisplay-SemiBold.eot'
import fontSemiBoldTTF from './fontFiles/SFProKRDisplay-SemiBold/SFProKRDisplay-SemiBold.ttf'
import fontSemiBoldWOFF from './fontFiles/SFProKRDisplay-SemiBold/SFProKRDisplay-SemiBold.woff'
import fontSemiBoldWOFF2 from './fontFiles/SFProKRDisplay-SemiBold/SFProKRDisplay-SemiBold.woff2'

import fontBoldEOT from './fontFiles/SFProKRDisplay-Bold/SFProKRDisplay-Bold.eot'
import fontBoldTTF from './fontFiles/SFProKRDisplay-Bold/SFProKRDisplay-Bold.ttf'
import fontBoldWOFF from './fontFiles/SFProKRDisplay-Bold/SFProKRDisplay-Bold.woff'
import fontBoldWOFF2 from './fontFiles/SFProKRDisplay-Bold/SFProKRDisplay-Bold.woff2'

const SFProKRDisplay = css`
  /**
  *  SFProKRDisplay Regular
  */
  @font-face {
    font-family: 'SFProKRDisplayWeb';
    font-style: normal;
    font-weight: 400;
    src: local('SFProKRDisplayWeb'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  SFProKRDisplay SemiBold
  */
  @font-face {
    font-family: 'SFProKRDisplayWeb';
    font-style: normal;
    font-weight: 500;
    src: local('SFProKRDisplayWebSemiBold'),
      url(${fontSemiBoldWOFF2}) format('woff2'),
      url(${fontSemiBoldWOFF}) format('woff'),
      url(${fontSemiBoldTTF}) format('truetype'),
      url(${fontSemiBoldEOT}) format('embedded-opentype');
  }

  /**
  *  SFProKRDisplay Bold
  */
  @font-face {
    font-family: 'SFProKRDisplayWeb';
    font-style: normal;
    font-weight: 700;
    src: local('SFProKRDisplayWebBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }
`

export default SFProKRDisplay
