import { css } from 'styled-components'
import Style from './Style'
import font1 from './fontFiles/jessievan.eot'
import fontTTF from './fontFiles/jessievan.ttf'
import fontWOFF from './fontFiles/jessievan.woff'
import fontSVG from './fontFiles/jessievan.svg'

const JessieVanIcon = css`
  /**
  *  Beerspick Icons
  */
  @font-face {
    font-family: 'jessievan';
    src: url(${font1});
    src: url(${font1}) format('embedded-opentype'),
      url(${fontTTF}) format('truetype'), url(${fontWOFF}) format('woff'),
      url(${fontSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  ${Style} /* @import 'jessievan.eot-icons'; */;
`

export default JessieVanIcon
