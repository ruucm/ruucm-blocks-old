import { css } from 'styled-components'

import fontRegularEOT from './fontFiles/Omnes-Regular/Omnes-Regular.eot'
import fontRegularTTF from './fontFiles/Omnes-Regular/Omnes-Regular.ttf'
import fontRegularWOFF from './fontFiles/Omnes-Regular/Omnes-Regular.woff'
import fontRegularWOFF2 from './fontFiles/Omnes-Regular/Omnes-Regular.woff'

import fontRegularIEOT from './fontFiles/Omnes-Italic/Omnes-Italic.eot'
import fontRegularITTF from './fontFiles/Omnes-Italic/Omnes-Italic.ttf'
import fontRegularIWOFF from './fontFiles/Omnes-Italic/Omnes-Italic.woff'
import fontRegularIWOFF2 from './fontFiles/Omnes-Italic/Omnes-Italic.woff'

import fontBoldEOT from './fontFiles/Omnes-Bold/Omnes-Bold.eot'
import fontBoldTTF from './fontFiles/Omnes-Bold/Omnes-Bold.ttf'
import fontBoldWOFF from './fontFiles/Omnes-Bold/Omnes-Bold.woff'
import fontBoldWOFF2 from './fontFiles/Omnes-Bold/Omnes-Bold.woff'

import fontBoldIEOT from './fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.eot'
import fontBoldITTF from './fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.ttf'
import fontBoldIWOFF from './fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.woff'
import fontBoldIWOFF2 from './fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.woff'

const Omnes = css`
  /**
  *  Omnes Regular
  */
  @font-face {
    font-family: 'Omnes';
    font-style: normal;
    font-weight: 400;
    src: local('OmnesRegular'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  Omnes Regular Italic
  */
  @font-face {
    font-family: 'Omnes';
    font-style: italic;
    font-weight: 400;
    src: local('OmnesRegularI'), url(${fontRegularIWOFF2}) format('woff2'),
      url(${fontRegularIWOFF}) format('woff'),
      url(${fontRegularITTF}) format('truetype'),
      url(${fontRegularIEOT}) format('embedded-opentype');
  }

  /**
  *  Omnes Bold
  */
  @font-face {
    font-family: 'Omnes';
    font-style: normal;
    font-weight: 900;
    src: local('OmnesBold'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }

  /**
  *  Omnes Bold Italic
  */
  @font-face {
    font-family: 'Omnes';
    font-style: italic;
    font-weight: 900;
    src: local('OmnesBoldI'), url(${fontBoldIWOFF2}) format('woff2'),
      url(${fontBoldIWOFF}) format('woff'),
      url(${fontBoldITTF}) format('truetype'),
      url(${fontBoldIEOT}) format('embedded-opentype');
  }
`

export default Omnes
