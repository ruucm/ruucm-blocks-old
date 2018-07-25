import { css } from 'styled-components'
import Style from './Style'
import font1 from './fontFiles/harborpin.eot'
import fontTTF from './fontFiles/harborpin.ttf'
import fontWOFF from './fontFiles/harborpin.woff'
import fontSVG from './fontFiles/harborpin.svg'

const HarborPinIcon = css`
  /**
  *  Harbor Icons
  */
  @font-face {
    font-family: 'harborpin';
    src: url(${font1});
    src: url(${font1}) format('embedded-opentype'),
      url(${fontTTF}) format('truetype'), url(${fontWOFF}) format('woff'),
      url(${fontSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  ${Style} /* @import 'harbor-icons'; */;
`

export default HarborPinIcon
