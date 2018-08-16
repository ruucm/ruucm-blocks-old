import { css } from 'styled-components'
import Style from './Style'
import font1 from './fontFiles/beerspick-2.eot'
import fontTTF from './fontFiles/beerspick-2.ttf'
import fontWOFF from './fontFiles/beerspick-2.woff'
import fontSVG from './fontFiles/beerspick-2.svg'

const BeerspickIcon = css`
  /**
  *  Beerspick Icons
  */
  @font-face {
    font-family: 'beerspick-2';
    src: url(${font1});
    src: url(${font1}) format('embedded-opentype'),
      url(${fontTTF}) format('truetype'), url(${fontWOFF}) format('woff'),
      url(${fontSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  ${Style} /* @import 'beerspick-2.eot-icons'; */;
`

export default BeerspickIcon
