import { css } from 'styled-components'
import Style from './Style'
import font1 from './fontFiles/harbor-school.eot'
import fontTTF from './fontFiles/harbor-school.ttf'
import fontWOFF from './fontFiles/harbor-school.woff'
import fontSVG from './fontFiles/harbor-school.svg'

const HarborMagazineIcon = css`
  /**
  *  Harbor Icons
  */
  @font-face {
    font-family: 'harbor-school';
    src: url(${font1});
    src: url(${font1}) format('embedded-opentype'),
      url(${fontTTF}) format('truetype'), url(${fontWOFF}) format('woff'),
      url(${fontSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  ${Style} /* @import 'harbor-icons'; */;
`

export default HarborMagazineIcon
