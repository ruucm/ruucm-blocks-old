import { css } from 'styled-components'
import Style from './Style'
import font1 from './fontFiles/hellogorilla.eot'
import fontTTF from './fontFiles/hellogorilla.ttf'
import fontWOFF from './fontFiles/hellogorilla.woff'
import fontSVG from './fontFiles/hellogorilla.svg'

const HelloGorillaIcon = css`
  /**
  *  HelloGorilla Icons
  */
  @font-face {
    font-family: 'hellogorilla';
    src: url(${font1});
    src: url(${font1}) format('embedded-opentype'),
      url(${fontTTF}) format('truetype'), url(${fontWOFF}) format('woff'),
      url(${fontSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  ${Style} /* @import 'hellogorilla.eot-icons'; */;
`

export default HelloGorillaIcon
