import { css } from 'styled-components'
import Style from './Style'
import font1 from './fontFiles/portfolio-class.eot'
import fontTTF from './fontFiles/portfolio-class.ttf'
import fontWOFF from './fontFiles/portfolio-class.woff'
import fontSVG from './fontFiles/portfolio-class.svg'

const PortfolioClassIcon = css`
  /**
  *  PortfolioClass Icons
  */
  @font-face {
    font-family: 'portfolio-class';
    src: url(${font1});
    src: url(${font1}) format('embedded-opentype'),
      url(${fontTTF}) format('truetype'), url(${fontWOFF}) format('woff'),
      url(${fontSVG}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  ${Style} /* @import 'portfolio-class.eot-icons'; */;
`

export default PortfolioClassIcon
