import { css } from 'styled-components'
import Style from './Style'
import font1 from './fontFiles/cnyttan.eot'
import fontTTF from './fontFiles/cnyttan.ttf'
import fontWOFF from './fontFiles/cnyttan.woff'
import fontSVG from './fontFiles/cnyttan.svg'

const CnyttanIcon = css`
  /**
  *  Cnyttan Icons
  */
  @font-face {
    font-family: 'cnyttan';
    src: url(${font1});
    src: url(${font1}) format('embedded-opentype'),
      url(${fontTTF}) format('truetype'), url(${fontWOFF}) format('woff'),
      url(${fontSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  ${Style} /* @import 'cnyttan.eot-icons'; */;
`

export default CnyttanIcon
