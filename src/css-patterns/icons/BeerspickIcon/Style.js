import { css } from 'styled-components'

/**
 * Should add one more \, cause it's javascript !
 */
const Style = css`
  .beerspick {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'beerspick' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .beerspick-beerspick_logo_about:before {
    content: '\\e907';
  }
  .beerspick-beerspick_logo_header:before {
    content: '\\e900';
  }
  .beerspick-instagram_logo:before {
    content: '\\e901';
  }
  .beerspick-tel:before {
    content: '\\e902';
  }
  .beerspick-beerspick_logo_footer:before {
    content: '\\e903';
    color: #fff;
  }
  .beerspick-envelope:before {
    content: '\\e904';
    color: #f6c914;
  }
  .beerspick-facebook_logo:before {
    content: '\\e905';
  }
  .beerspick-location-arrow:before {
    content: '\\e906';
    color: #ff8748;
  }
`

export default Style
