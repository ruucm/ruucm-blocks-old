import { css } from 'styled-components'

import fontLightEOT from './fontFiles/NimbusSan-Lig/NimbusSan-Lig.eot'
import fontLightTTF from './fontFiles/NimbusSan-Lig/NimbusSan-Lig.ttf'
import fontLightWOFF from './fontFiles/NimbusSan-Lig/NimbusSan-Lig.woff'
import fontLightWOFF2 from './fontFiles/NimbusSan-Lig/NimbusSan-Lig.woff2'

import fontRegularEOT from './fontFiles/NimbusSan-Reg/NimbusSan-Reg.eot'
import fontRegularTTF from './fontFiles/NimbusSan-Reg/NimbusSan-Reg.ttf'
import fontRegularWOFF from './fontFiles/NimbusSan-Reg/NimbusSan-Reg.woff'
import fontRegularWOFF2 from './fontFiles/NimbusSan-Reg/NimbusSan-Reg.woff2'

import fontBoldEOT from './fontFiles/NimbusSan-Bol/NimbusSan-Bol.eot'
import fontBoldTTF from './fontFiles/NimbusSan-Bol/NimbusSan-Bol.ttf'
import fontBoldWOFF from './fontFiles/NimbusSan-Bol/NimbusSan-Bol.woff'
import fontBoldWOFF2 from './fontFiles/NimbusSan-Bol/NimbusSan-Bol.woff2'


const NimbusSan = css`
  /**
  *  NimbusSan Light
  */
  @font-face {
    font-family: 'NimbusSanWeb';
    font-style: normal;
    font-weight: 300;
    src: local('NimbusSan-Lig'), url(${fontLightWOFF2}) format('woff2'),
      url(${fontLightWOFF}) format('woff'),
      url(${fontLightTTF}) format('truetype'),
      url(${fontLightEOT}) format('embedded-opentype');
  }

  /**
  *  NimbusSan Regular
  */
  @font-face {
    font-family: 'NimbusSanWeb';
    font-style: normal;
    font-weight: 400;
    src: local('NimbusSan-Reg'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  NimbusSan Bold
  */
  @font-face {
    font-family: 'NimbusSanWeb';
    font-style: normal;
    font-weight: 700;
    src: local('NimbusSan-Bol'), url(${fontBoldWOFF2}) format('woff2'),
      url(${fontBoldWOFF}) format('woff'),
      url(${fontBoldTTF}) format('truetype'),
      url(${fontBoldEOT}) format('embedded-opentype');
  }

`

export default NimbusSan
