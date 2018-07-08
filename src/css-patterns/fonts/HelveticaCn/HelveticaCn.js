import { css } from 'styled-components'

import fontRegularEOT from './fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.eot'
import fontRegularTTF from './fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.ttf'
import fontRegularWOFF from './fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.woff'
import fontRegularWOFF2 from './fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.woff'

import fontRegularOEOT from './fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.eot'
import fontRegularOTTF from './fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.ttf'
import fontRegularOWOFF from './fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.woff'
import fontRegularOWOFF2 from './fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.woff'

import fontMediumEOT from './fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.eot'
import fontMediumTTF from './fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.ttf'
import fontMediumWOFF from './fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.woff'
import fontMediumWOFF2 from './fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.woff'

import fontMediumOEOT from './fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.eot'
import fontMediumOTTF from './fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.ttf'
import fontMediumOWOFF from './fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.woff'
import fontMediumOWOFF2 from './fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.woff'

const Helvetica = css`
  /**
  *  Helvetica Regular
  */
  @font-face {
    font-family: 'HelveticaCnWeb';
    font-style: normal;
    font-weight: 400;
    src: local('HelveticaRegular'), url(${fontRegularWOFF2}) format('woff2'),
      url(${fontRegularWOFF}) format('woff'),
      url(${fontRegularTTF}) format('truetype'),
      url(${fontRegularEOT}) format('embedded-opentype');
  }

  /**
  *  Helvetica Regular Oblique
  */
  @font-face {
    font-family: 'HelveticaCnWeb';
    font-style: italic;
    font-weight: 400;
    src: local('HelveticaRegularO'), url(${fontRegularOWOFF2}) format('woff2'),
      url(${fontRegularOWOFF}) format('woff'),
      url(${fontRegularOTTF}) format('truetype'),
      url(${fontRegularOEOT}) format('embedded-opentype');
  }

  /**
  *  Helvetica Medium
  */
  @font-face {
    font-family: 'HelveticaCnWeb';
    font-style: normal;
    font-weight: 500;
    src: local('HelveticaMedium'), url(${fontMediumWOFF2}) format('woff2'),
      url(${fontMediumWOFF}) format('woff'),
      url(${fontMediumTTF}) format('truetype'),
      url(${fontMediumEOT}) format('embedded-opentype');
  }

  /**
  *  Helvetica Medium Oblique
  */
  @font-face {
    font-family: 'HelveticaCnWeb';
    font-style: italic;
    font-weight: 500;
    src: local('HelveticaMediumO'), url(${fontMediumOWOFF2}) format('woff2'),
      url(${fontMediumOWOFF}) format('woff'),
      url(${fontMediumOTTF}) format('truetype'),
      url(${fontMediumOEOT}) format('embedded-opentype');
  }
`

export default Helvetica
