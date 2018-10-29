import { css } from 'styled-components'

// ultra light
import fontUltraLightEOT from './fontFiles/HelveticaNeueLTPro-UltLtEx/HelveticaNeueLTPro-UltLtEx.eot'
import fontUltraLightTTF from './fontFiles/HelveticaNeueLTPro-UltLtEx/HelveticaNeueLTPro-UltLtEx.ttf'
import fontUltraLightWOFF from './fontFiles/HelveticaNeueLTPro-UltLtEx/HelveticaNeueLTPro-UltLtEx.woff'
import fontUltraLightWOFF2 from './fontFiles/HelveticaNeueLTPro-UltLtEx/HelveticaNeueLTPro-UltLtEx.woff2'

// light
import fontLightEOT from './fontFiles/HelveticaNeueLTPro-Lt/HelveticaNeueLTPro-Lt.eot'
import fontLightTTF from './fontFiles/HelveticaNeueLTPro-Lt/HelveticaNeueLTPro-Lt.ttf'
import fontLightWOFF from './fontFiles/HelveticaNeueLTPro-Lt/HelveticaNeueLTPro-Lt.woff'
import fontLightWOFF2 from './fontFiles/HelveticaNeueLTPro-Lt/HelveticaNeueLTPro-Lt.woff2'

// extra regular
import fontRegularEOT from './fontFiles/HelveticaNeueLTPro-Roman/HelveticaNeueLTPro-Roman.eot'
import fontRegularTTF from './fontFiles/HelveticaNeueLTPro-Roman/HelveticaNeueLTPro-Roman.ttf'
import fontRegularWOFF from './fontFiles/HelveticaNeueLTPro-Roman/HelveticaNeueLTPro-Roman.woff'
import fontRegularWOFF2 from './fontFiles/HelveticaNeueLTPro-Roman/HelveticaNeueLTPro-Roman.woff2'

// medium
import fontMediumEOT from './fontFiles/HelveticaNeueLTPro-Md/HelveticaNeueLTPro-Md.eot'
import fontMediumTTF from './fontFiles/HelveticaNeueLTPro-Md/HelveticaNeueLTPro-Md.ttf'
import fontMediumWOFF from './fontFiles/HelveticaNeueLTPro-Md/HelveticaNeueLTPro-Md.woff'
import fontMediumWOFF2 from './fontFiles/HelveticaNeueLTPro-Md/HelveticaNeueLTPro-Md.woff2'

// bold
import fontBoldEOT from './fontFiles/HelveticaNeueLTPro-Bd/HelveticaNeueLTPro-Bd.eot'
import fontBoldTTF from './fontFiles/HelveticaNeueLTPro-Bd/HelveticaNeueLTPro-Bd.ttf'
import fontBoldWOFF from './fontFiles/HelveticaNeueLTPro-Bd/HelveticaNeueLTPro-Bd.woff'
import fontBoldWOFF2 from './fontFiles/HelveticaNeueLTPro-Bd/HelveticaNeueLTPro-Bd.woff2'

// heavy
import fontHeavyEOT from './fontFiles/HelveticaNeueLTPro-Hv/HelveticaNeueLTPro-Hv.eot'
import fontHeavyTTF from './fontFiles/HelveticaNeueLTPro-Hv/HelveticaNeueLTPro-Hv.ttf'
import fontHeavyWOFF from './fontFiles/HelveticaNeueLTPro-Hv/HelveticaNeueLTPro-Hv.woff'
import fontHeavyWOFF2 from './fontFiles/HelveticaNeueLTPro-Hv/HelveticaNeueLTPro-Hv.woff2'

const HelveticaNeue = css`
  /**
  *  HelveticaNeue Ultra Light
  */
  @font-face {
    font-family: 'HelveticaNeueWeb';
    font-style: normal;
    font-weight: 100;
    src: local('HelveticaNeueWebUltraLight'),
      url(${fontUltraLightWOFF2}) format('woff2'),
      url(${fontUltraLightWOFF}) format('woff'),
      url(${fontUltraLightTTF}) format('truetype'),
      url(${fontUltraLightEOT}) format('embedded-opentype');
  }

  /**
  *  HelveticaNeue Light
  */
  @font-face {
    font-family: 'HelveticaNeueWeb';
    font-style: normal;
    font-weight: 300;
    src: local('HelveticaNeueWebLight'), url(${fontLightWOFF2}) format('woff2'),
      url(${fontLightWOFF}) format('woff'),
      url(${fontLightTTF}) format('truetype'),
      url(${fontLightEOT}) format('embedded-opentype');
  }

  /**
  *  HelveticaNeue Regular
  */
  @font-face {
    font-family: 'HelveticaNeueWeb';
    font-style: normal;
    font-weight: 400;
    src: local('HelveticaNeueWeb'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  HelveticaNeue Medium
  */
  @font-face {
    font-family: 'HelveticaNeueWeb';
    font-style: normal;
    font-weight: 500;
    src: local('HelveticaNeueWebMedium'),
      url(${fontMediumWOFF2}) format('woff2'),
      url(${fontMediumWOFF}) format('woff'),
      url(${fontMediumTTF}) format('truetype'),
      url(${fontMediumEOT}) format('embedded-opentype');
  }
  /**
  *  HelveticaNeue Bold
  */
  @font-face {
    font-family: 'HelveticaNeueWeb';
    font-style: normal;
    font-weight: 700;
    src: local('HelveticaNeueWebBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }
  /**
  *  HelveticaNeue Heavy
  */
  @font-face {
    font-family: 'HelveticaNeueWeb';
    font-style: normal;
    font-weight: 900;
    src: local('HelveticaNeueWebHeavy'), url(${fontHeavyWOFF2}) format('woff2'),
      url(${fontHeavyWOFF}) format('woff'),
      url(${fontHeavyTTF}) format('truetype'),
      url(${fontHeavyEOT}) format('embedded-opentype');
  }
`

export default HelveticaNeue
