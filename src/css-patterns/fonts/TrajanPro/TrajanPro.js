import { css } from 'styled-components'

import fontRegularEOT from './fontFiles/TrajanPro-Regular/TrajanPro-Regular.eot'
import fontRegularTTF from './fontFiles/TrajanPro-Regular/TrajanPro-Regular.ttf'
import fontRegularWOFF from './fontFiles/TrajanPro-Regular/TrajanPro-Regular.woff'
import fontRegularWOFF2 from './fontFiles/TrajanPro-Regular/TrajanPro-Regular.woff2'

import fontBoldEOT from './fontFiles/TrajanPro-Bold/TrajanPro-Bold.eot'
import fontBoldTTF from './fontFiles/TrajanPro-Bold/TrajanPro-Bold.ttf'
import fontBoldWOFF from './fontFiles/TrajanPro-Bold/TrajanPro-Bold.woff'
import fontBoldWOFF2 from './fontFiles/TrajanPro-Bold/TrajanPro-Bold.woff2'

const TrajanPro = css`
  /**
  *  TrajanPro Regular
  */
  @font-face {
    font-family: 'TrajanProWeb';
    font-style: normal;
    font-weight: 400;
    src: local('TrajanProWeb'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  TrajanPro Bold
  */
  @font-face {
    font-family: 'TrajanProWeb';
    font-style: normal;
    font-weight: 700;
    src: local('TrajanProWebBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }
`

export default TrajanPro
