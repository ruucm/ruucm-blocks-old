import { css } from 'styled-components'
import Style from './Style'
import font1 from './fontFiles/beerspick.eot'
import fontTTF from './fontFiles/beerspick.ttf'
import fontWOFF from './fontFiles/beerspick.woff'
import fontSVG from './fontFiles/beerspick.svg'

const BeerspickIcon = css`
  /**
  *  Beerspick Icons
  */
  @font-face {
    font-family: 'beerspick';
    src: url(${font1});
    src: url(${font1}) format('embedded-opentype'),
      url(${fontTTF}) format('truetype'), url(${fontWOFF}) format('woff'),
      url(${fontSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  ${Style} /* @import 'beerspick.eot-icons'; */;
`

export default BeerspickIcon
